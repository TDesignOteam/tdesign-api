:: BASE_DOC ::

## API

### DateTimeRangePicker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cancel-btn | String | 取消 | 取消按钮文字 | N
confirm-btn | String | - | 确定按钮文字 | N
disable-date | Object / Array / Function | - | 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用。TS 类型：`DisableRangeDate` `type DisableRangeDate = Array<DateValue> | DisableDateObj | ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }` `type DateRangePickerPartial = 'start' | 'end'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-range-picker/type.ts) | N
external-classes | Array | - | 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名。`['t-class', 't-class-confirm', 't-class-cancel', 't-class-title']` | N
format | String | 'YYYY-MM-DD' | 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format) | N
mode | String | date | 选择器模式，用于表示可以选择到哪一个层级。可选项：year/month/date/hour/minutes/second | N
show-week | Boolean | false | 是否在日期旁边显示周几（如周一，周二，周日等） | N
title | String | - | 标题 | N
value | Array | - | 选中值。TS 类型：`DateRangeValue` `type DateRangeValue = Array<string | number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-range-picker/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`DateRangeValue` `type DateRangeValue = Array<string | number>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-range-picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### DateTimeRangePicker Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 取消按钮点击时触发
change | `(value: DateRangeValue)` | 选中值发生变化时触发
column-change | `(context: DateRangePickerColumnChangeContext)` | 每一列选中数据变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-range-picker/type.ts)。<br/>`interface DateRangePickerColumnChangeContext { value: DateValue; index: number; partial: DateRangePickerPartial }`<br/>
confirm | `(detail: { value: DateValue;})` | 确认按钮点击时触发
