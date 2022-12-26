const { getArrayCode, getItDescription, getMountCode } = require("./utils");

function generateAttributeUnitCase(test, oneApiData, framework, component) {
  if (['VueNext(PC)', 'Vue(PC)'].includes(framework)) {
    return generateVueAttribute(test, oneApiData, framework, component);
  }
  if (['React(PC)'].includes(framework)) {
    return generateReactAttribute(test, oneApiData, component);
  }
}

function generateVueAttribute(test, oneApiData, framework, component) {
  const { attribute, snapshot } = test;
  const attributeName = Object.keys(attribute)[0];
  // 期望的属性值
  const attributeValue = attribute[attributeName];
  // 属性全部枚举值
  const propsValues = oneApiData.field_enum?.split('/');
  if (Array.isArray(attributeValue) && propsValues.length) {
    const componentCode = `<${component} ${oneApiData.field_name}={item}></${component}>`;
    const arr = [
      `const attributeValues = ${getArrayCode(attributeValue)};`,
      `${getArrayCode(propsValues)}.forEach((item, index) => {`,
        `it(\`props.${oneApiData.field_name} is equal to \${item}\`, () => {
          const wrapper = ${getMountCode(framework, componentCode)};
          expect(wrapper.attributes('${attributeName}')).toBe(attributeValues[index]);`,
          snapshot ? 'expect(wrapper.element).toMatchSnapshot();' : '',
        `});`,
      `});`,
    ];
    return arr.filter(v => v);
  }
  // 测试属性赋值，如：<Button href="https://tdesign.tencent.com/" />
  if (typeof attributeValue === 'string') {
    const componentCode = `<${component} ${oneApiData.field_name}='${attributeValue}'></${component}>`;
    const arr = [
      `it(${getItDescription(oneApiData)}, () => {
        const wrapper = ${getMountCode(framework, componentCode)};
        expect(wrapper.attributes('${attributeName}')).toBe('${attributeValue}');`,
        snapshot ? 'expect(wrapper.element).toMatchSnapshot();' : '',
      `})`,
    ];
    return arr.filter(v => v);
  }
}

function generateReactAttribute(test, oneApiData, component) {
  const { attribute, snapshot } = test;
  const attributeName = Object.keys(attribute)[0];
  // 期望的属性值
  const attributeValue = attribute[attributeName];
  // 属性全部枚举值
  const propsValues = oneApiData.field_enum?.split('/');
  if (Array.isArray(attributeValue) && propsValues.length) {
    const arr = [
      `const attributeValues = ${getArrayCode(attributeValue)};`,
      `${getArrayCode(propsValues)}.forEach((item, index) => {`,
        `it(\`props.${oneApiData.field_name} is equal to \${item}\`, () => {
          const { container } = render(<${component} ${oneApiData.field_name}={item}></${component}>);
          expect(container.firstChild.getAttribute('${attributeName}')).toBe(attributeValues[index]);`,
          snapshot ? 'expect(container).toMatchSnapshot();' : '',
        `});`,
      `});`,
    ];
    return arr.filter(v => v);
  }
  // 测试属性赋值，如：<Button href="https://tdesign.tencent.com/" />
  if (typeof attributeValue === 'string') {
    const componentCode = `<${component} ${oneApiData.field_name}='${attributeValue}'></${component}>`;
    const arr = [
      `it(${getItDescription(oneApiData)}, () => {
        const { container } = render(${componentCode});
        expect(container.firstChild.getAttribute('${attributeName}')).toBe('${attributeValue}');`,
        snapshot ? 'expect(container).toMatchSnapshot();' : '',
      `})`,
    ];
    return arr.filter(v => v);
  }
}

module.exports = {
  generateAttributeUnitCase
};
