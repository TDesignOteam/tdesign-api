/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { PopupProps } from '../popup';
import { RangeInputProps } from '../range-input';
import { PopupVisibleChangeContext } from '../popup';
import { TNode } from '../common';

export interface TdRangeInputPopupProps {
  /**
   * 宽度随内容自适应
   * @default false
   */
  autoWidth?: boolean;
  /**
   * 是否禁用范围输入框，值为数组表示可分别控制某一个输入框是否禁用
   */
  disabled?: boolean;
  /**
   * 输入框的值
   */
  inputValue?: RangeInputValue;
  /**
   * 输入框的值，非受控属性
   */
  defaultInputValue?: RangeInputValue;
  /**
   * 左侧文本
   */
  label?: string | TNode;
  /**
   * 下拉框内容，可完全自定义
   */
  panel?: string | TNode;
  /**
   * 透传 Popup 浮层组件全部属性
   */
  popupProps?: PopupProps;
  /**
   * 是否显示下拉框
   */
  popupVisible?: boolean;
  /**
   * 透传 RangeInput 组件全部属性
   */
  rangeInputProps?: RangeInputProps;
  /**
   * 只读状态，值为真会隐藏输入框，且无法打开下拉框
   */
  readonly?: boolean;
  /**
   * 输入框状态
   * @default default
   */
  status?: 'default' | 'success' | 'warning' | 'error';
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: string | TNode;
  /**
   * 输入框值发生变化时触发，`context.trigger` 表示触发输入框值变化的来源：文本输入触发、清除按钮触发等
   */
  onInputChange?: (value: RangeInputValue, context?: RangeInputValueChangeContext) => void;
  /**
   * 下拉框显示或隐藏时触发
   */
  onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
}

export type RangeInputValueChangeContext = {
  e?: InputEvent | MouseEvent;
  trigger?: 'input' | 'clear';
  position?: RangeInputPosition;
};
