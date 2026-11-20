:: BASE_DOC ::
hat Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
actions | TElement | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
animation | String | skeleton | options: skeleton/moving/gradient | N
avatar | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
clearHistory | Boolean | true | \- | N
content | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
data | Array | - | Typescript: `Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; reasoning?: string }`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-list/type.ts) | N
datetime | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
isStreamLoad | Boolean | false | \- | N
layout | String | both | options: both/single | N
name | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reasoning | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reverse | Boolean | true | \- | N
textLoading | Boolean | false | \- | N
onClear | Function |  | Typescript: `(context: { e: MouseEvent }) => void`<br/>Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onScroll | Function |  | Typescript: `(context: { e: MouseEvent }) => void`<br/>Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N

### ChatInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
scrollToBottom | `(params: ScrollToBottomParams)` | \- | [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-list/type.ts). <br/>` type ScrollToBottomParams = { behavior: 'auto' \| 'smooth'} `<br/>

## API

### Chat Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
actions | TElement | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
animation | String | skeleton | options: skeleton/moving/gradient | N
avatar | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
clearHistory | Boolean | true | \- | N
content | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
data | Array | - | Typescript: `Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; reasoning?: string }`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-list/type.ts) | N
datetime | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
isStreamLoad | Boolean | false | \- | N
layout | String | both | options: both/single | N
name | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reasoning | TElement | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reverse | Boolean | true | \- | N
textLoading | Boolean | false | \- | N
onClear | Function |  | Typescript: `(context: { e: MouseEvent }) => void`<br/>Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onScroll | Function |  | Typescript: `(context: { e: MouseEvent }) => void`<br/>Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N

### ChatInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
scrollToBottom | `(params: ScrollToBottomParams)` | \- | [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-list/type.ts). <br/>` type ScrollToBottomParams = { behavior: 'auto' \| 'smooth'} `<br/>
