:: BASE_DOC ::

## API


### DateTimeRangePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
cancelBtn | String | 取消 | \- | N
confirmBtn | String | - | \- | N
disableDate | Object / Array / Function | - | Typescript: `DisableRangeDate` `type DisableRangeDate = Array<DateValue> \| DisableDateObj \| ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }` `type DateRangePickerPartial = 'start' \| 'end'`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/date-time-range-picker/type.ts) | N
format | String | 'YYYY-MM-DD' | \- | N
mode | String | date | options: year/month/date/hour/minutes/second | N
showWeek | Boolean | false | \- | N
title | String | - | title of picker | N
value | Array | - | Typescript: `DateRangeValue` `type DateRangeValue = Array<string \| number>`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/date-time-range-picker/type.ts) | N
visible | Boolean | false | \- | N
onCancel | Function |  | Typescript: `(context: { e: MouseEvent }) => void`<br/> | N
onChange | Function |  | Typescript: `(value: DateRangeValue) => void`<br/> | N
onColumnChange | Function |  | Typescript: `(context: DateRangePickerColumnChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/date-time-range-picker/type.ts)。<br/>`interface DateRangePickerColumnChangeContext { value: DateValue; index: number; partial: DateRangePickerPartial }`<br/> | N
onConfirm | Function |  | Typescript: `(context: { value: DateValue; e: MouseEvent }) => void`<br/> | N
