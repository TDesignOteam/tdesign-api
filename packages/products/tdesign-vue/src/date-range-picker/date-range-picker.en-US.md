:: BASE_DOC ::

## API

### DateRangePicker Props

name | type | default | description | required
-- | -- | -- | -- | --
allowInput | Boolean | false | \- | N
clearable | Boolean | false | \- | N
defaultTime | Array | ["00:00:00", "23:59:59"] | Time selector default value。Typescript：`string[]` | N
disableDate | Object / Array / Function | - | Typescript：`DisableRangeDate` `type DisableRangeDate = Array<DateValue> \| DisableDateObj \| ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean)` `interface DisableDateObj { from?: string; to?: string; before?: string; after?: string }` `type DateRangePickerPartial = 'start' \| 'end'`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N
disabled | Boolean | - | \- | N
enableTimePicker | Boolean | false | \- | N
firstDayOfWeek | Number | - | options：1/2/3/4/5/6/7 | N
format | String | - | \- | N
mode | String | date | options：year/quarter/month/week/date | N
panelPreselection | Boolean | true | \- | N
placeholder | String / Array | - | Typescript：`string \| Array<string>` | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N
prefixIcon | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
presets | Object | - | Typescript：`PresetRange` `interface PresetRange { [range: string]: DateRange \| (() => DateRange)}` `type DateRange = [DateValue, DateValue]`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N
presetsPlacement | String | bottom | options：left/top/right/bottom | N
rangeInputProps | Object | - | Typescript：`RangeInputProps`，[RangeInput API Documents](./range-input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N
separator | String | - | \- | N
size | String | medium | options：small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
status | String | default | options：default/success/warning/error | N
suffixIcon | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
timePickerProps | Object | - | Typescript：`TimePickerProps`，[TimePicker API Documents](./time-picker?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N
tips | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
value | Array | [] | `v-model` is supported。Typescript：`DateRangeValue` `type DateRangeValue = Array<DateValue>`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N
defaultValue | Array | [] | uncontrolled property。Typescript：`DateRangeValue` `type DateRangeValue = Array<DateValue>`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts) | N
valueType | String | - | options：'time-stamp' | 'Date' | 'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD' | 'YYYY-MM-DD HH' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm:ss:SSS' | N
onBlur | Function |  | Typescript：`(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent }) => void`<br/> | N
onChange | Function |  | Typescript：`(value: DateRangeValue, context: { dayjsValue?: Dayjs[], trigger?: DatePickerTriggerSource }) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。<br/>`import { Dayjs } from 'dayjs'`<br/> | N
onConfirm | Function |  | Typescript：`(context: { date: Date[], e: MouseEvent, partial: DateRangePickerPartial }) => void`<br/> | N
onFocus | Function |  | Typescript：`(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent }) => void`<br/> | N
onInput | Function |  | Typescript：`(context: { input: string; value: DateRangeValue; partial: DateRangePickerPartial; e: InputEvent }) => void`<br/> | N
onPick | Function |  | Typescript：`(value: DateValue, context: PickContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。<br/>`interface PickContext { e: MouseEvent; partial: DateRangePickerPartial }`<br/> | N
onPresetClick | Function |  | Typescript：`(context: { preset: PresetDate, e: MouseEvent }) => void`<br/> | N

### DateRangePicker Events

name | params | description
-- | -- | --
blur | `(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent })` | \-
change | `(value: DateRangeValue, context: { dayjsValue?: Dayjs[], trigger?: DatePickerTriggerSource })` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。<br/>`import { Dayjs } from 'dayjs'`<br/>
confirm | `(context: { date: Date[], e: MouseEvent, partial: DateRangePickerPartial })` | \-
focus | `(context: { value: DateRangeValue; partial: DateRangePickerPartial; e: FocusEvent })` | \-
input | `(context: { input: string; value: DateRangeValue; partial: DateRangePickerPartial; e: InputEvent })` | \-
pick | `(value: DateValue, context: PickContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/date-picker/type.ts)。<br/>`interface PickContext { e: MouseEvent; partial: DateRangePickerPartial }`<br/>
preset-click | `(context: { preset: PresetDate, e: MouseEvent })` | \-
