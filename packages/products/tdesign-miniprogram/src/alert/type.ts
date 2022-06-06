/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdAlertProps {
  /**
   * 关闭按钮。值为 true 则显示默认关闭按钮；值为 false 则不显示按钮；值类型为 string 则直接显示；值类型为 Function 则可以自定关闭按钮
   * @default false
   */
  close?: {
    type: StringConstructor;
    optionalTypes: Array<BooleanConstructor>;
    value?: string | boolean;
  };
  /**
   * 内容显示最大行数，超出的内容会折叠收起，用户点击后再展开。值为 0 表示不折叠
   * @default 0
   */
  maxLine?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 内容（子元素）
   */
  message?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件风格
   * @default info
   */
  theme?: {
    type: StringConstructor;
    value?: 'success' | 'info' | 'warning' | 'error';
  };
  /**
   * 标题
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
}
