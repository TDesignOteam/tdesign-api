:: BASE_DOC ::

## API

### Badge Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
color | String | - | \- | N
content | String | - | \- | N
count | String / Number | 0 | \- | N
dot | Boolean | false | \- | N
max-count | Number | 99 | \- | N
offset | Array | - | Typescript: `Array<string \| number>` | N
shape | String | circle | options: circle/square/bubble/ribbon/ribbon-right/ribbon-left/triangle-right/triangle-left | N
show-zero | Boolean | false | \- | N
size | String | medium | options: medium/large | N

### Badge Slots

name | Description
-- | --
\- | \-
count | \-

### Badge External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-count | \-
