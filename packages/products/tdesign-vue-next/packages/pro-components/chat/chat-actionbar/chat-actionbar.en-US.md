:: BASE_DOC ::

## API

### ChatActionbar Props

name | type | default | description | required
-- | -- | -- | -- | --
actionBar | Array | ['replay','copy','good','bad','share'] | Typescript: `Array<'replay'\|'copy'\|'good'\|'bad'\|'share'>` | N
comment | String | - | options: good/bad | N
content | String | - | \- | N
onActions | Function |  | Typescript: `(value:string, context: { e: MouseEvent }) => void`<br/> | N

### ChatActionbar Events

name | params | description
-- | -- | --
actions | `(value:string, context: { e: MouseEvent })` | \-
