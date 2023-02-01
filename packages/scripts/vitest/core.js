const camelCase = require('lodash/camelCase');
const kebabCase = require('lodash/kebabCase');
const upperFirst = require('lodash/upperFirst');
const { UNIT_TEST_EVENTS_MAP } = require('./const/events-map');
const { reactNeedMockDelayEvents } = require('./const/react-need-mock-delay');

// 直接从 DOM 获取的属性，不需要通过 getAttribute
const ATTRIBUTES_DIRECT = ['value', 'checked'];
const ATTRIBUTES_STYLE = 'style';

const SIMULATE_FUNCTIONS = [
  'simulateInputChange',
  'simulateInputEnter',
  'simulateKeydownEvent',
  'simulateImageEvent',
  'simulateFileChange',
  'simulateDragFileChange',
];

// 获取变量的函数
const GET_VAR_FUNCTIONS = ['getFakeFileList'];

function getItDescription(oneApiData) {
  const type = oneApiData.field_category_text.toLocaleLowerCase();
  return `'${type}.${oneApiData.field_name} works fine'`;
}

function getFullMountCode(framework, componentCode) {
  if (framework === 'Vue(PC)') {
    return [
      `mount({
        render() {
          return (
            ${componentCode}
          );
        }
      })`
    ];
  }
  if (['VueNext(PC)', 'Vue(Mobile)'].includes(framework)) {
    return componentCode.length > 100 ? `mount(\n${componentCode}\n)` : `mount(${componentCode})`;
  }
  if (['React(PC)', 'React(Mobile)'].includes(framework)) {
    return componentCode.length > 100 ? `render(\n${componentCode}\n)` : `render(${componentCode})`;
  }
}

function filterObject(obj) {
  Object.keys(obj).forEach((key) => {
    if (key === undefined) {
      delete obj[key];
    }
  });
}

/**
 * 获取测试组件实例
 * @param {String} framework 框架名称
 * @param {String} component 组件名称
 * @param {Object} props API 属性和对应的值，如：{ disabled: true }。注意：props.events 表示绑定的事件
 * @param {Object} extra 在 API 系统中录入的内容
 *  extra.content 子节点内容，如：{ content: '' }；有的组件存在子节点（如 Button），有的组件不需要子节点（如 Divider）。
 *  extra.wrapper 获取组件实例的方法，复杂组件需要预设测试实例，以便不同的测试用例复用，如：{ wrapper: 'getNormalTableMount' }；
 */
function getMountComponent(framework, component, props, extra = {}) {
  const { content, wrapper } = extra;
  filterObject(props);
  const events = props.events;
  delete props.events;
  let mountComponent = '';
  if (wrapper) {
    const params = [component, getPropsObjectString(props, events), events].filter(v => v).join(', ');
    return `${wrapper}(${params})`;
  } else {
    const properties = props
      ? Object.keys(props).map((key) => {
        const value = typeof props[key] === 'object' ? JSON.stringify(props[key]) : props[key];
        const valueCode = getPropsValue(value);
        return `${key}=${/^'.+'$/.test(valueCode) ? valueCode : `{${valueCode}}`}`;
      }).join(' ')
      : '';
    const eventsCode = events && !events.includes('on=') && framework === 'Vue(PC)' ? `on={${events}}` : events;
    mountComponent = `<${component} ${properties} ${eventsCode || ''}>${content || ''}</${component}>`;
  }
  return getFullMountCode(framework, mountComponent);
}

// 事件对应的函数依次为：fn,fn1,fn2,fn3...
function getEventFunctions(expect, framework, extraCode) {
  const { wrapper } = extraCode;
  const needPropsEvent = !wrapper && framework !== 'Vue(PC)';
  const fns = [];
  expect.forEach((item, index) => {
    if (!item.event) return;
    Object.keys(item.event).forEach((eventName) => {
      const [fEvent] = eventName.split('.');
      const formattedEventname = getEventNameByFramework(fEvent, framework);
      if (needPropsEvent) {
        fns.push(`${formattedEventname}={${getEventFnName(fEvent, index)}}`);
      } else {
        fns.push(`${formattedEventname}: ${getEventFnName(fEvent, index)}`);
      }
    })
  });

  if (needPropsEvent) {
    return fns.join(' ');
  }
  return fns.length ? `{ ${fns.join(', ')} }` : undefined;
}

function getEventNameByFramework(eventName, framework) {
  if (framework === 'Vue(PC)') {
    return `'${kebabCase(eventName)}'`;
  }
  return getEventName(eventName);
}

function getEventFnName(eventName, index) {
  return `${getEventName(eventName)}Fn${index || ''}`;
}

function getEventName(eventName) {
  return `on${upperFirst(camelCase(eventName))}`;
}

function getPropsObjectString(props, events) {
  if (!props || !Object.keys(props).length) {
    return events ? '{}' : '';
  }
  const entries = Object.entries(props);
  if (!entries.length) return {};
  const list = entries.map(([name, value]) => {
    return `'${name}': ${getPropsValue(value)}`;
  });
  return `{ ${list.join(', ')} }`;
}

