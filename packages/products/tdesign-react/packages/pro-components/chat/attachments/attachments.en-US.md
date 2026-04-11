:: BASE_DOC ::

## API

### Attachments Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
imageViewer | Boolean | true | \- | N
items | Array | - | Typescript: `TdAttachmentItem` `import { TdAttachmentItem } from 'tdesign-web-components'`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/attachments/type.ts) | N
overflow | String | wrap | options: scrollX/scrollY/wrap | N
removable | Boolean | true | \- | N
onFileClick | Function |  | Typescript: `(item: TdAttachmentItem) => void`<br/> | N
onRemove | Function |  | Typescript: `(item: TdAttachmentItem, index: number) => void`<br/> | N
