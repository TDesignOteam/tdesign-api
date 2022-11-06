:: BASE_DOC ::

## API
### Calendar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
confirm-btn | String / Object / Slot | '' | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
custom-style | String | - | 自定义组件样式 | N
first-day-of-week | Number | 0 | 第一天从星期几开始，默认 0 = 周日 | N
format | Function | - | 用于格式化日期的函数。TS 类型：`CalendarFormatType ` `type CalendarFormatType = (day: TDate) => TDate` `type TDateType = 'selected' \| 'disabled' \| 'start' \| 'centre' \| 'end' \| ''` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
max-date | Number / Date | - | 最大可选的日期，不传则默认半年后 | N
min-date | Number / Date | - | 最小可选的日期，不传则默认今天 | N
title | String | - | 标题，不传默认为“请选择日期” | N
type | String | single | 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择。可选项：single/multiple/range | N
value | Number / Date | - | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。可选项：number/Date/TCalendarValue[]。TS 类型：`TCalendarValue` `type TCalendarValue = number \| Date`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
default-value | Number / Date | undefined | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。非受控属性。可选项：number/Date/TCalendarValue[]。TS 类型：`TCalendarValue` `type TCalendarValue = number \| Date`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
visible | Boolean | false | 是否显示日历 | N