function getPropsValue(value) {
  // 带多余引号的字符串
  if (/^'.+'$/.test(value)) return value;
  // 测试用例变量（vitest/tests 文件）
  if (/^\$\{.+\}$/.test(value)) return value.slice(2, -1);
  // 测试用例变量（vitest core 内部）
  if (/^\/-.+-\/$/.test(value)) return value.slice(2, -2);
  // 可能是一个函数，或者 TNode
  if (typeof value === 'string' && (
    value.indexOf('=>') !== -1
    || value.indexOf('</') !== -1
    || value.indexOf('/>') !== -1
    || /^\[.+\]$/.test(value)
    || /^\{.+\}$/.test(value)
    )) return value;
  // 对象数组
  if (Array.isArray(value) || !Array.isArray(value) && typeof value) {
    return JSON.stringify(value);
  }
  // 可能是一个对象或数组字符串
  try {
    JSON.parse(value)
    return value;
  } catch(e) {
    if (typeof value === 'string') return `'${value}'`;
    return value;
  }
}

/**
 * 获取快照代码
 * @param {Boolean} snapshot 是否输出快照
 * @param {String} framework 框架名
 * @param {String} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 * @returns 快照代码
 */
function getSnapshotCase(snapshot, framework, wrapperIndex = '', onlyDocumentDom) {
  if (!snapshot) return;
  if (onlyDocumentDom) {
    return `expect(document.body).toMatchSnapshot();`
  }
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.element).toMatchSnapshot();`
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}).toMatchSnapshot();`
  }
}

/**
 * 或者测试实例定义
 * @param {String} framework 框架名称
 * @param {String} mountCode 测试代码实例，如：<Button disabled={true} /> 或者 getNormalTableMount(BaseTable, { bordered: false })
 * @param {String} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2。值为 false 表示不需要变量定义
 * @param {String} goalDom 寻找目标元素的选择器
 * @returns 
 */
function getWrapper(framework, mountCode, goalDom = '', wrapperIndex = '', extraData = {}) {
  const { trigger = '', component, wrapper, onlyDocumentDom } = extraData;
  if (framework.indexOf('Vue') !== -1) {
    const findDomCode = goalDom ? `.find('${goalDom}')` : '';
    const wrapperDefinition = [];
    let tmpMountCode = Array.isArray(mountCode) ? mountCode.join('\n') : mountCode;
    // Vue2 的 trigger focus 需要 createElement 和 attachTo
    if (framework === 'Vue(PC)' && trigger.includes('focus') && !wrapper) {
      wrapperDefinition.push(...[
        '// Vue2 need attachTo to trigger \`focus\` event. https://v1.test-utils.vuejs.org/api/wrapper/#trigger',
        'createElementById()',
      ]);
      tmpMountCode = tmpMountCode.replace(/\)$/, ', { attachTo: \'#focus-dom\' })');
    }
    if (onlyDocumentDom) return `${tmpMountCode}${findDomCode};`;
    wrapperDefinition.push(`const wrapper${wrapperIndex} = ${tmpMountCode}${findDomCode};`);
    trigger && wrapperDefinition.push(getPresetsExpect(trigger, framework, component));
    return wrapperDefinition.join('\n');
  }
  if (framework.indexOf('React') !== -1) {
    if (onlyDocumentDom) return mountCode;
    const triggerCode = trigger && getPresetsExpect(trigger, framework, component);
    return getReactWrapper(mountCode, goalDom, wrapperIndex, { triggerCode });
  }
}

function getReactWrapper(mountCode, goalDom = '', wrapperIndex = '', { triggerCode }) {
  const i = wrapperIndex;
  if (goalDom) {
    return [
      `const wrapper${i} = ${mountCode};`,
      triggerCode,
      `const container${i} = wrapper${i}.container.querySelector('${goalDom}');`
    ].filter(v => v).join('\n');
  }
  return [
    wrapperIndex
      ? `const { container: container${wrapperIndex} } = ${mountCode};`
      : `const { container } = ${mountCode};`,
    triggerCode,
  ].filter(v => v).join('\n');
}

function getVariableBySelector(selector) {
  return camelCase(selector.replace(/(\.|#|)/g, ''));
}

function getDocumentDomExpectTruthy(domSelector, framework, wrapperIndex = '') {
  const selector = domSelector.replace('document', '');
  const domVariable = `${getVariableBySelector(selector)}Dom${wrapperIndex}`;
  // Vue2 元素可能不存在，需要判空
  const emptyJudgement = framework === 'Vue(PC)' ? '?' : '';
  const isVue = framework.indexOf('Vue') !== -1;
  return [
    `const ${domVariable} = document.querySelector(${selector});`,
    `expect(${domVariable}).toBeTruthy();`,
    isVue ? '// remove node in document to avoid influencing following test cases' : '',
    isVue ? `${domVariable}${emptyJudgement}.remove();` : '',
  ].filter(v => v).join('\n');
}

/**
 * 验证某个 DOM 是否存在
 * @param {String} framework 框架名称
 * @param {String} domSelector DOM Selector
 * @param {String} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 * @returns 
 */
function getDomExpectTruthy(framework, domSelector, wrapperIndex = '') {
  if (!domSelector) return;
  // 在整个文档范围内查询节点（此时的元素不在组件内部），此时测试用例没有框架差异 `'document.class-name'`
  if (domSelector.indexOf('document') !== -1) {
    return getDocumentDomExpectTruthy(domSelector, framework, wrapperIndex);
  }
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.find(${domSelector}).exists()).toBeTruthy();`;
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}.querySelector(${domSelector})).toBeTruthy();`;
  }
}

/**
 * 验证某个 DOM 是否不存在
 * @param {String} framework 框架名称
 * @param {String} domSelector DOM Selector
 * @param {String} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 * @returns 
 */
function getDomExpectFalsy(framework, domSelector, wrapperIndex = '') {
  if (!domSelector) return;
  // 在整个文档范围内查询节点（此时的元素不在组件内部），此时测试用例没有框架差异
  if (domSelector.indexOf('document') !== -1) {
    const selector = domSelector.replace('document', '');
    return `expect(document.querySelector(${selector})).toBeNull();`;
  }
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.find(${domSelector}).exists()).toBeFalsy();`;
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}.querySelector(${domSelector})).toBeFalsy()`;
  }
}

