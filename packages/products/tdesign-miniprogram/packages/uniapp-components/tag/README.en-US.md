:: BASE_DOC ::

## API

### Tag Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
closable | Boolean / Object | false | \- | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
max-width | String / Number | - | \- | N
shape | String | square | options: square/round/mark | N
size | String | medium | options: small/medium/large/extra-large | N
theme | String | default | options: default/primary/warning/danger/success | N
variant | String | dark | options: dark/light/outline/light-outline | N

### Tag Events

name | params | description
-- | -- | --
click | `(context: { e: MouseEvent })` | \-
close | `(context: { e: MouseEvent })` | \-

### Tag Slots

name | Description
-- | --
\- | \-
closable | \-
icon | \-

### Tag External Classes

className | Description
-- | --
t-class | \-


### CheckTag Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
checked | Boolean | - | `v-model:checked` is supported | N
default-checked | Boolean | - | uncontrolled property | N
closable | Boolean | false | \- | N
content | String / Number / Array | - | Typescript: `string \| number \| string[]` | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
shape | String | square | options: square/round/mark | N
size | String | medium | options: small/medium/large。Typescript: `SizeEnum`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts) | N
variant | String | dark | options: dark/light/outline/light-outline | N

### CheckTag Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-
click | `(context: { e: MouseEvent })` | \-
close | \- | \-

### CheckTag Slots

name | Description
-- | --
\- | \-
content | \-
icon | \-

### CheckTag External Classes

className | Description
-- | --
t-class | \-
