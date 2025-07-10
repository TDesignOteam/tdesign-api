:: BASE_DOC ::

## API

### Indexes Props

name | type | default | description | required
-- | -- | -- | -- | --
current | String / Number | - | `v-model` and `v-model:current` is supported | N
defaultCurrent | String / Number | - | uncontrolled property | N
indexList | Array | - | Typescript：`Array<string \| number>` | N
sticky | Boolean | true | Typescript：`Boolean` | N
stickyOffset | Number | 0 | \- | N
onChange | Function |  | Typescript：`(index: string \| number) => void`<br/> | N
onSelect | Function |  | Typescript：`(index: string \| number) => void`<br/> | N

### Indexes Events

name | params | description
-- | -- | --
change | `(index: string \| number)` | \-
select | `(index: string \| number)` | \-


### IndexesAnchor Props

name | type | default | description | required
-- | -- | -- | -- | --
index | String / Number | - | \- | N
