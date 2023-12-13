:: BASE_DOC ::

## API
### DateRangePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
allowInput | Boolean | false | \- | N
cancelRangeSelectLimit | Boolean | false | The default date selection interaction is determined based on the order of dates clicked and will be restricted. For example, if a user first clicks on the start date input box and chooses a date, for instance, 2020-05-15, the interaction will automatically shift focus to the end date input box, waiting for the user to select the end time. At this point, the user can only select a date later than 2020-05-15 (previous dates will be grayed out and disabled, restricting the user's selection). When this value is set to `true`, this restriction is lifted. | N
clearable | Boolean | false | \- | N
defaultTime | Array | ["00:00:00", "23:59:59"] | Time selector default value。Typescript：`string[]` | N
disableDate | Object / Array / Function | - | Typescript：`DisableRangeDate` `type DisableRangeDate = Array<DateValue> \| DisableDateObj \| ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }` `type DateRangePickerPartial = 'start' \| 'end'`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts) | N
disabled | Boolean | - | \- | N
enableTimePicker | Boolean | false | \- | N
firstDayOfWeek | Number | - | options: 1/2/3/4/5/6/7 | N
format | String | - | \- | N
mode | String | date | options: year/quarter/month/week/date | N
panelPreselection | Boolean | true | \- | N
placeholder | String / Array | - | Typescript：`string \| Array<string>` | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts) | N
prefixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
presets | Object | - | Typescript：`PresetRange` `interface PresetRange { [range: string]: DateRange \| (() => DateRange)}` `type DateRange = [DateValue, DateValue]`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts) | N
presetsPlacement | String | bottom | options: left/top/right/bottom | N
rangeInputProps | Object | - | Typescript：`RangeInputProps`，[RangeInput API Documents](./range-input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts) | N
separator | String | - | \- | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
status | String | default | options: default/success/warning/error | N
suffixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
timePickerProps | Object | - | Typescript：`TimePickerProps`，[TimePicker API Documents](./time-picker?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts) | N
tips | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
value | Array | [] | Typescript：`DateRangeValue` `type DateRangeValue = Array<DateValue>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts) | N
defaultValue | Array | [] | uncontrolled property。Typescript：`DateRangeValue` `type DateRangeValue = Array<DateValue>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts) | N
valueType | String | - | options: time-stamp/Date/YYYY/YYYY-MM/YYYY-MM-DD/YYYY-MM-DD HH/YYYY-MM-DD HH:mm/YYYY-MM-DD HH:mm:ss/YYYY-MM-DD HH:mm:ss:SSS | N
onBlur | Function |  | Typescript：`(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent }) => void`<br/> | N
onChange | Function |  | Typescript：`(value: DateRangeValue, context: { dayjsValue?: Dayjs[], trigger?: DatePickerTriggerSource }) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts)。<br/>`import { Dayjs } from 'dayjs'`<br/> | N
onConfirm | Function |  | Typescript：`(context: { date: Date[], e: MouseEvent, partial: DateRangePickerPartial }) => void`<br/> | N
onFocus | Function |  | Typescript：`(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent }) => void`<br/> | N
onInput | Function |  | Typescript：`(context: { input: string; value: DateRangeValue; partial: DateRangePickerPartial; e: InputEvent }) => void`<br/> | N
onPick | Function |  | Typescript：`(value: DateValue, context: PickContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/date-picker/type.ts)。<br/>`interface PickContext { e: MouseEvent; partial: DateRangePickerPartial }`<br/> | N
onPresetClick | Function |  | Typescript：`(context: { preset: PresetDate, e: MouseEvent }) => void`<br/> | N
