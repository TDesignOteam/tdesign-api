const {
  getArrayCode,
  getMountComponent,
  getSnapshotCase,
  getWrapper,
  getDomExpectTruthy,
  getDomExpectFalsy,
  getDomCountExpectCode,
} = require("./core");
const { getSkipCode } = require("./utils");

/**
 * 检测某个元素是否存在
 */
function generateDomUnitCase(test, oneApiData, framework, component) {
  const arr = generateVueAndReactDomCase(test, oneApiData, framework, component);
  return arr && arr.filter(v => v);
}

function generateVueAndReactDomCase(test, oneApiData, framework, component) {
  const { props, dom, snapshot, content, wrapper, skip } = test;
  const extraCode = { content, wrapper };
  // API 为 Boolean 类型，检测 DOM
  if (typeof dom === 'string' && oneApiData.field_type_text.includes('Boolean')) {
    const mountCode = getMountComponent(framework, component, { ...props }, extraCode);
    const mountCode1 = getMountComponent(framework, component, { [oneApiData.field_name]: false, ...props }, extraCode);
    const mountCode2 = getMountComponent(framework, component, { [oneApiData.field_name]: true, ...props }, extraCode);
    const arr = [
      `it${getSkipCode(skip)}('props.${oneApiData.field_name}: ${component} contains element \`${dom}\`', () => {`,
        `// ${oneApiData.field_name} default value is ${oneApiData.field_default_value}`,
        getWrapper(framework, mountCode),
        oneApiData.field_default_value === 'true'
          ? getDomExpectTruthy(framework, `'${dom}'`)
          : getDomExpectFalsy(framework, `'${dom}'`),
        `// ${oneApiData.field_name} = false`,
        getWrapper(framework, mountCode1, undefined, '1'),
        getDomExpectFalsy(framework, `'${dom}'`, '1'),
        `// ${oneApiData.field_name} = true`,
        getWrapper(framework, mountCode2, undefined, '2'),
        getDomExpectTruthy(framework, `'${dom}'`, '2'),
        getSnapshotCase(snapshot, framework, '2'),
      `})`,
    ];
    return arr;
  }
  // API 为数组类型，检测 DOM
  if (Array.isArray(dom)) {
    // API 存在枚举值，DOM 检测依赖枚举值
    if (oneApiData.field_enum) {
      const enums = oneApiData.field_enum.split('/');
      const expectedVariable = `${oneApiData.field_name}ExpectedDom`;
      const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: '/-item-/', ...props }, extraCode);
      const arr = [
        `const ${expectedVariable} = ${getArrayCode(dom)};`,
        `${getArrayCode(enums)}.forEach((item, index) => {
          it(\`props.${oneApiData.field_name} is equal to \${item}\`, () => {`,
            getWrapper(framework, mountCode),
            getDomExpectTruthy(framework, `${expectedVariable}[index]`),
            getSnapshotCase(snapshot, framework),
          `});`,
        `});`,
      ];
      return arr;
    } else {
      // API 不存在枚举值，直接检测数组中的元素是否存在，以及元素的数量
      let arr = [];
      dom.forEach((domInfo) => {
        const mountCode = getMountComponent(framework, component, { ...props }, extraCode);
        const oneValueArr = [
          `it${getSkipCode(skip)}('props.${oneApiData.field_name} works fine. \`${JSON.stringify(domInfo)}\` should exist', () => {`,
          getWrapper(framework, mountCode),
          getDomExpect(framework, domInfo),
          getSnapshotCase(snapshot, framework),
          `});\n`,
        ];
        arr = arr.concat(oneValueArr);
      })
      return arr;
    }
  }
  // 不同的值对应不同的 DOM 元素，示例：{"PC":{ "dom": { "[3, 1]": ".t-table__row--fixed-top" } }}
  if (!Array.isArray(dom) && typeof dom === 'object') {
    let arr = [];
    Object.entries(dom).forEach(([value, domInfo]) => {
      const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: value, ...props }, extraCode);
      const oneValueArr = [
        `it${getSkipCode(skip)}('props.${oneApiData.field_name} is equal ${value.replace(/'/g, '')}', () => {`,
        getWrapper(framework, mountCode),
        getDomExpect(framework, domInfo),
        getSnapshotCase(snapshot, framework),
        `});\n`,
      ];
      arr = arr.concat(oneValueArr);
    })
    return arr;
  }
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
