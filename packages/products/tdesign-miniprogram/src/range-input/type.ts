/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { InputProps, InputValue, InputFormatType } from '../input/index';

export interface TdRangeInputProps {
  /**
   * 输入框高亮状态序号
   */
  activeIndex?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否可清空
   * @default false
   */
  clearable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用范围输入框
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 指定输入框展示值的格式
   */
  format?: {
    type: ArrayConstructor;
    value?: InputFormatType | Array<InputFormatType>;
  };
  /**
   * 透传 Input 输入框组件全部属性，数组第一项表示第一个输入框属性，第二项表示第二个输入框属性。示例：`[{ label: 'A', name: 'A-name' }, { label: 'B',  name: 'B-name' }]`
   */
  inputProps?: {
    type: null;
    value?: InputProps | Array<InputProps>;
  };
  /**
   * 左侧内容
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 占位符，示例：'请输入' 或者 ['开始日期', '结束日期']
   */
  placeholder?: {
    type: null;
    value?: string | Array<string>;
  };
  /**
   * 范围分隔符
   * @default '-'
   */
  separator?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 输入框状态
   * @default default
   */
  status?: {
    type: StringConstructor;
    value?: 'default' | 'success' | 'warning' | 'error';
  };
  /**
   * 后置图标前的后置内容
   */
  suffix?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 范围输入框的值
   * @default []
   */
  value?: {
    type: ArrayConstructor;
    value?: RangeInputValue;
  };
  /**
   * 范围输入框的值，非受控属性
   * @default []
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: RangeInputValue;
  };
}

export interface TdRangeInputPopupProps {
  /**
   * 输入框状态
   * @default default
   */
  status?: {
    type: StringConstructor;
    value?: 'default' | 'success' | 'warning' | 'error';
  };
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: {
    type: StringConstructor;
    value?: string;
  };
}

export type RangeInputValue = Array<InputValue>;
