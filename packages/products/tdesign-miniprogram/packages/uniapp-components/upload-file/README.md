:: BASE_DOC ::

## API
### UploadFile

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
last-modified | Number | - | 上一次变更的时间 | N
name | String | - | 文件名称 | N
percent | Number | - | 下载进度 | N
raw | Object | - | 原始文件对象。TS 类型：`File` | N
response | Object | - | 上传接口返回的数据。`response.error` 存在时会判断此次上传失败，并显示错误文本信息；`response.url` 会作为文件上传成功后的地址，并使用该地址显示图片。TS 类型：`{ [key: string]: any }` | N
size | Number | - | 文件大小 | N
status | String | - | 文件上传状态：上传成功，上传失败，上传中，等待上传。TS 类型：` 'success' \| 'fail' \| 'progress' \| 'waiting'` | N
type | String | - | 文件类型 | N
upload-time | String | - | 上传时间 | N
url | String | - | 文件上传成功后的下载/访问地址 | N
