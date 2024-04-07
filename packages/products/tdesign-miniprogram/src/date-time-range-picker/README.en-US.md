:: BASE_DOC ::

## API

### DateTimeRangePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
cancel-btn | String | 取消 | \- | N
confirm-btn | String | - | \- | N
disable-date | Object / Array / Function | - | Typescript：`DisableRangeDate` `type DisableRangeDate = Array<DateValue> \| DisableDateObj \| ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }` `type DateRangePickerPartial = 'start' \| 'end'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-range-picker/type.ts) | N
format | String | 'YYYY-MM-DD' | \- | N
mode | String | date | options: year/month/date/hour/minutes/second | N
show-week | Boolean | false | \- | N
title | String | - | title of picker | N
value | Array | - | Typescript：`DateRangeValue` `type DateRangeValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-range-picker/type.ts) | N
visible | Boolean | false | \- | N

### DateTimeRangePicker Events

name | params | description
-- | -- | --
cancel | - | \-
change | `(value: DateRangeValue)` | \-
column-change | `(context: DateRangePickerColumnChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/date-time-range-picker/type.ts)。<br/>`interface DateRangePickerColumnChangeContext { value: DateValue; index: number; partial: DateRangePickerPartial }`<br/>
confirm | `(detail: { value: DateValue;})` | \-
