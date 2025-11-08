:: BASE_DOC ::

## API

### ChatContent Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | Object | - | 必需。聊天内容对象。TS 类型：`TdChatContentType ` `interface TdChatContentType { type: 'text' \| 'markdown'; data: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/chat-content/type.ts) | Y
markdown-props | Object | - | marked 解析器的配置选项。TS 类型：`ChatMarkdownProps`，[ChatMarkdown API Documents](./chat-markdown?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/chat-content/type.ts) | N
role | String | - | 必需。消息角色，用于区分用户和助手的消息样式	。可选项：user/assistant/system | Y
status | String | - | 正文状态。可选项：error / '' | N
