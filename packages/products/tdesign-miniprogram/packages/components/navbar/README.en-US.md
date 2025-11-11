:: BASE_DOC ::

## API

### Navbar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
animation | Boolean | true | \- | N
background | String | - | `deprecated`。background | N
delta | Number | 1 | \- | N
fixed | Boolean | true | \- | N
home-icon | String | - | `deprecated`。homeIcon | N
left-arrow | Boolean | false | `0.26.0` | N
left-icon | String | - | `deprecated` | N
safe-area-inset-top | Boolean | true | \- | N
title | String | - | page title | N
title-max-length | Number | - | \- | N
visible | Boolean | true | \- | N

### Navbar Events

name | params | description
-- | -- | --
complete | \- | \-
fail | \- | \-
go-back | \- | \-
go-home | \- | `deprecated`
success | \- | \-

### Navbar Slots

name | Description
-- | --
capsule | \-
left | `0.26.0`
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
