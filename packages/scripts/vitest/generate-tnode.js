const { kebabCase } = require('lodash');
const {
  getItDescription, getWrapper, getSnapshotCase, getDomExpectTruthy, getMountComponent,
} = require('./utils');

/**
 * TNode 自定义元素（插槽）测试
 */
function generateTNodeElement(test, oneApiData, framework, component) {
  const arr = generateVueTNode(test, oneApiData, framework, component);
  return arr.filter(v => v);
}

function generateVueTNode(test, oneApiData, framework, component) {
  const { tnode, snapshot, content, wrapper } = test;
  const extraCode = { content, wrapper };
  if (tnode === true) {
    let componentCode = '';
    if (framework.indexOf('Vue') !== -1) {
      const h = framework === 'Vue(PC)' ? 'h' : '';
      // componentCode = `<${component} ${oneApiData.field_name}={(${h}) => <span class='custom-node'>TNode</span>}></${component}>`;
      componentCode = getMountComponent(framework, component, {
        [oneApiData.field_name]: `(${h}) => <span class='custom-node'>TNode</span>`,
      }, extraCode);
    } else if (framework.indexOf('React') !== -1) {
      if (oneApiData.field_name === 'children') {
        componentCode = `<${component}><span className='custom-node'>TNode</span></${component}>`;
      } else {
        componentCode = `<${component} ${oneApiData.field_name}={<span className='custom-node'>TNode</span>}></${component}>`;
      }
    }
    const itDesc = getItDescription(oneApiData);
    let arr = getTestCaseByComponentCode(itDesc, framework, snapshot, componentCode);

    const vueSlotsArr = getVueSlotsCode(extraCode, oneApiData, framework, component, snapshot);
    if (vueSlotsArr.length) {
      arr = arr.concat(vueSlotsArr);
    }
    return arr;
  }
}

function getVueSlotsCode(extraCode, oneApiData, framework, component, snapshot) {
  let arr = [];
  // Only Vue need this code block
  let secondArr = [];
  let thirdArr = [];
  if (framework.indexOf('Vue') !== -1) {
    const slotsText = framework === 'Vue(PC)' ? 'scopedSlots' : `'v-slots'`;
    const slotCode = getMountComponent(framework, component, {
      [slotsText]: `{ ${oneApiData.field_name}: () => <span class='custom-node'>TNode</span> }`,
    }, extraCode);
    arr.push(`\n`);
    const slotTtDesc = `'slots.${oneApiData.field_name} works fine'`;
    secondArr = getTestCaseByComponentCode(slotTtDesc, framework, snapshot, slotCode);

    if (kebabCase(oneApiData.field_name) !== oneApiData.field_name) {
      const slotCode2 = getMountComponent(framework, component, {
        [slotsText]: `{ '${kebabCase(oneApiData.field_name)}': () => <span class='custom-node'>TNode</span> }`,
      }, extraCode);
      arr.push(`\n`);
      const slotTtDesc2 = `'slots.${kebabCase(oneApiData.field_name)} works fine'`;
      thirdArr = getTestCaseByComponentCode(slotTtDesc2, framework, snapshot, slotCode2);
    }
  }
  // 测试驼峰命名的插槽
  if (secondArr.length) {
    arr = arr.concat(secondArr);
  }
  // 测试中华线命名的插槽
  if (thirdArr.length) {
    arr = arr.concat(thirdArr);
  }
  return arr;
}

function getTestCaseByComponentCode(itDesc, framework, snapshot, componentCode) {
  const arr = [
    `it(${itDesc}, () => {`,
    getWrapper(framework, componentCode),
    getDomExpectTruthy(framework, `'.custom-node'`),
    getSnapshotCase(snapshot, framework),
    `});`
  ];
  return arr;
}

module.exports = {
  generateTNodeElement
};
