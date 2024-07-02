/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button/index';

export interface TdFabProps {
  /**
   * 透传至 Button 组件
   */
  buttonProps?: {
    type: ObjectConstructor;
    value?: ButtonProps;
  };
  /**
   * `true` / `'all'`可拖动<br>`'vertical'`可垂直拖动<br>`'horizontal'`可水平拖动<br>`false`禁止拖动
   * @default false
   */
  draggable?: {
    type: null;
    value?: string | boolean;
  };
  /**
   * 图标
   * @default ''
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 悬浮按钮的样式，常用于调整位置（即将废弃，建议使用 `style`）
   * @default right: 16px; bottom: 32px;
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 文本内容
   * @default ''
   */
  text?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
