:: BASE_DOC ::

## API

### DateTimeRangePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
cancel-btn | String | 取消 | \- | N
confirm-btn | String | - | \- | N
disable-date | Object / Array / Function | - | Typescript: `DisableRangeDate` `type DisableRangeDate = Array<DateValue> \| DisableDateObj \| ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }` `type DateRangePickerPartial = 'start' \| 'end'`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/date-time-range-picker/type.ts) | N
format | String | 'YYYY-MM-DD' | \- | N
mode | String | date | options: year/month/date/hour/minutes/second | N
show-week | Boolean | false | \- | N
title | String | - | title of picker | N
value | Array | - | `v-model:value` is supported。Typescript: `DateRangeValue` `type DateRangeValue = Array<string \| number>`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/date-time-range-picker/type.ts) | N
visible | Boolean | false | \- | N

### DateTimeRangePicker Events

name | params | description
-- | -- | --
cancel | `(context: { e: MouseEvent })` | \-
change | `(value: DateRangeValue)` | \-
column-change | `(context: DateRangePickerColumnChangeContext)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/date-time-range-picker/type.ts)。<br/>`interface DateRangePickerColumnChangeContext { value: DateValue; index: number; partial: DateRangePickerPartial }`<br/>
confirm | `(context: { value: DateValue; e: MouseEvent })` | \-
