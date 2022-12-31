const { kebabCase } = require('lodash');
const {
  getItDescription, getWrapper, getSnapshotCase, getDomExpectTruthy, getMountComponent, formatToTriggerAndDom, getFireEventCode,
} = require('./utils');

const CUSTOM_NODE_CLASS = 'custom-node';
const DOCUMENT_CUSTOM_NODE_CLASS = 'document.custom-node';

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
  let componentCode = '';
  if (framework.indexOf('Vue') !== -1) {
    const h = framework === 'Vue(PC)' ? 'h' : '';
    componentCode = getMountComponent(framework, component, {
      [oneApiData.field_name]: `(${h}) => <span class='${CUSTOM_NODE_CLASS}'>TNode</span>`,
    }, extraCode);
  } else if (framework.indexOf('React') !== -1) {
    if (oneApiData.field_name === 'children') {
      componentCode = getMountComponent(framework, component, {}, {
        ...extraCode,
        content: `<span className='${CUSTOM_NODE_CLASS}'>TNode</span>`,
      });
    } else {
      componentCode = getMountComponent(framework, component, {
        [oneApiData.field_name]: `<span className='${CUSTOM_NODE_CLASS}'>TNode</span>`,
      }, extraCode);
    }
  }
  const itDesc = getItDescription(oneApiData);
  let arr = getTestCaseByComponentCode({
    itDesc,
    componentCode,
    framework, component, snapshot, tnode,
  });

  const vueSlotsArr = getVueSlotsCode(extraCode, oneApiData, framework, component, snapshot, tnode);
  if (vueSlotsArr.length) {
    arr = arr.concat(vueSlotsArr);
  }
  return arr;
}

function getVueSlotsCode(extraCode, oneApiData, framework, component, snapshot, tnode) {
  let arr = [];
  // Only Vue need this code block
  let secondArr = [];
  let thirdArr = [];
  if (framework.indexOf('Vue') !== -1) {
    const isBothBooleanAndTNode = oneApiData.field_type_text.join() === 'Boolean,TNode';
    const slotsText = framework === 'Vue(PC)' ? 'scopedSlots' : 'v-slots';
    const slotCodeProps = {
      [slotsText]: `{ ${oneApiData.field_name}: () => <span class='${CUSTOM_NODE_CLASS}'>TNode</span> }`,
    };
    if (isBothBooleanAndTNode) {
      slotCodeProps[oneApiData.field_name] = true;
    }
    const slotCode = getMountComponent(framework, component, slotCodeProps, extraCode);
    arr.push(`\n`);
    const slotTtDesc = `'slots.${oneApiData.field_name} works fine'`;
    secondArr = getTestCaseByComponentCode({
      itDesc: slotTtDesc,
      componentCode: slotCode,
      framework, component, snapshot, tnode,
    });

    if (kebabCase(oneApiData.field_name) !== oneApiData.field_name) {
      const slotCodeProps2 = {
        [slotsText]: `{ '${kebabCase(oneApiData.field_name)}': () => <span class='${CUSTOM_NODE_CLASS}'>TNode</span> }`,
      };
      if (isBothBooleanAndTNode) {
        slotCodeProps2[oneApiData.field_name] = true;
      }
      const slotCode2 = getMountComponent(framework, component, slotCodeProps2, extraCode);
      arr.push(`\n`);
      const slotTtDesc2 = `'slots.${kebabCase(oneApiData.field_name)} works fine'`;
      thirdArr = getTestCaseByComponentCode({
        itDesc: slotTtDesc2,
        componentCode: slotCode2,
        framework, component, snapshot, tnode,
      });
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

function getTestCaseByComponentCode(params) {
  const {
    itDesc, componentCode,
    framework, component, snapshot, tnode
  } = params;
  const needAsync = framework.indexOf('Vue') !== -1 && tnode.trigger ? 'async' : '';
  const isDocumentNode = Boolean(tnode.dom && tnode.dom.includes(DOCUMENT_CUSTOM_NODE_CLASS));
  const arr = [
    `it(${tnode.description || itDesc}, ${needAsync} () => {`,
    getWrapper(framework, componentCode),
    tnode.trigger && getTriggerExpect(tnode.trigger, framework, component),
    // 校验自定义元素是否存在
    !isDocumentNode && getDomExpectTruthy(framework, `'.${CUSTOM_NODE_CLASS}'`),
    // 校验额外的元素是否存在
    tnode.dom && getDomExpect(framework, tnode.dom),
    getSnapshotCase(snapshot, framework),
    `});`
  ];
  return arr;
}

function getTriggerExpect(triggerList, framework, component) {
  if (!triggerList) return;
  const tmpTrigger = Array.isArray(triggerList) ? triggerList : [triggerList];
  return tmpTrigger.map((oneTrigger) => {
    const { triggerDom = 'self', trigger } = formatToTriggerAndDom({ trigger: oneTrigger });
    return getFireEventCode(framework, {
      dom: triggerDom,
      event: trigger,
      component,
    });
  }).join('\n');
}

function getDomExpect(framework, tnodeDom) {
  const doms = Array.isArray(tnodeDom) ? tnodeDom : [tnodeDom];
  return doms.map((dom) => {
    return getDomExpectTruthy(framework, `'${dom}'`);
  }).join('\n');
}

module.exports = {
  generateTNodeElement
};
