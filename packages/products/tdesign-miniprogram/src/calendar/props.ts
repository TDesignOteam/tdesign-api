/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCalendarProps } from './type';
const props: TdCalendarProps = {
  /** 日期单元 */
  cell: {
    type: Array,
    optionalTypes: [ null],
  },
  /** 确认按钮 */
  confirmBtn: {
    type: String,
    optionalTypes: [ null],
  },
  /** 第一天从星期几开始，仅在日历展示维度为月份时（mode = month）有效。默认为 1 */
  firstDayOfWeek: {
    type: Number,
  },
  /** 头部插槽（左上角处，默认不显示任何内容） */
  head: {
    type: String,
  },
  /** 当前高亮的日期 */
  value: {
    type: String,
    optionalTypes: [Date],
  },
};

export default props;
