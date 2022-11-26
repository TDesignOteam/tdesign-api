:: BASE_DOC ::

## API
### Divider Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | center | 文本位置（仅在水平分割线有效）。可选项：left/right/center | N
content | String / Slot | - | 子元素 | N
custom-style | String | - | `v0.25.0`。自定义组件样式 | N
dashed | Boolean | false | 是否虚线（仅在水平分割线有效） | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层类名、分隔线类名 等。`['t-class', 't-class-line', 't-class-content']` | N
layout | String | horizontal | 分隔线类型有两种：水平和垂直。可选项：horizontal/vertical | N
line-color | String | - | 分隔线颜色 | N
style | String | - | 自定义组件样式 | N
