:: BASE_DOC ::

## API
### Dialog Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
actions | Array / Slot | - | 操作栏。TS 类型：`Array<ButtonProps>`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
button-layout | String | horizontal | 多按钮排列方式。可选项：horizontal/vertical | N
cancel-btn | String / Object / Slot | - | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts) | N
close-on-overlay-click | Boolean | undefined | 点击蒙层时是否触发关闭事件 | N
confirm-btn | String / Object / Slot | - | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件 | N
content | String / Slot | - | 内容 | N
external-classes | Array | - | 组件类名，分别用于设置 组件外层元素、组件内容部分、确认按钮、取消按钮 等元素类名。`['t-class', 't-class-content', 't-class-confirm', 't-class-cancel']` | N
overlay-props | Object | {} | 透传至 Overlay 组件 | N
prevent-scroll-through | Boolean | true | 防止滚动穿透 | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
style | String | - | 自定义组件样式 | N
title | String / Slot | - | 标题 | N
visible | Boolean | false | 控制对话框是否显示 | N
z-index | Number | 11500 | 对话框层级，Web 侧样式默认为 2500，移动端样式默认 2500，小程序样式默认为 11500 | N

### Dialog Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件
close | `(trigger: DialogEventSource)` | 关闭事件，点击 取消按钮 或 点击蒙层 时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dialog/type.ts)。<br/>`type DialogEventSource = 'cancel' \| 'overlay'`<br/>
confirm | - | 如果“确认”按钮存在，则点击“确认”按钮时触发
overlay-click | - | 如果蒙层存在，点击蒙层时触发
