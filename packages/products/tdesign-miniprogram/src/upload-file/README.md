:: BASE_DOC ::

## API

### UploadFile

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
last-modified | Number | - | 必需。上一次变更的时间 | Y
name | String | - | 必需。文件名称 | Y
percent | Number | - | 必需。下载进度 | Y
raw | Object | - | 必需。原始文件对象。TS 类型：`File` | Y
response | Object | - | 必需。上传接口返回的数据 | Y
size | Number | - | 必需。文件大小 | Y
status | String | - | 必需。文件上传状态：上传成功，上传失败，上传中，等待上传。TS 类型：` 'success' | 'fail' | 'progress' | 'waiting'` | Y
type | String | - | 必需。文件类型 | Y
url | String | - | 必需。文件上传成功后的下载/访问地址 | Y
