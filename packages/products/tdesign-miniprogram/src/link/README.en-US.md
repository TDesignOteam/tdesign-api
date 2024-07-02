:: BASE_DOC ::

## API

### Link Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
disabled | Boolean | false | make link to be disabled | N
hover | Boolean | - | \- | N
navigator-props | Object | - | Typescript：`NavigatorProps` `import { NavigatorProps } from '@Navigator'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/link/type.ts) | N
prefix-icon | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
status | String | normal | `deprecated`。options: normal/active/disabled | N
suffix-icon | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
theme | String | default | options: default/primary/danger/warning/success | N
underline | Boolean | - | \- | N

### Link Events

name | params | description
-- | -- | --
complete | \- | \-
fail | \- | \-
success | \- | \-
### Link External Classes

className | Description
-- | --
t-class | class name of root node
t-class-content | \-
t-class-hover | \-
t-class-prefix-icon | \-
t-class-suffix-icon | \-
