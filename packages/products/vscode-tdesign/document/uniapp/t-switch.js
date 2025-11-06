
const props = `

### Switch Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
beforeChange | Function | - | Switch 切换状态前的回调方法，常用于需要发起异步请求的场景，回调返回值支持布尔和 Promise 类型，返回\`false\`或 Promise reject不继续执行change，否则则继续执行。TS 类型：\`() => boolean \| Promise<boolean>\` | N
colors | Array | - | 已废弃。自定义颜色，[打开时的颜色，关闭时的颜色]。组件默认颜色为 ['#0052d9', 'rgba(0, 0, 0, .26']。示例：[blue, gray]。TS 类型：\`string[]\` | N
customValue | Array | - | 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']。TS 类型：\`Array<SwitchValue>\` | N
customValue | Array | [true, false] | 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']。TS 类型：\`Array<SwitchValue>\` | N
disabled | Boolean | undefined | 是否禁用组件。优先级：Switch.disabled > Form.disabled | N
icon | Array | [] | 开关的图标；[打开时的图标，关闭时的图标]。TS 类型：\`string[]\` | N
icon | Array | [] | 开关的图标；[打开时的图标，关闭时的图标]。TS 类型：\`TNode[]\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | Array / TNode | [] | 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 或 (value) => value ? '开' : '关'。TS 类型：\`Array<string \| TNode> \| TNode<{ value: SwitchValue }>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | Array | [] | 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 。TS 类型：\`string[]\` | N
loading | Boolean | false | 是否处于加载中状态 | N
size | String | medium | 开关尺寸。可选项：small/medium/large | N
value | String / Number / Boolean | - | 开关值。TS 类型：\`T\` \`type SwitchValue = string \| number \| boolean\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/switch/type.ts) | N
defaultValue | String / Number / Boolean | - | 开关值。非受控属性。TS 类型：\`T\` \`type SwitchValue = string \| number \| boolean\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/switch/type.ts) | N
value | String / Number / Boolean | null | 开关值。TS 类型：\`SwitchValue\` \`type SwitchValue = string \| number \| boolean\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/switch/type.ts) | N
defaultValue | String / Number / Boolean | null | 开关值。非受控属性。TS 类型：\`SwitchValue\` \`type SwitchValue = string \| number \| boolean\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/switch/type.ts) | N
onChange | Function |  | TS 类型：\`(value: T, context: { e: MouseEvent }) => void\`<br/>数据发生变化时触发 | N
onChange | Function |  | TS 类型：\`(value: T, context: { e: MouseEvent }) => void\`<br/>数据发生变化时触发 | N
onChange | Function |  | TS 类型：\`(value: SwitchValue, context: { e: MouseEvent }) => void\`<br/>数据发生变化时触发 | N

### Switch Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: T, context: { e: MouseEvent })\` | 数据发生变化时触发
change | \`(value: T, context: { e: MouseEvent })\` | 数据发生变化时触发
change | \`(value: SwitchValue, context: { e: MouseEvent })\` | 数据发生变化时触发

### Switch External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-body | 描述文本样式类
t-class-dot | 滑块样式类
t-class-label | 开关内容样式类

`;
module.exports = {
  props,
};

