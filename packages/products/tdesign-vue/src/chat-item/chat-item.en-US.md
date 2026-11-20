:: BASE_DOC ::

## API

### ChatItem Props

name | type | default | description | required
-- | -- | -- | -- | --
actions | String / Slot / Function | - | Typescript: `string \| TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
animation | String | skeleton | options: skeleton/moving/gradient | N
avatar | String / Object / Slot / Function | - | Typescript: `String \| AvatarProps \| TNode `，[Avatar API Documents](./avatar?tab=api). [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts). [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/chat-item/type.ts) | N
content | String / Slot / Function | - | Typescript: `string \| TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
datetime | String / Slot / Function | - | Typescript: `string \| TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
name | String / Slot / Function | - | Typescript: `string \| TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
reasoning | String / Boolean / Object | false | Typescript: `boolean \| TdChatReasoning ` ` interface TdChatReasoning { expandIconPlacement?: 'left' \| 'right';onExpandChange?: (isExpand: boolean) => void; collapsePanelProps?: Object } `. [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/chat-item/type.ts) | N
role | String | - | options: user/assistant/error/model-change/system | N
textLoading | Boolean | false | \- | N
variant | String | text | options: base/outline/text | N
