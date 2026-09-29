:: BASE_DOC ::

## API

### Link Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
content | String | - | \- | N
disabled | Boolean | false | make link to be disabled | N
hover | Boolean | - | \- | N
navigator-props | Object | {} | \- | N
prefix-icon | String / Object | - | \- | N
size | String | medium | options: small/medium/large。Typescript: `SizeEnum`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts) | N
status | String | normal | `deprecated`。options: normal/active/disabled | N
suffix-icon | String / Object | - | \- | N
theme | String | default | options: default/primary/danger/warning/success | N
underline | Boolean | - | \- | N

### Link Events

name | params | description
-- | -- | --
complete | \- | \-
fail | \- | \-
success | \- | \-

### Link Slots

name | Description
-- | --
\- | \-
content | \-
prefix-icon | \-
suffix-icon | \-

### Link External Classes

className | Description
-- | --
t-class | class name of root node
t-class-content | \-
t-class-hover | \-
t-class-prefix-icon | \-
t-class-suffix-icon | \-
