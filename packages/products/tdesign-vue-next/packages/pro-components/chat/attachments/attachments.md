:: BASE_DOC ::

## API

### Attachments Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
imageViewer | Boolean | true | 是否启用图片预览功能 | N
items | Array | - | 附件列表。TS 类型：`TdAttachmentItem` `import { TdAttachmentItem } from 'tdesign-web-components'`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/attachments/type.ts) | N
overflow | String | wrap | 是否显示删除按钮。可选项：scrollX/scrollY/wrap | N
removable | Boolean | true | 是否显示删除按钮 | N
onFileClick | Function |  | TS 类型：`(item: TdAttachmentItem) => void`<br/>点击文件时触发 | N
onRemove | Function |  | TS 类型：`(item: TdAttachmentItem, index: number) => void`<br/>点击删除按钮时触发 | N

### Attachments Events

名称 | 参数 | 描述
-- | -- | --
file-click | `(item: TdAttachmentItem)` | 点击文件时触发
remove | `(item: TdAttachmentItem, index: number)` | 点击删除按钮时触发
