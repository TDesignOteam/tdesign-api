:: BASE_DOC ::

## API
### ImageViewer Props

name | type | default | description | required
-- | -- | -- | -- | --
background-color | String / Number | rgba(0, 0, 0, .6) | \- | N
close-btn | Boolean / Slot | true | \- | N
delete-btn | Boolean | false | \- | N
images | Array | [] | Typescript：`Array<string>` | N
initial-index | Number | 0 | Typescript：`Number` | N
max-zoom | Number | 3 | Typescript：`Number` | N
show-index | Boolean | false | \- | N
style | String | - | \- | N
visible | Boolean | false | \- | N
default-visible | Boolean | undefined | uncontrolled property | N

### ImageViewer Events

name | params | description
-- | -- | --
close | `(detail: { trigger: 'close-btn' \| 'overlay' \| 'esc';\| KeyboardEvent })` | \-
index-change | `(index: number, context: { trigger: 'prev' \| 'next' })` | \-
