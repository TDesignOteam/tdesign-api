/**
 * React unit test
 */
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
import React from 'react';
import { render, fireEvent } from '@test/utils';
import ${componentName} from '../${componentName}';
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
    it('${getUnitTestDescription(componentInfo, 'TNodeSegment', 'component')}', () => {
      const props = {
        ${fieldName}: (<div>text</div>),
      };
      const { asFragment } = render(<${componentName} {...props} />);
      expect(asFragment()).toMatchSnapshot();
    });
    it('${getUnitTestDescription(componentInfo, 'TNodeSegment', 'string')}', () => {
      const props = {
        ${fieldName}: 'text',
      };
      const { asFragment } = render(<${componentName} {...props} />);
      expect(asFragment()).toMatchSnapshot();
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
      const clickFn = jest.fn();
      const { container } = render(<${componentName} disabled onClick={clickFn} />);
      expect(container.firstChild).toBeDisabled();
      fireEvent.click(container.firstChild);
      expect(clickFn).toBeCalledTimes(0);
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
    it('${getUnitTestDescription(componentInfo, 'defaultSegment', propsObj[fieldName])}', async () => {
      const props = ${JSON.stringify(propsObj)};
      const { asFragment } = render(<${componentName} {...props} />);
      expect(asFragment()).toMatchSnapshot();
    });`;
}

module.exports = {
  getTestImportSegment,
  getTNodeSegment,
  getDisabledSegment,
  getDefaultSegment,
};
