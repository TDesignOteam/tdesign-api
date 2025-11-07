:: BASE_DOC ::

## API

### Attachments Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
addable | Boolean | true | 【讨论中】是否显示添加按钮 | N
image-viewer | Boolean | true | 是否启用图片预览功能 | N
items | Array | [] | 【实验】附件列表。TS 类型：`FileItem[]` `interface FileItem { fileType: 'image'\|'video'\|'audio'\|'pdf'\|'doc'\|'ppt'\|'txt'; name: string; url: string; size: number; status?: 'success'\|'fail'\|'pending'\|'error'; progress?: number; errorMessage?: string; fileIcon?: string; width?: number; height?: number; mode?: 'aspectFit' \| 'aspectFill' \| 'widthFix' \| 'heightFix' \| 'scaleToFill'}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/attachments/type.ts) | N
removable | Boolean | true | 是否显示删除按钮 | N

### Attachments Events

名称 | 参数 | 描述
-- | -- | --
add | \- | 点击添加按钮时触发
file-click | `(item: FileItem)` | 点击文件时触发
remove | `(item: FileItem, index: number)` | 点击删除按钮时触发
