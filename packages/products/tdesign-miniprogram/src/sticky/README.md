:: BASE_DOC ::

## API
### Sticky Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
container | Function | - | 函数返回容器对应的 NodesRef 节点，将对应节点指定为组件的外部容器，滚动时组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。 | N
disabled | Boolean | false | 是否禁用组件 | N
external-classes | Array | - | 根结点外部样式。`['t-class']` | N
offset-top | String / Number | 0 | 吸顶时与顶部的距离，单位`px` | N
style | String | - | 自定义组件样式 | N
z-index | Number | 99 | 吸顶时的 z-index | N

### Sticky Events

名称 | 参数 | 描述
-- | -- | --
scroll | `(detail: { scrollTop: number, isFixed: boolean })` | 滚动时触发，scrollTop: 距离顶部位置，isFixed: 是否吸顶
