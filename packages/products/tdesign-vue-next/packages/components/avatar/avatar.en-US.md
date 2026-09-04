:: BASE_DOC ::

## API

### Avatar Props

name | type | default | description | required
-- | -- | -- | -- | --
alt | String | - | show it when url is not valid | N
content | String / Slot / Function | - | content slot or props.content。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
default | String / Slot / Function | - | default slot or props.default, same as `content`。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
hideOnLoadFailed | Boolean | false | hide image when loading image failed | N
icon | Slot / Function | - | use icon to fill。Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
image | String | - | images url | N
imageProps | Object | - | Typescript：`ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/avatar/type.ts) | N
shape | String | - | shape。options: circle/round。Typescript：`ShapeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
size | String | - | size | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on click | N
onContextmenu | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on context menu | N
onError | Function |  | Typescript：`(context: { e: Event }) => void`<br/>trigger on image load failed | N
onHover | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on mouse enter | N

### Avatar Events

name | params | description
-- | -- | --
click | `(context: { e: MouseEvent })` | trigger on click
contextmenu | `(context: { e: MouseEvent })` | trigger on context menu
error | `(context: { e: Event })` | trigger on image load failed
hover | `(context: { e: MouseEvent })` | trigger on mouse enter


### AvatarGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
cascading | String | 'right-up' | multiple images cascading。options: left-up/right-up。Typescript：`CascadingValue` `type CascadingValue = 'left-up' \| 'right-up'`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/avatar/type.ts) | N
collapseAvatar | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
max | Number | - | \- | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/avatar/type.ts) | N
shape | String | - | shape。options: circle/round。Typescript：`ShapeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
size | String | - | size | N
onCollapsedItemClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N

### AvatarGroup Events

name | params | description
-- | -- | --
collapsed-item-click | `(context: { e: MouseEvent })` | \-
