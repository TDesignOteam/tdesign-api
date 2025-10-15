:: BASE_DOC ::

## API


### Tag Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
closable | Boolean / Object | false | \- | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
max-width | String / Number | - | \- | N
shape | String | square | options: square/round/mark | N
size | String | medium | options: small/medium/large/extra-large | N
theme | String | default | options: default/primary/warning/danger/success | N
variant | String | dark | options: dark/light/outline/light-outline | N

### Tag Slots

name | Description
-- | --
\- | \-
closable | \-
icon | \-

### Tag Events

name | params | description
-- | -- | --
click | - | \-
close | - | \-

### Tag External Classes

className | Description
-- | --
t-class | \-


### CheckTag Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
checked | Boolean | - | \- | N
default-checked | Boolean | undefined | uncontrolled property | N
closable | Boolean | false | \- | N
content | String / Number / Array | - | Typescript：`string \| number \| string[]` | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
shape | String | square | options: square/round/mark | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
variant | String | dark | `0.26.0`。options: dark/light/outline/light-outline | N

### CheckTag Slots

name | Description
-- | --
\- | \-
content | \-
icon | \-

### CheckTag Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-
click | - | \-
close | \- | \-

### CheckTag External Classes

className | Description
-- | --
t-class | \-
