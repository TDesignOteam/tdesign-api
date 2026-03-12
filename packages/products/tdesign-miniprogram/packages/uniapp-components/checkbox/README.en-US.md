:: BASE_DOC ::

## API

### Checkbox Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
block | Boolean | true | \- | N
borderless | Boolean | undefined | \- | N
check-all | Boolean | false | \- | N
checked | Boolean | - | `v-model:checked` is supported | N
default-checked | Boolean | - | uncontrolled property | N
content | String | - | \- | N
content-disabled | Boolean | - | \- | N
disabled | Boolean | undefined | \- | N
icon | String / Array | 'circle' | Typescript: `CheckboxIconType` `type CheckboxIconType = 'circle' \| 'line' \| 'rectangle' \| string[];`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/checkbox/type.ts) | N
indeterminate | Boolean | false | \- | N
label | String | - | \- | N
max-content-row | Number | 5 | \- | N
max-label-row | Number | 3 | \- | N
name | String | - | \- | N
placement | String | left | options: left/right | N
readonly | Boolean | undefined | \- | N
relation-key | String | - | \- | N
value | String / Number / Boolean | - | value of checkbox。Typescript: `string \| number \| boolean` | N

### Checkbox Events

name | params | description
-- | -- | --
change | `(context: { checked: boolean, context: { value: boolean\|number\|string, label: boolean\|number\|string }})` | \-

### Checkbox Slots

name | Description
-- | --
\- | \-
content | \-
label | \-

### Checkbox External Classes

className | Description
-- | --
t-class | \-
t-class-border | \-
t-class-content | \-
t-class-icon | \-
t-class-label | \-


### CheckboxGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
borderless | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
keys | Object | - | Typescript: `KeysType`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts) | N
max | Number | undefined | \- | N
name | String | - | \- | N
options | Array | [] | Typescript: `Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj { label?: string; value?: string \| number; disabled?: boolean; icon?: CheckboxIconType; checkAll?: true }`，[Checkbox API Documents](./checkbox?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/checkbox-group/type.ts) | N
readonly | Boolean | undefined | \- | N
relation-key | String | - | \- | N
value | Array | - | `v-model:value` is supported。Typescript: `T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/checkbox-group/type.ts) | N
default-value | Array | - | uncontrolled property。Typescript: `T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/checkbox-group/type.ts) | N

### CheckboxGroup Events

name | params | description
-- | -- | --
change | `(context: { value: CheckboxGroupValue, context: { value: boolean\|number\|string, label: boolean\|number\|string }})` | \-

### CheckboxGroup Slots

name | Description
-- | --
\- | \-
