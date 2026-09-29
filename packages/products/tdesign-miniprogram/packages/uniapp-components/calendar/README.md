:: BASE_DOC ::

## API

### Calendar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
allow-same-day | Boolean | false | 是否允许区间选择日历的起止时间相同，仅当 `type='range'` 时有效 | N
auto-close | Boolean | true | 自动关闭；在点击关闭按钮、确认按钮、遮罩层时自动关闭，不需要手动设置 visible | N
confirm-btn | String / Object | '' | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts) | N
first-day-of-week | Number | 0 | 第一天从星期几开始，默认 0 = 周日 | N
format | Function | - | 用于格式化日期的函数。TS 类型：`CalendarFormatType ` `type CalendarFormatType = (day: TDate) => TDate` `type TDateType = 'selected' \| 'disabled' \| 'start' \| 'start-end' \|'centre' \| 'end' \| ''` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts) | N
locale-text | Object | - | 国际化文案。TS 类型：`CalendarLocaleText` `interface CalendarLocaleText {title?: string; weekdays?: string[]; monthTitle?: string; months?: string[]; confirm?: string;}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts) | N
max-date | Number | - | 最大可选的日期，不传则默认半年后 | N
min-date | Number | - | 最小可选的日期，不传则默认今天 | N
popup-props | Object | {} | 透传 Popup 组件全部属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts) | N
readonly | Boolean | - | 是否只读，只读状态下不能选择日期 | N
switch-mode | String | none | 切换模式。 `none` 表示平铺展示所有月份； `month` 表示支持按月切换， `year-month` 表示既按年切换，也支持按月切换。可选项：none/month/year-month | N
title | String | - | 标题，不传默认为“请选择日期” | N
type | String | single | 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择。可选项：single/multiple/range | N
use-popup | Boolean | true | 是否使用弹出层包裹日历 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
value | Number / Array | - | 当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate > today。当 type = multiple 或 range 时传入数组。支持语法糖 `v-model:value`。TS 类型：`number \| number[]` | N
default-value | Number / Array | - | 当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate > today。当 type = multiple 或 range 时传入数组。非受控属性。TS 类型：`number \| number[]` | N
visible | Boolean | false | 是否显示日历；`usePopup` 为 true 时有效 | N

### Calendar Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { value: number \| number[] })` | 不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple）
close | `(context: { trigger: CalendarTrigger })` | 关闭按钮时触发。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts)。<br/>`type CalendarTrigger = 'close-btn' \| 'confirm-btn' \| 'overlay' \| 'auto-close'`<br/>
confirm | `(context: { value: number \| number[] })` | 点击确认按钮时触发
panel-change | `(context: { year: number, month: number })` | 切换月或年时触发（switch-mode 不为 none 时有效）
scroll | `(context: {scrollLeft: number, scrollTop: number, scrollHeight: number, scrollWidth: number, deltaX: number, deltaY: number})` | 滚动时触发
select | `(context: { value: number \| number[] })` | 点击日期时触发

### Calendar Slots

名称 | 描述
-- | --
confirm-btn | 确认按钮
title | 标题