function getDocumentDomExpect(domSelector, countOrText, framework) {
  const selector = domSelector.replace('document', '');
  const domVariable = `${getVariableBySelector(selector)}Dom`;
  const isVue = framework.indexOf('Vue') !== -1;
  const isObject = typeof countOrText === 'object' || countOrText == false;
  const querySelector = isObject ? 'querySelector' : 'querySelectorAll';
  return [
    `const ${domVariable} = document.${querySelector}('${selector}')`,
    (() => {
      if (countOrText === false) {
        return `expect(${domVariable}).toBeFalsy()`;
      }
      if (typeof countOrText === 'number') {
        return getDocumentDomExpectCount(domVariable, countOrText);
      }
      if (isObject) {
        return getDocumentDomTextExpect(domVariable, countOrText, framework);
      }
    })(),
    isVue ? '// remove nodes from document to avoid influencing following test cases' : '',
    isVue ? (() => {
      if (isObject) return `${domVariable}.remove();`
      return `${domVariable}.forEach(node => node.remove());`;
    })() : '',
  ].filter(v => v).join('\n');
}

function getDocumentDomExpectCount(domVariable, count) {
  return `expect(${domVariable}.length).toBe(${count});`
}

function getDocumentDomTextExpect(domVariable, textInfo, framework) {
  if (framework.indexOf('Vue') !== -1) {
    return `expect(${domVariable}.textContent).toBe('${textInfo.text}');`
  } else if (framework.indexOf('React') !== -1) {
    return `expect(${domVariable}.textContent).toBe('${textInfo.text}');`
  }
} 

/**
 * 验证某个 DOM 存在的数量
 * @param {String} framework 框架名称
 * @param {Array<Object>} domAndCount { domSelector: number }，示例：{ ".t-table__row--fixed-top": 3}
 * @param {String} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 * @returns 
 */
function getDomCountExpectCode(framework, domAndCount, wrapperIndex = '', eventIndex = '') {
  let clearElement = '';
  const arr = Object.entries(domAndCount).map(([className, countOrIndex]) => {
    // 如果是清空
    if (className === 'clearElementAtEnd') {
      clearElement = countOrIndex;
      return;
    }
    if (typeof countOrIndex === 'object') {
      if (countOrIndex.className) {
        // 已在内部处理 document selector
        return getOneDomClassNameExpectCode(framework, className, countOrIndex, wrapperIndex, eventIndex);
      }
    }
    if (typeof countOrIndex === 'number' || countOrIndex === false) {
      return getOneDomCountExpectCode(framework, className, countOrIndex, wrapperIndex);
    }
    if (typeof countOrIndex === 'object') {
      // textContent
      if (countOrIndex.text) {
        return getOneDomTextExpectCode(framework, className, countOrIndex, wrapperIndex);
      }
      if (countOrIndex.attribute) {
        return getOneDomAttributeExpectCode(framework, className, countOrIndex, wrapperIndex, eventIndex);
      }
    }
  });
  if (clearElement) {
    arr.push(getClearDomInDocumentCode(clearElement, framework));
  }
  return arr.filter(v => v).join('\n');
}

// 支持用例结束时清空多个元素
function getClearDomInDocumentCode(clearElement, framework) {
  if (framework.indexOf('React') !== -1) return;
  const tmpElement = Array.isArray(clearElement) ? clearElement : [clearElement];
  return tmpElement.map((element) => {
    return `document.querySelectorAll('${element}').forEach(node => node.remove());`;
  }).join('\n');
}

function getOneDomCountExpectCode(framework, className, countOrIndex, wrapperIndex) {
  if (isNaN(countOrIndex)) return;
  // 在整个文档范围内查询节点（此时的元素不在组件内部）
  if (className.indexOf('document') !== -1) {
    return getDocumentDomExpect(className, countOrIndex, framework);
  }
  if (framework.indexOf('Vue') !== -1) {
    if (countOrIndex === false) {
      return `expect(wrapper${wrapperIndex}.find('${className}').exists()).toBeFalsy();`;
    } else {
      return `expect(wrapper${wrapperIndex}.findAll('${className}').length).toBe(${countOrIndex});`;
    }
  }
  if (framework.indexOf('React') !== -1) {
    if (countOrIndex === false) {
      return `expect(container${wrapperIndex}.querySelector('${className}')).toBeFalsy();`;
    } else {
      return `expect(container${wrapperIndex}.querySelectorAll('${className}').length).toBe(${countOrIndex});`;
    }
  }
}

