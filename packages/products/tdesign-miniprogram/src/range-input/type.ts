/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { InputProps, InputValue, InputFormatType } from '../input/index';

export interface TdRangeInputProps {
  /**
   * 输入框高亮状态序号
   * @default 0
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
   * 是否禁用范围输入框，值为数组表示可分别控制某一个输入框是否禁用
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: boolean | Array<boolean>;
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
    type: ObjectConstructor;
    optionalTypes: Array<ArrayConstructor>;
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
    type: StringConstructor;
    optionalTypes: Array<ArrayConstructor>;
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
   */
  status?: {
    type: StringConstructor;
    value?: 'success' | 'warning' | 'error';
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
   */
  value?: {
    type: ArrayConstructor;
    value?: RangeInputValue;
  };
  /**
   * 范围输入框的值，非受控属性
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: RangeInputValue;
  };
}

export type RangeInputValue = Array<InputValue>;
