:: BASE_DOC ::

## API

### Upload Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
add-content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
allow-upload-duplicate-file | Boolean | false | allow to upload duplicate name files | N
config | Object | - | Typescript：`UploadMpConfig` `type UploadMpConfig = ImageConfig \| VideoConfig` `interface ImageConfig { count?: number; sizeType?: Array<SizeTypeValues>; sourceType?: Array<SourceTypeValues> }` `type SizeTypeValues = 'original' \| 'compressed'` `type SourceTypeValues = 'album' \| 'camera'` `interface VideoConfig { sourceType?: Array<SourceTypeValues>; compressed?: boolean; maxDuration?: number; camera?: 'back' \| 'front' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
disabled | Boolean | false | \- | N
default-disabled | Boolean | undefined | uncontrolled property | N
draggable | Boolean / Object | - | \- | N
file-list-display | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
default-file-list-display | Slot | undefined | uncontrolled property。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
files | Array | - | Typescript：`Array<UploadFile>` `interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \| 'video'; percent?: number; status: 'loading' \| 'reload' \| 'failed' \| 'done' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
default-files | Array | undefined | uncontrolled property。Typescript：`Array<UploadFile>` `interface UploadFile { url: string; name?: string; size?: number; type?: 'image' \| 'video'; percent?: number; status: 'loading' \| 'reload' \| 'failed' \| 'done' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
grid-config | Object | - | Typescript：`{column?: number;  width?: number; height?: number;}` | N
default-grid-config | Object | undefined | uncontrolled property。Typescript：`{column?: number;  width?: number; height?: number;}` | N
gutter | Number | 16 | \- | N
default-gutter | Number | undefined | uncontrolled property | N
image-props | Object | - | Typescript：`ImageProps`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
max | Number | 0 | max count of files limit | N
media-type | Array | ['image', 'video'] | Typescript：`Array<MediaType>` `type MediaType = 'image' \| 'video'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
request-method | Function | - | \- | N
size-limit | Number / Object | - | files size limit。Typescript：`number \| SizeLimitObj` `interface SizeLimitObj { size: number; unit: SizeUnit ; message?: string }` `type SizeUnitArray = ['B', 'KB', 'MB', 'GB']` `type SizeUnit = SizeUnitArray[number]`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts) | N
source | String | media | options: media/messageFile | N
transition | Object | `{ backTransition: true, duration: 300, timingFunction: 'ease' }` | Typescript：`{ backTransition: boolean, duration: number, timingFunction: string }，`duration`单位为ms。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)` | N

### Upload Events

name | params | description
-- | -- | --
add | `(files: MediaContext)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]`<br/><br/>`interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }`<br/><br/>`interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number  }`<br/>
click | `(file: VideoContext \| ImageContext)` | \-
complete | \- | \-
drop | `(files: MediaContext)` | \-
fail | \- | \-
remove | `(index: number; file: UploadFile)` | \-
select-change | `(files: MediaContext[]; currentSelectedFiles: MediaContext[])` | \-
success | `(files: MediaContext)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/upload/type.ts)。<br/>`type MediaContext = VideoContext[] \| ImageContext[]`<br/><br/>`interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }`<br/><br/>`interface ImageContext { name: string; type: string; url: string;  size: number; width: number; height: number; progress: number  }`<br/>
