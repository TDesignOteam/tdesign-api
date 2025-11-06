
const props = `

### Result Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
description | String / TNode | - | 描述文字。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Boolean / Object | true | 图标名称。值为字符串表示图标名称，值为 \`false\` 表示不显示图标，值为 \`Object\` 类型，表示透传至 \`icon\`，不传表示使用主题图标 | N
icon | TNode | - | 图标名称。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
image | String / TNode | - | 图片地址。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
theme | String | default | 内置主题。可选项：default/success/warning/error | N
title | String / TNode | '' | 标题。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N

### Result External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-description | 描述样式类
t-class-image | 图片样式类
t-class-title | 标题样式类

`;
module.exports = {
  props,
};

