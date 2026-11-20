/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdDateTimeRangePickerProps {
  /**
   * 取消按钮文字
   * @default 取消
   */
  cancelBtn?: string;
  /**
   * 确定按钮文字
   * @default ''
   */
  confirmBtn?: string;
  /**
   * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
   */
  disableDate?: DisableRangeDate;
  /**
   * 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format)
   * @default 'YYYY-MM-DD'
   */
  format?: string;
  /**
   * 选择器模式，用于表示可以选择到哪一个层级
   * @default date
   */
  mode?: 'year' | 'month' | 'date' | 'hour' | 'minutes' | 'second';
  /**
   * 是否在日期旁边显示周几（如周一，周二，周日等）
   * @default false
   */
  showWeek?: boolean;
  /**
   * 标题
   * @default ''
   */
  title?: string;
  /**
   * 选中值
   */
  value?: DateRangeValue;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: DateRangeValue;
  /**
   * 是否显示
   * @default false
   */
  visible?: boolean;
  /**
   * 取消按钮点击时触发
   */
  onCancel?: (context: { e: MouseEvent }) => void;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: DateRangeValue) => void;
  /**
   * 每一列选中数据变化时触发
   */
  onColumnChange?: (context: DateRangePickerColumnChangeContext) => void;
  /**
   * 确认按钮点击时触发
   */
  onConfirm?: (context: { value: DateValue; e: MouseEvent }) => void;
}

export type DisableRangeDate =
  Array<DateValue> | DisableDateObj | ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean);

export interface DisableDateObj {
  from?: string;
  to?: string;
  before?: string;
  after?: string;
}

export type DateRangePickerPartial = 'start' | 'end';

export type DateRangeValue = Array<string | number>;

export interface DateRangePickerColumnChangeContext {
  value: DateValue;
  index: number;
  partial: DateRangePickerPartial;
}
