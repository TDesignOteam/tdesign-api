const { kebabCase } = require('lodash');
const {
  getItDescription,
  getWrapper,
  getSnapshotCase,
  getDomExpectTruthy,
  getMountComponent,
  formatToTriggerAndDom,
  getFireEventCode,
  getReactFireEventAsync,
  getEventArguments,
} = require('./core');
const { getSkipCode } = require('./utils');

const CUSTOM_NODE_CLASS = 'custom-node';
const DOCUMENT_CUSTOM_NODE_CLASS = 'document.custom-node';

/**
 * TNode 自定义元素（插槽）测试
 */
function generateTNodeElement(test, oneApiData, framework, component) {
  const arr = generateVueAndReactTNode(test, oneApiData, framework, component);
  return arr.filter(v => v);
}

function generateVueAndReactTNode(test, oneApiData, framework, component) {
  const { tnode, props, snapshot, content, wrapper, skip } = test;
  const extraCode = { content, wrapper };
  let componentCode = '';
  if (framework.indexOf('Vue') !== -1) {
    const h = framework === 'Vue(PC)' ? 'h' : '';
    componentCode = getMountComponent(framework, component, {
      [oneApiData.field_name]: `(${h}) => <span class='${CUSTOM_NODE_CLASS}'>TNode</span>`,
      ...props,
    }, extraCode);
  } else if (framework.indexOf('React') !== -1) {
    if (oneApiData.field_name === 'children') {
      componentCode = getMountComponent(framework, component, {...props}, {
        ...extraCode,
        content: `<span className='${CUSTOM_NODE_CLASS}'>TNode</span>`,
      });
    } else {
      componentCode = getMountComponent(framework, component, {
        [oneApiData.field_name]: `<span className='${CUSTOM_NODE_CLASS}'>TNode</span>`,
        ...props,
      }, extraCode);
    }
  }
  const itDesc = getItDescription(oneApiData);
  let arr = getTestCaseByComponentCode({
    itDesc,
    componentCode,
    framework, component, snapshot, tnode, skip,
  });

  const vueSlotsArr = getVueSlotsCode(extraCode, oneApiData, framework, component, snapshot, tnode, skip, props);
  if (vueSlotsArr.length) {
    arr = arr.concat(vueSlotsArr);
  }

  // 如果 TNode 存在参数，则一定是函数。进行函数参数测试
  if (typeof tnode === 'object' && tnode.params) {
    const list = getTNodeFnTest(tnode, oneApiData, framework, component, extraCode, skip, props);
    arr.push(list);
  }
  return arr;
}

function getVueSlotsCode(extraCode, oneApiData, framework, component, snapshot, tnode, skip, props) {
  let arr = [];
  // Only Vue need this code block
  let secondArr = [];
  let thirdArr = [];
  if (framework.indexOf('Vue') !== -1) {
    const isBothBooleanAndTNode = oneApiData.field_type_text.join() === 'Boolean,TNode';
    const slotsText = framework === 'Vue(PC)' ? 'scopedSlots' : 'v-slots';
    const h = slotsText === 'scopedSlots' ? 'h' : '';
    const slotCodeProps = {
      [slotsText]: `{ ${oneApiData.field_name}: (${h}) => <span class='${CUSTOM_NODE_CLASS}'>TNode</span> }`,
      ...props,
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
      framework, component, snapshot, tnode, skip,
    });

    if (kebabCase(oneApiData.field_name) !== oneApiData.field_name) {
      const slotCodeProps2 = {
        [slotsText]: `{ '${kebabCase(oneApiData.field_name)}': () => <span class='${CUSTOM_NODE_CLASS}'>TNode</span> }`,
        ...props,
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
        framework, component, snapshot, tnode, skip,
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
    framework, component, snapshot, tnode, skip
  } = params;
  const { reactAsync } = getReactFireEventAsync(getTriggerList(tnode.trigger), framework);
  const needAsync = framework.indexOf('Vue') !== -1 && tnode.trigger || reactAsync ? 'async' : '';
  const isDocumentNode = Boolean(tnode.dom && tnode.dom.includes(DOCUMENT_CUSTOM_NODE_CLASS));
  const arr = [
    `it${getSkipCode(skip)}(${tnode.description || itDesc}, ${needAsync} () => {`,
    getWrapper(framework, componentCode),
    tnode.trigger && getTriggerExpect(tnode.trigger, framework, component),
    // 校验自定义元素是否存在
    !isDocumentNode && getDomExpectTruthy(framework, `'.${CUSTOM_NODE_CLASS}'`),
    // 校验额外的元素是否存在
    tnode.dom && getDomExpect(framework, tnode.dom),
    getSnapshotCase(snapshot, framework),
    `});`
  ];
  return arr.filter(v => v);
}

function getTNodeFnTest(tnode, oneApiData, framework, component, extraCode, skip, props) {
  const skipText = skip ? '.skip' : '';
  const arr = [
    `\nit${skipText}('${oneApiData.field_name} is a function with params', () => {`,
      `const fn = vi.fn();`,
      getMountComponent(framework, component, {
        [oneApiData.field_name]: '/-fn-/',
        ...props,
      }, extraCode),
      getEventArguments(framework, tnode.params).join('\n'),
    `})`,
  ];
  // 插槽参数测试
  if (framework.indexOf('Vue') !== -1) {
    const slotsText = framework === 'Vue(PC)' ? 'scopedSlots' : 'v-slots';
    arr.push(...[
      `it${skipText}('${oneApiData.field_name} is a function with params', () => {`,
        `const fn = vi.fn();`,
        getMountComponent(framework, component, {
          [slotsText]: { [oneApiData.field_name]: '/-fn-/' },
          ...props,
        }, extraCode),
        getEventArguments(framework, tnode.params).join('\n'),
      `})`,
    ]);
  }
  return arr.join('\n');
}

function getTriggerList(trigger) {
  if (typeof trigger === 'string') return [{ trigger }];
  if (Array.isArray(trigger)) {
    return trigger.map(t => ({ trigger: t }));
  }
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
