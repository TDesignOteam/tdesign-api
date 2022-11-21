:: BASE_DOC ::

## API
### Calendar Props

name | type | default | description | required
-- | -- | -- | -- | --
confirm-btn | String / Object / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
first-day-of-week | Number | 0 | \- | N
format | Function | - | Typescript：`CalendarFormatType ` `type CalendarFormatType = (day: TDate) => TDate` `type TDateType = 'selected' \| 'disabled' \| 'start' \| 'centre' \| 'end' \| ''` `interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
max-date | Number / Date | - | \- | N
min-date | Number / Date | - | \- | N
style | String | - | \- | N
title | String | - | \- | N
type | String | single | options：single/multiple/range | N
value | Number / Array / Date | - | Typescript：`CalendarValue \| CalendarValue[]` `type CalendarValue = number \| Date`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
default-value | Number / Array / Date | undefined | uncontrolled property。Typescript：`CalendarValue \| CalendarValue[]` `type CalendarValue = number \| Date`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/calendar/type.ts) | N
visible | Boolean | false | \- | N
