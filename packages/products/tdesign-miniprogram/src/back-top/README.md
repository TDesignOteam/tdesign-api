:: BASE_DOC ::

## API
### BackTop Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
external-classes | Array | - | 组件类名，分别用于设置外层元素、图标、文本内容等元素类名。`['t-class', 't-class-icon', 't-class-text']` | N
fixed | Boolean | true | 是否绝对定位固定到屏幕右下方 | N
icon | String / Slot | 'backtop' | 图标 | N
style | String | - | 自定义组件样式 | N
text | String | '' | 文案 | N
theme | String | round | 预设的样式类型。可选项：round/half-round/round-dark/half-round-dark | N

### BackTop Events

名称 | 参数 | 描述
-- | -- | --
to-top | \- | 点击触发
