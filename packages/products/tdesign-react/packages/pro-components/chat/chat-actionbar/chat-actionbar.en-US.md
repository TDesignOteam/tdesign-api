:: BASE_DOC ::

## API

### ChatActionbar Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
actionBar | Array | ['replay','copy','good','bad','share'] | Typescript: `Array<'replay'\|'copy'\|'good'\|'bad'\|'share'>` | N
comment | String | - | options: good/bad | N
content | String | - | \- | N
onActions | Function |  | Typescript: `(value:string, context: { e: MouseEvent }) => void`<br/> | N
