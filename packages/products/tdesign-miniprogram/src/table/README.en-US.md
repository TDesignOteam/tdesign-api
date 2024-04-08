:: BASE_DOC ::

## API
### BaseTableCol

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
align | String | left | align type。options: left/right/center | N
class-name | String / Object / Array / Function | - | cell classnames。Typescript：`TableColumnClassName<T> \| TableColumnClassName<T>[]` `type TableColumnClassName<T> = ClassName \| ((context: CellData<T>) => ClassName)` `interface CellData<T> extends BaseTableCellParams<T> { type: 'th' \| 'td' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
ellipsis | Boolean / Object / Slot | false | ellipsis cell content。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
ellipsis-title | Boolean / Object / Slot | undefined | ellipsis title content。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
fixed | String | left | fixed current column to left or right。options: left/right | N
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
