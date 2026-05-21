:: BASE_DOC ::

## API

### BaseTable Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
bordered | Boolean | false | show table bordered | N
cellEmptyContent | TNode | - | Typescript: `string \| TNode<BaseTableCellParams<T>>`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
columns | Array | [] | table column configs。Typescript: `Array<BaseTableCol<T>>` | N
data | Array | [] | table data。Typescript: `Array<T>` | N
empty | TNode | '' | empty text or empty element。Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
fixedRows | Array | - | `0.16.0`。Typescript: `Array<number>` | N
footerSummary | TNode | - | footer summary content。Typescript: `string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
height | String / Number | - | table height | N
loading | TNode | undefined | loading state table。Typescript: `boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
loadingProps | Object | - | Typescript: `Partial<LoadingProps>`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
maxHeight | String / Number | - | table max height | N
rowAttributes | Object / Array / Function | - | `0.17.0`。`tr` attributes。Typescript: `TableRowAttributes<T>` `type TableRowAttributes<T> = HTMLElementAttributes \| ((params: { row: T; rowIndex: number; type: 'body' \| 'foot' }) => HTMLElementAttributes) \| Array<TableRowAttributes<T>>`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
rowClassName | String / Object / Array / Function | - | `0.17.0`。table `th` classname。Typescript: `ClassName \| ((params: RowClassNameParams<T>) => ClassName)` `interface RowClassNameParams<T> { row: T; rowIndex: number; rowKey?: string; type?: 'body' \| 'foot' }`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
rowKey | String | 'id' | required。unique key for each row data | Y
rowspanAndColspan | Function | - | rowspan and colspan。Typescript: `TableRowspanAndColspanFunc<T>` `type TableRowspanAndColspanFunc<T extends TableRowData = TableRowData> = (params: BaseTableCellParams<T>) => RowspanColspan` `interface RowspanColspan { colspan?: number; rowspan?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
showHeader | Boolean | true | show table header | N
stripe | Boolean | false | show stripe style | N
tableContentWidth | String | - | \- | N
tableLayout | String | fixed | table-layout css properties, [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout). set value to be `fixed` on `resizable=true` please。options: auto/fixed | N
verticalAlign | String | middle | vertical align。options: top/middle/bottom | N
onCellClick | Function |  | Typescript: `(context: BaseTableCellEventContext<T>) => void`<br/>trigger on cell clicked。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface BaseTableCellEventContext<T extends TableRowData = TableRowData> { row: T; col: BaseTableCol<T>; rowIndex: number; colIndex: number; e: MouseEvent }`<br/> | N
onRowClick | Function |  | Typescript: `(context: RowEventContext<T>) => void`<br/>trigger on row click。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface RowEventContext<T extends TableRowData = TableRowData> { row: T; index: number; e: MouseEvent }`<br/> | N
onScroll | Function |  | Typescript: `(params: { e: UIEvent }) => void`<br/>trigger on table content scroll | N

### BaseTableInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript: `React.CSSProperties` | N
refreshTable | \- | \- | required
