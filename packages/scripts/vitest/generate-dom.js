const {
  getArrayCode,
  getMountComponent,
  getSnapshotCase,
  getWrapper,
  getDomExpectTruthy,
  getDomExpectFalsy,
  getDomCountExpectCode,
  getPresetsExpect,
  getItAsync,
  getCategoryDesc,
  getVariablesCode,
} = require("./core");
const { getSkipCode } = require("./utils");

/**
 * 检测某个元素是否存在
 */
function generateDomUnitCase(test, oneApiData, framework, component) {
  let arr = [];
  const { dom, props, variables, description, snapshot } = test;
  if (Array.isArray(dom)) {
    dom.forEach((oneDom) => {
      const oneDomProps = oneDom.props;
      const oneDomVariables = oneDom.variables;
      const oneDomDescription = oneDom.description;
      const oneDomSnapshot = oneDom.snapshot;
      delete oneDom.props;
      delete oneDom.variables;
      delete oneDom.description;
      delete oneDom.snapshot;
      oneApiData.field_enum = '';
      const tmpTest = {
        ...test,
        dom: oneDom.dom,
        props: { ...oneDomProps, ...props },
        variables: [...(oneDomVariables || []), ...(variables || [])],
        description: oneDomDescription || description,
        snapshot: oneDomSnapshot || snapshot,
      };
      if (tmpTest.description) {
        tmpTest.description = `props.${oneApiData.field_name}: ${tmpTest.description}`;
      }
      arr = arr.concat(generateVueAndReactDomCase(tmpTest, oneApiData, framework, component), '\n');
    })
  } else {
    arr = arr.concat(generateVueAndReactDomCase(test, oneApiData, framework, component));
  }
  return arr && arr.filter(v => v);
}

