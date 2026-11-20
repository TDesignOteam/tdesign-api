:: BASE_DOC ::

## API

### ChatInput Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
autofocus | Boolean | false | \- | N
autosize | Boolean / Object | { minRows: 1, maxRows: 5 } | Typescript: `boolean \| { minRows?: number; maxRows?: number }` | N
disabled | Boolean | false | \- | N
placeholder | String | - | \- | N
stopDisabled | Boolean | false | \- | N
suffixIcon | TElement | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
value | String | - | input value | N
defaultValue | String | - | input value. uncontrolled property | N
onBlur | Function |  | Typescript: `(value:string, context: { e: FocusEvent }) => void`<br/> | N
onChange | Function |  | Typescript: `(value:string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent }) => void`<br/> | N
onFocus | Function |  | Typescript: `(value:string, context: { e: FocusEvent }) => void`<br/> | N
onSend | Function |  | Typescript: `(value:string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/> | N
onStop | Function |  | Typescript: `(value:string, context: { e: MouseEvent }) => void`<br/> | N
