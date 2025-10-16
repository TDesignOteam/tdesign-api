:: BASE_DOC ::

## API

### Fab Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
button-props | Object | - | Typescript：`ButtonProps`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/fab/type.ts) | N
draggable | String / Boolean | false | Typescript：`boolean \| FabDirectionEnum ` `type FabDirectionEnum = 'all' \| 'vertical' \| 'horizontal'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/fab/type.ts) | N
icon | String | - | \- | N
text | String | - | \- | N
using-custom-navbar | Boolean | false | \- | N
y-bounds | Array | - | Typescript：`Array<string \| number>` | N

### Fab Events

name | params | description
-- | -- | --
click | `(detail: {e: Event})` | \-
drag-end | `(detail: { e: TouchEvent })` | \-
drag-start | `(detail: { e: TouchEvent })` | \-
