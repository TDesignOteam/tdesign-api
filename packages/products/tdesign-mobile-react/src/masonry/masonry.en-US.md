:: BASE_DOC ::

## API

### Masonry Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
children | TElement | - | Masonry content. Each child element with a `key` is an item, suitable for static content. (Mutually exclusive with `items` + `renderItem`). Typescript: `TNode`. [see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
column | Number / Object | 2 | Number of columns. Can be a fixed number or configured by container width breakpoints (e.g. `{ 0: 2, 640: 3, 1024: 4 }`). Typescript: `number \| Record<number, number>` | N
gap | Number / Object | 0 | Gap. Can be a fixed number or configured by container width breakpoints (e.g. `{ 0: 8, 640: 12, 1024: 16 }`). Typescript: `number \| Record<number, number>` | N
items | Array | - | Data source array of the Masonry, used together with `renderItem`. Except for `key`, the fields and content of each item are not restricted. Typescript: `MasonryItem[]` `interface MasonryItem { key: string \| number; [prop: string]: any }`. [see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/masonry/type.ts) | N
renderItem | Function | - | Custom render function for each Masonry item. Receives the data item and its index, and returns the node to display. Used together with `items`. Typescript: `(item: MasonryItem, index: number) => TNode`. [see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
strategy | String | shortest | Data layout strategy. Options: `shortest` (shortest column first, place each new item into the column with the smallest current height), `sequential` (round-robin, place items into columns in a fixed order). options: shortest/sequential | N
type | String | fixed-width | Masonry grouping type. Options: `fixed-width` (fixed width and adaptive height), `fixed-both` (fixed width and height), `fixed-height` (adaptive width and fixed height), `free-size` (dynamic width and height). options: fixed-width/fixed-both/fixed-height/free-size | N
onLayoutChange | Function |  | Typescript: `(items: MasonryItemLayout[]) => void`<br/>Triggered when the layout changes. [see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/masonry/type.ts). <br/>`interface MasonryItemLayout { key: string \| number; index: number; column: number; x: number; y: number; width: number; height: number }`<br/> | N
