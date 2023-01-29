const kebabCase = require('lodash/kebabCase');
const camelCase = require('lodash/camelCase');
const {
  getWrapper,
  getMountComponent,
  getDomExpectTruthy,
  getItDescription,
  formatToTriggerAndDom,
  getFireEventCode,
  getDomCountExpectCode,
  getClearDomInDocumentCode,
  getReactFireEventAsync,
  getEventFunctions,
  getEventName,
  getEventFnName,
  getEventArguments,
  getPresetsExpect,
  getItAsync,
} = require("./core");
const { getSkipCode } = require('./utils');

/**
 * 人机交互测试
 * React fireEvent: // fireEvent https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js
 * Vue 会根据 React 命名自动转换
 */
function generateEventUnitCase(test, oneApiData, framework, component) {
  const arr = generateVueAndReactEventCase(test, oneApiData, framework, component);
  return arr && arr.filter(v => v);
}

function generateVueAndReactEventCase(test, oneApiData, framework, component) {
  const { event, props, trigger, content, wrapper, delay, skip } = test;
  if (props && Array.isArray(event)) {
    event = event.map((oneEvent) => ({
      ...oneEvent,
      props: { ...props, ...oneEvent.props }
    }));
  }
  const extraCode = { content, wrapper };
  const onlyDocumentDom = isOnlyDocumentDom(event);
  const topAsync = getItAsync(trigger, framework);
  // click/blur/mouseEnter/...
  if (typeof event === 'object' && !Array.isArray(event)) {
    const eventKeys = Object.keys(event);
    const currentEvent = eventKeys[0];
    const eventInfo = formatToTriggerAndDom({ trigger: currentEvent });
    const firstEvent = eventInfo.trigger;
    const finalDom = eventInfo.triggerDom;
    // Vue2 和 Vue3/React 事件绑定方式不同
    const attachEventToDom = getEventsCode(framework, { [firstEvent]: 'fn' });
    const tmpProps = { events: attachEventToDom }
    if (oneApiData.field_type_text[0] === 'Boolean') {
      tmpProps[oneApiData.field_name] = true;
    }
    const mountCode = getMountComponent(framework, component, tmpProps, extraCode);
    const { reactAsync } = getReactFireEventAsync([{ trigger: firstEvent, delay }], framework);
    const isVue = framework.indexOf('Vue') !== -1;
    const categoryType = oneApiData.field_category_text ? camelCase(oneApiData.field_category_text) : 'interactive';
    const arr = [
      `it${getSkipCode(skip)}('${categoryType}.${oneApiData.field_name} works fine', ${isVue || reactAsync || topAsync ? 'async' : ''} () => {
        const fn = vi.fn();`,
        getWrapper(framework, mountCode, '', '', { trigger: firstEvent, wrapper, onlyDocumentDom }),
        trigger && getPresetsExpect(trigger, framework, component),
        getFireEventCode(framework, { dom: finalDom || 'self', event: firstEvent, component, delay }),
        `${getEventArguments(framework, event[currentEvent].arguments).join('\n')}`,
      `});`,
    ];
    return arr;
  } else if (Array.isArray(event)) {
    let arr = [];
    event.forEach((oneEventUnitCase) => {
      const { props, expect, description, wrapper: oneEventUnitCaseWrapper } = oneEventUnitCase;
      const currentExtraCode = { ...extraCode };
      if (oneEventUnitCaseWrapper) {
        currentExtraCode.wrapper = oneEventUnitCaseWrapper;
      }
      const codeProps = {
        ...(props || {}),
        events: getEventFunctions(expect, framework, currentExtraCode),
      };
      if (oneApiData.field_type_text && oneApiData.field_type_text[0] === 'Boolean' && codeProps[oneApiData.field_name] === undefined) {
        codeProps[oneApiData.field_name] = true;
      }
      const mountCode = getMountComponent(framework, component, codeProps, currentExtraCode);
      const { reactAsync } = getReactFireEventAsync(expect, framework);
      const async = framework.indexOf('Vue') !== -1 || reactAsync || topAsync ? 'async' : '';
      const category = oneApiData.field_category_text?.toLocaleLowerCase();
      const apiPrefix = category? `${category}.${oneApiData.field_name}: ` : '';
      const itDescription = description ? `'${apiPrefix}${description}'` : getItDescription(oneApiData);
      const oneEventArr = [
        `it${getSkipCode(skip)}(${itDescription}, ${async} () => {`,
        getEventsDefinition(expect),
        getWrapper(framework, mountCode, '', '', {
          trigger: getFocusTrigger(expect),
          wrapper: currentExtraCode.wrapper,
          onlyDocumentDom,
        }),
        trigger && getPresetsExpect(trigger, framework, component),
        expect.map((p, index) => getEventExpectCode(p, index, framework, component)).join('\n'),
        `});`
      ];
      arr = arr.concat(oneEventArr, '\n');
    });
    return arr;
  }
}