function getOneDomTextExpectCode(framework, className, textInfo, wrapperIndex) {
  // 在整个文档范围内查询节点（此时的元素不在组件内部）
  if (className.indexOf('document') !== -1) {
    return getDocumentDomExpect(className, textInfo, framework);
  }
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.find('${className}').text()).toBe('${textInfo.text}');`;
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}.querySelector('${className}').textContent).toBe('${textInfo.text}');`;
  }
}

function getOneDomAttributeExpectCode(framework, className, attrInfo, wrapperIndex, domIndex) {
  const arr = [];
  const isVue = framework.indexOf('Vue') !== -1;
  const isReact = framework.indexOf('React') !== -1;
  const domVariable = `attrDom${wrapperIndex || ''}${domIndex || ''}`;
  const isDocumentNode = className.indexOf('document') !== -1;
  if (isDocumentNode) {
    arr.push(`const ${domVariable} = document.querySelector('${className.replace('document', '')}');`);
  } else {
    if (isVue) {
      arr.push(`const ${domVariable} = wrapper${wrapperIndex}.find('${className}');`);
    } else if (isReact) {
      arr.push(`const ${domVariable} = container${wrapperIndex}.querySelector('${className}');`);
    }
  }
  Object.entries(attrInfo.attribute).forEach(([attributeName, attributeValue]) => {
    if (isVue) {
      arr.push(getVueOneAttributeCode(framework, domVariable, attributeName, attributeValue, { isDocumentNode }));
    } else if (isReact) {
      arr.push(getReactOneAttributeCode(framework, domVariable, attributeName, attributeValue, 'attrDom'));
    }
  });
  return arr.filter(v => v).join('\n');
}

function getOneDomClassNameExpectCode(framework, dom, classNameExpect, wrapperIndex, domIndex) {
  const arr = [];
  classNameExpect.className.forEach((oneClass) => {
    const expect = [{ dom, className: { [oneClass]: true } }];
    arr.push(getDomClassNameExpect(framework, expect, wrapperIndex, domIndex));
  });
  return arr.filter(v => v).join('\n');
}

function getClassNameExpectTruthy(framework, className, wrapperIndex = '', goalDom = '') {
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.classes(${className})).toBeTruthy();`;
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}${goalDom ? '' : '.firstChild'}).toHaveClass(${className});`;
  }
}

function getClassNameExpectFalsy(framework, className, wrapperIndex = '') {
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.classes(${className})).toBeFalsy();`;
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}.querySelector(\`.\${${className}}\`)).toBeFalsy();`;
  }
}

/**
 * 获取属性测试代码（不包含 DOM 查询）
 * @param {*} framework 框架名称
 * @param {*} attributes { attributeName: attributeValue }
 * @param {*} wrapperIndex 
 * @returns 
 */
function getAttributeExpect(framework, attributes, wrapperIndex = '', attributeDom) {
  return Object.entries(attributes).map(([attribute, value]) => {
    return getOneAttributeExpect(framework, attribute, value, wrapperIndex, attributeDom);
  }).join('\n');
}

function getOneAttributeExpect(framework, attribute, value, wrapperIndex, attributeDom) {
  if (framework.indexOf('Vue') !== -1) {
   return getVueOneAttributeCode(framework, `wrapper${wrapperIndex}`, attribute, value);
  }
  if (framework.indexOf('React') !== -1) {
    return getReactOneAttributeCode(framework, `container${wrapperIndex}`, attribute, value, attributeDom)
  }
}

function getVueOneAttributeCode(framework, wrapper, attribute, value, extra = {}) {
  const { isDocumentNode } = extra;
  const expectValueCode = getAttributeValue(attribute, value, framework);
  if (ATTRIBUTES_DIRECT.includes(attribute) || attribute.includes(ATTRIBUTES_STYLE)) {
    return `expect(${wrapper}.element.${getAttributeStr(attribute)}).${expectValueCode};`;
  }
  if (isDocumentNode) {
    return `expect(${wrapper}.getAttribute('${attribute}')).${expectValueCode};`;
  }
  return `expect(${wrapper}.attributes('${attribute}')).${expectValueCode};`;
}

function getReactOneAttributeCode(framework, wrapper, attribute, value, attributeDom) {
  const expectValueCode = getAttributeValue(attribute, value, framework);
  const firstChildCode = attributeDom ? '' : '.firstChild';
  if (ATTRIBUTES_DIRECT.includes(attribute) || attribute.includes(ATTRIBUTES_STYLE)) {
    return `expect(${wrapper}${firstChildCode}.${getAttributeStr(attribute)}).${expectValueCode};`;
  }
  return `expect(${wrapper}${firstChildCode}.getAttribute('${attribute}')).${expectValueCode};`;
}

// style.flex-wrap ===> style['flex-wrap']
function getAttributeStr(attribute) {
  return attribute.split('.')
    .map((item) => item.includes('-') ? camelCase(item) : item)
    .join('.');
}

