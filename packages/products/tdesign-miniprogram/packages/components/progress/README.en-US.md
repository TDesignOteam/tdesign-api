:: BASE_DOC ::

## API


### Progress Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
color | String / Object / Array | '' | Typescript：`string \| Array<string> \| Record<string, string>` | N
label | String / Boolean | true | \- | N
percentage | Number | 0 | \- | N
size | String / Number | 'default' | \- | N
status | String | - | options: success/error/warning/active。Typescript：`ProgressStatus` `type ProgressStatus = 'success' \| 'error' \| 'warning' \| 'active'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/progress/type.ts) | N
stroke-width | String / Number | - | \- | N
theme | String | line | options: line/plump/circle。Typescript：`ProgressTheme` `type ProgressTheme = 'line' \| 'plump' \| 'circle'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/progress/type.ts) | N
track-color | String | '' | \- | N

### Progress Slots

name | Description
-- | --
label | \-

### Progress External Classes

className | Description
-- | --
t-class | \-
t-class-bar | \-
t-class-label | \-
