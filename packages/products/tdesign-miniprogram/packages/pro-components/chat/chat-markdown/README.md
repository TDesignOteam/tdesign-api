:: BASE_DOC ::

## API

### ChatMarkdown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | String | - | 必需。markdown 内容文本 | Y
options | Object | { gfm: true, pedantic: false, breaks: true } | Markdown 解析器基础配置。TS 类型：`TdChatContentMDOptions ` `interface TdChatContentMDOptions {gfm?: boolean; pedantic?: boolean; smartLists?: boolean; breaks?: boolean}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-markdown/type.ts) | N

### ChatMarkdown Events

名称 | 参数 | 描述
-- | -- | --
click | `(detail: {detail:{event, node}, currentTarget, target})` | 点击链接时触发
