:: BASE_DOC ::

## API

### Toast Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
direction | String | row | 图标排列方式。可选项：row/column | N
duration | Number | 2000 | 弹窗显示毫秒数 | N
icon | String / Object / Slot | - | 自定义图标。传入对象则透传至 Icon 组件。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
message | String / Slot | - | 弹窗显示文字。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
overlay-props | Object | {} | 遮罩层属性，透传至 Overlay。TS 类型：`OverlayProps `，[Overlay API Documents](./overlay?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/toast/type.ts) | N
placement | String | middle | 弹窗展示位置。可选项： top/middle/bottom | N
prevent-scroll-through | Boolean | false | 防止滚动穿透，即不允许点击和滚动 | N
show-overlay | Boolean | false | 是否显示遮罩层 | N
theme | String | - | 提示类型。可选项：loading/success/error | N

### Toast Events

名称 | 参数 | 描述
-- | -- | --
close | \- | 轻提示隐藏的时候触发
destroy | \- | 轻提示销毁的时候触发
### Toast External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
