/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { InputProps, InputValue, InputFormatType } from '../input';
import { PopupProps } from '../popup';
import { RangeInputProps } from '../range-input';
import { PopupVisibleChangeContext } from '../popup';
import { TNode, TElement } from '../common';
import { MouseEvent, FocusEvent, FormEvent, CompositionEvent } from 'react';

export interface TdRangeInputProps {
  /**
   * 输入框高亮状态序号
   */
  activeIndex?: number;
  /**
   * 无边框模式
   * @default false
   */
  borderless?: boolean;
  /**
   * 是否可清空
   * @default false
   */
  clearable?: boolean;
  /**
   * 是否禁用范围输入框
   */
  disabled?: boolean;
  /**
   * 指定输入框展示值的格式
   */
  format?: InputFormatType | Array<InputFormatType>;
  /**
   * 透传 Input 输入框组件全部属性，数组第一项表示第一个输入框属性，第二项表示第二个输入框属性。示例：`[{ label: 'A', name: 'A-name' }, { label: 'B',  name: 'B-name' }]`
   */
  inputProps?: InputProps | Array<InputProps>;
  /**
   * 左侧内容
   */
  label?: TNode;
  /**
   * 占位符，示例：'请输入' 或者 ['开始日期', '结束日期']
   */
  placeholder?: string | Array<string>;
  /**
   * 组件前置图标
   */
  prefixIcon?: TElement;
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * 范围分隔符
   * @default '-'
   */
  separator?: TNode;
  /**
   * 输入框内容为空时，悬浮状态是否显示清空按钮，默认不显示
   * @default false
   */
  showClearIconOnEmpty?: boolean;
  /**
   * 输入框尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 输入框状态
   * @default default
   */
  status?: 'default' | 'success' | 'warning' | 'error';
  /**
   * 后置图标前的后置内容
   */
  suffix?: TNode;
  /**
   * 组件后置图标
   */
  suffixIcon?: TElement;
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: TNode;
  /**
   * 范围输入框的值
   * @default []
   */
  value?: RangeInputValue;
  /**
   * 范围输入框的值，非受控属性
   * @default []
   */
  defaultValue?: RangeInputValue;
  /**
   * 范围输入框失去焦点时触发
   */
  onBlur?: (
    value: RangeInputValue,
    context?: { e?: FocusEvent<HTMLInputElement>; position?: RangeInputPosition },
  ) => void;
  /**
   * 范围输入框值发生变化时触发
   */
  onChange?: (
    value: RangeInputValue,
    context?: {
      e?: FormEvent<HTMLInputElement> | MouseEvent<HTMLElement | SVGElement> | CompositionEvent<HTMLDivElement>;
      position?: RangeInputPosition;
      trigger?: 'input' | 'initial' | 'clear';
    },
  ) => void;
  /**
   * 清空按钮点击时触发
   */
  onClear?: (context: { e: MouseEvent<SVGElement> }) => void;
  /**
   * 范围输入框点击时触发
   */
  onClick?: (context?: { e?: MouseEvent<HTMLDivElement>; position?: RangeInputPosition }) => void;
  /**
   * 回车键按下时触发
   */
  onEnter?: (
    value: RangeInputValue,
    context?: { e?: FormEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>; position?: RangeInputPosition },
  ) => void;
  /**
   * 范围输入框获得焦点时触发
   */
  onFocus?: (
    value: RangeInputValue,
    context?: { e?: FocusEvent<HTMLInputElement>; position?: RangeInputPosition },
  ) => void;
  /**
   * 进入输入框时触发
   */
  onMouseenter?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 离开输入框时触发
   */
  onMouseleave?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
}

/** 组件实例方法 */
export interface RangeInputInstanceFunctions {
  /**
   * 使其中一个输入框失去焦点
   */
  blur?: (options?: { position?: RangeInputPosition }) => void;
  /**
   * 使其中一个输入框获得焦点
   */
  focus?: (options?: { position?: RangeInputPosition }) => void;
  /**
   * 使其中一个输入框选中内容
   */
  select?: (options?: { position?: RangeInputPosition }) => void;
}

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
  label?: TNode;
  /**
   * 下拉框内容，可完全自定义
   */
  panel?: TNode;
  /**
   * 透传 Popup 组件全部属性
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
  tips?: TNode;
  /**
   * 输入框值发生变化时触发，`context.trigger` 表示触发输入框值变化的来源：文本输入触发、清除按钮触发等
   */
  onInputChange?: (value: RangeInputValue, context?: RangeInputValueChangeContext) => void;
  /**
   * 下拉框显示或隐藏时触发
   */
  onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
}

export type RangeInputValue = Array<InputValue>;

export type RangeInputPosition = 'first' | 'second' | 'all';

export type RangeInputValueChangeContext = {
  e?: FormEvent<HTMLInputElement> | MouseEvent<HTMLElement | SVGElement>;
  trigger?: 'input' | 'clear';
  position?: RangeInputPosition;
};
