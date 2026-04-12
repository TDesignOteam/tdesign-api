:: BASE_DOC ::

## API

### ChatContent Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
content | String / Object | - | Typescript: `string \| ChatContentData` `interface ChatContentData { type: 'text' \| 'markdown'; data: any; }`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-content/type.ts) | N
markdownProps | Object | - | Typescript: `{engine: 'cherry-markdown' \| 'marked', options: ChatMarkdownProps }`，[ChatMarkdown API Documents](./chat-markdown?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-content/type.ts) | N
role | String | - | options: user/assistant/error/model-change/system | N
status | String | - | options: error / '' | N
