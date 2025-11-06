
const props = `

### Divider Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | center | 文本位置（仅在水平分割线有效）。可选项：left/right/center | N
children | String / TNode | - | 子元素，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | - | 子元素。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
dashed | Boolean | false | 是否虚线（仅在水平分割线有效） | N
default | String / TNode | - | 子元素，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
layout | String | horizontal | 分隔线类型有两种：水平和垂直。可选项：horizontal/vertical | N
size | String / Number | - | 间距大小 | N
theme | String | - | 已废弃。请更为使用 \`layout\`。分隔线类型有两种：水平和垂直。可选项：horizontal/vertical | N

### Divider External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类

`;
module.exports = {
  props,
};

