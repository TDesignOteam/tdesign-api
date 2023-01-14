const {
  getArrayCode,
  getItDescription,
  getMountComponent,
  getWrapper,
  getSnapshotCase,
  getAttributeExpect,
  getDomAttributeExpect,
} = require("./core");
const { getSkipCode } = require("./utils");

function generateAttributeUnitCase(test, oneApiData, framework, component) {
  const arr = generateVueAndReactAttribute(test, oneApiData, framework, component);
  return arr && arr.filter(v => v);
}

function generateVueAndReactAttribute(test, oneApiData, framework, component) {
  const { attribute, attributeDom, props, snapshot, content, wrapper, skip } = test;
  const extraCode = { content, wrapper };
  if (typeof attribute !== 'object') return;
  // 1. 处理数组
  if (Array.isArray(attribute)) {
    return generateMapAttribute(test, oneApiData, framework, component, attributeDom);
  }
  // 2. 处理 {} Object
  const attributeName = Object.keys(attribute)[0];
  // 期望的属性值
  const attributeValue = attribute[attributeName];
  // 属性全部枚举值
  const propsValues = oneApiData.field_enum && oneApiData.field_enum.split('/');
  // 按顺序处理枚举值对应的属性
  if (Array.isArray(attributeValue) && propsValues.length) {
    const componentCode = getMountComponent(framework, component, { [oneApiData.field_name]: '/-item-/', ...props }, extraCode);
    const arr = [
      `const attributeValues = ${getArrayCode(attributeValue)};`,
      `${getArrayCode(propsValues)}.forEach((item, index) => {`,
        `it${getSkipCode(skip)}(\`props.${oneApiData.field_name} is equal to \${item}\`, () => {`,
          getWrapper(framework, componentCode, attributeDom),
          // 变量使用双斜杠包裹
          getAttributeExpect(framework, { [attributeName]: '/attributeValues[index]/' }, '', attributeDom),
          getSnapshotCase(snapshot, framework),
        `});`,
      `});`,
    ];
    return arr.filter(v => v);
  }
  // 测试属性赋值，如：<Button href="https://tdesign.tencent.com/" />
  if (typeof attributeValue === 'string' && attributeName === oneApiData.field_name) {
    const componentCode = getMountComponent(framework, component, { [oneApiData.field_name]: attributeValue, ...props }, extraCode);
    const arr = [
      `it${getSkipCode(skip)}(${getItDescription(oneApiData)}, () => {`,
        getWrapper(framework, componentCode, attributeDom),
        getAttributeExpect(framework, { [attributeName]: attributeValue }, '', attributeDom),
        getSnapshotCase(snapshot, framework),
      `});`,
    ];
    return arr.filter(v => v);
  }
}

function generateMapAttribute(test, oneApiData, framework, component, attributeDom) {
  // 此时的 attribute 一定是数组
  const { attribute, props, snapshot, content, wrapper, skip } = test;
  const extraCode = { content, wrapper };
  return attribute.map(({ value, expect }) => {
    const mountCode = getMountComponent(framework, component, { [oneApiData.field_name]: value, ...props }, extraCode);
    const arr = [
      `it${getSkipCode(skip)}(\`props.${oneApiData.field_name} is equal to ${value}\`, () => {`,
        getWrapper(framework, mountCode, attributeDom),
        getDomAttributeExpect(framework, expect, component),
        getSnapshotCase(snapshot, framework),
      `});`
    ];
    return arr.filter(v => v).join('\n');
  });
}

module.exports = {
  generateAttributeUnitCase
};