function generateVueAndReactDomCase(test, oneApiData, framework, component) {
  const { props, variables, dom, snapshot, content, wrapper, trigger, skip, description } = test;
  const extraCode = { content, wrapper };
  const async = getItAsync(trigger, framework);
  const propsCode = getCategoryDesc(oneApiData, component);
  // API 为 Boolean 类型，检测 DOM
  if (typeof dom === 'string' && oneApiData.field_type_text.includes('Boolean')) {
    const mountCode = getMountComponent(framework, component, { ...props }, extraCode);
    const mountCode1 = getMountComponent(framework, component, { [oneApiData.field_name]: false, ...props }, extraCode);
    const mountCode2 = getMountComponent(framework, component, { [oneApiData.field_name]: true, ...props }, extraCode);
    const onlyDocumentDom = Boolean(dom && dom.indexOf('document') !== -1);
    const defaultDesc = description || `${propsCode}.${oneApiData.field_name}: ${component} contains element \`${dom}\``;
    const arr = [
      `it${getSkipCode(skip)}('${defaultDesc}', ${async}() => {`,
        getVariablesCode(variables),
        `// ${oneApiData.field_name} default value is ${oneApiData.field_default_value}`,
        getWrapper(framework, mountCode, '', '', { onlyDocumentDom }),
        trigger && getPresetsExpect(trigger, framework, component),
        oneApiData.field_default_value === 'true'
          ? getDomExpectTruthy(framework, `'${dom}'`)
          : getDomExpectFalsy(framework, `'${dom}'`),
        `// ${oneApiData.field_name} = false`,
        getWrapper(framework, mountCode1, undefined, '1', { onlyDocumentDom }),
        trigger && getPresetsExpect(trigger, framework, component),
        getDomExpectFalsy(framework, `'${dom}'`, '1'),
        `// ${oneApiData.field_name} = true`,
        getWrapper(framework, mountCode2, undefined, '2', { onlyDocumentDom }),
        trigger && getPresetsExpect(trigger, framework, component),
        getDomExpectTruthy(framework, `'${dom}'`, '2'),
        getSnapshotCase(snapshot, framework, '2', onlyDocumentDom),
      `})`,
    ];
    return arr.filter(v => v);
  }
  // API 为数组类型，检测 DOM
  if (Array.isArray(dom)) {
    // API 存在枚举值，DOM 检测依赖枚举值
    if (oneApiData.field_enum) {
      const enums = oneApiData.field_enum.split('/');
      const expectedVariable = `${oneApiData.field_name}ExpectedDom`;
      const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: '/-item-/', ...props }, extraCode);
      const domInDocument = dom.find(item => typeof item === 'string' && item.includes('document')) ? 'document' : '';
      const defaultDesc = description ? `'${description}'` : `\`${propsCode}.${oneApiData.field_name} is equal to \${item}\``;
      const arr = [
        `const ${expectedVariable} = ${getArrayCode(dom.map(t => t.replace('document', '')))};`,
        `${getArrayCode(enums)}.forEach((item, index) => {
          it${getSkipCode(skip)}(${defaultDesc}, ${async} () => {`,
          getVariablesCode(variables),
            getWrapper(framework, mountCode),
            trigger && getPresetsExpect(trigger, framework, component),
            getDomExpectTruthy(framework, `${domInDocument}${expectedVariable}[index]`),
            getSnapshotCase(snapshot, framework),
          `});`,
        `});`,
      ];
      return arr.filter(v => v);
    } else {
      // API 不存在枚举值，直接检测数组中的元素是否存在，以及元素的数量
      let arr = [];
      const onlyDocumentDom = isOnlyDocumentDom(dom);
      dom.forEach((domInfo) => {
        const mountCode = getMountComponent(framework, component, { ...props }, extraCode);
        let domInfoText = JSON.stringify(domInfo);
        domInfoText = domInfoText.length > 100 ? '' : ` \`${domInfoText}\` should exist`;
        const defaultDesc = description || `${propsCode}.${oneApiData.field_name} works fine.${domInfoText}`;
        const oneValueArr = [
          `it${getSkipCode(skip)}('${defaultDesc}',${async} () => {`,
          getVariablesCode(variables),
          getWrapper(framework, mountCode, '', '', { onlyDocumentDom }),
          trigger && getPresetsExpect(trigger, framework, component),
          getDomExpect(framework, domInfo),
          getSnapshotCase(snapshot, framework, '', onlyDocumentDom),
          `});\n`,
        ];
        arr = arr.concat(oneValueArr);
      })
      return arr.filter(v => v);
    }
  }
  // 不同的值对应不同的 DOM 元素，示例：{"PC":{ "dom": { "[3, 1]": ".t-table__row--fixed-top" } }}
  if (!Array.isArray(dom) && typeof dom === 'object') {
    let arr = [];
    const onlyDocumentDom = isOnlyDocumentDom(dom);
    Object.entries(dom).forEach(([value, domInfo]) => {
      const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: value, ...props }, extraCode);
      const defaultDesc = description || `${propsCode}.${oneApiData.field_name} is equal ${value.replace(/'/g, '')}`;
      const oneValueArr = [
        `it${getSkipCode(skip)}('${defaultDesc}', ${async} () => {`,
        getVariablesCode(variables),
        getWrapper(framework, mountCode, '', '', { onlyDocumentDom }),
        trigger && getPresetsExpect(trigger, framework, component),
        getDomExpect(framework, domInfo),
        getSnapshotCase(snapshot, framework, '', onlyDocumentDom),
        `});\n`,
      ];
      arr = arr.concat(oneValueArr);
    })
    return arr.filter(v => v);
  }
}

function isOnlyDocumentDom(dom) {
  let onlyDocumentDom = true;
  let domList = [];
  const loop = (dom) => {
    if (Array.isArray(dom)) {
      if (typeof dom[0] === 'object' && dom[0].dom) {
        dom.forEach((oneDom) => {
          loop(oneDom);
        })
      } else {
        domList = domList.concat(dom);
      }
    } else if (typeof dom === 'object') {
      domList = Object.values(dom);
    }
  };
  loop(dom);
  domList.forEach((item) => {
    if (typeof item === 'string' && !item.includes('document')) {
      onlyDocumentDom = false
      return;
    }
    if (typeof item !== 'object') return;
    Object.keys(item).forEach((selector) => {
      if (!selector.includes('document')) {
        onlyDocumentDom = false;
      }
    })
  })
  return onlyDocumentDom;
}

function getDomExpect(framework, domInfo) {
  if (typeof domInfo === 'string') {
    return getDomExpectTruthy(framework, `'${domInfo}'`);
  }
  if (typeof domInfo === 'object' && !Array.isArray(domInfo)) {
    return getDomCountExpectCode(framework, domInfo);
  }
}

module.exports = {
  generateDomUnitCase
};
