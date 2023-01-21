const {
  getItDescription,
  getWrapper,
  getMountComponent,
  getSnapshotCase,
  getArrayCode,
  getClassNameExpectTruthy,
  getClassNameExpectFalsy,
  getDomClassNameExpect,
  getPresetsExpect,
  getItAsync,
  getCategoryDesc,
} = require('./core');
const { getSkipCode } = require('./utils');

/**
 * 输出类名检测单测用例
 */
function generateClassNameUnitCase(test, oneApiData, framework, component) {
  const arr = generateVueAndReactClassName(test, oneApiData, framework, component);
  return arr && arr.filter(v => v);
}

function generateVueAndReactClassName(test, oneApiData, framework, component) {
  const { className, classNameDom, props, snapshot, content, wrapper, trigger, skip } = test;
  const extraCode = { content, wrapper };
  const async = getItAsync(trigger, framework);
  const mountCode = getMountComponent(framework, component, { ...props, [oneApiData.field_name]: '/-item-/' }, extraCode);
  const enums = oneApiData.field_enum.split('/').filter(v => v);
  const propsCode = getCategoryDesc(oneApiData, component);
  // 不同的值控制不同的类名，类名的一部分是 API 的值，如：button.variant
  if (typeof className === 'string' && className.indexOf('${item}') != -1 && enums.length && oneApiData.field_type_text[0] === 'String') {
    const arr = [
      `[${enums.map(val => `'${val}'`).join(', ')}].forEach((item) => {`,
      `it${getSkipCode(skip)}(\`${propsCode}.${oneApiData.field_name} is equal to \${ item }\`,${async} () => {`,
      getWrapper(framework, mountCode, classNameDom),
      trigger && getPresetsExpect(trigger, framework, component),
      getClassNameExpectTruthy(framework, `\`${className}\``, '', classNameDom),
      getSnapshotCase(snapshot, framework),
      `});`,
      `});`,
    ];
    return arr;
  }

  if (Array.isArray(className)) {
    // 处理数组：不同的值控制不同的类名（一个值可能对应着空类名，也可能对应着别的名字，如：size=small 对应着 t-size-s）
    // API 存在枚举值，和类名一一对应
    if (oneApiData.field_type_text[0] === 'String' && enums.length) {
      const classNameVariable = `${oneApiData.field_name}ClassNameList`;
      const hasObjectClassName = hasObjectInArray(className);
      const propsCode = getCategoryDesc(oneApiData, component);
      const arr = [
        `const ${classNameVariable} = ${getArrayCode(className)};`,
        `${getArrayCode(enums)}.forEach((item, index) => {`,
        `it${getSkipCode(skip)}(\`${propsCode}.${oneApiData.field_name} is equal to \${ item }\`, ${async} () => {`,
        getWrapper(framework, mountCode, classNameDom),
        trigger && getPresetsExpect(trigger, framework, component),
        hasObjectClassName
        ? [
            `if (typeof ${classNameVariable}[index] === 'string') {`,
            getClassNameExpectTruthy(framework, `${classNameVariable}[index]`, '', classNameDom),
          `} else if (typeof ${classNameVariable}[index] === 'object') {
            const classNameKey = Object.keys(${classNameVariable}[index])[0];`,
            getClassNameExpectFalsy(framework, 'classNameKey'),
          `}`,
          ].join('\n')
        : getClassNameExpectTruthy(framework, `${classNameVariable}[index]`, '', classNameDom),
        getSnapshotCase(snapshot, framework),
        `});`,
        `});`,
      ];
      return arr;
    } else {
      const onlyDocumentDom = isOnlyDocumentDom(className);
      const propsCode = getCategoryDesc(oneApiData, component);
      return className.map(({ value, expect }) => {
        const mountCode = getMountComponent(framework, component, { ...props, [oneApiData.field_name]: value }, extraCode);
        const arr = [
          `it${getSkipCode(skip)}(\`${propsCode}.${oneApiData.field_name} is equal to ${value}\`,${async} () => {`,
            getWrapper(framework, mountCode, '', '', { onlyDocumentDom }),
            trigger && getPresetsExpect(trigger, framework, component),
            getDomClassNameExpect(framework, expect),
            getSnapshotCase(snapshot, framework, '', { onlyDocumentDom }),
          `});`
        ];
        return arr.filter(v => v).join('\n');
      });
    }
  }

  // 控制单个类名是否显示，如：disabled 对应着类名 `t-is-disabled` 是否存在
  if (typeof className === 'string' && oneApiData.field_type_text[0] === 'Boolean') {
    const mountCode1 = getMountComponent(framework, component, { ...props }, extraCode);
    const mountCode2 = getMountComponent(framework, component, { ...props, [oneApiData.field_name]: true }, extraCode);
    const mountCode3 = getMountComponent(framework, component, { ...props, [oneApiData.field_name]: false }, extraCode);
    const arr = [
      `it${getSkipCode(skip)}(${getItDescription(oneApiData)},${async} () => {`,
      `// ${oneApiData.field_name} default value is ${oneApiData.field_default_value}`,
      getWrapper(framework, mountCode1, classNameDom, '1'),
      trigger && getPresetsExpect(trigger, framework, component),
      oneApiData.field_default_value === 'true'
        ? getClassNameExpectTruthy(framework, `'${className}'`, '1', classNameDom)
        : getClassNameExpectFalsy(framework, `'${className}'`, '1', classNameDom),
      `// ${oneApiData.field_name} = true`,
      getWrapper(framework, mountCode2, classNameDom, '2'),
      trigger && getPresetsExpect(trigger, framework, component),
      getClassNameExpectTruthy(framework, `'${className}'`, '2', classNameDom),
      getSnapshotCase(snapshot, framework, '2'),
      `// ${oneApiData.field_name} = false`,
      getWrapper(framework, mountCode3, classNameDom, '3'),
      trigger && getPresetsExpect(trigger, framework, component),
      getClassNameExpectFalsy(framework, `'${className}'`, '3', classNameDom),
      getSnapshotCase(snapshot, framework, '3'),
      '});',
    ];
    return arr;
  }

  // 如果是「枚举值：类名」映射关系
  if (typeof className === 'object' && !Array.isArray(className)) {
    const propsCode = getCategoryDesc(oneApiData, component);
    const mapVariable = `${oneApiData.field_name}ClassNameMap`;
    const mountCode = getMountComponent(framework, component, { ...props, [oneApiData.field_name]: '/-propValue-/' }, extraCode);
    const arr = [
      `const ${mapVariable} = ${JSON.stringify(className)};`,
      `Object.entries(${mapVariable}).forEach(([enumValue, expectedClassName]) => {
        it(\`${propsCode}.${oneApiData.field_name} is equal to \${ enumValue }\`,${async} () => {
          let propValue = { true: true, false: false }[enumValue];
          propValue = propValue === undefined ? enumValue : propValue;`,
          getWrapper(framework, mountCode, classNameDom),
          trigger && getPresetsExpect(trigger, framework, component),
          getClassNameExpectTruthy(framework, 'expectedClassName', '', classNameDom),
        `});
      });`,
    ];
    return arr;
  }
}

function hasObjectInArray(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (typeof arr[i] !== 'string') return true
  }
  return false;
}

function isOnlyDocumentDom(className) {
  if (!Array.isArray(className)) return;
  for (let i = 0, len = className.length; i < len; i++) {
    const item = className[i];
    if (typeof item !== 'object') continue;
    if (item.expect && item.expect.length) {
      for (let j = 0, len1 = item.expect.length; j < len1; j++) {
        if (!item.expect[j].dom.includes('document')) {
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = {
  generateClassNameUnitCase
};
