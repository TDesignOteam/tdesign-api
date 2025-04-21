:: BASE_DOC ::

## API

### Chat Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
actions | TElement | - | 自定义操作按钮的插槽。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
animation | String | skeleton | 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种。可选项：skeleton/moving/gradient | N
avatar | TElement | - | 自定义每个对话单元的头像插槽。TS 类型：`TNode<{ item: TdChatItemProps, index: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
clearHistory | Boolean | true | 是否显示清空历史 | N
content | TElement | - | 自定义每个对话单独的聊天内容。TS 类型：`TNode<{ item: TdChatItemProps, index: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
data | Array | - | 对话列表的数据。TS 类型：`Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; reasoning?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/chat/type.ts) | N
datetime | TElement | - | 自定义每个对话单元的时间。TS 类型：`TNode<{ item: TdChatItemProps, index: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
isStreamLoad | Boolean | false | 流式加载是否结束 | N
layout | String | both | 对话布局形式，支持两侧对齐与左对齐。可选项：both/single | N
name | TElement | - | 自定义每个对话单元的昵称。TS 类型：`TNode<{ item: TdChatItemProps, index: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reasoning | TElement | - | 自定义每个对话单元的思考过程的插槽。TS 类型：`TNode<{ item: TdChatItemProps, index: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reverse | Boolean | true | 是否表现为倒序 | N
textLoading | Boolean | false | 新消息是否处于加载状态，加载状态默认显示骨架屏，接口请求返回数据时请将新消息加载状态置为false | N
onClear | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>点击清空历史按钮回调。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onScroll | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>滚动事件的回调。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N

### ChatInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
scrollToBottom | `(params: ScrollToBottomParams)` | \- | 对话列表过长时，支持对话列表重新滚动回底部的方法。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/chat/type.ts)。<br/>` type ScrollToBottomParams = { behavior: 'auto' \| 'smooth'} `<br/>


### ChatLoading Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
animation | String | gradient | 加载的状态形式。可选项：moving/gradient | N
text | String | - | 加载过程展示的文字内容 | N


### ChatItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
actions | TNode | - | 自定义的操作内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
animation | String | skeleton | 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种。可选项：skeleton/moving/gradient | N
avatar | TNode | - | 自定义的头像配置。TS 类型：`String \| AvatarProps \| TNode `，[Avatar API Documents](./avatar?tab=api)。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/chat/type.ts) | N
content | TNode | - | 对话单元的内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
datetime | TNode | - | 对话单元的时间配置。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
name | TNode | - | 自定义的昵称。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reasoning | String / Boolean / Object | false | 值为false不显示思维链，为string则显示内置推理内容交互，为对象则单独配置推理内容。TS 类型：`boolean \| TdChatReasoning ` ` interface TdChatReasoning { expandIconPlacement?: 'left' \| 'right';onExpandChange?: (isExpand: boolean) => void; collapsePanelProps?: Object } `。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/chat/type.ts) | N
role | String | - | 角色，不同选项配置不同的样式，支持类型包括用户、助手、错误、模型切换、系统消息。可选项：user/assistant/error/model-change/system | N
textLoading | Boolean | false | 新消息是否处于加载状态，加载状态默认显示骨架屏，接口请求返回数据时请将新消息加载状态置为false | N
variant | String | text | 气泡框样式，支持基础、线框、文字三种类型。可选项：base/outline/text | N


### ChatContent Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
content | String | - | 聊天内容，支持 markdown 格式 | N
role | String | - | 角色，不同选项配置不同的样式，支持类型包括用户、助手、错误、模型切换、系统消息。可选项：user/assistant/error/model-change/system | N


### ChatAction Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
content | String | - | 被复制的内容 | N
disabled | Boolean | false | 操作按钮是否可点击 | N
isBad | Boolean | false | 是否点踩 | N
isGood | Boolean | false | 是否点赞 | N
operationBtn | Array | ["replay", "copy", "good", "bad"] | 操作按钮配置项，可配置操作按钮选项和顺序。TS 类型：`Array<'replay'\|'copy'\|'good'\|'bad'>` | N
onOperation | Function |  | TS 类型：`(value:string, context: { e: MouseEvent }) => void`<br/>点击点赞，点踩，复制，重新生成按钮时触发 | N


