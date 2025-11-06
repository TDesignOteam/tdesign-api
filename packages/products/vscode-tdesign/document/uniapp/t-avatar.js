
const props = `

### Avatar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
alt | String | - | 头像替换文本，仅当图片加载失败时有效 | N
badgeProps | Object | - | 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字。TS 类型：\`BadgeProps\`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/avatar/type.ts) | N
bordered | Boolean | false | 已废弃。是否显示外边框 | N
children | String / TNode | - | 子元素内容，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | - | 子元素内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
default | String / TNode | - | 子元素内容，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
hideOnLoadFailed | Boolean | false | 加载失败时隐藏图片 | N
icon | TNode | - | 图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Object | - | 图标。值为字符串表示图标名称，值为 \`Object\` 类型，表示透传至 \`icon\` | N
image | String | - | 图片地址 | N
imageProps | Object | - | 透传至 Image 组件。TS 类型：\`ImageProps\`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/avatar/type.ts) | N
shape | String | - | 形状。优先级高于 AvatarGroup.shape 。Avatar 单独存在时，默认值为 circle。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.shape 决定。可选项：circle/round。TS 类型：\`ShapeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
size | String | - | 尺寸，示例值：small/medium/large/24px/38px 等。优先级高于 AvatarGroup.size 。Avatar 单独存在时，默认值为 medium。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.size 决定 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击时触发 | N
onContextmenu | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>右键点击时触发 | N
onError | Function |  | TS 类型：\`(context: { e: Event }) => void\`<br/>图片加载失败时触发 | N
onHover | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>鼠标移入时触发 | N

### Avatar Events

名称 | 参数 | 描述
-- | -- | --
click | \`(context: { e: MouseEvent })\` | 点击时触发
contextmenu | \`(context: { e: MouseEvent })\` | 右键点击时触发
error | \`(context: { e: Event })\` | 图片加载失败时触发
hover | \`(context: { e: MouseEvent })\` | 鼠标移入时触发

### Avatar Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### Avatar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-alt | 替代文本样式类
t-class-content | 内容样式类
t-class-icon | 图标样式类
t-class-image | 图片样式类


### AvatarGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
cascading | String | 'left-up' | 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上。可选项：left-up/right-up。TS 类型：\`CascadingValue\` \`type CascadingValue = 'left-up' \| 'right-up'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/avatar/type.ts) | N
cascading | String | 'right-up' | 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上。可选项：left-up/right-up。TS 类型：\`CascadingValue\` \`type CascadingValue = 'left-up' \| 'right-up'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/avatar/type.ts) | N
collapseAvatar | String / TNode | - | 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 \`+N\`。示例：\`+5\`，\`...\`, \`更多\`。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
max | Number | - | 能够同时显示的最多头像数量 | N
popupProps | Object | - | 头像右上角提示信息。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/avatar/type.ts) | N
shape | String | - | 形状。优先级低于 Avatar.shape。可选项：circle/round。TS 类型：\`ShapeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
size | String | - | 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size | N
onCollapsedItemClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击头像折叠元素触发 | N

### AvatarGroup Events

名称 | 参数 | 描述
-- | -- | --
collapsed-item-click | \`(context: { e: MouseEvent })\` | 点击头像折叠元素触发

### AvatarGroup Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### AvatarGroup External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-image | 图片样式类

`;
module.exports = {
  props,
};

