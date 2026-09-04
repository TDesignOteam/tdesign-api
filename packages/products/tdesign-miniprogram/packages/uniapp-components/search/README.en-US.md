:: BASE_DOC ::

## API

### Search Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
action | String | '' | \- | N
adjust-position | Boolean | true | \- | N
always-embed | Boolean | false | \- | N
center | Boolean | false | \- | N
clear-trigger | String | always | show clear icon, clicked to clear input value。options: always / focus | N
clearable | Boolean | true | \- | N
confirm-hold | Boolean | false | \- | N
confirm-type | String | search | options: send/search/next/go/done | N
cursor | Number | -1 | \- | N
cursor-color | String | #0052d9 | \- | N
cursor-spacing | Number | 0 | \- | N
disabled | Boolean | false | \- | N
focus | Boolean | false | \- | N
hold-keyboard | Boolean | false | \- | N
label | String | '' | `deprecated` | N
left-icon | String | 'search' | \- | N
maxcharacter | Number | - | The maximum number of characters that the user can enter. One Chinese character represents two characters in length. Use either `maxcharacter` or `maxlength` | N
maxlength | Number | -1 | \- | N
placeholder | String | '' | \- | N
placeholder-class | String | input-placeholder | \- | N
placeholder-style | String | - | \- | N
readonly | Boolean | undefined | \- | N
right-icon | String | 'close-circle-filled' | `deprecated` | N
selection-end | Number | -1 | \- | N
selection-start | Number | -1 | \- | N
shape | String | 'square' | options: square/round | N
type | String | 'text' | options: text/number/idcard/digit/nickname | N
value | String | '' | \- | N

### Search Events

name | params | description
-- | -- | --
action-click | \- | \-
blur | `(context: { value: string })` | \-
clear | `(context: { value: string })` | \-
focus | `(context: { value: string })` | \-
submit | `(context: { value: string })` | \-

### Search Slots

name | Description
-- | --
action | \-
left-icon | \-
right-icon | `deprecated`

### Search External Classes

className | Description
-- | --
t-class | \-
t-class-action | \-
t-class-clear | \-
t-class-input | \-
t-class-input-container | \-
t-class-left | \-
