:: BASE_DOC ::

## API

### Avatar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
alt | String | - | show it when url is not valid | N
badge-props | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
bordered | Boolean | false | \- | N
hide-on-load-failed | Boolean | false | hide image when loading image failed | N
icon | String / Object | - | \- | N
image | String | - | images url | N
image-props | Object | - | \- | N
shape | String | circle | shape。options: circle/round。Typescript：`ShapeEnum ` `type ShapeEnum = 'circle' \| 'round'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar/type.ts) | N
size | String | medium | size | N

### Avatar Events

name | params | description
-- | -- | --
error | - | trigger on image load failed
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
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
cascading | String | 'left-up' | multiple images cascading。options: left-up/right-up。Typescript：`CascadingValue` `type CascadingValue = 'left-up' \| 'right-up'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/avatar-group/type.ts) | N
collapse-avatar | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
max | Number | - | \- | N
size | String | medium | size | N
### AvatarGroup External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-image | \-
