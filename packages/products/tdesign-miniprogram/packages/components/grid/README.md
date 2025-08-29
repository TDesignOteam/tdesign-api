:: BASE_DOC ::

## API


### Grid Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
align | String | center | 内容对齐方式。可选项：left/center | N
border | Boolean / Object | false | 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式。TS 类型：`boolean \| { color?: string; width?: string; style?: 'solid' \| 'dashed' \| 'dotted' \| 'double' \| 'groove' \| 'inset' \| 'outset' }` | N
column | Number | 4 | 每一行的列数量；为 0 时等于固定大小 | N
gutter | Number | - | 间隔大小 | N
hover | Boolean | false | 是否开启点击反馈 | N
theme | String | default | 宫格的风格。可选项：default/card | N

### Grid External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### GridItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
badge-props | Object | null | 透传至 Badge 属性。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/grid-item/type.ts) | N
description | String / Slot | - | 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` | N
image | String / Slot | - | 图片，可以是图片地址，也可以自定义图片节点，值为 slot 的时候才能使用插槽。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
image-props | Object | - | 透传至 Image 组件。TS 类型：`ImageProps`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/grid-item/type.ts) | N
jump-type | String | navigate-to | 链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | 内容布局方式。可选项：vertical/horizontal | N
text | String / Slot | - | 文本，可以通过 Props 传入文本，也可以自定义标题节点。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
url | String | - | 点击后的跳转链接 | N

### GridItem Events

名称 | 参数 | 描述
-- | -- | --
click | \- | 点击子项后触发。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)

### GridItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-description | 描述样式类
t-class-image | 图片样式类
t-class-text | 文本样式类
