:: BASE_DOC ::

## API

### ChatRecord Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
auto-send | Boolean | false | \- | N
bottom-height | Number | 0 | \- | N
duration | Number | 60000 | \- | N
lang | String | zh_CN | \- | N

### ChatRecord Events

name | params | description
-- | -- | --
cancel | \- | \-
error | `(err: any)` | \-
recognize | `(detail: { voicePath: string, voiceText: string, duration: number })` | \-

### ChatRecord Slots

name | Description
-- | --
speech-input | \-
speech-no-auth | \-
