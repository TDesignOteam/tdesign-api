:: BASE_DOC ::

## API

### ChatContent Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
content | String / Object | - | 聊天内容，支持多种内容类型。可以是字符串或结构化对象。TS 类型：`string \| ChatContentData` `interface ChatContentData { type: 'text' \| 'markdown'; data: any; }`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-content/type.ts) | N
markdownProps | Object | - | engine可选项：cherry-markdown/marked,options是透传给 ChatMarkdown 组件的全部属性。TS 类型：`{engine: 'cherry-markdown' \| 'marked', options: ChatMarkdownProps }`，[ChatMarkdown API Documents](./chat-markdown?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-content/type.ts) | N
role | String | - | 角色，不同选项配置不同的样式，支持类型包括用户、助手、错误、模型切换、系统消息。可选项：user/assistant/error/model-change/system | N
status | String | - | 正文状态。可选项：error / '' | N
