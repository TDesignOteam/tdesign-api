:: BASE_DOC ::

## API

### ChatAction Props

name | type | default | description | required
-- | -- | -- | -- | --
content | String | - | \- | N
disabled | Boolean | false | \- | N
isBad | Boolean | false | \- | N
isGood | Boolean | false | \- | N
operationBtn | Array | ["replay", "copy", "good", "bad"] | Typescript: `Array<'replay'\|'copy'\|'good'\|'bad'>` | N
onOperation | Function |  | Typescript: `(value:string, context: { e: MouseEvent }) => void`<br/> | N

### ChatAction Events

name | params | description
-- | -- | --
operation | `(value:string, context: { e: MouseEvent })` | \-
