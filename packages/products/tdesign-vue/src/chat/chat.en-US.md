:: BASE_DOC ::

## API

### Chat Props

name | type | default | description | required
-- | -- | -- | -- | --
actions | Slot / Function | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
animation | String | skeleton | options: skeleton/moving/gradient | N
avatar | Slot / Function | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
clearHistory | Boolean | true | \- | N
content | Slot / Function | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
data | Array | - | Typescript: `Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; reasoning?: string }`. [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/chat/type.ts) | N
datetime | Slot / Function | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
isStreamLoad | Boolean | false | \- | N
layout | String | both | options: both/single | N
name | Slot / Function | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
reasoning | Slot / Function | - | Typescript: `TNode<{ item: TdChatItemProps, index: number }>`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
reverse | Boolean | true | \- | N
textLoading | Boolean | false | \- | N
onClear | Function |  | Typescript: `(context: { e: MouseEvent }) => void`<br/>Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
onScroll | Function |  | Typescript: `(context: { e: MouseEvent }) => void`<br/>Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N

### Chat Events

name | params | description
-- | -- | --
clear | `(context: { e: MouseEvent })` | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)
scroll | `(context: { e: MouseEvent })` | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)

### ChatInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
scrollToBottom | `(params: ScrollToBottomParams)` | \- | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/chat/type.ts). <br/>` type ScrollToBottomParams = { behavior: 'auto' \| 'smooth'} `<br/>