### ChatInput Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
autofocus | Boolean | false | 输入框是否自动聚焦 | N
autosize | Boolean / Object | { minRows: 1, maxRows: 5 } | 高度自动撑开。 autosize = true 表示组件高度自动撑开，同时，依旧允许手动拖高度。如果设置了 autosize.maxRows 或者 autosize.minRows 则不允许手动调整高度。TS 类型：`boolean \| { minRows?: number; maxRows?: number }` | N
disabled | Boolean | false | 是否禁用输入框 | N
placeholder | String | - | 输入框默认文案 | N
stopDisabled | Boolean | false | 中止按钮是否可点击。等流式数据全部返回结束置为false，注意跟textLoading的控制时机不是同一个 | N
suffixIcon | TElement | - | 发送按钮的自定义扩展。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
value | String | - | 输入框的值 | N
defaultValue | String | - | 输入框的值。非受控属性 | N
onBlur | Function |  | TS 类型：`(value:string, context: { e: FocusEvent }) => void`<br/>输入框聚焦时触发 | N
onChange | Function |  | TS 类型：`(value:string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent }) => void`<br/>输入框值发生变化时触发 | N
onFocus | Function |  | TS 类型：`(value:string, context: { e: FocusEvent })  => void`<br/>输入框聚焦时触发 | N
onSend | Function |  | TS 类型：`(value:string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/>点击消息发送的回调方法 | N
onStop | Function |  | TS 类型：`(value:string, context: { e: MouseEvent }) => void`<br/>点击消息终止的回调方法 | N


### ChatSender Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
disabled | Boolean | false | 是否禁用输入框 | N
placeholder | String | - | 输入框默认文案 | N
prefix | TNode | - | 输入框左下角区域扩展。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
stopDisabled | Boolean | false | 中止按钮是否可点击。等流式数据全部返回结束置为false，注意跟textLoading的控制时机不是同一个 | N
suffix | TNode | - | 输入框右下角区域扩展。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
textareaProps | Object | - | 透传给  Textarea 组件的全部属性。TS 类型：`TextareaProps`，[Textarea API Documents](./textarea?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/chat/type.ts) | N
value | String | - | 输入框的值 | N
defaultValue | String | - | 输入框的值。非受控属性 | N
onBlur | Function |  | TS 类型：`(value:string, context: { e: FocusEvent }) => void`<br/>输入框聚焦时触发 | N
onChange | Function |  | TS 类型：`(value:string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent }) => void`<br/>输入框值发生变化时触发 | N
onFocus | Function |  | TS 类型：`(value:string, context: { e: FocusEvent })  => void`<br/>输入框聚焦时触发 | N
onSend | Function |  | TS 类型：`(value:string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/>点击消息发送的回调方法 | N
onStop | Function |  | TS 类型：`(value:string, context: { e: MouseEvent }) => void`<br/>点击消息终止的回调方法 | N


### ChatReasoning Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
collapsePanelProps | Object | { destroyOnCollapse: false } | 透传给 CollapsePanel 组件的全部属性。TS 类型：`CollapsePanelProps`，[Collapse API Documents](./collapse?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/chat/type.ts) | N
expand | Boolean | - | \- | N
defaultExpand | Boolean | - | 非受控属性 | N
expandIcon | TElement | - | 当前折叠面板展开图标。优先级低于collapsePanelProps.expandIcon。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
expandIconPlacement | String | right | 展开图标位置，可选项：left/right。可选项：left/right | N
header | TElement | - | 折叠面板头内容。优先级低于collapsePanelProps.header。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
headerRightContent | TElement | - | 折叠面板尾内容。优先级低于collapsePanelProps.headerRightContent。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onExpandChange | Function |  | TS 类型：`(value: boolean) => void`<br/>展开图标点击事件。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
