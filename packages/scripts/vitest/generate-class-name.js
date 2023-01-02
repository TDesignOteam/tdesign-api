const {
  getItDescription,
  getWrapper,
  getMountComponent,
  getSnapshotCase,
  getArrayCode,
  getClassNameExpectTruthy,
  getClassNameExpectFalsy,
  getDomClassNameExpect,
} = require('./utils');

/**
 * 输出类名检测单测用例
 */
function generateClassNameUnitCase(test, oneApiData, framework, component) {
  const arr = generateVueAndReactClassName(test, oneApiData, framework, component);
  return arr && arr.filter(v => v);
}

function generateVueAndReactClassName(test, oneApiData, framework, component) {
  const { className, classNameDom, snapshot, content, wrapper } = test;
  const extraCode = { content, wrapper };
  const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: 'item' }, extraCode);
  const enums = oneApiData.field_enum.split('/').filter(v => v);
  // 不同的值控制不同的类名，类名的一部分是 API 的值，如：button.variant
  if (typeof className === 'string' && className.indexOf('${item}') != -1 && enums.length && oneApiData.field_type_text[0] === 'String') {
    const arr = [
      `[${enums.map(val => `'${val}'`).join(', ')}].forEach((item) => {`,
      `it(\`props.${oneApiData.field_name} is equal to \${ item }\`, () => {`,
      getWrapper(framework, mountCode, '', classNameDom),
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
      const arr = [
        `const ${classNameVariable} = ${getArrayCode(className)};`,
        `${getArrayCode(enums)}.forEach((item, index) => {`,
        `it(\`props.${oneApiData.field_name} is equal to \${ item }\`, () => {`,
        getWrapper(framework, mountCode, '', classNameDom),
        `if (typeof ${classNameVariable}[index] === 'string') {`,
          getClassNameExpectTruthy(framework, `${classNameVariable}[index]`, '', classNameDom),
        `} else if (typeof ${classNameVariable}[index] === 'object') {
          const classNameKey = Object.keys(${classNameVariable}[index])[0];`,
          getClassNameExpectFalsy(framework, 'classNameKey'),
        `}`,
          getSnapshotCase(snapshot, framework),
        `});`,
        `});`,
      ];
      return arr;
    } else {
      return className.map(({ value, expect }) => {
        const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: value }, extraCode);
        const arr = [
          `it(\`props.${oneApiData.field_name} is equal to ${value}\`, () => {`,
            getWrapper(framework, mountCode),
            getDomClassNameExpect(framework, expect),
            getSnapshotCase(snapshot, framework),
          `});`
        ];
        return arr.filter(v => v).join('\n');
      });
    }
  }

  // 控制单个类名是否显示，如：disabled 对应着类名 `t-is-disabled` 是否存在
  if (typeof className === 'string' && oneApiData.field_type_text[0] === 'Boolean') {
    const mountCode1 = getMountComponent(framework, component, {}, extraCode);
    const mountCode2 = getMountComponent(framework, component, { [oneApiData.field_name]: true }, extraCode);
    const mountCode3 = getMountComponent(framework, component, { [oneApiData.field_name]: false }, extraCode);
    const arr = [
      `it(${getItDescription(oneApiData)}, () => {`,
      `// ${oneApiData.field_name} default value is ${oneApiData.field_default_value}`,
      getWrapper(framework, mountCode1, '1', classNameDom),
      oneApiData.field_default_value === 'true'
        ? getClassNameExpectTruthy(framework, `'${className}'`, '1', classNameDom)
        : getClassNameExpectFalsy(framework, `'${className}'`, '1', classNameDom),
      `// ${oneApiData.field_name} = true`,
      getWrapper(framework, mountCode2, '2', classNameDom),
      getClassNameExpectTruthy(framework, `'${className}'`, '2', classNameDom),
      getSnapshotCase(snapshot, framework, '2'),
      `// ${oneApiData.field_name} = false`,
      getWrapper(framework, mountCode3, '3', classNameDom),
      getClassNameExpectFalsy(framework, `'${className}'`, '3', classNameDom),
      getSnapshotCase(snapshot, framework, '3'),
      '});',
    ];
    return arr;
  }

  // 如果是「枚举值：类名」映射关系
  if (typeof className === 'object' && !Array.isArray(className)) {
    const mapVariable = `${oneApiData.field_name}ClassNameMap`;
    const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: 'propValue' }, extraCode);
    const arr = [
      `const ${mapVariable} = ${JSON.stringify(className)};`,
      `Object.entries(${mapVariable}).forEach(([enumValue, expectedClassName]) => {
        it(\`props.${oneApiData.field_name} is equal to \${ enumValue }\`, () => {
          let propValue = { true: true, false: false }[enumValue];
          propValue = propValue === undefined ? enumValue : propValue;`,
          getWrapper(framework, mountCode, '', classNameDom),
          getClassNameExpectTruthy(framework, 'expectedClassName'),
        `});
      });`,
    ];
    return arr;
  }
}

module.exports = {
  generateClassNameUnitCase
};
