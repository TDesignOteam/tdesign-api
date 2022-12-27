const { getMountCode } = require("./utils");

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

function generateReactDomCase(test, oneApiData, component) {
  const { dom, snapshot } = test;
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

module.exports = {
  generateDomUnitCase
};
