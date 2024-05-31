:: BASE_DOC ::

## API

### Calendar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-close | Boolean | true | `0.34.0`。自动关闭；在点击关闭按钮、确认按钮、遮罩层时自动关闭，不需要手动设置 visible | N
confirm-btn | String / Object / Slot | '' | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
first-day-of-week | Number | 0 | 第一天从星期几开始，默认 0 = 周日 | N
format | Function | - | 用于格式化日期的函数。TS 类型：`CalendarFormatType ` `type CalendarFormatType = (day: TDate) => TDate` `type TDateType = 'selected' \| 'disabled' \| 'start' \| 'centre' \| 'end' \| ''` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
max-date | Number | - | 最大可选的日期，不传则默认半年后 | N
min-date | Number | - | 最小可选的日期，不传则默认今天 | N
title | String / Slot | - | 标题，不传默认为“请选择日期”。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
type | String | 'single' | 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择。可选项：single/multiple/range | N
use-popup | Boolean | true | `0.32.0`。是否使用弹出层包裹日历 | N
value | Number / Array | - | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。TS 类型：`number \| number[]` | N
default-value | Number / Array | undefined | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。非受控属性。TS 类型：`number \| number[]` | N
visible | Boolean | false | 是否显示日历；`usePopup` 为 true 时有效 | N

### Calendar Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: timestamp)` | `0.28.0`。不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple）
close | `(trigger: CalendarTrigger)` | `0.34.0`。关闭按钮时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts)。<br/>`type CalendarTrigger = 'close-btn' \| 'confirm-btn' \| 'overlay'`<br/>
confirm | `(value: timestamp)` | 点击确认按钮时触发
select | `(value: timestamp)` | `0.28.0`。点击日期时触发
