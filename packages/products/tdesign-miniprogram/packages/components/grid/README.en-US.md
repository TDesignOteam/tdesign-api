:: BASE_DOC ::

## API


### Grid Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
align | String | center | options: left/center | N
border | Boolean / Object | false | Typescript：`boolean \| { color?: string; width?: string; style?: 'solid' \| 'dashed' \| 'dotted' \| 'double' \| 'groove' \| 'inset' \| 'outset' }` | N
column | Number | 4 | \- | N
gutter | Number | - | \- | N
hover | Boolean | false | \- | N
theme | String | default | options: default/card | N

### Grid External Classes

className | Description
-- | --
t-class | \-


### GridItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
badge-props | Object | null | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/grid-item/type.ts) | N
description | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
icon | String / Object | - | \- | N
image | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
image-props | Object | - | Typescript：`ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/grid-item/type.ts) | N
jump-type | String | navigate-to | options: redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | options: vertical/horizontal | N
text | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
url | String | - | \- | N

### GridItem Events

name | params | description
-- | -- | --
click | \- | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)

### GridItem External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-description | \-
t-class-image | \-
t-class-text | \-
