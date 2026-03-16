:: BASE_DOC ::

## API

### Radio Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
allow-uncheck | Boolean | false | \- | N
block | Boolean | true | \- | N
checked | Boolean | false | `v-model:checked` is supported | N
default-checked | Boolean | false | uncontrolled property | N
content | String | - | \- | N
content-disabled | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array | 'circle' | Typescript: `'circle' \| 'line' \| 'dot' \| Array<string>` | N
label | String | - | \- | N
max-content-row | Number | 5 | \- | N
max-label-row | Number | 3 | \- | N
name | String | - | \- | N
placement | String | - | options: left/right | N
readonly | Boolean | undefined | \- | N
relation-key | String | - | \- | N
value | String / Number / Boolean | false | Typescript: `T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/radio/type.ts) | N

### Radio Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-

### Radio Slots

name | Description
-- | --
\- | \-
content | \-
icon | \-
label | \-

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
custom-style | Object | - | CSS(Cascading Style Sheets) | N
allow-uncheck | Boolean | false | \- | N
borderless | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array | 'circle' | Typescript: `'circle' \| 'line' \| 'dot' \| Array<string>` | N
keys | Object | - | Typescript: `KeysType`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts) | N
name | String | - | \- | N
options | Array | - | Typescript: `Array<RadioOption>` `type RadioOption = string \| number \| RadioOptionObj` `interface RadioOptionObj { label?: string; value?: string \| number; readonly?: boolean; disabled?: boolean; allowUncheck?: boolean; }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/radio-group/type.ts) | N
placement | String | left | options: left/right | N
readonly | Boolean | undefined | \- | N
relation-key | String | - | \- | N
value | String / Number / Boolean | - | `v-model:value` is supported。Typescript: `T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/radio-group/type.ts) | N
default-value | String / Number / Boolean | - | uncontrolled property。Typescript: `T` `type RadioValue = string \| number \| boolean`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/radio-group/type.ts) | N

### RadioGroup Events

name | params | description
-- | -- | --
change | `(value: RadioValue, context: { e: Event })` | \-

### RadioGroup Slots

name | Description
-- | --
\- | \-
