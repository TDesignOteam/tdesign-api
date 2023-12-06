:: BASE_DOC ::

## API
### Fab Props

name | type | default | description | required
-- | -- | -- | -- | --
button-props | Object | - | \- | N
icon | String | - | \- | N
movable | Boolean | false | Control whether it is movable | N
movable-view-props | Object | - | movable Configuration。Typescript：`movableViewProps` `interface movableViewProps { direction?: 'all' \| 'vertical' \| 'horizontal' \| 'none'; inertia?: boolean; x?: number \| string; y?: number \| string; disabled?: boolean; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/fab/type.ts) | N
style | String | right: 16px; bottom: 32px; | \- | N
text | String | - | \- | N

### Fab Events

name | params | description
-- | -- | --
click | `(detail: {e: MouseEvent})` | \-
move | `(detail: {e: MouseEvent})` | \-
