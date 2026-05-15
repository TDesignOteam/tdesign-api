:: BASE_DOC ::

## API

### ChatMarkdown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String | - | 必需。markdown 内容文本 | Y
options | Object | { gfm: true, pedantic: false, breaks: true } | Markdown 解析器基础配置。TS 类型：`TdChatContentMDOptions ` `interface TdChatContentMDOptions {gfm?: boolean; pedantic?: boolean; smartLists?: boolean; breaks?: boolean}`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-markdown/type.ts) | N
streaming | Object | - | 流式输出配置，控制尾部光标的显示与隐藏。尾部光标配置，true 使用默认光标 ▋，传对象可自定义光标字符。TS 类型：`TdChatMarkdownStreamingOptions` ` interface TdChatMarkdownStreamingOptions { hasNextChunk?: boolean; tail?: boolean \| { content?: string } }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-markdown/type.ts) | N

### ChatMarkdown Events

名称 | 参数 | 描述
-- | -- | --
click | `(context: TdMarkdownClickContext)` | 点击链接时触发。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/chat-markdown/type.ts)。<br/>`interface TdMarkdownClickContext {event: TouchEvent;node: TdMarkdownNode;}`<br/><br/>`interface TdMarkdownNode {   type: string;   raw?: string;   text?: string;   href?: string;   title?: string;   tokens?: TdMarkdownNode[];   [key: string]: unknown;}`<br/>
