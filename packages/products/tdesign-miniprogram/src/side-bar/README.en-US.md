:: BASE_DOC ::

## API

### SideBar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
default-value | String / Number | undefined | \- | N
value | String / Number | - | \- | N

### SideBar Events

name | params | description
-- | -- | --
change | `(value: number \| string, label: string)` | \-
click | `(value: number \| string, label: string)` | \-


### SideBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
badge-props | Object | - | \- | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
label | String | - | \- | N
value | String / Number | - | \- | N
