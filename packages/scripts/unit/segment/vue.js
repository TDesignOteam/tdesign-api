/**
 * Vue unit test, see: https://test-utils.vuejs.org/migration/
 */

const { kebabCaseComponent } = require('../../utils');

const {
  getUnitTestDescription,
} = require('../utils');

/**
 * Test 文件头部与依赖引入部分
 */
function getTestImportSegment(componentName) {
  return `/* eslint-disable */
 
/**
* 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
* */
import { mount } from '@vue/test-utils';
import ${componentName} from '../../../src/${kebabCaseComponent(componentName)}';
import { h } from 'vue';
 `;
};

/**
 * TNode类型单测
 */
function getTNodeSegment(
  componentName,
  componentInfo = {},
) {
  const {
    field_name: fieldName,
  } = componentInfo;
  return `
    it('${getUnitTestDescription(componentInfo, 'TNodeSegment', 'function')}', () => {
      const fn = jest.fn();
      const wrapper = mount(${componentName}, {
        props: {
          ${fieldName}: () => h('div', 'text')
        },
      });
      expect(wrapper.wrapperElement).toMatchSnapshot();
    });
    it('${getUnitTestDescription(componentInfo, 'TNodeSegment', 'string')}', () => {
      const fn = jest.fn();
      const wrapper = mount(${componentName}, {
        props: {
          ${fieldName}: 'text'
        },
      });
      expect(wrapper.wrapperElement).toMatchSnapshot();
    });`;
}

/**
 * 禁用单测
 */
function getDisabledSegment(
  componentName,
  componentInfo = {},
) {
  return `
    it('${getUnitTestDescription(componentInfo, 'disabledSegment', 'onClick')}', () => {
      const fn = jest.fn();
      const wrapper = mount(${componentName}, {
        props: {
          disabled: true,
          onClick: fn,
        },
      });
      wrapper.trigger('click');
      expect(fn).not.toHaveBeenCalled();
      expect(wrapper.wrapperElement).toMatchSnapshot();
    });`;
}

/**
 * 其余单测
 */
function getDefaultSegment(
  componentName,
  componentInfo = {},
  propsObj,
) {
  const {
    field_name: fieldName,
  } = componentInfo;

  return `
    it('${getUnitTestDescription(componentInfo, 'defaultSegment', propsObj[fieldName])}', () => {
      const wrapper = mount(${componentName}, {
        props: ${JSON.stringify(propsObj)},
      });
      expect(wrapper.wrapperElement).toMatchSnapshot();
    });`;
}

module.exports = {
  getTestImportSegment,
  getTNodeSegment,
  getDisabledSegment,
  getDefaultSegment,
};
