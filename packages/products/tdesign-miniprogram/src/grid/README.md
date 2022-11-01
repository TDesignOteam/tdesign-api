:: BASE_DOC ::

## API
### Grid Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | center | 内容对齐方式。可选项：left/center | N
border | Boolean / Object | false | 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式。TS 类型：`boolean \| { color?: string; width?: string; style?: 'solid' \| 'dashed' \| 'dotted' \| 'double' \| 'groove' \| 'inset' \| 'outset' }` | N
column | Number | 4 | 每一行的列数量 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素类名。`['t-class']` | N
gutter | Number | - | 间隔大小 | N
hover | Boolean | false | 是否开启点击反馈 | N
style | String | - | 自定义组件样式 | N

### GridItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
badge-props | Object | - | 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字。TS 类型：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/grid/type.ts) | N
description | String / Slot | - | 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点 | N
external-classes | Array | - | 组件类名，分别用于设置组件外层元素、图片、文本、描述等元素类名。`['t-class', 't-class-image', 't-class-text', 't-class-description']` | N
image | String / Slot | - | 图片，可以是图片地址，也可以自定义图片节点 | N
jump-type | String | navigate-to | 链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to | N
layout | String | vertical | 内容布局方式。可选项：vertical/horizontal | N
style | String | - | 自定义组件样式 | N
text | String / Slot | - | 文本，可以通过 Props 传入文本，也可以自定义标题节点 | N
url | String | - | 点击后的跳转链接 | N
