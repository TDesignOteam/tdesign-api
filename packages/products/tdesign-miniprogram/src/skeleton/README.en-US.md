:: BASE_DOC ::

## API
### Skeleton Props

name | type | default | description | required
-- | -- | -- | -- | --
animation | String | none | options：gradient/flashed/none | N
custom-style | String | - | \- | N
delay | Number | 0 | \- | N
external-classes | Array | - | `['t-class', 't-class-avatar', 't-class-image', 't-class-text']` | N
loading | Boolean | true | \- | N
row-col | Array | [1, 1, 1, { width: '70%' }] | Typescript：`SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string; height?: string; marginRight?: string; marginLeft?: string; margin?: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/skeleton/type.ts) | N
theme | String | text | options：text/avatar-text | N
