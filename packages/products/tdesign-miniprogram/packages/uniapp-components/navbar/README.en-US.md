:: BASE_DOC ::

## API

### Navbar Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
animation | Boolean | true | \- | N
background | String | - | `deprecated`。background | N
delta | Number | 1 | \- | N
fixed | Boolean | true | \- | N
home-icon | String | - | `deprecated`。homeIcon | N
left-arrow | Boolean | false | \- | N
left-icon | String | - | `deprecated` | N
placeholder | Boolean | false | \- | N
safe-area-inset-top | Boolean | true | \- | N
title | String | - | page title | N
title-max-length | Number | - | \- | N
visible | Boolean | true | \- | N
z-index | Number | 1 | \- | N

### Navbar Events

name | params | description
-- | -- | --
complete | \- | \-
fail | \- | \-
go-back | \- | \-
go-home | \- | `deprecated`
right-click | \- | \-
success | \- | \-

### Navbar Slots

name | Description
-- | --
capsule | \-
left | \-
right | \-
title | page title

### Navbar External Classes

className | Description
-- | --
t-class | \-
t-class-capsule | \-
t-class-center | \-
t-class-home-icon | \-
t-class-left | \-
t-class-left-icon | \-
t-class-nav-btn | \-
t-class-title | \-
