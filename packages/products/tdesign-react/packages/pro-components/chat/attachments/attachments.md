:: BASE_DOC ::

## API

### Attachments Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
imageViewer | Boolean | true | 是否启用图片预览功能 | N
items | Array | - | 附件列表。TS 类型：`TdAttachmentItem` `import { TdAttachmentItem } from 'tdesign-web-components'`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/pro-components/chat/attachments/type.ts) | N
overflow | String | wrap | 是否显示删除按钮。可选项：scrollX/scrollY/wrap | N
removable | Boolean | true | 是否显示删除按钮 | N
onFileClick | Function |  | TS 类型：`(item: TdAttachmentItem) => void`<br/>点击文件时触发 | N
onRemove | Function |  | TS 类型：`(item: TdAttachmentItem, index: number) => void`<br/>点击删除按钮时触发 | N
