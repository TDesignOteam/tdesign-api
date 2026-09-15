:: BASE_DOC ::

## API

### Split Props

name | type | default | description | required
-- | -- | -- | -- | --
children | String / Slot / Function | - | required。Must be a Panel component, and the quantity must match the initialSizes length.。Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | Y
className | String | - | Container custom class name | N
direction | String | horizontal | Dividing direction. Horizontal: arranged horizontally; Vertical: arranged vertically.。options: horizontal/vertical | N
draggerIcon | String / Slot / Function | - | Drag icons。Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
gap | Number | 0 | The spacing (px) between panels will be reflected in the visual appearance of the divider. | N
lazy | Boolean | false | Deferred rendering mode | N
panelSize | Object | - | Define the maximum and minimum scale for each panel.。Typescript: `{min?: number; max?: number }` | N
splitterClassName | String | - | Custom divider style class name | N
splitterSize | Number | 6 | Width/height (px) of the interactive area of ​​the divider bar | N
onResize | Function |  | Typescript: `(sizes: number[]) => void`<br/>Callback (array of pixel values) for size changes during dragging.。Typescript: `{min?: number max?: number }` | N
onResizeEnd | Function |  | Typescript: `(sizes: number[]) => void`<br/>Callback when drag ends。Typescript: `{min?: number max?: number }` | N
onResizeStart | Function |  | Typescript: `(sizes: number[]) => void`<br/>Callback when drag starts。Typescript: `{min?: number max?: number }` | N

### Split Events

name | params | description
-- | -- | --
resize | `(sizes: number[])` | Callback (array of pixel values) for size changes during dragging.。Typescript: `{min?: number max?: number }`
resize-end | `(sizes: number[])` | Callback when drag ends。Typescript: `{min?: number max?: number }`
resize-start | `(sizes: number[])` | Callback when drag starts。Typescript: `{min?: number max?: number }`

### SplitInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
getSizes | \- | `number[]` | Get the current pixel size of each panel。Typescript: `{min?: number max?: number }`
reset | \- | \- | Reset to initial size。Typescript: `{min?: number max?: number }`
setSizes | `(sizes: (number \| string \| 'auto')[]) ` | \- | Programmatically set size。Typescript: `{min?: number max?: number }`
