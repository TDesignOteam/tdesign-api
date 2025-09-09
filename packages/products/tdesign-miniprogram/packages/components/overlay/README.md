:: BASE_DOC ::

## API

### Overlay Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
background-color | String | - | 遮罩层的背景色 | N
duration | Number | 300 | 背景色过渡时间，单位毫秒 | N
prevent-scroll-through | Boolean | true | 防止滚动穿透，即不允许点击和滚动 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 是否展示 | N
z-index | Number | 11000 | 遮罩层级 | N

### Overlay Events

名称 | 参数 | 描述
-- | -- | --
click | `({ visible: boolean })` | 点击遮罩时触发
