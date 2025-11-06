
const props = `

### DateTimeRangePicker Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
cancelBtn | String | 取消 | 取消按钮文字 | N
confirmBtn | String | - | 确定按钮文字 | N
disableDate | Object / Array / Function | - | 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用。TS 类型：\`DisableRangeDate\` \`type DisableRangeDate = Array<DateValue> \| DisableDateObj \| ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)\` \`interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }\` \`type DateRangePickerPartial = 'start' \| 'end'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/date-time-range-picker/type.ts) | N
format | String | 'YYYY-MM-DD' | 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format) | N
mode | String | date | 选择器模式，用于表示可以选择到哪一个层级。可选项：year/month/date/hour/minutes/second | N
showWeek | Boolean | false | 是否在日期旁边显示周几（如周一，周二，周日等） | N
title | String | - | 标题 | N
value | Array | - | 选中值。TS 类型：\`DateRangeValue\` \`type DateRangeValue = Array<string \| number>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/date-time-range-picker/type.ts) | N
visible | Boolean | false | 是否显示 | N
onCancel | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>取消按钮点击时触发 | N
onChange | Function |  | TS 类型：\`(value: DateRangeValue) => void\`<br/>选中值发生变化时触发 | N
onColumnChange | Function |  | TS 类型：\`(context: DateRangePickerColumnChangeContext) => void\`<br/>每一列选中数据变化时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/date-time-range-picker/type.ts)。<br/>\`interface DateRangePickerColumnChangeContext { value: DateValue; index: number; partial: DateRangePickerPartial }\`<br/> | N
onConfirm | Function |  | TS 类型：\`(context: { value: DateValue; e: MouseEvent }) => void\`<br/>确认按钮点击时触发 | N

### DateTimeRangePicker Events

名称 | 参数 | 描述
-- | -- | --
cancel | \`(context: { e: MouseEvent })\` | 取消按钮点击时触发
change | \`(value: DateRangeValue)\` | 选中值发生变化时触发
column-change | \`(context: DateRangePickerColumnChangeContext)\` | 每一列选中数据变化时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/date-time-range-picker/type.ts)。<br/>\`interface DateRangePickerColumnChangeContext { value: DateValue; index: number; partial: DateRangePickerPartial }\`<br/>
confirm | \`(context: { value: DateValue; e: MouseEvent })\` | 确认按钮点击时触发

`;
module.exports = {
  props,
};

