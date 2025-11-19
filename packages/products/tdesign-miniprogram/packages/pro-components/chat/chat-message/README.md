:: BASE_DOC ::

## API

### ChatMessage Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
animation | String | skeleton | 动画效果。可选项：skeleton/moving/gradient/dots | N
avatar | String | - | 自定义的头像配置 | N
chat-content-props | Object | - | 聊天内容组件的属性。TS 类型：`ChatContentProps`，[ChatContent API Documents](./chat-content?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-message/type.ts) | N
chat-id | String | - | 聊天消息的唯一标识 | N
content | Array | - | 消息内容，数组中的每一项为一个消息内容对象。TS 类型：`ChatMessageContent[] ` `type ChatMessageContent = TextContent \| MarkdownContent \| ThinkingContent \| AttachmentContent` ` type AttachmentContent = ChatBaseContent<'attachment', FileItem[]>` `type ThinkingContent = ChatBaseContent<'thinking', ThinkingContentData>` `type MarkdownContent = ChatBaseContent<'markdown', string>` `type TextContent = ChatBaseContent<'text', string>` `interface ThinkingContentData {title?: string; text: string}` `interface ChatBaseContent<T extends ChatContentType, TData> {type: T; data: TData}` `type ChatMessageStatus = 'pending' \| 'streaming' \| 'complete' \| 'stop' \| 'error'` `type ChatContentType = \| 'text' \| 'markdown' \| 'thinking' \| 'attachment'`，[Attachments API Documents](./attachments?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-message/type.ts) | N
datetime | String | - | 对话单元的时间配置 | N
name | String | - | 自定义的昵称 | N
placement | String | - | 消息显示位置。可选项：left/right | N
role | String | user | 消息角色。可选项：user/assistant/system | N
status | String | - | 消息状态。可选项：pending/streaming/complete/stop/error  | N
variant | String | base | 气泡框样式，支持基础、线框、文字三种类型。可选项：base/outline/text | N

### ChatMessage Events

名称 | 参数 | 描述
-- | -- | --
longpress | `(detail: { id: string })` | \-

### ChatMessage Slots

名称 | 描述
-- | --
avatar | 自定义 `avatar` 显示内容
datetime | 自定义 `datetime` 显示内容
name | 自定义 `name` 显示内容
