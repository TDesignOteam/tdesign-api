/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { PopupProps } from '../popup';
import { RangeInputProps } from '../range-input';
import { TimePickerProps } from '../time-picker';
import { Dayjs } from 'dayjs';
import { TNode, TElement, SizeEnum } from '../common';
import { MouseEvent, FocusEvent, FormEvent } from 'react';

export interface TdDateRangePickerProps {
  /**
   * 是否允许输入日期
   * @default false
   */
  allowInput?: boolean;
  /**
   * 是否显示清除按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * 时间选择器默认值，当 value/defaultValue 未设置值时有效
   * @default ["00:00:00", "23:59:59"]
   */
  defaultTime?: string[];
  /**
   * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
   */
  disableDate?: DisableRangeDate;
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 是否显示时间选择
   * @default false
   */
  enableTimePicker?: boolean;
  /**
   * 第一天从星期几开始
   */
  firstDayOfWeek?: number;
  /**
   * 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format)
   * @default ''
   */
  format?: string;
  /**
   * 选择器模式
   * @default date
   */
  mode?: 'year' | 'quarter' | 'month' | 'week' | 'date';
  /**
   * 在开始日期选中之前，面板是否显示预选状态，即是否高亮预选日期
   * @default true
   */
  panelPreselection?: boolean;
  /**
   * 占位符，值为数组表示可分别为开始日期和结束日期设置占位符
   */
  placeholder?: string | Array<string>;
  /**
   * 透传给 popup 组件的参数
   */
  popupProps?: PopupProps;
  /**
   * 组件前置图标
   */
  prefixIcon?: TElement;
  /**
   * 预设快捷日期选择，示例：{ '特定日期范围': ['2021-01-01', '2022-01-01'], '本月': [dayjs().startOf('month'), dayjs().endOf('month')] }
   */
  presets?: PresetRange;
  /**
   * 预设面板展示区域（包含确定按钮）
   * @default bottom
   */
  presetsPlacement?: 'left' | 'top' | 'right' | 'bottom';
  /**
   * 透传给范围输入框 RangeInput 组件的参数
   */
  rangeInputProps?: RangeInputProps;
  /**
   * 日期分隔符，支持全局配置，默认为 '-'
   * @default ''
   */
  separator?: string;
  /**
   * 输入框尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 输入框状态
   * @default default
   */
  status?: 'default' | 'success' | 'warning' | 'error';
  /**
   * 组件后置图标
   */
  suffixIcon?: TElement;
  /**
   * 透传 TimePicker 组件属性
   */
  timePickerProps?: TimePickerProps;
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: TNode;
  /**
   * 选中值
   * @default []
   */
  value?: DateRangeValue;
  /**
   * 选中值，非受控属性
   * @default []
   */
  defaultValue?: DateRangeValue;
  /**
   * 用于格式化日期的值，仅支持部分格式，时间戳、日期等。⚠️ `YYYYMMDD` 这种格式不支持，请勿使用，如果希望支持可以给 `dayjs` 提个 PR。注意和 `format` 的区别，`format` 仅用于处理日期在页面中呈现的格式
   */
  valueType?:
    | 'time-stamp'
    | 'Date'
    | 'YYYY'
    | 'YYYY-MM'
    | 'YYYY-MM-DD'
    | 'YYYY-MM-DD HH'
    | 'YYYY-MM-DD HH:mm'
    | 'YYYY-MM-DD HH:mm:ss'
    | 'YYYY-MM-DD HH:mm:ss:SSS';
  /**
   * 当输入框失去焦点时触发
   */
  onBlur?: (context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: DateRangeValue, context: { dayjsValue?: Dayjs[]; trigger?: DatePickerTriggerSource }) => void;
  /**
   * 如果存在“确认”按钮，则点击“确认”按钮时触发
   */
  onConfirm?: (context: { date: Date[]; e: MouseEvent<HTMLDivElement>; partial: DateRangePickerPartial }) => void;
  /**
   * 输入框获得焦点时触发
   */
  onFocus?: (context: {
    value: DateRangeValue;
    partial: DateRangePickerPartial;
    e: FocusEvent<HTMLDivElement>;
  }) => void;
  /**
   * 输入框数据发生变化时触发，参数 input 表示输入内容，value 表示组件当前有效值
   */
  onInput?: (context: {
    input: string;
    value: DateRangeValue;
    partial: DateRangePickerPartial;
    e: FormEvent<HTMLInputElement>;
  }) => void;
  /**
   * 选中日期时触发，可能是开始日期，也可能是结束日期，第二个参数可以区分是开始日期或是结束日期
   */
  onPick?: (value: DateValue, context: PickContext) => void;
  /**
   * 点击预设按钮后触发
   */
  onPresetClick?: (context: { preset: PresetDate; e: MouseEvent<HTMLDivElement> }) => void;
}

export type DisableRangeDate =
  | Array<DateValue>
  | DisableDateObj
  | ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean);

export interface DisableDateObj {
  from?: string;
  to?: string;
  before?: string;
  after?: string;
}

export type DateRangePickerPartial = 'start' | 'end';

export interface PresetRange {
  [range: string]: DateRange | (() => DateRange);
}

export type DateRange = [DateValue, DateValue];

export type DateRangeValue = Array<DateValue>;

export interface PickContext {
  e: MouseEvent<HTMLDivElement>;
  partial: DateRangePickerPartial;
}
