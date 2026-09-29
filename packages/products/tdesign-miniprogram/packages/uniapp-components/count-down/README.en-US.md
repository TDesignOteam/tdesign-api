:: BASE_DOC ::

## API

### CountDown Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
auto-start | Boolean | true | \- | N
content | String | 'default' | \- | N
format | String | HH:mm:ss | \- | N
millisecond | Boolean | false | \- | N
size | String | 'medium' | options: small/medium/large | N
split-with-unit | Boolean | false | \- | N
theme | String | 'default' | options: default/round/square | N
time | Number | 0 | required | Y

### CountDown Events

name | params | description
-- | -- | --
change | `(time: TimeData)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/count-down/type.ts)。<br/>`interface TimeData {  days: number; hours: number; minutes: number; seconds: number; milliseconds: number }`<br/>
finish | \- | \-

### CountDown Slots

name | Description
-- | --
\- | \-
content | \-

### CountDown External Classes

className | Description
-- | --
t-class | \-
t-class-count | \-
t-class-split | \-
