const kebabCase = require('lodash/kebabCase');
const {
  getWrapper,
  getMountComponent,
  getDomExpectTruthy,
  getItDescription,
  formatToTriggerAndDom,
  getFireEventCode,
  isRegExp,
  getDomCountExpectCode,
  getClearDomInDocumentCode,
  getReactFireEventAsync,
  getEventFunctions,
  getEventName,
  getEventFnName,
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
  const { event, content, wrapper, delay, skip } = test;
  const extraCode = { content, wrapper };
  // click/blur/mouseEnter/...
  if (typeof event === 'object' && !Array.isArray(event)) {
    const eventKeys = Object.keys(event);
    const currentEvent = eventKeys[0];
    const eventInfo = formatToTriggerAndDom({ trigger: currentEvent });
    const firstEvent = eventInfo.trigger;
    const finalDom = eventInfo.triggerDom;
    // Vue2 和 Vue3/React 事件绑定方式不同
    const attachEventToDom = getEventsCode(framework, { [firstEvent]: 'fn' });
    const mountCode = getMountComponent(framework, component, { events: attachEventToDom }, extraCode);
    const { reactAsync } = getReactFireEventAsync([{ trigger: firstEvent, delay }], framework);
    const isVue = framework.indexOf('Vue') !== -1;
    const arr = [
      `it${getSkipCode(skip)}('events.${firstEvent} works fine', ${isVue || reactAsync ? 'async' : ''} () => {
        const fn = vi.fn();`,
        getWrapper(framework, mountCode),
        getFireEventCode(framework, { dom: finalDom || 'self', event: firstEvent, component, delay }),
        `${getEventArguments(event[currentEvent].arguments).join('\n')}`,
      `});`,
    ];
    return arr;
  } else if (Array.isArray(event)) {
    let arr = [];
    event.forEach((oneEventUnitCase) => {
      const { props, expect, description } = oneEventUnitCase;
      const codeProps = {
        ...(props || {}),
        events: getEventFunctions(expect, framework, extraCode),
      };
      if (oneApiData.field_type_text && oneApiData.field_type_text[0] === 'Boolean' && !codeProps[oneApiData.field_name]) {
        codeProps[oneApiData.field_name] = true;
      }
      const mountCode = getMountComponent(framework, component, codeProps, extraCode);
      const { reactAsync } = getReactFireEventAsync(expect, framework);
      const async = framework.indexOf('Vue') !== -1 || reactAsync ? 'async' : '';
      const category = oneApiData.field_category_text?.toLocaleLowerCase();
      const apiPrefix = category? `${category}.${oneApiData.field_name}: ` : '';
      const itDescription = description ? `'${apiPrefix}${description}'` : getItDescription(oneApiData);
      const oneEventArr = [
        `it${getSkipCode(skip)}(${itDescription}, ${async} () => {`,
        getEventsDefinition(expect),
        getWrapper(framework, mountCode),
        expect.map((p, index) => getEventExpectCode(p, index, framework, component)).join('\n'),
        `});`
      ];
      arr = arr.concat(oneEventArr);
    });
    return arr;
  }
}

function getEventsDefinition(expect) {
  return expect.map(({ event }, index) => {
    if (!event) return '';
    const arr = Object.keys(event).map((eventName) => {
      return `const ${getEventFnName(eventName, index)} = vi.fn();`;
    })
    return arr && arr.join('\n');
  }).filter(v => v).join('\n');
}

function getEventExpectCode(p, index, framework, component) {
  const { exist, event, delay, clearElementAtEnd } = p;
  const { triggerDom = 'self', trigger } = formatToTriggerAndDom(p);

  const arr = [
    getFireEventCode(framework, { dom: triggerDom, event: trigger, component, delay }),
    getExistDomExpect(framework, exist, index),
    event && Object.entries(event).map(([eventName, args]) => {
      const fnName = getEventFnName(eventName, index);
      return [
        getEventArguments(args, fnName).join(''),
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

function getEventArguments(args, fnName = 'fn') {
  if (typeof args === 'string' && args === 'not') {
    return [`expect(${fnName}).not.toHaveBeenCalled(1);`];
  }
  if (!Array.isArray(args)) return [];
  const arr = args.map((oneArgument, index) => {
    if (oneArgument === undefined) return;
    if (typeof oneArgument === 'string' && !isRegExp(oneArgument) && oneArgument !== 'undefined') {
      return getOneArgEqual(fnName, index, `'${oneArgument}'`);
    }
    if (typeof oneArgument === 'object' && !Array.isArray(oneArgument)) {
      return Object.keys(oneArgument).map(oneProperty => {
        const value = oneArgument[oneProperty];
        if (value === true) {
          const expectInfo = `${fnName}.mock.calls[0][${index}].${oneProperty}`;
          return isRegExp(oneArgument)
            ? `expect(${oneArgument}.test(${expectInfo})).toBeTruthy();`
            : `expect(${expectInfo}).toBeTruthy();`;
        }
        const expectVal = typeof value === 'string' && !isRegExp(value) ? `'${value}'` : value;
        return getOneArgEqual(fnName, index, expectVal, oneProperty);
      }).join('\n');
    }
    return getOneArgEqual(fnName, index, oneArgument);
  });
  arr.unshift(`expect(${fnName}).toHaveBeenCalled(1);`);
  return arr;
}

// 处理正则表达式的校验
function getOneArgEqual(fnName, index, oneArgument, oneProperty = '') {
  const property = oneProperty ? `.${oneProperty}` : '';
  if (isRegExp(oneArgument)) {
    return `expect(${oneArgument}.test(${fnName}.mock.calls[0][${index}]${property})).toBeTruthy();`;
  } else {
    const toEqual = typeof oneArgument === 'object' ? 'toEqual' : 'toBe';
    return `expect(${fnName}.mock.calls[0][${index}]${property}).${toEqual}(${oneArgument});`;
  }
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

module.exports = {
  generateEventUnitCase,
};
