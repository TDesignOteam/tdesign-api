:: BASE_DOC ::

## API


### DialogCard Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
body | String / Slot / Function | - | 对话框内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
cancelBtn | String / Object / Slot / Function | - | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件。TS 类型：`string \| ButtonProps \| TNode \| null`，[Button API Documents](./button?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/dialog/type.ts) | N
closeBtn | String / Boolean / Slot / Function | true | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例。TS 类型：`string \| ButtonProps \| TNode \| null`，[Button API Documents](./button?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/dialog/type.ts) | N
confirmBtn | String / Object / Slot / Function | true | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件。TS 类型：`string \| ButtonProps \| TNode \| null`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
confirmLoading | Boolean | - | 确认按钮加载状态。TS 类型：`string \| ButtonProps \| TNode \| null`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
footer | Boolean / Slot / Function | true | 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 不显示任何内容，值类型为 Function 表示自定义底部内容。TS 类型：`boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
header | String / Boolean / Slot / Function | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 string 则直接显示值，值类型为 Function 表示自定义头部内容。TS 类型：`string \| boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
theme | String | default | 对话框风格。可选项：default/info/warning/danger/success | N
`Pick<DialogProps, 'body' \| 'cancelBtn' \| 'closeBtn' \| 'confirmBtn' \| 'footer' \| 'header' \| 'theme' \| 'onCancel' \| 'onCloseBtnClick' \| 'onConfirm' \| 'confirmLoading'>` | String / Slot / Function | - | 继承 `Pick<DialogProps, 'body' \| 'cancelBtn' \| 'closeBtn' \| 'confirmBtn' \| 'footer' \| 'header' \| 'theme' \| 'onCancel' \| 'onCloseBtnClick' \| 'onConfirm' \| 'confirmLoading'>` 中的全部属性。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
onCancel | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件。可选项：default/info/warning/danger/success | N
onCloseBtnClick | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>点击右上角关闭按钮时触发。可选项：default/info/warning/danger/success | N
onConfirm | Function |  | TS 类型：`(context: { e: MouseEvent \| KeyboardEvent }) => void`<br/>如果“确认”按钮存在，则点击“确认”按钮时触发，或者键盘按下回车键时触发。可选项：default/info/warning/danger/success | N

### DialogCard Events

名称 | 参数 | 描述
-- | -- | --
cancel | `(context: { e: MouseEvent })` | 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件。可选项：default/info/warning/danger/success
close-btn-click | `(context: { e: MouseEvent })` | 点击右上角关闭按钮时触发。可选项：default/info/warning/danger/success
confirm | `(context: { e: MouseEvent \| KeyboardEvent })` | 如果“确认”按钮存在，则点击“确认”按钮时触发，或者键盘按下回车键时触发。可选项：default/info/warning/danger/success
