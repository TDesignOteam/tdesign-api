:: BASE_DOC ::

## API

### ChatMessage Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
animation | String | skeleton | 动画效果。可选项：skeleton/moving/gradient/dots | N
avatar | String | - | 自定义的头像配置 | N
chat-content-props | Object | - | 聊天内容组件的属性，支持通过 `thinking` 字段透传 ChatThinking 组件属性。TS 类型：`ChatMessageContentProps` `interface ChatMessageContentProps extends ChatContentProps { thinking?: MessageThinking; }` `type MessageThinking = Pick<ChatThinkingProps, 'animation' \| 'collapsed' \| 'layout' \| 'maxHeight'>  ` `import { ChatContentProps } from '@ChatContent'`，[ChatThinking API Documents](./chat-thinking?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-message/type.ts) | N
chat-id | String | - | 聊天消息的唯一标识 | N
content | Array | - | 消息内容，数组中的每一项为一个消息内容对象。TS 类型：`ChatMessageContent[] ` `type ChatMessageContent = TextContent \| MarkdownContent \| ThinkingContent \| AttachmentContent` ` type AttachmentContent = ChatBaseContent<'attachment', FileItem[]>` `type ThinkingContent = ChatBaseContent<'thinking', ThinkingContentData>` `type MarkdownContent = ChatBaseContent<'markdown', string>` `type TextContent = ChatBaseContent<'text', string>` `interface ThinkingContentData {title?: string; text: string}` `interface ChatBaseContent<T extends ChatContentType, TData> {type: T; data: TData}` `type ChatMessageStatus = 'pending' \| 'streaming' \| 'complete' \| 'stop' \| 'error'` `type ChatContentType = \| 'text' \| 'markdown' \| 'thinking' \| 'attachment'`，[Attachments API Documents](./attachments?tab=api)。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-message/type.ts) | N
datetime | String | - | 对话单元的时间配置 | N
name | String | - | 自定义的昵称 | N
placement | String | - | 消息显示位置。可选项：left/right | N
role | String | user | 消息角色。可选项：user/assistant/system | N
status | String | - | 消息状态。可选项：pending/streaming/complete/stop/error  | N
variant | String | base | 气泡框样式，支持基础、线框、文字三种类型。可选项：base/outline/text | N

### ChatMessage Events

名称 | 参数 | 描述
-- | -- | --
longpress | `(context: { e: MouseEvent, id: string })` | \-

### ChatMessage Slots

名称 | 描述
-- | --
avatar | 自定义 `avatar` 显示内容
content | 自定义消息内容
name | 自定义 `name` 显示内容
