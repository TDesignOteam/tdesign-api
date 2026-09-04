:: BASE_DOC ::

## API

### Avatar Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
alt | String | - | show it when url is not valid | N
badge-props | Object | {} | Typescript: `BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/avatar/type.ts) | N
bordered | Boolean | false | \- | N
hide-on-load-failed | Boolean | false | hide image when loading image failed | N
icon | String / Object | - | \- | N
image | String | - | images url | N
image-props | Object | - | Typescript: `ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/avatar/type.ts) | N
shape | String | - | shape。options: circle/round。Typescript: `ShapeEnum`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts) | N
size | String | - | size | N

### Avatar Events

name | params | description
-- | -- | --
error | `(context: { e: Event })` | trigger on image load failed

### Avatar Slots

name | Description
-- | --
\- | \-

### Avatar External Classes

className | Description
-- | --
t-class | \-
t-class-alt | \-
t-class-content | \-
t-class-icon | \-
t-class-image | \-


### AvatarGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
cascading | String | 'left-up' | multiple images cascading。options: left-up/right-up。Typescript: `CascadingValue` `type CascadingValue = 'left-up' \| 'right-up'`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/avatar-group/type.ts) | N
collapse-avatar | String | - | \- | N
max | Number | - | \- | N
shape | String | - | shape。options: circle/round。Typescript: `ShapeEnum`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/common/common.ts) | N
size | String | - | size | N

### AvatarGroup Events

name | params | description
-- | -- | --
collapsed-item-click | `(context: { e: MouseEvent })` | \-

### AvatarGroup Slots

name | Description
-- | --
\- | \-
collapse-avatar | \-

### AvatarGroup External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-image | \-
