
const props = `

### Sticky Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
container | Function | - | 函数返回容器对应的 NodesRef 节点，将对应节点指定为组件的外部容器，滚动时组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置 | N
container | String / Function | body | 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`ScrollContainer\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
container | Object | - | 指定容器对应的NodesRef节点为组件的外部容器，滚动时组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。TS 类型：\`Element\` | N
disabled | Boolean | false | 是否禁用组件 | N
offsetTop | String / Number | 0 | 吸顶时与顶部的距离，单位\`px\` | N
zIndex | Number | 99 | 吸顶时的 z-index | N
onScroll | Function |  | TS 类型：\`(context: { scrollTop: number, isFixed: boolean }) => void\`<br/>滚动时触发，scrollTop: 距离顶部位置，isFixed: 是否吸顶 | N

### Sticky Events

名称 | 参数 | 描述
-- | -- | --
scroll | \`(context: { scrollTop: number, isFixed: boolean })\` | 滚动时触发，scrollTop: 距离顶部位置，isFixed: 是否吸顶

### Sticky Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### Sticky External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类

`;
module.exports = {
  props,
};

