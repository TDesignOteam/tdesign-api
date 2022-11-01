:: BASE_DOC ::

## API
### Fab Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
button-props | Object | - | 透传至 Button 组件 | N
icon | String | - | 图标 | N
style | String | right: 16px; bottom: 32px; | 悬浮按钮的样式，常用于调整位置 | N
text | String | - | 文本内容 | N

### Fab Events

名称 | 参数 | 描述
-- | -- | --
click | `(detail: {e: MouseEvent})` | 悬浮按钮点击事件
