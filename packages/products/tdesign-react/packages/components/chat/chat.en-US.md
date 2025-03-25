:: BASE_DOC ::

## API

### Chat Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
actions | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
animation | String | skeleton | options: skeleton/moving/gradient | N
avatar | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
clearHistory | Boolean | true | \- | N
data | Array | - | Typescript：`Array<TdChatItemProps>` | N
datetime | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
isStreamLoad | Boolean | false | \- | N
layout | String | both | options: both/single | N
name | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reverse | Boolean | true | \- | N
textLoading | Boolean | false | \- | N
onClear | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onScroll | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N

### ChatInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
scrollToBottom | `(params: { behavior: 'auto' \| 'smooth'})` | \- | \-


### ChatLoading Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
animation | String | moving | options: moving/gradient | N
text | String | - | text of chat loading | N


### ChatItem Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
actions | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
animation | String | skeleton | options: skeleton/moving/gradient | N
avatar | TNode | - | Typescript：`String \| AvatarProps \| TNode `，[Avatar API Documents](./avatar?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/chat/type.ts) | N
content | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
datetime | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
name | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
reasoning | String / Object | false | Typescript：`boolean \| TdChatReasoning ` ` interface TdChatReasoning { expandIconPlacement?: 'left' \| 'right';onExpandChange?: (isExpand: boolean) => void; collapsePanelProps?: Object } `。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/chat/type.ts) | N
role | String | - | options: user/assistant/error/model-change/system | N
textLoading | Boolean | false | \- | N
variant | String | text | options: base/outline/text | N


### ChatContent Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
content | String | - | \- | N
role | String | - | options: user/assistant/error/model-change/system | N


### ChatAction Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
content | String | - | \- | N
disabled | Boolean | false | \- | N
isBad | Boolean | false | \- | N
isGood | Boolean | false | \- | N
operationBtn | Array | - | \- | N
onOperation | Function |  | Typescript：`(value:string, context: { e: MouseEvent }) => void`<br/> | N


### ChatInput Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
autofocus | Boolean | false | \- | N
autosize | Boolean / Object | { minRows: 1, maxRows: 5 } | Typescript：`boolean \| { minRows?: number; maxRows?: number }` | N
disabled | Boolean | false | \- | N
placeholder | String | - | \- | N
stopDisabled | Boolean | false | \- | N
onBlur | Function |  | Typescript：`(value:string, context: { e: FocusEvent }) => void`<br/> | N
onChange | Function |  | Typescript：`(value:string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent }) => void`<br/> | N
onFocus | Function |  | Typescript：`(value:string, context: { e: FocusEvent })  => void`<br/> | N
onSend | Function |  | Typescript：`(value:string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/> | N
onStop | Function |  | Typescript：`(value:string, context: { e: MouseEvent }) => void`<br/> | N


### ChatSender Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
prefix | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
stopDisabled | Boolean | false | \- | N
suffix | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onSend | Function |  | Typescript：`(value:string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/> | N
onStop | Function |  | Typescript：`(value:string, context: { e: MouseEvent }) => void`<br/> | N


### ChatContent Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
content | String | - | \- | N
role | String | - | options: user/assistant/error/model-change/system | N
