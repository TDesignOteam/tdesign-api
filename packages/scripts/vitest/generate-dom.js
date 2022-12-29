const {
  getArrayCode,
  getMountComponent,
  getSnapshotCase,
  getWrapper,
  getDomExpectTruthy,
  getDomExpectFalsy,
} = require("./utils");

/**
 * 检测某个元素是否存在
 */
function generateDomUnitCase(test, oneApiData, framework, component) {
  const arr = generateVueAndReactDomCase(test, oneApiData, framework, component);
  return arr && arr.filter(v => v);
}

function generateVueAndReactDomCase(test, oneApiData, framework, component) {
  const { dom, snapshot, content, wrapper } = test;
  const extraCode = { content, wrapper };
  if (typeof dom === 'string' && oneApiData.field_type_text[0] === 'Boolean') {
    const mountCode = getMountComponent(framework, component, {}, extraCode);
    const mountCode1 = getMountComponent(framework, component, { [oneApiData.field_name]: false }, extraCode);
    const mountCode2 = getMountComponent(framework, component, { [oneApiData.field_name]: true }, extraCode);
    const arr = [
      `it('props.${oneApiData.field_name}: ${component} contains element \`${dom}\`', () => {`,
        `// ${oneApiData.field_name} default value is ${oneApiData.field_default_value}`,
        getWrapper(framework, mountCode),
        oneApiData.field_default_value === 'true'
          ? getDomExpectTruthy(framework, `'${dom}'`)
          : getDomExpectFalsy(framework, `'${dom}'`),
        `// ${oneApiData.field_name} = false`,
        getWrapper(framework, mountCode1, '1'),
        getDomExpectFalsy(framework, `'${dom}'`, '1'),
        `// ${oneApiData.field_name} = true`,
        getWrapper(framework, mountCode2, '2'),
        getDomExpectTruthy(framework, `'${dom}'`, '2'),
        getSnapshotCase(snapshot, framework, '2'),
      `})`,
    ];
    return arr;
  }
  if (Array.isArray(dom) && oneApiData.field_enum) {
    const enums = oneApiData.field_enum.split('/');
    const expectedVariable = `${oneApiData.field_name}ExpectedDom`;
    const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: 'item' }, extraCode);
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
  }
}

module.exports = {
  generateDomUnitCase
};
