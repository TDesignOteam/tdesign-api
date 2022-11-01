:: BASE_DOC ::

## API
### Overlay Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style | String | - | 自定义样式（即将废弃，推荐使用 `style` ） | N
duration | Number | 300 | 动画时长，单位毫秒 | N
prevent-scroll-through | Boolean | true | 防止滚动穿透 | N
style | String | - | 自定义组件样式 | N
transparent | Boolean | false | 遮罩层是否透明 | N
visible | Boolean | true | 必需。是否展示 | Y
default-visible | Boolean | undefined | 必需。是否展示。非受控属性 | Y
z-index | Number | 1000 | 遮罩的层级 | N

### Overlay Events

名称 | 参数 | 描述
-- | -- | --
click | - | 遮罩层的点击事件
