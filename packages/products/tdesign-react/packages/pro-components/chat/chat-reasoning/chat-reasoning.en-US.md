:: BASE_DOC ::

## API

### ChatReasoning Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
collapsePanelProps | Object | { destroyOnCollapse: false } | Typescript: `CollapsePanelProps`，[Collapse API Documents](./collapse?tab=api). [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-reasoning/type.ts) | N
expandIcon | TElement | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
expandIconPlacement | String | right | options: left/right | N
header | TElement | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
headerRightContent | TElement | - | Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onExpandChange | Function |  | Typescript: `(value: CollapseValue) => void`<br/>Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts). [see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/chat-reasoning/type.ts). <br/>`import { CollapseValue } from '@Collapse'`<br/> | N
