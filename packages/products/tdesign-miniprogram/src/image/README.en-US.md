:: BASE_DOC ::

## API
### Image Props

name | type | default | description | required
-- | -- | -- | -- | --
error | String / Slot | 'default' | \- | N
external-classes | Array | - | `['t-class', 't-class-load']` | N
lazy | Boolean | false | \- | N
loading | String / Slot | 'default' | \- | N
shape | String | square | options：circle/round/square | N
show-menu-by-longpress | Boolean | false | \- | N
src | String | - | \- | N
style | String | - | \- | N
mode | 只支持 scaleToFill/aspectFit/aspectFill/widthFix/heightFix，其余暂未支持，表现为居中 | - | required | Y
webp | 无需指定，默认支持 | - | required | Y

### Image Events

name | params | description
-- | -- | --
error | \- | \-
load | \- | \-
