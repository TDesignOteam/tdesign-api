const { getMountCode, getArrayCode } = require("./utils");

/**
 * 检测某个元素是否存在
 * @returns 
 */
function generateDomUnitCase(test, oneApiData, framework, component) {
  if (['VueNext(PC)', 'Vue(PC)'].includes(framework)) {
    return generateVueDomCase(test, oneApiData, framework, component);
  }
  if (['React(PC)'].includes(framework)) {
    return generateReactDomCase(test, oneApiData, component);
  }
}

function generateVueDomCase(test, oneApiData, framework, component) {
  const { dom, snapshot } = test;
  if (typeof dom === 'string' && oneApiData.field_type_text[0] === 'Boolean') {
    const componentCode = `<${component} ${oneApiData.field_name}={true}></${component}>`;
    const arr = [
      `it('props.${oneApiData.field_name}: ${component} contains element \`${dom}\`', () => {
        const wrapper = ${getMountCode(framework, componentCode)};
        expect(wrapper.find('${dom}').exists()).toBeTruthy()`,
        snapshot ? 'expect(wrapper.element).toMatchSnapshot();' : '',
      `})`,
    ];
    return arr.filter(v => v);
  }
  if (Array.isArray(dom) && oneApiData.field_enum) {
    const enums = oneApiData.field_enum.split('/');
    const expectedVariable = `${oneApiData.field_name}ExpectedDom`;
    const componentCode = `<${component} ${oneApiData.field_name}={item}></${component}>`;
    const arr = [
      `const ${expectedVariable} = ${getArrayCode(dom)};`,
      `${getArrayCode(enums)}.forEach((item, index) => {
        it(\`props.${oneApiData.field_name} is equal to \${item}\`, () => {
          const wrapper = ${getMountCode(framework, componentCode)};
          expect(wrapper.find(${expectedVariable}[index]).exists()).toBeTruthy();`,
          snapshot ? 'expect(wrapper.element).toMatchSnapshot();' : '',
        `});`,
      `});`,
    ];
    return arr.filter(v => v);
  }
}

function generateReactDomCase(test, oneApiData, component) {
  const { dom, snapshot } = test;
  if (typeof dom === 'string' && oneApiData.field_type_text[0] === 'Boolean') {
    const componentCode = `<${component} ${oneApiData.field_name}={true}></${component}>`;
    const arr = [
      `it('props.${oneApiData.field_name}: ${component} contains element \`${dom}\`', () => {
        const { container } = render(${componentCode});
        expect(container.querySelector('${dom}')).toBeTruthy()`,
        snapshot ? 'expect(container).toMatchSnapshot();' : '',
      `})`,
    ];
    return arr.filter(v => v);
  }
  if (Array.isArray(dom) && oneApiData.field_enum) {
    const enums = oneApiData.field_enum.split('/');
    const expectedVariable = `${oneApiData.field_name}ExpectedDom`;
    const componentCode = `<${component} ${oneApiData.field_name}={item}></${component}>`;
    const arr = [
      `const ${expectedVariable} = ${getArrayCode(dom)};`,
      `${getArrayCode(enums)}.forEach((item, index) => {
        it(\`props.${oneApiData.field_name} is equal to \${item}\`, () => {
          const { container } = render(${componentCode});
          expect(container.querySelector(${expectedVariable}[index])).toBeTruthy();`,
          snapshot ? 'expect(container).toMatchSnapshot();' : '',
        `});`,
      `});`,
    ];
    return arr.filter(v => v);
  }
}

module.exports = {
  generateDomUnitCase
};
