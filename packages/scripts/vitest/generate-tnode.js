const {
  getItDescription,
  getMountCode,
} = require('./utils');

/**
 * TNode 自定义元素（插槽）测试
 */
function generateTNodeElement(test, oneApiData, framework, component) {
  if (['VueNext(PC)', 'Vue(PC)'].includes(framework)) {
    return generateVueTNode(test, oneApiData, framework, component);
  }
  if (['React(PC)'].includes(framework)) {
    return generateReactTNode(test, oneApiData, component);
  }
}

function generateVueTNode(test, oneApiData, framework, component) {
  const { tnode, snapshot } = test;
  if (tnode === true) {
    const h = framework === 'Vue(PC)' ? 'h' : '';
    const componentCode = `<${component} ${oneApiData.field_name}={(${h}) => <span class='custom-node'>TNode</span>}></${component}>`;
    const itDesc = getItDescription(oneApiData);
    const arr = getTestCaseByComponentCode(itDesc, framework, snapshot, componentCode);

    const slotsText = framework === 'Vue(PC)' ? 'scopedSlots' : 'v-slots';
    const slotCode = `<${component}
      ${slotsText}={{
        '${oneApiData.field_name}': () => <span class='custom-node'>TNode</span>,
      }}
    ></${component}>`;
    arr.push(`\n`);
    const slotTtDesc = `'slots.${oneApiData.field_name} works fine'`;
    const secondArr = getTestCaseByComponentCode(slotTtDesc, framework, snapshot, slotCode);
    return arr.concat(secondArr).join('\n');
  }
}

function getTestCaseByComponentCode(itDesc, framework, snapshot, componentCode) {
  const arr = [
    `it(${itDesc}, () => {
      const wrapper = ${getMountCode(framework, componentCode)};
      expect(wrapper.find('.custom-node').exists()).toBeTruthy();`,
      snapshot ? `expect(wrapper.element).toMatchSnapshot();` : '',
    `});`
  ];
  return arr.filter(v => v);
}

function generateReactTNode(test, oneApiData, component) {
  const { tnode, snapshot } = test;
  if (tnode === true) {
    const componentCode = `<${component} ${oneApiData.field_name}={<span className='custom-node'>TNode</span>}></${component}>`;
    const snapshotCode = snapshot ? `\nexpect(container).toMatchSnapshot();\n` : '';
    const arr = [
      `it(${getItDescription(oneApiData)}, () => {
        const { container } = render(${componentCode});
        expect(container.querySelector('.custom-node')).toBeTruthy();${snapshotCode}
      });`
    ];
    return arr.filter(v => v);
  }
}

module.exports = {
  generateTNodeElement
};
