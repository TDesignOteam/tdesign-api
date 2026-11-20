:: BASE_DOC ::

## API

### ChatReasoning Props

name | type | default | description | required
-- | -- | -- | -- | --
collapsePanelProps | Object | { destroyOnCollapse: false } | Typescript: `CollapsePanelProps`，[Collapse API Documents](./collapse?tab=api). [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/chat-reasoning/type.ts) | N
expandIcon | Slot / Function | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
expandIconPlacement | String | right | options: left/right | N
header | Slot / Function | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
headerRightContent | Slot / Function | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
onExpandChange | Function |  | Typescript: `(value: CollapseValue) => void`<br/>Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts). [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/chat-reasoning/type.ts). <br/>`import { CollapseValue } from '@Collapse'`<br/> | N

### ChatReasoning Events

name | params | description
-- | -- | --
expand-change | `(value: CollapseValue)` | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts). [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/chat-reasoning/type.ts). <br/>`import { CollapseValue } from '@Collapse'`<br/>