function getAttributeValue(attribute, attributeValue, framework = '') {
  // 属性不存在时，各框架检测有差异
  if (attributeValue === false) {
    return getAttributeNotExit(framework);
  }
  if (attributeValue === true) {
    return 'toBeTruthy()';
  }
  const isNotToBe = typeof attributeValue === 'string' && attributeValue.includes('not.');
  const value = isNotToBe ? attributeValue.slice(4) : attributeValue;
  const toBeOrNotToBe = isNotToBe ? 'not.' : '';
  // 如果是关键词，直接返回
  if (['toBeUndefined', 'toBeDefined'].includes(value)) {
    // if (value === 'toBeDefined' && attribute === 'autofocus') {
    //   return 'toBeTruthy()';
    // }
    return `${attributeValue}()`;
  }
  const valueCode = /^\/.+\/$/.test(attributeValue) ? attributeValue.slice(1, -1) : `'${attributeValue}'`;
  return `${toBeOrNotToBe}toBe(${valueCode})`;
}

// React 属性不存在时使用 toBeNull 检测；Vue 则使用 toBeUndefined 检测
function getAttributeNotExit(framework) {
  if (framework.indexOf('React') !== -1) {
    return 'toBeNull()';
  }
  if (framework.indexOf('Vue') !== -1) {
    return 'toBeUndefined()';
  }
}

/**
 * 获取属性测试代码（包含 DOM 查询）
 * @param {String} framework 框架名称
 * @param {Array} expectAttributes [{"dom":"tbody > tr","attribute":{"data-level":"level-1"}}]
 */
function getDomAttributeExpect(framework, expectAttributes, component, wrapperIndex = '') {
  let arr = [];
  if (framework.indexOf('Vue') !== -1) {
    expectAttributes.forEach(({ dom, attribute }, index) => {
      const oneExpect = getVueDomAttributeExpect(framework, dom, component, index, attribute, wrapperIndex);
      arr = arr.concat(oneExpect);
    });
  }
  if (framework.indexOf('React') !== -1) {
    expectAttributes.forEach(({ dom, attribute }, index) => {
      const oneExpect = getReactDomAttributeExpect(framework, dom, index, attribute, wrapperIndex);
      arr = arr.concat(oneExpect);
    });
  }
  return arr.join('\n');
}

function getDocumentDomCode(dom, backup) {
  if (dom.indexOf('document') !== -1) {
    const finalDom = ['document', 'body'].includes(dom)
      ? dom
      : dom.replace('document', '').replace('document.body', 'body');
    return `document.querySelector('${finalDom}');`
  }
  return backup;
}

function getVueDomAttributeExpect(framework, dom, component, index, attribute, wrapperIndex) {
  const domFindCode = dom === 'self' || !dom ? `findComponent(${component})` : `find('${dom}')`;
  const oneExpect = [
    `const domWrapper${index || ''} = ${getDocumentDomCode(dom, `wrapper${wrapperIndex}.${domFindCode}`)};`,
    Object.entries(attribute).map(([attributeName, attributeValue]) => {
      return getVueOneAttributeCode(
        framework,
        `domWrapper${index || ''}`,
        attributeName,
        attributeValue,
        { isDocumentNode: dom.indexOf('document') !== -1 },
      );
    }).join('\n'),
  ];
  return oneExpect;
}

function getReactDomAttributeExpect(framework, dom, index, attribute, wrapperIndex) {
  const domFindCode = dom === 'self' || !dom ? 'firstChild' : `querySelector('${dom}')`;
  const oneExpect = [
    `const domWrapper${index || ''} = ${getDocumentDomCode(dom, `container${wrapperIndex}.${domFindCode}`)};`,
    Object.entries(attribute).map(([attributeName, attributeValue]) => {
      return getReactOneAttributeCode(
        framework,
        `domWrapper${index || ''}`,
        attributeName,
        attributeValue,
        dom
      );
    }).join('\n'),
  ];
  return oneExpect;
}

/**
 * 校验类名（支持子元素类名查询和验证）
 * @param {*} framework 框架名称
 * @param {*} expect "expect": [{ "dom": "tbody > tr", "className": { "tdesign-class": true } }]
 * @param {*} wrapperIndex 
 */
function getDomClassNameExpect(framework, expect, wrapperIndex = '', domIndex = '') {
  let arr = [];
  if (framework.indexOf('Vue') !== -1) {
    expect.forEach(({ dom, className }, index) => {
      const domVariable = `domWrapper${domIndex || index || ''}`;
      const isDocument = dom.indexOf('document') !== -1;
      const domNode = isDocument
        ? `const ${domVariable} = document.querySelector('${dom.replace('document', '')}');`
        : `const ${domVariable} = wrapper${wrapperIndex}.find('${dom}');`;
      const oneExpect = [
        domNode,
        Object.entries(className).map(([className, exist]) => {
          const truthyOrFalsy = exist ? 'toBeTruthy' : 'toBeFalsy';
          const classes = isDocument ? `classList.contains('${className}')` : `classes('${className}')`;
          return `expect(${domVariable}.${classes}).${truthyOrFalsy}();`;
        }).join('\n'),
      ];
      arr = arr.concat(oneExpect);
    });
  }
  if (framework.indexOf('React') !== -1) {
    expect.forEach(({ dom, className }, index) => {
      const kidDomVariable = `domWrapper${domIndex || index || ''}`;
      const domNode = dom.indexOf('document') !== -1
        ? `const ${kidDomVariable} = document.querySelector('${dom.replace('document', '')}');`
        : `const ${kidDomVariable} = container${wrapperIndex}.querySelector('${dom}');`
      const oneExpect = [
        domNode,
        Object.entries(className).map(([className, exist]) => {
          if (exist) {
            return `expect(${kidDomVariable}).toHaveClass('${className}');`;
          } else {
            return `expect(${kidDomVariable}.classList.contains('${className}')).toBeFalsy();`;
          }
        }).join('\n'),
      ];
      arr = arr.concat(oneExpect);
    });
  }
  return arr.join('\n');
}

