
const props = `

### Overlay Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
backgroundColor | String | - | 遮罩层的背景色 | N
children | String / TNode | - | 遮罩内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
customStyle | String | - | 已废弃。自定义样式（即将废弃，推荐使用 \`style\` ） | N
customStyle | String | - | 遮罩层自定义样式。优先级低于其他属性 | N
duration | Number | 300 | 背景色过渡时间，单位毫秒 | N
preventScrollThrough | Boolean | true | 防止滚动穿透，即不允许点击和滚动 | N
preventScrollThrough | Boolean | true | 是否阻止背景滚动，阻止时蒙层里的内容也将无法滚动 | N
usingCustomNavbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 是否展示 | N
zIndex | Number | 1000 | 遮罩的层级 | N
zIndex | Number | 11000 | 遮罩层级 | N
onClick | Function |  | TS 类型：\`({ visible: boolean }) => void\`<br/>点击遮罩时触发 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>遮罩层的点击事件 | N
onClose | Function |  | TS 类型：\`() => void\`<br/>遮罩执行消失动画效果前触发 | N
onClosed | Function |  | TS 类型：\`() => void\`<br/>遮罩消失动画效果结束后触发 | N
onOpen | Function |  | TS 类型：\`() => void\`<br/>遮罩执行弹出动画效果前触发 | N
onOpened | Function |  | TS 类型：\`() => void\`<br/>遮罩弹出动画效果结束后触发 | N

### Overlay Events

名称 | 参数 | 描述
-- | -- | --
click | \`({ visible: boolean })\` | 点击遮罩时触发
click | \`(context: { e: MouseEvent })\` | 遮罩层的点击事件
close | \- | 遮罩执行消失动画效果前触发
closed | \- | 遮罩消失动画效果结束后触发
open | \- | 遮罩执行弹出动画效果前触发
opened | \- | 遮罩弹出动画效果结束后触发

### Overlay Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

`;
module.exports = {
  props,
};

