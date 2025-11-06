
const props = `

### Empty Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
action | TNode | - | 操作按钮。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
description | String / TNode | - | 描述文字。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 \`Object\` 类型，表示透传至 \`icon\` | N
icon | String / TNode | - | 图标。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
image | String / TNode | - | 组件图片，可以完全自定义内容。值类型为字符串时，表示图片地址；值类型为对象时，则表示透传全部属性到图片组件，示例：\`<Empty image={{ src: '', shape: 'round' }} />\`。TS 类型：\`string \| ImageProps \| TNode \`，[Image API Documents](./image?tab=api)。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/empty/type.ts) | N
image | String / TNode | - | 图片地址。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
imageStyle | Object | - | 透传图片样式表。TS 类型：\`Styles\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
size | String | medium | 空状态的尺寸，默认为 \`medium\`。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
title | String / TNode | - | 错误标题。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
type | String | empty | 组件类型，如：空数据/成功/失败/网络错误/建设中。可选项：empty/success/fail/network-error/maintenance | N

### Empty External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-description | 描述样式类
t-class-image | 图片样式类

`;
module.exports = {
  props,
};