function getArrayCode(arr) {
  return `[${arr.map(val => typeof val === 'string' ? `'${val}'` : JSON.stringify(val)).join(', ')}]`;
}

function getObjectCode(obj) {
  if (!obj) return;
  const arr = [];
  Object.entries(obj).forEach(([key, value]) => {
    const finalKey = key.indexOf('-') !== -1 ? `'${key}'` : key;
    const finalValue = typeof value === 'string' ? `'${value}'` : value;
    arr.push(`${finalKey}: ${finalValue}`);
  });
  return `{ ${arr.join(', ')} }`;
}

/**
 * 分离事件和对应的 DOM
 * 如分离 trigger: 'click(.t-input__suffix-clear)' 为 trigger: 'click' 和 triggerDom: '.t-input__suffix-clear'
 */
function formatToTriggerAndDom(oneExpect) {
  if (!oneExpect.trigger) return {};
  const [trigger] = oneExpect.trigger.split('(');
  const [tmpTriggerDom] = oneExpect.trigger.match(/\(.+\)$/) || [];
  const triggerDom = oneExpect.triggerDom || tmpTriggerDom?.slice(1, -1);
  return { trigger, triggerDom };
}

function getFireEventName(event, framework) {
  if (!event) return {}
  const eventInfo = framework.indexOf('Vue') !== -1 ? event : UNIT_TEST_EVENTS_MAP[event];
  if (!eventInfo) {
    console.warn(`can not recognize Event Name: ${event}. Check Event Name in https://github.com/vuejs/test-utils/blob/main/src/constants/dom-events.ts#L109`);
    return;
  }
  if (typeof eventInfo === 'object') {
    return {
      eventName: eventInfo.event,
      eventModifier: getObjectCode(eventInfo.modifier),
    };
  }
  return { eventName: eventInfo };
}

function makeObjectToString(objectArgs) {
  const arr = ['{'];
  const argsList = Object.entries(objectArgs).map(([key, value]) => {
    let tmpValue = typeof value === 'string' && value !== 'undefined'
      ? `'${value}'`
      : value;
    if (/\$\{.+\}/.test(value)) {
      tmpValue = value.match(/\$\{(.+)\}/)[1];
    }
    if (typeof tmpValue === 'object') {
      tmpValue = makeObjectToString(tmpValue);
    }
    return `'${key}': ${tmpValue}`;
  }).join(',');
  arr.push(argsList);
  arr.push('}');
  return arr.join('');
}

function makeArrayToString(arrayArgs) {
  const arr = ['['];
  const objList = arrayArgs.map((obj) => {
    if (typeof obj === 'object') return makeObjectToString(obj);
    return typeof obj === 'string' ? `'${obj}'` : obj;
  }).join(',');
  arr.push(objList);
  arr.push(']');
  return arr.join('');
}

// Vue 的 input === react 的 change
function handleVueAndReactInputEventDifference(framework, fnName, oneArgument, property) {
  const events = ['onChange', 'onInputChange'];
  return framework.indexOf('React') !== -1
    && (property === '.e.type' || property === '.type')
    && /^'input'$/.test(oneArgument)
    && events.find((changeEvent) => fnName.indexOf(changeEvent) !== -1)
      ? `'change'`
      : oneArgument;
}

// Support RegExp Test
function getOneArgEqual(framework, fnName, index, oneArgument, oneProperty = '', calls = 'calls[0]') {
  // /^\[\d\]\./.test(oneProperty) 表示数组 '[0].lastModified'。不需要数组深度相等的时候需要
  const property = oneProperty
    ? /^\[\d+\]/.test(oneProperty) ? oneProperty : `.${oneProperty}`
    : '';
  // 长度校验；正则校验；其他校验
  if (/length=/.test(oneArgument)) {
    const [_, length] = oneArgument.slice(1, -1).split('=');
    return `expect(${fnName}.mock.${calls}[${index}]${property}.length).toBe(${length});`;
  } else if (isRegExp(oneArgument)) {
    return `expect(${oneArgument}.test(${fnName}.mock.${calls}[${index}]${property})).toBeTruthy();`;
  } else {
    // /\$\{.+\}/.test(oneArgument) 表示这是定义好的一个变量。如：'${fileList}'
    const toEqual = typeof oneArgument === 'object' || /\$\{.+\}/.test(oneArgument) ? 'toEqual' : 'toBe';

    let value = handleVueAndReactInputEventDifference(framework, fnName, oneArgument, property);

    if (typeof value === 'object') {
      value = Array.isArray(value) ? makeArrayToString(value) : makeObjectToString(value);
    }
    // 变量直出
    if (/\$\{.+\}/.test(oneArgument)) {
      value = oneArgument.match(/\$\{(.+)\}/)[1];
    }
    const lastExpectCode = /toBeTruthy/.test(value) ? 'toBeTruthy()' : `${toEqual}(${value})`;
    return `expect(${fnName}.mock.${calls}[${index}]${property}).${lastExpectCode};`;
  }
}

