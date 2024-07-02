:: BASE_DOC ::

## API

### Rate Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
allow-half | Boolean | false | \- | N
color | String / Array | '#ED7B2F' | `0.30.0`。Typescript：`string \| Array<string>` | N
count | Number | 5 | \- | N
disabled | Boolean | undefined | \- | N
gap | Number | 8 | \- | N
icon | String / Array | - | `0.30.0`。Typescript：`string \| string[]` | N
icon-prefix | String | undefined | \- | N
placement | String | top | options: top / bottom | N
show-text | Boolean | false | \- | N
size | String | 24px | \- | N
texts | Array | [] | Typescript：`Array<string>` | N
value | Number | 0 | \- | N
default-value | Number | undefined | uncontrolled property | N
variant | String | outline | options: outline/filled | N

### Rate Events

name | params | description
-- | -- | --
change | `(value: number)` | \-
### Rate External Classes

className | Description
-- | --
t-class | \-
t-class-icon | \-
t-class-text | \-
