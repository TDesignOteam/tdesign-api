:: BASE_DOC ::

## API

### Radio Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
allow-uncheck | Boolean | false | \- | N
block | Boolean | true | \- | N
checked | Boolean | false | \- | N
default-checked | Boolean | undefined | uncontrolled property | N
content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
content-disabled | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array / Slot | 'circle' | Typescript：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
label | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
max-content-row | Number | 5 | \- | N
max-label-row | Number | 3 | \- | N
name | String | - | \- | N
placement | String | left | options: left/right | N
readonly | Boolean | false | \- | N
value | String / Number / Boolean | false | Typescript：`T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio/type.ts) | N

### Radio Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-

### Radio External Classes

className | Description
-- | --
t-class | \-
t-class-border | \-
t-class-content | \-
t-class-icon | \-
t-class-label | \-


### RadioGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
allow-uncheck | Boolean | false | \- | N
borderless | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array | 'circle' | Typescript：`'circle' \| 'line' \| 'dot' \| Array<string>` | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
name | String | - | \- | N
options | Array | - | Typescript：`Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string \| number; readonly?: boolean; disabled?: boolean; allowUncheck?: boolean; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio-group/type.ts) | N
placement | String | left | options: left/right | N
value | String / Number / Boolean | - | Typescript：`T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio-group/type.ts) | N
default-value | String / Number / Boolean | undefined | uncontrolled property。Typescript：`T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/radio-group/type.ts) | N

### RadioGroup Events

name | params | description
-- | -- | --
change | `(value: RadioValue)` | \-