// 事件参数测试
function getEventArguments(framework, args, extra = {}) {
  const { fnName = 'fn', calls = 'calls[0]', tnodeProps = false } = extra;
  if (typeof args === 'string' && args === 'not') {
    return [`expect(${fnName}).not.toHaveBeenCalled();`];
  }
  if (!Array.isArray(args)) return [];
  const arr = args.map((oneArgument, tIndex) => {
    if (oneArgument === undefined || oneArgument === 'skip') return;
    // Vue 的 props tnode 第一个参数是 h，第二个参数开始是实际数据
    const index = tnodeProps && framework.indexOf('Vue') !== -1 ? tIndex + 1 : tIndex;
    if (typeof oneArgument === 'string' && !isRegExp(oneArgument) && oneArgument !== 'undefined') {
      return getOneArgEqual(framework, fnName, index, `'${oneArgument}'`, undefined, calls);
    }
    if (typeof oneArgument === 'object' && !Array.isArray(oneArgument)) {
      return Object.keys(oneArgument).map(oneProperty => {
        const value = oneArgument[oneProperty];
        if (value === true) {
          const expectInfo = `${fnName}.mock.${calls}[${index}].${oneProperty}`;
          return isRegExp(oneArgument)
            ? `expect(${oneArgument}.test(${expectInfo})).toBeTruthy();`
            : `expect(${expectInfo}).toBeTruthy();`;
        }
        const expectVal = typeof value === 'string' && !isRegExp(value) && value !== 'undefined' ? `'${value}'` : value;
        return getOneArgEqual(framework, fnName, index, expectVal, oneProperty, calls);
      }).join('\n');
    }
    
    return getOneArgEqual(framework, fnName, index, oneArgument, undefined, calls);
  });
  arr.unshift(`expect(${fnName}).toHaveBeenCalled();`);
  return arr.filter(v => v);
}

/**
 * 获取事件触发代码，如：trigger('click')
 * @param {*} framework 框架名
 * @param {*} param1
 *  params1.dom 触发事件的元素，dom = self 表示组件自身触发。event 触发事件名。component 仅 Vue 需要
 *  params1.event 事件名称，可选值：@vue/test-utils 的 trigger 函数的参数
 * @param {*} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 */
 function getFireEventCode(framework, { dom, event, delay, component }, wrapperIndex = '', eventIndex = '') {
  let fireEventCode = [];
  if (event !== 'delay') {
    const eventInfo = parseSimulateEvents(event, dom);
    const findDom = /^'.+'$/.test(dom) ? dom.slice(1, -1) : dom;
    if (eventInfo.isSimulateEvent) {
      const simulateEventCode = getSimulateEventCode(framework, { component, eventInfo, wrapperIndex, eventIndex });
      if (simulateEventCode) {
        fireEventCode.push(simulateEventCode);
      }
    } else {
      const fireNormalEventCode = getFireNormalEventCode(framework, { dom: findDom, event, component }, wrapperIndex = '');
      if (fireNormalEventCode) {
        fireEventCode.push(fireNormalEventCode);
      }
    }
  }
  let delayTime = delay && delay !== true || delay === 0 ? delay : '';
  if (framework.indexOf('Vue') !== -1) {
    // 无论什么事件，Vue 都需要 nextTick
    fireEventCode.push(`await wrapper${wrapperIndex}.vm.$nextTick();`);
    if (delayTime || delayTime === 0) {
      fireEventCode.push(`await mockDelay(${delayTime});`);
    }
  } else if (framework.indexOf('React') !== -1) {
    // 如果是 delay， dom 表示时间
    if (getReactNeedMockDelay(event, delay) || event === 'delay') {
      if (event === 'delay' && !isNaN(dom)) {
        delayTime = dom;
      }
      fireEventCode.push(`await mockDelay(${delayTime || ''});`);
    }
  }
  return fireEventCode.join('\n');
}

function getDelayCode(delay, framework, wrapperIndex = '') {
  if (!delay) return '';
  const delayCode = [];
  const hasDelay = delay.includes('delay');
  if (!hasDelay) return '';
  if (framework.indexOf('Vue') !== -1) {
    delayCode.push(`await wrapper${wrapperIndex}.vm.$nextTick();`);
  } else if (framework.indexOf('React') !== -1) {
    const delayTime = delay.match(/\((.+)\)/)?.[1] || '';
    delayCode.push(`await mockDelay(${delayTime});`);
  }
  return delayCode.join('\n');
}

function getFireNormalEventCode(framework, { dom, event, component }, wrapperIndex = '') {
  const { eventName, eventModifier } = getFireEventName(event, framework) || {};
  if (framework.indexOf('Vue') !== -1) {
    let eventFireCode = '';
    if (eventName) {
      if (dom === 'self' || !dom) {
        eventFireCode = `wrapper${wrapperIndex}.findComponent(${component}).trigger('${eventName}');`;
      } else if (dom.indexOf('document') !== -1) {
        const tDom = dom.replace('document', '');
        eventFireCode = `document.querySelector('${tDom}').${eventName}()`;
      } else {
        eventFireCode = `wrapper${wrapperIndex}.find('${dom}').trigger('${eventName}');`;
      }
    }
    return eventFireCode;
  } else if (framework.indexOf('React') !== -1) {
    let tmpDom = dom === 'self' || !dom
      ? `container${wrapperIndex}.firstChild`
      : `container.querySelector('${dom}')`;
    if (dom.indexOf('document') !== -1) {
      const tDom = dom.replace('document', '');
      tmpDom = `document.querySelector('${tDom}')`;
    }
    const params = [tmpDom, eventModifier].filter(v => v).join(', ');
    const eventCode = eventName ? `fireEvent.${eventName}(${params});` : '';
    return eventCode;
  }
}

