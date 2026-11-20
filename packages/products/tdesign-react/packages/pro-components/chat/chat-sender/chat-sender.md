:: BASE_DOC ::

## API

### ChatSender Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
disabled | Boolean | false | 是否禁用输入框 | N
loading | Boolean | false | 发送按钮是否处于加载状态 | N
placeholder | String | - | 输入框默认文案。组件内置默认值为：'请输入消息...' | N
prefix | TNode | - | 输入框左下角区域扩展。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
stopDisabled | Boolean | false | 中止按钮是否可点击。等流式数据全部返回结束置为false，注意跟textLoading的控制时机不是同一个 | N
suffix | TNode | - | 输入框右下角区域扩展。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
textareaProps | Object | - | 透传给  Textarea 组件的全部属性。TS 类型：`TextareaProps`，[Textarea API Documents](./textarea?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-sender/type.ts) | N
value | String | - | 输入框的值 | N
defaultValue | String | - | 输入框的值。非受控属性 | N
onBlur | Function |  | TS 类型：`(value: string, context: { e: FocusEvent }) => void`<br/>输入框聚焦时触发 | N
onChange | Function |  | TS 类型：`(value: string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent }) => void`<br/>输入框值发生变化时触发 | N
onFocus | Function |  | TS 类型：`(value: string, context: { e: FocusEvent }) => void`<br/>输入框聚焦时触发 | N
onSend | Function |  | TS 类型：`(value: string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/>点击消息发送的回调方法 | N
onStop | Function |  | TS 类型：`(value: string, context: { e: MouseEvent }) => void`<br/>点击消息终止的回调方法 | N
