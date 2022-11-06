:: BASE_DOC ::

## API
### Toast Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style | String | - | 自定义组件样式 | N
direction | String | row | 图标排列方式。可选项：row/column | N
duration | Number | 2000 | 弹窗显示毫秒数 | N
external-classes | Array | - | 组件类名。`['t-class']` | N
icon | String | - | 自定义图标 | N
message | String / Slot | - | 弹窗显示文字 | N
overlay-props | Object | {} | 遮罩层属性，透传至 Overlay | N
placement | String | middle | 弹窗展示位置。可选项： top/middle/bottom | N
prevent-scroll-through | Boolean | false | 防止滚动穿透，即不允许点击和滚动 | N
show-overlay | Boolean | false | 是否显示遮罩层 | N
theme | String | - | 提示类型。可选项：loading/success/fail | N
