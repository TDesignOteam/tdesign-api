:: BASE_DOC ::

## API

### Cell Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
align | String | middle | options: top/middle/bottom | N
arrow | Boolean / Object | false | \- | N
bordered | Boolean | true | \- | N
description | String | - | \- | N
hover | Boolean | - | \- | N
image | String | - | \- | N
jump-type | String | navigateTo | options: switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Object | - | \- | N
note | String | - | \- | N
note-style | String / Object | - | \- | N
required | Boolean | false | \- | N
right-icon | String / Object | - | \- | N
right-icon-style | String / Object | - | \- | N
title | String | - | \- | N
title-style | String / Object | - | \- | N
url | String | - | \- | N

### Cell Events

name | params | description
-- | -- | --
click | `(context: { e: MouseEvent })` | \-

### Cell Slots

name | Description
-- | --
description | \-
image | \-
left-icon | \-
note | \-
right-icon | \-
title | \-

### Cell External Classes

className | Description
-- | --
t-class | \-
t-class-center | \-
t-class-description | \-
t-class-hover | \-
t-class-image | \-
t-class-left | \-
t-class-left-icon | \-
t-class-note | \-
t-class-right | \-
t-class-right-icon | \-
t-class-title | \-


### CellGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
bordered | Boolean | false | \- | N
theme | String | default | options: default/card | N
title | String | - | \- | N

### CellGroup Slots

name | Description
-- | --
\- | \-

### CellGroup External Classes

className | Description
-- | --
t-class | \-
t-class-title | \-
