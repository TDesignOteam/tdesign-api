:: BASE_DOC ::

## API

### Comment Props

name | type | default | description | required
-- | -- | -- | -- | --
actions | Array / Slot / Function | - | Typescript: `Array<CommentAction> \| TNode ` `type ActionPlacement = 'start' \| 'end'` `interface CommentActionItem { key: string; icon?: TNode; content?: string \| TNode; count?: string \| number; placement?: ActionPlacement; disabled?: boolean}` `type CommentAction = TNode \| CommentActionItem;`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/comment/type.ts) | N
author | String / Slot / Function | - | Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
avatar | String / Object / Slot / Function | - | Typescript: `string \| AvatarProps \| TNode`，[Avatar API Documents](./avatar?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/comment/type.ts) | N
content | String / Slot / Function | - | Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
datetime | String / Slot / Function | - | Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
fold | Object | - | `v-model` and `v-model:fold` is supported。Typescript: `CommentFold ` `type CommentFoldState = 'collapsed' \| 'expanded' \| 'all'` `interface CommentFold { state: CommentFoldState; total?: number; visible?: number; step?: number; text?: Partial<Record<CommentFoldState, string>>;}`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/comment/type.ts) | N
reply | String / Slot / Function | - | Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
onActions | Function |  | Typescript: `(context: { action: CommentActionItem \| TNode; e: Event }) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
onFold | Function |  | Typescript: `(context: { fold: CommentFold; e: Event }) => void`<br/> | N

### Comment Events

name | params | description
-- | -- | --
actions | `(context: { action: CommentActionItem \| TNode; e: Event })` | [see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts)
fold | `(context: { fold: CommentFold; e: Event })` | \-
