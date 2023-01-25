const { kebabCase } = require('lodash');
const {
  getItDescription,
  getWrapper,
  getSnapshotCase,
  getDomExpectTruthy,
  getMountComponent,
  getEventArguments,
  getDelayCode,
  getPresetsExpect,
  getItAsync,
  getVariablesCode,
} = require('./core');
const { getSkipCode } = require('./utils');
// const map = require('../map.json');

// const componentMap = map.data.components;

const CUSTOM_NODE_CLASS = 'custom-node';
const DOCUMENT_CUSTOM_NODE_CLASS = 'document.custom-node';

/**
 * TNode 自定义元素（插槽）测试
 */
function generateTNodeElement(test, oneApiData, framework, component) {
  let arr = [];
  const { tnode, props, variables } = test;
  if (Array.isArray(tnode)) {
    tnode.forEach((oneTNode) => {
      const tmpTest = {
        ...test,
        tnode: oneTNode,
        props: { ...oneTNode.props, ...props },
        variables: [...(oneTNode.variables || []), ...(variables || [])],
      };
      arr = arr.concat(generateVueAndReactTNode(tmpTest, oneApiData, framework, component), '\n');
    });
  } else {
    arr = arr.concat(generateVueAndReactTNode(test, oneApiData, framework, component));
  }
  return arr.filter(v => v);
}

function generateVueAndReactTNode(test, oneApiData, framework, component) {
  const { tnode, props, variables, snapshot, content, wrapper, trigger, skip } = test;
  const extraCode = { content, wrapper };
  let componentCode = '';
  if (framework.indexOf('Vue') !== -1) {
    const h = framework === 'Vue(PC)' ? 'h' : '';
    componentCode = getMountComponent(framework, component, {
      [oneApiData.field_name]: `(${h}) => <span class='${CUSTOM_NODE_CLASS}'>TNode</span>`,
      ...props,
    }, extraCode);
  } else if (framework.indexOf('React') !== -1) {
    if (oneApiData.field_name === 'children' && component === oneApiData.component) {
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
  const itDesc = oneApiData.component === component
    ? getItDescription(oneApiData)
    : `'${oneApiData.component}.${oneApiData.field_name} works fine'`;
  let arr = getTestCaseByComponentCode({
    itDesc,
    componentCode,
    // 开始单测的前置条件：trigger
    trigger: tnode.trigger || trigger,
    framework, component, snapshot, tnode, skip, variables,
  });

  const vueSlotsArr = getVueSlotsCode(extraCode, oneApiData, framework, component, snapshot, tnode, skip, props, trigger);
  if (vueSlotsArr.length) {
    arr = arr.concat(vueSlotsArr);
  }

  // 如果 TNode 存在参数，则一定是函数。进行函数参数测试
  if (typeof tnode === 'object' && tnode.params) {
    const list = getTNodeFnTest(tnode, oneApiData, framework, component, {
      extraCode, skip, props, trigger, variables,
      description: tnode.description,
    });
    arr.push(list);
  }
  return arr;
}

function getVueSlotsCode(extraCode, oneApiData, framework, component, snapshot, tnode, skip, props, trigger) {
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
      trigger: tnode.trigger || trigger,
      framework, component, snapshot, tnode, skip, variables,
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
        trigger: tnode.trigger || trigger,
        framework, component, snapshot, tnode, skip, variables,
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
    trigger,
    framework, component, snapshot, tnode, skip, variables
  } = params;
  const needAsync = getItAsync(trigger, framework);
  const isDocumentNode = Boolean(tnode.dom && tnode.dom.includes(DOCUMENT_CUSTOM_NODE_CLASS));
  const onlyDocumentDom = Boolean(tnode.dom && tnode.dom.length && tnode.dom.every(item => item.includes('document')));
  const arr = [
    `it${getSkipCode(skip)}(${ tnode.description ? `'${tnode.description}'` : itDesc}, ${needAsync} () => {`,
    getVariablesCode(variables),
    // 只有 document 元素的场景下，不需要 container 变量
    getWrapper(framework, componentCode, '', '', { onlyDocumentDom }),
    trigger && getPresetsExpect(trigger, framework, component),
    // 校验自定义元素是否存在
    !isDocumentNode && getDomExpectTruthy(framework, `'.${CUSTOM_NODE_CLASS}'`),
    // 校验额外的元素是否存在
    tnode.dom && getDomExpect(framework, tnode.dom),
    getSnapshotCase(snapshot, framework, '', onlyDocumentDom),
    `});`
  ];
  return arr.filter(v => v);
}

function getTNodeFnTest(tnode, oneApiData, framework, component, params) {
  const { extraCode, skip, props, trigger, variables } = params;
  const finalTrigger = tnode.trigger || trigger;
  const skipText = skip ? '.skip' : '';
  const async = getItAsync(finalTrigger, framework);
  const category = oneApiData.component === component ? 'props': oneApiData.component;
  const moreDesc = tnode.description ? `, ${tnode.description}` : '';
  const defaultDescription = `'${category}.${oneApiData.field_name} is a function with params${moreDesc}'`;
  const arr = [
    `\nit${skipText}(${defaultDescription}, ${async} () => {`,
      getVariablesCode(variables),
      `const fn = vi.fn();`,
      getMountComponent(framework, component, {
        [oneApiData.field_name]: '/-fn-/',
        ...props,
      }, extraCode),
      getDelayCode(finalTrigger, framework),
      getEventArguments(framework, tnode.params).join('\n'),
    `})`,
  ].filter(v => v);
  // 插槽参数测试
  if (framework.indexOf('Vue') !== -1) {
    const slotsText = framework === 'Vue(PC)' ? 'scopedSlots' : 'v-slots';
    arr.push(...[
      `it${skipText}('slots.${oneApiData.field_name} is a function with params', ${async}() => {`,
        `const fn = vi.fn();`,
        getMountComponent(framework, component, {
          [slotsText]: `{ [${oneApiData.field_name}]: fn }`,
          ...props,
        }, extraCode),
        getDelayCode(finalTrigger, framework),
        getEventArguments(framework, tnode.params).join('\n'),
      `})`,
    ]);
  }
  return arr.join('\n');
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
