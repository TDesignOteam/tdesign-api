:: BASE_DOC ::

## API

### ChatSender Props

name | type | default | description | required
-- | -- | -- | -- | --
disabled | Boolean | false | \- | N
loading | Boolean | false | \- | N
placeholder | String | - | \- | N
prefix | String / Slot / Function | - | Typescript: `string \| TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
stopDisabled | Boolean | false | \- | N
suffix | String / Slot / Function | - | Typescript: `string \| TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
textareaProps | Object | - | Typescript: `TextareaProps`，[Textarea API Documents](./textarea?tab=api). [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/chat-sender/type.ts) | N
value | String | - | input value. `v-model` and `v-model:value` is supported | N
defaultValue | String | - | input value. uncontrolled property | N
onBlur | Function |  | Typescript: `(value: string, context: { e: FocusEvent }) => void`<br/> | N
onChange | Function |  | Typescript: `(value: string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent }) => void`<br/> | N
onFocus | Function |  | Typescript: `(value: string, context: { e: FocusEvent }) => void`<br/> | N
onSend | Function |  | Typescript: `(value: string, context: { e: MouseEvent \| KeyboardEvent }) => void`<br/> | N
onStop | Function |  | Typescript: `(value: string, context: { e: MouseEvent }) => void`<br/> | N

### ChatSender Events

name | params | description
-- | -- | --
blur | `(value: string, context: { e: FocusEvent })` | \-
change | `(value: string, context: { e: InputEvent \| MouseEvent \| KeyboardEvent })` | \-
focus | `(value: string, context: { e: FocusEvent })` | \-
send | `(value: string, context: { e: MouseEvent \| KeyboardEvent })` | \-
stop | `(value: string, context: { e: MouseEvent })` | \-
