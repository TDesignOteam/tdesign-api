const { getMountCode } = require("./utils");
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
  if (['VueNext(PC)', 'Vue(PC)'].includes(framework)) {
    return generateVueEventCase(test, oneApiData, framework, component);
  }
  if (['React(PC)'].includes(framework)) {
    return generateReactEventCase(test, oneApiData, component);
  }
}

function generateVueEventCase(test, oneApiData, framework, component) {
  const { event } = test;
  // click/blur/...
  const eventKeys = Object.keys(event);
  const firstEvent = eventKeys[0];
  // Vue2 和 Vue3 事件绑定方式不同
  const attachEventToDom = framework === 'Vue(PC)'
    ? `on={{ '${kebabCase(firstEvent)}': fn }}`
    : `on${getEventName(firstEvent)}={fn}`;
  const arr = [
    `it('${component} Event: ${firstEvent}', async () => {
      const fn = vi.fn();
      const wrapper = ${getMountCode(framework, `<${component} ${attachEventToDom}></${component}>`)};
      wrapper.findComponent(${component}).trigger('${firstEvent}');
      await wrapper.vm.$nextTick();
      expect(fn).toHaveBeenCalled();
      ${getEventArguments(event[firstEvent].arguments)}
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

function generateReactEventCase(test, oneApiData, component) {
  const { event } = test;
  // click/blur/...
  const eventKeys = Object.keys(event);
  const firstEvent = eventKeys[0];
  const arr = [
    `it('${component} Event: ${firstEvent}', () => {
      const fn = vi.fn();
      const { container } = render(${`<${component} on${getEventName(firstEvent)}={fn}></${component}>`});
      fireEvent.${firstEvent}(container.firstChild);
      expect(fn).toHaveBeenCalled();
      ${getEventArguments(event[firstEvent].arguments)}
    });`,
  ];
  return arr.filter(v => v);
}

module.exports = {
  generateEventUnitCase,
};
