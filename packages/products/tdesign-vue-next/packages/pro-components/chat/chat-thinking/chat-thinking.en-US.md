:: BASE_DOC ::

## API

### ChatThinking Props

name | type | default | description | required
-- | -- | -- | -- | --
animation | String | circle | options: circle/moving/gradient | N
collapsed | Boolean | false | \- | N
content | Object | - | required。Typescript: `{ text?: string; title?: string }` | Y
layout | String | block | options: block/border | N
maxHeight | Number | - | \- | N
status | String | pending | required。options: complete/stop/error/pending | Y
