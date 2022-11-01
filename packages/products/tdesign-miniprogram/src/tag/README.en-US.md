:: BASE_DOC ::

## API
### Tag Props

name | type | default | description | required
-- | -- | -- | -- | --
closable | Boolean | false | \- | N
disabled | Boolean | false | \- | N
external-classes | Array | - | `['t-class']` | N
icon | String | - | \- | N
max-width | String / Number | - | Typescript：`CSSProperties['maxWidth'] \| number` | N
shape | String | square | options：square/round/mark | N
size | String | medium | options：small/medium/large。Typescript：`SizeEnum` | N
style | String | - | \- | N
theme | String | default | options：default/primary/warning/danger/success | N
variant | String | dark | options：dark/light/outline/light-outline | N

### Tag Events

name | params | description
-- | -- | --
click | - | \-
close | - | \-

### CheckTag Props

name | type | default | description | required
-- | -- | -- | -- | --
checked | Boolean | undefined | \- | N
default-checked | Boolean | undefined | uncontrolled property | N
closable | Boolean | false | \- | N
content | String / Number / Slot | - | \- | N
disabled | Boolean | false | \- | N
icon | Slot | - | \- | N
icon | String | - | \- | N
shape | String | square | options：square/round/mark | N
size | String | medium | options：small/medium/large。Typescript：`SizeEnum` | N
style | String | - | \- | N

### CheckTag Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-
click | - | \-
