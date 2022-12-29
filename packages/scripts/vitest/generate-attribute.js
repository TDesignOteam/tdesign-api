const { getArrayCode, getItDescription, getMountComponent, getWrapper, getSnapshotCase } = require("./utils");

function generateAttributeUnitCase(test, oneApiData, framework, component) {
  return generateVueAndReactAttribute(test, oneApiData, framework, component);
}

function getAttributeExpect(framework, attributes, wrapperIndex = '') {
  if (framework.indexOf('Vue') !== -1) {
    return Object.entries(attributes).map(([attribute, value]) => {
      return `expect(wrapper${wrapperIndex}.attributes(${attribute})).toBe(${value});`;
    }).join('\n');
  }
  if (framework.indexOf('React') !== -1) {
    return Object.entries(attributes).map(([attribute, value]) => {
      return `expect(container${wrapperIndex}.firstChild.getAttribute(${attribute})).toBe(${value});`;
    }).join('\n');
  }
}

function generateVueAndReactAttribute(test, oneApiData, framework, component) {
  const { attribute, snapshot, content, wrapper } = test;
  const extraCode = { content, wrapper };
  const attributeName = Object.keys(attribute)[0];
  // 期望的属性值
  const attributeValue = attribute[attributeName];
  // 属性全部枚举值
  const propsValues = oneApiData.field_enum?.split('/');
  if (Array.isArray(attributeValue) && propsValues.length) {
    const componentCode = getMountComponent(framework, component, { [oneApiData.field_name]: 'item' }, extraCode);
    const arr = [
      `const attributeValues = ${getArrayCode(attributeValue)};`,
      `${getArrayCode(propsValues)}.forEach((item, index) => {`,
        `it(\`props.${oneApiData.field_name} is equal to \${item}\`, () => {`,
          getWrapper(framework, componentCode),
          getAttributeExpect(framework, { [`'${attributeName}'`]: 'attributeValues[index]' }),
          getSnapshotCase(snapshot, framework),
        `});`,
      `});`,
    ];
    return arr.filter(v => v);
  }
  // 测试属性赋值，如：<Button href="https://tdesign.tencent.com/" />
  if (typeof attributeValue === 'string') {
    const componentCode = getMountComponent(framework, component, { [oneApiData.field_name]: `'${attributeValue}'` }, extraCode);
    const arr = [
      `it(${getItDescription(oneApiData)}, () => {`,
        getWrapper(framework, componentCode),
        getAttributeExpect(framework, { [`'${attributeName}'`]: `'${attributeValue}'` }),
        getSnapshotCase(snapshot, framework),
      `});`,
    ];
    return arr.filter(v => v);
  }
}

module.exports = {
  generateAttributeUnitCase
};
