const { getWrapper, getMountComponent } = require("./utils");
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');
const kebabCase = require('lodash/kebabCase');

function getEventName(eventName) {
  return upperFirst(camelCase(eventName));
}

/**
 * "event": "click"
 */
function generateEventUnitCase(test, oneApiData, framework, component) {
  if (oneApiData.field_category_text !== 'Events') return;
  return generateVueAndReactEventCase(test, oneApiData, framework, component);
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
    tmpEventsCode.push(`on${getEventName(event)}={${fn}}`);
  });
  return tmpEventsCode.join('\n');
}

/**
 * 获取事件触发代码，如：trigger('click')
 * @param {*} framework 框架名
 * @param {*} param1 dom 触发事件的元素，dom = self 表示组件自身触发。event 触发事件名。component 仅 Vue 需要
 * @param {*} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 */
function getFireEventCode(framework, { dom, event, component }, wrapperIndex = '') {
  if (framework.indexOf('Vue') !== -1) {
    const tmpDom = dom === 'self' ? component : dom;
    return `wrapper${wrapperIndex}.findComponent(${tmpDom}).trigger('${event}');`;
  }
  if (framework.indexOf('React') !== -1) {
    const tmpDom = dom === 'self' ? `container${wrapperIndex}.firstChild` : dom;
    return `fireEvent.${event}(${tmpDom});`;
  }
}

function generateVueAndReactEventCase(test, oneApiData, framework, component) {
  const { event, content, wrapper } = test;
  const extraCode = { content, wrapper };
  // click/blur/...
  const eventKeys = Object.keys(event);
  const firstEvent = eventKeys[0];
  // Vue2 和 Vue3/React 事件绑定方式不同
  const attachEventToDom = getEventsCode(framework, { [firstEvent]: 'fn' });
  const mountCode = getMountComponent(framework, component, { events: attachEventToDom }, extraCode);
  const isVue = framework.indexOf('Vue') !== -1;
  const arr = [
    `it('${component} Event: ${firstEvent}', ${isVue ? 'async' : ''} () => {
      const fn = vi.fn();`,
      getWrapper(framework, mountCode),
      getFireEventCode(framework, { dom: 'self', event: firstEvent, component }),
      isVue ? `await wrapper.vm.$nextTick();` : '',
      `expect(fn).toHaveBeenCalled();`,
      `${getEventArguments(event[firstEvent].arguments)}
    });`,
  ];
  return arr.filter(v => v);
}

function getEventArguments(arguments) {
  return arguments.map((oneArgument, index) => {
    if (typeof oneArgument === 'string') {
      return `expect(fn.mock.calls[0][${index}]).toBe('${oneArgument}');\n`;
    }
    if (typeof oneArgument === 'object' && !Array.isArray(oneArgument)) {
      return Object.keys(oneArgument).map(oneProperty => {
        const value = oneArgument[oneProperty];
        if (value === true) {
          return `expect(fn.mock.calls[0][${index}].${oneProperty}).toBeTruthy();`;
        }
        const expectVal = typeof value === 'string' ? `'${value}'` : value;
        return `expect(fn.mock.calls[0][${index}].${oneProperty}).toBe(${expectVal});`;
      }).join('\n');
    }
    return `expect(fn.mock.calls[0][${index}]).toBe(${oneArgument});\n`;
  })
}

module.exports = {
  generateEventUnitCase,
};
