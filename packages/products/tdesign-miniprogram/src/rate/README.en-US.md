:: BASE_DOC ::

## API
### Rate Props

name | type | default | description | required
-- | -- | -- | -- | --
allow-half | Boolean | false | \- | N
color | String / Array | '#ED7B2F' | Typescript：`string \| Array<string>` | N
count | Number | 5 | \- | N
disabled | Boolean | - | \- | N
gap | Number | 4 | \- | N
icon | Slot | - | \- | N
show-text | Boolean | false | \- | N
size | String | 24px | \- | N
style | String | - | \- | N
texts | Array | [] | Typescript：`Array<string>` | N
value | Number | 0 | \- | N
default-value | Number | undefined | uncontrolled property | N
variant | String | outline | options：outline/filled | N

### Rate Events

name | params | description
-- | -- | --
change | `(value: number)` | \-
