const chalk = require('chalk');

function getItDescription(oneApiData) {
  return `'props.${oneApiData.field_name} works fine'`;
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
  let mountComponent = '';
  if (wrapper) {
    mountComponent = props && Object.keys(props).length
      ? `${wrapper}(${component}, ${getPropsObjectString(props)})`
      : `${wrapper}(${component})`;
    return mountComponent;
  } else {
    const events = props.events;
    delete props.events;
    const properties = props
      ? Object.keys(props).map((key) => {
        const value = typeof props[key] === 'object' ? JSON.stringify(props[key]) : props[key];
        return `${key}={${value}}`;
      }).join(' ')
      : '';
    mountComponent = `<${component} ${properties} ${events || ''}>${content || ''}</${component}>`;
  }
  return getFullMountCode(framework, mountComponent);
}

function getPropsObjectString(props) {
  const entries = Object.entries(props);
  if (!entries.length) return {};
  const list = entries.map(([name, value]) => `${name}: ${value}`);
  return `{ ${list.join(', ')} }`;
}

/**
 * 获取快照代码
 * @param {Boolean} snapshot 是否输出快照
 * @param {String} framework 框架名
 * @param {String} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 * @returns 快照代码
 */
function getSnapshotCase(snapshot, framework, wrapperIndex = '') {
  if (!snapshot) return;
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
 * @param {*} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 * @returns 
 */
function getWrapper(framework, mountCode, wrapperIndex = '') {
  if (framework.indexOf('Vue') !== -1) {
    return `const wrapper${wrapperIndex} = ${mountCode};`;
  }
  if (framework.indexOf('React') !== -1) {
    if (wrapperIndex) {
      return `const { container: container${wrapperIndex} } = ${mountCode};`;
    }
    return `const { container } = ${mountCode};`;
  }
}

/**
 * 验证某个 DOM 是否存在
 * @param {String} framework 框架名称
 * @param {String} domSelector DOM Selector
 * @param {String} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 * @returns 
 */
function getDomExpectTruthy(framework, domSelector, wrapperIndex = '') {
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.find(${domSelector}).exists()).toBeTruthy();`;
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}.querySelector(${domSelector})).toBeTruthy()`;
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
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.find(${domSelector}).exists()).toBeFalsy();`;
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}.querySelector(${domSelector})).toBeFalsy()`;
  }
}

/**
 * 验证某个 DOM 存在的数量
 * @param {String} framework 框架名称
 * @param {Array<Object>} domAndCount { domSelector: number }，示例：{ ".t-table__row--fixed-top": 3}
 * @param {String} wrapperIndex 可选值：'1'/'2'/'3'/'4'/... 同一个函数中，避免重复变量名，给变量名添加下标字符串，如：wrapper1, container2
 * @returns 
 */
 function getDomCountExpectCode(framework, domAndCount, wrapperIndex = '') {
  if (framework.indexOf('Vue') !== -1) {
    return Object.entries(domAndCount).map(([className, countOrIndex]) => {
      if (!isNaN(countOrIndex)) {
        return `expect(wrapper${wrapperIndex}.findAll('${className}').length).toBe(${countOrIndex});`;
      }
    }).join('\n');
  }
  if (framework.indexOf('React') !== -1) {
    return Object.entries(domAndCount).map(([className, countOrIndex]) => {
      if (!isNaN(countOrIndex)) {
        return `expect(container${wrapperIndex}.querySelectorAll('${className}').length).toBe(${countOrIndex});`;
      }
    }).join('\n');
  }
}

function getClassNameExpectTruthy(framework, className, wrapperIndex = '') {
  if (framework.indexOf('Vue') !== -1) {
    return `expect(wrapper${wrapperIndex}.classes(${className})).toBeTruthy();`;
  }
  if (framework.indexOf('React') !== -1) {
    return `expect(container${wrapperIndex}.firstChild).toHaveClass(${className});`;
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

function getArrayCode(arr) {
  return `[${arr.map(val => typeof val === 'string' ? `'${val}'` : JSON.stringify(val)).join(', ')}]`;
}

function parseJSON(json, error = '') {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.log(chalk.red(error || `${json} is not a JSON.`));
    return {};
  }
}

module.exports = {
  getItDescription,
  getWrapper,
  getMountComponent,
  getSnapshotCase,
  getArrayCode,
  parseJSON,
  getDomExpectTruthy,
  getDomExpectFalsy,
  getClassNameExpectTruthy,
  getClassNameExpectFalsy,
  getDomCountExpectCode,
};
