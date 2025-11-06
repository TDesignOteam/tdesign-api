
const props = `

### Cell Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | middle | 右侧内容的对齐方式，默认居中对齐。可选项：top/middle/bottom | N
arrow | Boolean | false | 是否显示右侧箭头 | N
arrow | Boolean / Object | false | 是否显示右侧箭头 | N
bordered | Boolean | true | 是否显示下边框 | N
description | String / TNode | - | 下方内容描述。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
hover | Boolean | - | 是否开启点击反馈 | N
image | String / TNode | - | 主图。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
jumpType | String | navigateTo | 链接跳转类型。可选项：switchTab/reLaunch/redirectTo/navigateTo | N
leftIcon | TNode | - | 左侧图标，出现在单元格标题的左侧。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
leftIcon | String / Object / TNode | - | 左侧图标，出现在单元格标题的左侧。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
note | String / TNode | - | 和标题同行的说明文字。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
required | Boolean | false | 是否显示表单必填星号 | N
rightIcon | TNode | - | 最右侧图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
rightIcon | String / Object / TNode | - | 最右侧图标。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
title | String / TNode | - | 标题。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
url | String | - | 点击后跳转链接地址。如果值为空，则表示不需要跳转 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>右侧内容 | N

### Cell Events

名称 | 参数 | 描述
-- | -- | --
click | \`(context: { e: MouseEvent })\` | 右侧内容

### Cell External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-center | 中间（\`title\`, \`description\`）内容样式类
t-class-description | 下方描述内容样式类
t-class-hover | 悬停样式类
t-class-image | 图片样式类
t-class-left | 左侧内容样式类
t-class-left-icon | 左侧图标样式类
t-class-note | 右侧说明文字样式类
t-class-right | 右侧内容样式类
t-class-right-icon | 右侧图标样式类
t-class-title | 标题样式类


### CellGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
bordered | Boolean | false | 是否显示组边框 | N
theme | String | default | 单元格组风格。可选项：default/card | N
title | String | - | 单元格组标题 | N

### CellGroup Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### CellGroup External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-title | 标题样式类

`;
module.exports = {
  props,
};

