:: BASE_DOC ::

## API

### ChatMarkdown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
content | String | - | markdown 内容文本 | N
options | Object | - | Markdown 解析器基础配置。TS 类型：`TdChatContentMDOptions` ` import type { TdChatContentMDOptions } from 'tdesign-web-components/chat-message/content/markdown-content' `。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-markdown/type.ts) | N
