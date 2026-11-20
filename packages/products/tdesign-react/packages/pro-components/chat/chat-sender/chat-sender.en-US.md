:: BASE_DOC ::

## API

### ChatSender Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
disabled | Boolean | false | \- | N
loading | Boolean | false | \- | N
placeholder | String | - | \- | N
prefix | TNode | - | Typescript: `string \| TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
stopDisabled | Boolean | false | \- | N
suffix | TNode | - | Typescript: `string \| TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
textareaProps | Object | - | Typescript: `TextareaProps`，[Textarea API Documents](./textarea?tab=api). [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-sender/type.ts) | N
value | String | - | input value | N
defaultValue | String | - | input value. uncontrolled property | N
onBlur | Function |  | Typescript: `(value: string, context: { e: FocusEvent }) => void`<br/> | N
onChange | Function |  | Typescript: `(value: string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent }) => void`<br/> | N
onFocus | Function |  | Typescript: `(value: string, context: { e: FocusEvent }) => void`<br/> | N
onSend | Function |  | Typescript: `(value: string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/> | N
onStop | Function |  | Typescript: `(value: string, context: { e: MouseEvent }) => void`<br/> | N
