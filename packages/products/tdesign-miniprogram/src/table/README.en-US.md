:: BASE_DOC ::

## API

### BaseTable Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
bordered | Boolean | false | show table bordered | N
cell-empty-content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
columns | Array | [] | table column configs。Typescript：`Array<BaseTableCol<T>>` | N
data | Array | [] | table data。Typescript：`Array<T>` | N
empty | String / Slot | '' | empty text or empty element。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
fixed-rows | Array | - | Typescript：`Array<number>` | N
height | String / Number | - | table height | N
loading | Boolean / Slot | undefined | loading state table。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
loading-props | Object | - | Typescript：`Partial<LoadingProps>`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
max-height | String / Number | - | table max height | N
row-key | String | 'id' | required。unique key for each row data | Y
show-header | Boolean | true | show table header | N
stripe | Boolean | false | show stripe style | N
table-content-width | String | - | \- | N
table-layout | String | fixed | table-layout css properties, [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout). set value to be `fixed` on `resizable=true` please。options: auto/fixed | N
vertical-align | String | middle | vertical align。options: top/middle/bottom | N

### BaseTable Events

name | params | description
-- | -- | --
cell-click | `(context: BaseTableCellEventContext<T>)` | trigger on cell clicked。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts)。<br/>`interface BaseTableCellEventContext<T> { row: T; col: BaseTableCol; rowIndex: number; colIndex: number;}`<br/>
row-click | `(context: RowEventContext<T>)` | trigger on row click。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts)。<br/>`interface RowEventContext<T> { row: T; index: number;}`<br/>
scroll | `(params: { e: WheelEvent })` | trigger on table content scroll

### BaseTableCol

name | type | default | description | required
-- | -- | -- | -- | --
align | String | left | align type。options: left/right/center | N
class-name | String / Object / Array / Function | - | cell classnames。Typescript：`TableColumnClassName<T> \| TableColumnClassName<T>[]` `type TableColumnClassName<T> = ClassName \| ((context: CellData<T>) => ClassName)` `interface CellData<T> extends BaseTableCellParams<T> { type: 'th' \| 'td' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
col-key | String | - | unique key for column | N
ellipsis | Boolean / Object / Slot | false | ellipsis cell content。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
ellipsis-title | Boolean / Object / Slot | undefined | ellipsis title content。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
fixed | String | left | fixed current column to left or right。options: left/right | N
min-width | String / Number | - | add CSS property `min-width` to HTML Element `<col>`，Browsers with [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview)  support `minWidth` | N
width | String / Number | - | column width | N


### PrimaryTable Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
row-selection-allow-uncheck | Boolean | - | allow to uncheck selection in table with single row selection | N
row-selection-type | String | - | single row selection, or multiple row selection。options: single/multiple | N
omit-base-table-props-t-columns-on-cell-click | \- | - | extends `Omit<BaseTableProps<T>, 'columns' \| 'onCellClick'>` | N

### PrimaryTable Events

name | params | description
-- | -- | --
select-change | `(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>)` | trigger on select changing。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/>
sort-change | `(sort: TableSort, options: SortOptions<T>)` | trigger on sort changing。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/>
