
const props = `

### Calendar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
autoClose | Boolean | true | 自动关闭；在点击关闭按钮、确认按钮、遮罩层时自动关闭，不需要手动设置 visible | N
cell | String / TNode | - | 单元格插槽。TS 类型：\`string \| TNode<CalendarCell>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
cellAppend | String / TNode | - | 单元格插槽，在原来的内容之后追加。TS 类型：\`string \| TNode<CalendarCell>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
confirmBtn | String / Object / TNode | '' | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。TS 类型：\`string \| ButtonProps \| TNode \| null\`，[Button API Documents](./button?tab=api)。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
controllerConfig | Boolean / Object | undefined | 右上角控制器配置。支持全局配置。值为 false 则表示不显示控制器，值为 true 则显示控制器默认配置，值类型为 CalendarController 则显示为自定义控制器配置。TS 类型：\`boolean \| CalendarController\` | N
fillWithZero | Boolean | undefined | 小于 10 的日期，是否使用 '0' 填充。支持全局配置。默认表现为 \`01\` \`02\`，值为 false 表现为 \`1\` \`2\` \`9\` | N
firstDayOfWeek | Number | - | 第一天从星期几开始，仅在日历展示维度为月份时（mode = month）有效。默认为 1。可选项：1/2/3/4/5/6/7 | N
firstDayOfWeek | Number | 0 | 第一天从星期几开始，默认 0 = 周日 | N
format | String | 'YYYY-MM-DD' | 用于格式化日期，决定事件参数 formattedFilterDate 的输出值。[详细文档](https://day.js.org/docs/en/display/format) | N
format | Function | - | 用于格式化日期的函数。TS 类型：\`CalendarFormatType \` \`type CalendarFormatType = (day: TDate) => TDate\` \`type TDateType = 'selected' \| 'disabled' \| 'start' \| 'centre' \| 'end' \| ''\` \`interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
head | String / TNode | - | 头部插槽（左上角处，默认不显示任何内容）。TS 类型：\`string \| TNode<ControllerOptions>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
isShowWeekendDefault | Boolean | true | 默认是否显示周末 | N
localeText | Object | - | 国际化文案。TS 类型：\`CalendarLocaleText\` \`interface CalendarLocaleText {title?: string; weekdays?: string[]; monthTitle?: string; months?: string[]; confirm?: string;}\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
maxDate | Number | - | 最大可选的日期，不传则默认半年后 | N
maxDate | Number / Date | - | 最大可选的日期，不传则默认半年后。TS 类型：\` number \| Date\` | N
minDate | Number | - | 最小可选的日期，不传则默认今天 | N
minDate | Number / Date | - | 最小可选的日期，不传则默认今天。TS 类型：\` number \| Date\` | N
mode | String | month | 日历展示维度。可选项：month/year | N
month | String / Number | - | 控制当前面板展示月份，优先级高于 \`controllerConfig.month\` | N
multiple | Boolean | - | 是否高亮多个日期单元格 | N
preventCellContextmenu | Boolean | false | 是否禁用单元格右键默认系统菜单 | N
range | Array | - | 用于设置日历的年月份显示范围，[范围开始，范围结束]。TS 类型：\`Array<CalendarValue>\` | N
readonly | Boolean | - | 是否只读，只读状态下不能选择日期 | N
switchMode | String | none | 切换模式。 \`none\` 表示平铺展示所有月份； \`month\` 表示支持按月切换， \`year-month\` 表示既按年切换，也支持按月切换。可选项：none/month/year-month | N
theme | String | full | 日历风格。可选项：full/card | N
title | String / TNode | - | 标题，不传默认为“请选择日期”。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
type | String | 'single' | 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择。可选项：single/multiple/range | N
usePopup | Boolean | true | 是否使用弹出层包裹日历 | N
usingCustomNavbar | Boolean | false | 是否使用了自定义导航栏 | N
value | String / Array / Date | - | 当前高亮的日期。TS 类型：\`CalendarValue \| CalendarValue[]\` \`type CalendarValue = string \| Date\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
value | Number / Array | - | 当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate > today。当 type = multiple 或 range 时传入数组。TS 类型：\`number \| number[]\` | N
defaultValue | Number / Array | - | 当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate > today。当 type = multiple 或 range 时传入数组。非受控属性。TS 类型：\`number \| number[]\` | N
value | Number / Array / Date | - | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。TS 类型：\`CalendarValue\` \`type CalendarValue = TCalendarValue \| TCalendarValue[]\` \`type TCalendarValue = number \| Date\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
defaultValue | Number / Array / Date | - | 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组。非受控属性。TS 类型：\`CalendarValue\` \`type CalendarValue = TCalendarValue \| TCalendarValue[]\` \`type TCalendarValue = number \| Date\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
visible | Boolean | false | 是否显示日历；\`usePopup\` 为 true 时有效 | N
week | Array / TNode | - | 用于自定义日历星期呈现方式。CalendarWeek.day 表示当前是星期几。示例一：['周一', '周二', '周三', '周四', '周五', '星期六', '星期天']。示例二：\`({ day }) => '周' + day\`。TS 类型：\`Array<string> \| TNode<CalendarWeek>\` \`interface CalendarWeek { day: WeekDay }\` \`type WeekDay = 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
year | String / Number | - | 控制当前面板展示年份，优先级高于 \`controllerConfig.year\` | N
onCellClick | Function |  | TS 类型：\`(options: { cell: CalendarCell; e: MouseEvent }) => void\`<br/>日历单元格点击时触发 | N
onCellDoubleClick | Function |  | TS 类型：\`(options: { cell: CalendarCell; e: MouseEvent }) => void\`<br/>日历单元格双击时触发 | N
onCellRightClick | Function |  | TS 类型：\`(options: { cell: CalendarCell; e: MouseEvent }) => void\`<br/>日历单元格右击时触发 | N
onChange | Function |  | TS 类型：\`(value: timestamp) => void\`<br/>不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple） | N
onChange | Function |  | TS 类型：\`(value: CalendarValue) => void\`<br/>不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple） | N
onClose | Function |  | TS 类型：\`(trigger: CalendarTrigger) => void\`<br/>关闭按钮时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts)。<br/>\`type CalendarTrigger = 'close-btn' \| 'confirm-btn' \| 'overlay' \| 'auto-close'\`<br/> | N
onConfirm | Function |  | TS 类型：\`(value: timestamp) => void\`<br/>点击确认按钮时触发 | N
onConfirm | Function |  | TS 类型：\`(value: CalendarValue) => void\`<br/>点击确认按钮时触发 | N
onControllerChange | Function |  | TS 类型：\`(options: ControllerOptions) => void\`<br/>右上角控件组选中值有变化的时候触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts)。<br/>\`interface ControllerOptions { filterDate: Date; formattedFilterDate: string; mode: string; isShowWeekend: boolean }\`<br/> | N
onMonthChange | Function |  | TS 类型：\`(options: { month: string; year: string }) => void\`<br/>月份切换时触发 | N
onPanelChange | Function |  | TS 类型：\`(context: { year: number, month: number }) => void\`<br/>切换月或年时触发（switch-mode 不为 none 时有效） | N
onScroll | Function |  | TS 类型：\`({scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}) => void\`<br/>滚动时触发 | N
onScroll | Function |  | TS 类型：\`(context: {e: Event}) => void\`<br/>滚动时触发 | N
onScroll | Function |  | TS 类型：\`(context: {e: React.UIEvent}) => void\`<br/>滚动时触发 | N
onSelect | Function |  | TS 类型：\`(value: timestamp) => void\`<br/>点击日期时触发 | N
onSelect | Function |  | TS 类型：\`(value: Date) => void\`<br/>点击日期时触发 | N

### Calendar Events

名称 | 参数 | 描述
-- | -- | --
cell-click | \`(options: { cell: CalendarCell; e: MouseEvent })\` | 日历单元格点击时触发
cell-double-click | \`(options: { cell: CalendarCell; e: MouseEvent })\` | 日历单元格双击时触发
cell-right-click | \`(options: { cell: CalendarCell; e: MouseEvent })\` | 日历单元格右击时触发
change | \`(value: timestamp)\` | 不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple）
change | \`(value: CalendarValue)\` | 不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple）
close | \`(trigger: CalendarTrigger)\` | 关闭按钮时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts)。<br/>\`type CalendarTrigger = 'close-btn' \| 'confirm-btn' \| 'overlay' \| 'auto-close'\`<br/>
confirm | \`(value: timestamp)\` | 点击确认按钮时触发
confirm | \`(value: CalendarValue)\` | 点击确认按钮时触发
controller-change | \`(options: ControllerOptions)\` | 右上角控件组选中值有变化的时候触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts)。<br/>\`interface ControllerOptions { filterDate: Date; formattedFilterDate: string; mode: string; isShowWeekend: boolean }\`<br/>
month-change | \`(options: { month: string; year: string })\` | 月份切换时触发
panel-change | \`(context: { year: number, month: number })\` | 切换月或年时触发（switch-mode 不为 none 时有效）
scroll | \`({scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY})\` | 滚动时触发
scroll | \`(context: {e: Event})\` | 滚动时触发
scroll | \`(context: {e: React.UIEvent})\` | 滚动时触发
select | \`(value: timestamp)\` | 点击日期时触发
select | \`(value: Date)\` | 点击日期时触发

### CalendarInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
toCurrent | \- | \- | 跳转到今天

### Calendar Slots

名称 | 描述
-- | --
confirm-btn | 确认按钮
title | 标题

### CalendarController

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
current | Object | - | “今天(本月)”按钮控制器。TS 类型：\`{ visible?: boolean; currentDayButtonProps?: ButtonProps; currentMonthButtonProps?: ButtonProps }\`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
disabled | Boolean | false | 是否禁用右上角控制器 | N
mode | Object | - | 日历展示维度控制器。TS 类型：\`{ visible?: boolean; radioGroupProps?: RadioGroupProps }\`，[Radio API Documents](./radio?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
month | Object | - | 日历月份控制器。TS 类型：\`{ visible?: boolean; selectProps?: SelectProps }\` | N
weekend | Object | - | 隐藏/显示周末控制器。TS 类型：\`{ visible?: boolean; showWeekendButtonProps?: CheckTagProps; hideWeekendButtonProps?: CheckTagProps }\`，[Tag API Documents](./tag?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N
year | Object | - | 日历年份控制器。TS 类型：\`{ visible?: boolean; selectProps?: SelectProps }\`，[Select API Documents](./select?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/calendar/type.ts) | N

### CalendarCell

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
belongTo | Number | - | 用于表示日期单元格属于哪一个月份。值为 0 表示是当前日历显示的月份中的日期，值为 -1 表示是上个月的，值为 1 表示是下个月的（日历展示维度是“月”时有值） | N
date | Object | - | 日历单元格日期。TS 类型：\`Date\` | N
day | Number | - | 日期单元格对应的星期，值为 1~7，表示周一到周日。（日历展示维度是“月”时有值） | N
formattedDate | String | - | 日历单元格日期字符串（输出日期的格式和 format 有关） | N
isCurrent | Boolean | - | 日期单元格是否为当前高亮日期或高亮月份 | N
weekOrder | Number | - | 日期在本月的第几周（日历展示维度是“月”时有值） | N
\`ControllerOptions\` | \- | - | 继承 \`ControllerOptions\` 中的全部属性 | N

`;
module.exports = {
  props,
};

