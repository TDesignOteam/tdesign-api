:: BASE_DOC ::

## API

### ChatAction Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
content | String | - | \- | N
disabled | Boolean | false | \- | N
isBad | Boolean | false | \- | N
isGood | Boolean | false | \- | N
operationBtn | Array | ["replay", "copy", "good", "bad"] | Typescript: `Array<'replay'\|'copy'\|'good'\|'bad'>` | N
onOperation | Function |  | Typescript: `(value:string, context: { e: MouseEvent }) => void`<br/> | N
