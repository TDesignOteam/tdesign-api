
const props = `

### Alert Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
close | String / Boolean / TNode | false | 即将废弃，请使用 closeBtn 属性。关闭按钮。值为 true 则显示默认关闭按钮；值为 false 则不显示按钮；值类型为 string 则直接显示；值类型为 Function 则可以自定关闭按钮。TS 类型：\`string \| boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closeBtn | String / Boolean / TNode | false | 关闭按钮。值为 true 则显示默认关闭按钮；值为 false 则不显示按钮；值类型为 string 则直接显示；值类型为 Function 则可以自定关闭按钮。TS 类型：\`string \| boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
default | String / TNode | - | 内容，同 message。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | TNode | - | 图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
maxLine | Number | 0 | 内容显示最大行数，超出的内容会折叠收起，用户点击后再展开。值为 0 表示不折叠 | N
message | String / TNode | - | 内容（子元素）。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
operation | TNode | - | 跟在告警内容后面的操作区。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
theme | String | info | 组件风格。可选项：success/info/warning/error | N
title | String / TNode | - | 标题。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
onClose | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>关闭按钮点击时触发 | N
onClosed | Function |  | TS 类型：\`(context: { e: TransitionEvent }) => void\`<br/>告警提示框关闭动画结束后触发 | N

### Alert Events

名称 | 参数 | 描述
-- | -- | --
close | \`(context: { e: MouseEvent })\` | 关闭按钮点击时触发
closed | \`(context: { e: TransitionEvent })\` | 告警提示框关闭动画结束后触发

`;
module.exports = {
  props,
};