function getSimulateEventCode(framework, { component, eventInfo, wrapperIndex, eventIndex }) {
  const { simulateEvent, args } = eventInfo;
  const domVariable = `${camelCase(args[0])}Dom${(eventIndex || '')}`;
  const dom = args[0];
  const arr = [];
  if (dom === 'document') {
    return `${simulateEvent}(${args.join(', ')});`;
  }
  if (framework.indexOf('Vue') !== -1) {
    let eventFireCode = '';
    if (dom === 'self' || !dom) {
      eventFireCode = `const ${domVariable} = wrapper${wrapperIndex}.findComponent(${component}).element;`;
    } else if (dom.indexOf('document') !== -1) {
      const tDom = dom.replace('document', '');
      eventFireCode = `const ${domVariable} = document.querySelector(${tDom}).element`;
    } else {
      eventFireCode = `const ${domVariable} = wrapper${wrapperIndex}.find(${dom}).element;`;
    }
    arr.push(eventFireCode);
  } else if (framework.indexOf('React') !== -1) {
    let tmpDom = dom === 'self' || !dom
      ? `container${wrapperIndex}.firstChild`
      : `container.querySelector(${dom})`;
    if (dom.indexOf('document') !== -1) {
      const tDom = dom.replace('document', '');
      tmpDom = `document.querySelector(${tDom})`;
    }
    tmpDom = `const ${domVariable} = ` + tmpDom;
    arr.push(tmpDom);
  }
  arr.push(`${simulateEvent}(${[`${domVariable}`].concat(args.slice(1)).join(', ')});`);
  return arr.join('\n');
}

function parseSimulateEvents(simulateEvent, args) {
  const isSimulateEvent = Boolean(SIMULATE_FUNCTIONS.find((item) => simulateEvent && simulateEvent.indexOf(item) !== -1));
  if (!isSimulateEvent) {
    return { isSimulateEvent };
  }
  return {
    isSimulateEvent,
    simulateEvent,
    args: args.split(',').map(t => t.trim()),
  }
}

// 判断是否需要 mockDelay
function getReactNeedMockDelay(event, delay) {
  if (delay || delay === 0 || delay === '0') return true;
  return reactNeedMockDelayEvents.includes(event);
}

// React 是否需要 async（有 mockDelay 的地方就需要 async）
function getReactFireEventAsync(expect, framework) {
  if (!expect || framework.indexOf('React') === -1) return {};
  const tmpExpect = Array.isArray(expect) ? expect : [expect];
  // const tailList = [];
  let async = false;
  tmpExpect.forEach((p) => {
    const { delay } = p;
    const { trigger } = formatToTriggerAndDom(p);
    if (getReactNeedMockDelay(trigger, delay)) {
      async = true;
    }
  });
  // return tailList.join('\n');
  return { reactAsync: async };
}

// 判断一个字符串是否为正则表达式
function isRegExp(str) {
  return /^\/(.+)\/$/.test(str);
}

// 获取开始单测的前置条件。如：延迟校验、mouseenter 后校验。不同的元素渲染的时机不同，条件不同
function getPresetsExpect(triggerList, framework, component) {
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

function getTriggerList(trigger) {
  if (typeof trigger === 'string') return [{ trigger }];
  if (Array.isArray(trigger)) {
    return trigger.map(t => ({ trigger: t }));
  }
}

function getItAsync(trigger, framework) {
  const { reactAsync } = getReactFireEventAsync(getTriggerList(trigger), framework);
  return framework.indexOf('Vue') !== -1 && trigger || reactAsync || trigger?.includes('delay') ? 'async' : '';
}

function getCategoryDesc(oneApiData, component) {
  if (oneApiData.component === component) return 'props';
  return oneApiData.component;
}

function getVariablesCode(variables) {
  return variables && variables.join('\n');
}

module.exports = {
  SIMULATE_FUNCTIONS,
  GET_VAR_FUNCTIONS,
  getEventName,
  getEventFnName,
  isRegExp,
  getItDescription,
  getWrapper,
  getMountComponent,
  getSnapshotCase,
  getArrayCode,
  getObjectCode,
  formatToTriggerAndDom,
  getDomExpectTruthy,
  getDomExpectFalsy,
  getDomCountExpectCode,
  getClassNameExpectTruthy,
  getClassNameExpectFalsy,
  getAttributeExpect,
  getDomAttributeExpect,
  getDomClassNameExpect,
  getEventArguments,
  getFireEventCode,
  getClearDomInDocumentCode,
  getReactFireEventAsync,
  getEventFunctions,
  getDelayCode,
  getPresetsExpect,
  getItAsync,
  getCategoryDesc,
  getVariablesCode,
};
