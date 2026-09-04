:: BASE_DOC ::

## API

### Calendar Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
allow-same-day | Boolean | false | \- | N
auto-close | Boolean | true | \- | N
confirm-btn | String / Object | '' | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts) | N
first-day-of-week | Number | 0 | \- | N
format | Function | - | Typescript: `CalendarFormatType ` `type CalendarFormatType = (day: TDate) => TDate` `type TDateType = 'selected' \| 'disabled' \| 'start' \| 'start-end' \|'centre' \| 'end' \| ''` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts) | N
locale-text | Object | - | Typescript: `CalendarLocaleText` `interface CalendarLocaleText {title?: string; weekdays?: string[]; monthTitle?: string; months?: string[]; confirm?: string;}`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts) | N
max-date | Number | - | \- | N
min-date | Number | - | \- | N
popup-props | Object | {} | popup properties。Typescript: `PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts) | N
readonly | Boolean | - | \- | N
switch-mode | String | none | options: none/month/year-month | N
title | String | - | \- | N
type | String | single | options: single/multiple/range | N
use-popup | Boolean | true | \- | N
using-custom-navbar | Boolean | false | \- | N
value | Number / Array | - | `v-model:value` is supported。Typescript: `number \| number[]` | N
default-value | Number / Array | - | uncontrolled property。Typescript: `number \| number[]` | N
visible | Boolean | false | \- | N

### Calendar Events

name | params | description
-- | -- | --
change | `(context: { value: number \| number[] })` | \-
close | `(context: { trigger: CalendarTrigger })` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/calendar/type.ts)。<br/>`type CalendarTrigger = 'close-btn' \| 'confirm-btn' \| 'overlay' \| 'auto-close'`<br/>
confirm | `(context: { value: number \| number[] })` | \-
panel-change | `(context: { year: number, month: number })` | \-
scroll | `(context: {scrollLeft: number, scrollTop: number, scrollHeight: number, scrollWidth: number, deltaX: number, deltaY: number})` | triggered when scrolling
select | `(context: { value: number \| number[] })` | \-

### Calendar Slots

name | Description
-- | --
confirm-btn | \-
title | \-
