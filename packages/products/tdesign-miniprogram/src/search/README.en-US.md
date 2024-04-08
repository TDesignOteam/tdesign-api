:: BASE_DOC ::

## API

### Search Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
action | String / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
adjust-position | Boolean | true | \- | N
always-embed | Boolean | false | \- | N
center | Boolean | false | \- | N
clearable | Boolean | true | \- | N
confirm-hold | Boolean | false | \- | N
confirm-type | String | search | options: send/search/next/go/done | N
cursor | Number | - | required | Y
cursor-spacing | Number | 0 | \- | N
disabled | Boolean | false | \- | N
focus | Boolean | false | \- | N
hold-keyboard | Boolean | false | \- | N
label | String | '' | `deprecated` | N
left-icon | String / Slot | 'search' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
maxcharacter | Number | - | \- | N
maxlength | Number | -1 | \- | N
placeholder | String | '' | \- | N
placeholder-class | String | input-placeholder | \- | N
placeholder-style | String | - | required | Y
readonly | Boolean | false | \- | N
right-icon | String / Slot | 'close-circle-filled' | `deprecated`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
selection-end | Number | -1 | \- | N
selection-start | Number | -1 | \- | N
shape | String | 'square' | options: square/round | N
type | String | 'text' | options: text/number/idcard/digit/nickname | N
default-type | String | undefined | uncontrolled property。options: text/number/idcard/digit/nickname | N
value | String | '' | \- | N
default-value | String | undefined | uncontrolled property | N

### Search Events

name | params | description
-- | -- | --
action-click | `({})` | \-
blur | `({ value: string })` | \-
change | `({ value: string })` | \-
clear | `({ value: string })` | \-
focus | `({ value: string })` | \-
submit | `({ value: string })` | \-
### Search External Classes

className | Description
-- | --
t-class | \-
t-class-action | \-
t-class-clear | \-
t-class-input | \-
t-class-input-container | \-
t-class-left | \-
