:: BASE_DOC ::

## API

### Skeleton Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
animation | String | none | options: gradient/flashed/none | N
delay | Number | 0 | \- | N
loading | Boolean | true | \- | N
row-col | Array | - | Typescript：`SkeletonRowCol` `type SkeletonRowCol = Array<Number \| SkeletonRowColObj \| Array<SkeletonRowColObj>>` `interface SkeletonRowColObj { width?: string; size?: string;height?: string; marginRight?: string; marginLeft?: string; margin?: string; type?: 'rect' \| 'circle' \| 'text';}`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/skeleton/type.ts) | N
theme | String | text | options: avatar/image/text/paragraph | N

### Skeleton External Classes

className | Description
-- | --
t-class | \-
t-class-col | \-
t-class-row | \-
