:: BASE_DOC ::

## API

### Skeleton Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
animation | String | none | options: gradient/flashed/none | N
delay | Number | 0 | \- | N
loading | Boolean | true | \- | N
row-col | Array | - | Typescript: `SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string; size?: string;height?: string; marginRight?: string; marginLeft?: string; margin?: string; type?: 'rect' \| 'circle' \| 'text';}`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/skeleton/type.ts) | N
theme | String | text | options: avatar/image/text/paragraph | N

### Skeleton Slots

name | Description
-- | --
\- | \-

### Skeleton External Classes

className | Description
-- | --
t-class | \-
t-class-col | \-
t-class-row | \-
