/**
 * 人机交互测试
 * React fireEvent: // fireEvent https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js
 */

const { getWrapper, getMountComponent, getDomExpectTruthy, getItDescription } = require("./utils");
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');
const kebabCase = require('lodash/kebabCase');

function getEventName(eventName) {
  return `on${upperFirst(camelCase(eventName))}`;
}

function getEventNameByFramework(eventName, framework) {
  if (framework === 'Vue(PC)') {
    return `'${kebabCase(eventName)}'`;
  }
  return getEventName(eventName);
}

/**
 * "event": "click"
 */
function generateEventUnitCase(test, oneApiData, framework, component) {
  const arr = generateVueAndReactEventCase(test, oneApiData, framework, component);
  return arr?.filter(v => v);
}

function generateVueAndReactEventCase(test, oneApiData, framework, component) {
  const { event, content, wrapper } = test;
  const extraCode = { content, wrapper };
  // click/blur/mouseEnter/...
  if (typeof event === 'object' && !Array.isArray(event)) {
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
        `expect(fn).toHaveBeenCalled();`,
        `${getEventArguments(event[firstEvent].arguments)}
      });`,
    ];
    return arr;
  } else if (Array.isArray(event)) {
    let arr = [];
    event.forEach((oneEventUnitCase) => {
      const { props, expect, description } = oneEventUnitCase;
      const codeProps = {
        ...(props || {}),
        events: getEventFunctions(expect, framework),
      };
      if (oneApiData.field_type_text[0] === 'Boolean' && !codeProps[oneApiData.field_name]) {
        codeProps[oneApiData.field_name] = true;
      }
      const mountCode = getMountComponent(framework, component, codeProps, extraCode);
      const async = framework.indexOf('Vue') !== -1 ? 'async' : '';
      const itDescription = description ? `'props.${oneApiData.field_name}: ${description}'` : getItDescription(oneApiData);
      const oneEventArr = [
        `it(${itDescription}, ${async} () => {`,
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

function getEventFnName(eventName, index) {
  return `${getEventName(eventName)}Fn${index || ''}`;
}

// 事件对应的函数依次为：fn,fn1,fn2,fn3...
function getEventFunctions(expect, framework) {
  const fns = [];
  expect.forEach((item, index) => {
    if (!item.event) return;
    Object.keys(item.event).forEach((eventName) => {
      const formattedEventname = getEventNameByFramework(eventName, framework);
      fns.push(`${formattedEventname}: ${getEventFnName(eventName, index)}`);
    })
  });
  return fns.length ? `{ ${fns.join(', ')} }` : undefined;
}

function getEventsDefinition(expect) {
  return expect.map(({ event }, index) => {
    if (!event) return '';
    return Object.keys(event).map((eventName) => {
      return `const ${getEventFnName(eventName, index)} = vi.fn();`;
    })?.join('\n');
  }).filter(v => v).join('\n');
}

function getEventExpectCode(p, index, framework, component) {
  const { triggerDom, trigger, exist, event } = p;
  const tmpExist = (Array.isArray(exist) || !exist ? exist : [exist]) || [];
  return [
    getFireEventCode(framework, { dom: triggerDom ? triggerDom : 'self', event: trigger, component }),
    tmpExist.map((domSelector) => getDomExpectTruthy(framework, `'${domSelector}'`)).join('\n'),
    event && Object.entries(event).map(([eventName, arguments]) => {
      const fnName = getEventFnName(eventName, index);
      return [
        `expect(${fnName}).toHaveBeenCalled();`,
        getEventArguments(arguments, fnName).join(''),
      ].join('\n');
    }).join('\n'),
  ].join('');
}

function getEventArguments(arguments, fnName = 'fn') {
  return arguments.map((oneArgument, index) => {
    if (typeof oneArgument === 'string') {
      return `expect(${fnName}.mock.calls[0][${index}]).toBe('${oneArgument}');\n`;
    }
    if (typeof oneArgument === 'object' && !Array.isArray(oneArgument)) {
      return Object.keys(oneArgument).map(oneProperty => {
        const value = oneArgument[oneProperty];
        if (value === true) {
          return `expect(${fnName}.mock.calls[0][${index}].${oneProperty}).toBeTruthy();`;
        }
        const expectVal = typeof value === 'string' ? `'${value}'` : value;
        return `expect(${fnName}.mock.calls[0][${index}].${oneProperty}).toBe(${expectVal});`;
      }).join('\n');
    }
    return `expect(${fnName}.mock.calls[0][${index}]).toBe(${oneArgument});\n`;
  })
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

/**
 * 获取事件触发代码，如：trigger('click')
 * @param {*} framework 框架名
 * @param {*} param1
 *  params1.dom 触发事件的元素，dom = self 表示组件自身触发。event 触发事件名。component 仅 Vue 需要
 *  params1.event 事件名称，可选值：https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js
 * @param {*} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 */
function getFireEventCode(framework, { dom, event, component }, wrapperIndex = '') {
  if (framework.indexOf('Vue') !== -1) {
    const eventName = event.toLocaleLowerCase();
    let eventFireCode = '';
    if (dom === 'self') {
      eventFireCode = `wrapper${wrapperIndex}.findComponent(${component}).trigger('${eventName}');`;
    } else {
      eventFireCode = `wrapper${wrapperIndex}.find('${dom}').trigger('${eventName}');`;
    }
    return [eventFireCode, `await wrapper${wrapperIndex}.vm.$nextTick();`].join('\n');
  }
  if (framework.indexOf('React') !== -1) {
    const tmpDom = dom === 'self'
      ? `container${wrapperIndex}.firstChild`
      : `container.querySelector('${dom}')`;
    return `fireEvent.${event}(${tmpDom});`;
  }
}

module.exports = {
  generateEventUnitCase,
};
