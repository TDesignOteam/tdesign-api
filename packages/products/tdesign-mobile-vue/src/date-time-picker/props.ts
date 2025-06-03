/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDateTimePickerProps } from './type';
import { PropType } from 'vue';

export default {
  /** 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible */
  autoClose: Boolean,
  /** 取消按钮文字 */
  cancelBtn: {
    type: String,
    default: '取消',
  },
  /** 确定按钮文字 */
  confirmBtn: {
    type: String,
    default: '',
  },
  /** 选择器的最大可选时间，默认为当前时间+10年 */
  end: {
    type: [String, Number] as PropType<TdDateTimePickerProps['end']>,
  },
  /** 列选项过滤函数，支持自定义列内容。(type 值可为: year, month, date, hour, minute, second) */
  filter: {
    type: Function as PropType<TdDateTimePickerProps['filter']>,
  },
  /** 用于格式化 pick、change、confirm 事件返回的值，全局配置默认为：'YYYY-MM-DD HH:mm:ss' [详细文档](https://day.js.org/docs/en/display/format) */
  format: {
    type: String,
    default: undefined,
  },
  /** year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒 */
  mode: {
    type: [String, Array] as PropType<TdDateTimePickerProps['mode']>,
    default: 'date',
  },
  /** 自定义label */
  renderLabel: {
    type: Function as PropType<TdDateTimePickerProps['renderLabel']>,
  },
  /** 是否在日期旁边显示周几（如周一，周二，周日等） */
  showWeek: Boolean,
  /** 选择器的最小可选时间，默认为当前时间-10年 */
  start: {
    type: [String, Number] as PropType<TdDateTimePickerProps['start']>,
  },
  /** 时间间隔步数，示例：`{ minute: 5 }` */
  steps: {
    type: Object as PropType<TdDateTimePickerProps['steps']>,
    default: () => ({}),
  },
  /** 标题 */
  title: {
    type: String,
    default: '选择时间',
  },
  /** 是否使用弹出层包裹 */
  usePopup: {
    type: Boolean,
    default: true,
  },
  /** 选中值 */
  value: {
    type: [String, Number] as PropType<TdDateTimePickerProps['value']>,
    default: undefined,
  },
  modelValue: {
    type: [String, Number] as PropType<TdDateTimePickerProps['value']>,
    default: undefined,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: [String, Number] as PropType<TdDateTimePickerProps['defaultValue']>,
  },
  /** 取消按钮点击时触发 */
  onCancel: Function as PropType<TdDateTimePickerProps['onCancel']>,
  /** value改变时触发 */
  onChange: Function as PropType<TdDateTimePickerProps['onChange']>,
  /** 确认按钮点击时触发 */
  onConfirm: Function as PropType<TdDateTimePickerProps['onConfirm']>,
  /** 选中值发生变化时触发 */
  onPick: Function as PropType<TdDateTimePickerProps['onPick']>,
};
