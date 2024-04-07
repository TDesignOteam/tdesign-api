:: BASE_DOC ::

## API
### UploadFile

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
last-modified | Number | - | \- | N
name | String | - | \- | N
percent | Number | - | \- | N
raw | Object | - | Typescript：`File` | N
response | Object | - | Typescript：`{ [key: string]: any }` | N
size | Number | - | \- | N
status | String | - | Typescript：` 'success' \| 'fail' \| 'progress' \| 'waiting'` | N
type | String | - | \- | N
upload-time | String | - | upload time | N
url | String | - | \- | N
plain-object | \- | - | `PlainObject` is not an attribute of UploadFile，it means you can add and attributes to UploadFile, `type PlainObject = {[key: string]: any}`' | N