function getEventsDefinition(expect) {
  return expect.map(({ event }, index) => {
    if (!event) return '';
    const arr = Object.keys(event).map((eventName) => {
      const [fEventName] = eventName.split('.');
      return `const ${getEventFnName(fEventName, index)} = vi.fn();`;
    })
    return arr && arr.join('\n');
  }).filter(v => v).join('\n');
}

function getEventExpectCode(p, index, framework, component) {
  const { exist, event, delay, clearElementAtEnd } = p;
  const { triggerDom = 'self', trigger } = formatToTriggerAndDom(p);

  const arr = [
    getFireEventCode(framework, { dom: triggerDom, event: trigger, component, delay }, '', index),
    getExistDomExpect(framework, exist, index),
    event && Object.entries(event).map(([eventName, args]) => {
      const [fEventName, calls] = eventName.split('.');
      const fnName = getEventFnName(fEventName, index);
      return [
        getEventArguments(framework, args, fnName, calls).join(''),
      ].join('\n');
    }).join('\n'),
    clearElementAtEnd && getClearDomInDocumentCode(clearElementAtEnd, framework),
  ]
  return arr.filter(v => v).join('');
}

function getExistDomExpect(framework, exist, eventIndex) {
  const tmpExist = (Array.isArray(exist) || !exist ? exist : [exist]) || [];
  return tmpExist.map((domSelector) => {
    if (typeof domSelector === 'object') {
      return getDomCountExpectCode(framework, domSelector, '', eventIndex);
    }
    return getDomExpectTruthy(framework, `'${domSelector}'`);
  }).join('\n');
}

// 如果事件存在 focus，返回 focus；如果不存在，则返回空（Vue2 的 focus 需要 attachTo）
function getFocusTrigger(expect) {
  if (!Array.isArray(expect)) return;
  let trigger = '';
  expect.forEach((item) => {
    if (item.trigger && item.trigger.includes('focus')) {
      trigger = 'focus';
    }
  })
  return trigger;
}

// 获取事件监听代码
function getEventsCode(framework, events) {
  if (framework === 'Vue(PC)') {
    const arr = [];
    Object.entries(events).forEach(([event, fn]) => {
      arr.push(`'${kebabCase(event)}': ${fn},`);
    });
    return `on={{ ${arr.join(' ')} }}`;
  }
  const tmpEventsCode = [];
  Object.entries(events).forEach(([event, fn]) => {
    tmpEventsCode.push(`${getEventName(event)}={${fn}}`);
  });
  return tmpEventsCode.join('\n');
}

function isOnlyDocumentDom(event) {
  if (!Array.isArray(event)) return false;
  for (let i = 0, len = event.length; i < len; i++) {
    const item = event[i];
    if (item.expect && item.expect.length) {
      for (let j = 0, len = item.expect.length; j < len; j++) {
        if (!item.expect[j].trigger.includes('document')) {
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = {
  generateEventUnitCase,
};
