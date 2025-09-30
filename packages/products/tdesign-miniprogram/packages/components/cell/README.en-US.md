:: BASE_DOC ::

## API


### Cell Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
align | String | middle | options: top/middle/bottom | N
arrow | Boolean / Object | false | \- | N
bordered | Boolean | true | \- | N
description | String | - | \- | N
hover | Boolean | - | \- | N
image | String | - | \- | N
jump-type | String | navigateTo | options: switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Object | - | \- | N
note | String | - | \- | N
required | Boolean | false | \- | N
right-icon | String / Object | - | \- | N
title | String | - | \- | N
url | String | - | \- | N

### Cell Slots

name | Description
-- | --
click | \-
description | \-
image | \-
left-icon | \-
note | \-
right-icon | \-
title | \-

### Cell Events

name | params | description
-- | -- | --
click | - | \-

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
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
bordered | Boolean | false | \- | N
theme | String | default | options: default/card | N
title | String | - | \- | N

### CellGroup External Classes

className | Description
-- | --
t-class | \-
t-class-title | \-

### CellGroup Slots

name | Description
-- | --
\- | \-
