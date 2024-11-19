:: BASE_DOC ::

## API

### RangeInput Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
active-index | Number | - | \- | N
clearable | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
format | Array / Function | - | Typescript：`InputFormatType \| Array<InputFormatType>` | N
input-props | Object / Array | - | Typescript：`InputProps \| Array<InputProps>`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/range-input/type.ts) | N
label | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
placeholder | String / Array | - | Typescript：`string \| Array<string>` | N
separator | String / Slot | '-' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
status | String | default | options: default/success/warning/error | N
suffix | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
tips | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
value | Array | [] | Typescript：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/range-input/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/range-input/type.ts) | N

### RangeInput Events

name | params | description
-- | -- | --
clear | - | \-


### RangeInputPopup Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
status | String | default | options: default/success/warning/error | N
tips | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
