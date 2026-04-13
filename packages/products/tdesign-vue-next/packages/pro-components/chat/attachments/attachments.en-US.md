:: BASE_DOC ::

## API

### Attachments Props

name | type | default | description | required
-- | -- | -- | -- | --
imageViewer | Boolean | true | \- | N
items | Array | - | Typescript: `TdAttachmentItem` `import { TdAttachmentItem } from 'tdesign-web-components'`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/attachments/type.ts) | N
overflow | String | wrap | options: scrollX/scrollY/wrap | N
removable | Boolean | true | \- | N
onFileClick | Function |  | Typescript: `(item: TdAttachmentItem) => void`<br/> | N
onRemove | Function |  | Typescript: `(item: TdAttachmentItem, index: number) => void`<br/> | N

### Attachments Events

name | params | description
-- | -- | --
file-click | `(item: TdAttachmentItem)` | \-
remove | `(item: TdAttachmentItem, index: number)` | \-
