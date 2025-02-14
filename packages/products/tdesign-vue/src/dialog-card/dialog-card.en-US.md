:: BASE_DOC ::

## API


### DialogCard Props

name | type | default | description | required
-- | -- | -- | -- | --
body | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
cancelBtn | String / Object / Slot / Function | - | Typescript：`string \| ButtonProps \| TNode \| null`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/dialog/type.ts) | N
closeBtn | String / Boolean / Slot / Function | true | Typescript：`string \| ButtonProps \| TNode \| null`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/dialog/type.ts) | N
confirmBtn | String / Object / Slot / Function | true | Typescript：`string \| ButtonProps \| TNode \| null`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
confirmLoading | Boolean | - | confirm button loading status。Typescript：`string \| ButtonProps \| TNode \| null`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
footer | Boolean / Slot / Function | true | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
header | String / Boolean / Slot / Function | true | Typescript：`string \| boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
theme | String | default | options: default/info/warning/danger/success | N
`Pick<DialogProps, 'body' \| 'cancelBtn' \| 'closeBtn' \| 'confirmBtn' \| 'footer' \| 'header' \| 'theme' \| 'onCancel' \| 'onCloseBtnClick' \| 'onConfirm' \| 'confirmLoading'>` | String / Slot / Function | - | extends `Pick<DialogProps, 'body' \| 'cancelBtn' \| 'closeBtn' \| 'confirmBtn' \| 'footer' \| 'header' \| 'theme' \| 'onCancel' \| 'onCloseBtnClick' \| 'onConfirm' \| 'confirmLoading'>`。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
onCancel | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>options: default/info/warning/danger/success | N
onCloseBtnClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>options: default/info/warning/danger/success | N
onConfirm | Function |  | Typescript：`(context: { e: MouseEvent \| KeyboardEvent }) => void`<br/>options: default/info/warning/danger/success | N

### DialogCard Events

name | params | description
-- | -- | --
cancel | `(context: { e: MouseEvent })` | options: default/info/warning/danger/success
close-btn-click | `(context: { e: MouseEvent })` | options: default/info/warning/danger/success
confirm | `(context: { e: MouseEvent \| KeyboardEvent })` | options: default/info/warning/danger/success
