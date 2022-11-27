:: BASE_DOC ::

## API
### PrimaryTable Props

name | type | default | description | required
-- | -- | -- | -- | --
asyncLoading | String / Slot / Function | - | async loading state。Typescript：`'loading' \| 'load-more' \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
columnController | Object | - | Typescript：`TableColumnController` | N
columnControllerVisible | Boolean | undefined | `.sync` is supported | N
defaultColumnControllerVisible | Boolean | undefined | uncontrolled property | N
columns | Array | [] | table column configs。Typescript：`Array<PrimaryTableCol<T>>` | N
displayColumns | Array | - | `.sync` is supported。Typescript：`CheckboxGroupValue` | N
defaultDisplayColumns | Array | - | uncontrolled property。Typescript：`CheckboxGroupValue` | N
dragSort | String | - | dag sort。options：row/row-handler/col/row-handler-col/drag-col | N
dragSortOptions | Object | - | drag sort params。Typescript：`SortableOptions` | N
editableCellState | Function | - | Typescript：`EditableCellType<T>` `type EditableCellType<T> = (params: PrimaryTableCellParams<T>) => boolean`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
editableRowKeys | Array | - | editable row keys, row key value is from data[rowKey]。Typescript：`Array<string \| number>` | N
expandIcon | Boolean / Slot / Function | true | to show expand icon. expand icon is set in first column。Typescript：`boolean \| TNode<ExpandArrowRenderParams<T>>` `interface ExpandArrowRenderParams<T> { row: T; index: number }`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
expandOnRowClick | Boolean | - | expand row on click | N
expandedRow | String / Slot / Function | - | table expanded row, to show more detail information。Typescript：`TNode<TableExpandedRowParams<T>>` `interface TableExpandedRowParams<T> { row: T; index: number; columns: PrimaryTableCol<T>[] \| BaseTableCol<T>[] }`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
expandedRowKeys | Array | [] | expanded row keys, row key value is from data[rowKey]。`.sync` is supported。Typescript：`Array<string \| number>` | N
defaultExpandedRowKeys | Array | [] | expanded row keys, row key value is from data[rowKey]。uncontrolled property。Typescript：`Array<string \| number>` | N
filterIcon | Slot / Function | - | filter icon。Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
filterRow | String / Slot / Function | - | filter value。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
filterValue | Object | - | filter value。`.sync` is supported。Typescript：`FilterValue` `type FilterValue = { [key: string]: any }`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
defaultFilterValue | Object | - | filter value。uncontrolled property。Typescript：`FilterValue` `type FilterValue = { [key: string]: any }`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
hideSortTips | Boolean | - | hide sort tips | N
indeterminateSelectedRowKeys | Array | - | indeterminate selected row keys, row key is from data[rowKey]。Typescript：`Array<string \| number>` | N
multipleSort | Boolean | false | support multiple column fields sort | N
reserveSelectedRowOnPaginate | Boolean | true | \- | N
selectedRowKeys | Array | [] | selected row keys, row key is from data[rowKey]。`.sync` is supported。Typescript：`Array<string \| number>` | N
defaultSelectedRowKeys | Array | [] | selected row keys, row key is from data[rowKey]。uncontrolled property。Typescript：`Array<string \| number>` | N
showSortColumnBgColor | Boolean | false | column shows sort bg color | N
sort | Object / Array | - | sort configs。`.sync` is supported。Typescript：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
defaultSort | Object / Array | - | sort configs。uncontrolled property。Typescript：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
sortIcon | Slot / Function | - | sort icon。Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
sortOnRowDraggable | Boolean | false | `deprecated`。sort on row draggable | N
`Omit<BaseTableProps<T>, 'columns' \| 'onCellClick'>` | \- | - | \- | N
onAsyncLoadingClick | Function |  | Typescript：`(context: { status: 'loading' \| 'load-more' }) => void`<br/>trigger on async loading text clicked | N
onCellClick | Function |  | Typescript：`(context: PrimaryTableCellEventContext<T>) => void`<br/>trigger on cell clicked。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number; e: MouseEvent }`<br/> | N
onChange | Function |  | Typescript：`(data: TableChangeData, context: TableChangeContext<T>) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`<br/><br/>`interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`<br/><br/>`type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'`<br/> | N
onColumnChange | Function |  | Typescript：`(context: PrimaryTableColumnChange<T>) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: Event }`<br/> | N
onColumnControllerVisibleChange | Function |  | Typescript：`(visible: boolean, context: { trigger: 'cancel' \| 'confirm' }) => void`<br/> | N
onDataChange | Function |  | Typescript：`(data: Array<T>, context: TableDataChangeContext) => void`<br/>trigger on data changing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface TableDataChangeContext { trigger: 'sort' }`<br/> | N
onDisplayColumnsChange | Function |  | Typescript：`(value: CheckboxGroupValue) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`import { CheckboxGroupValue } from '@Checkbox'`<br/> | N
onDragSort | Function |  | Typescript：`(context: DragSortContext<T>) => void`<br/>trigger on drag sort。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`<br/><br/>`import { SortableEvent, SortableOptions } from 'sortablejs'`<br/> | N
onExpandChange | Function |  | Typescript：`(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>) => void`<br/>trigger on expand row keys changing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }`<br/> | N
onFilterChange | Function |  | Typescript：`(filterValue: FilterValue, context: { col?: PrimaryTableCol<T> }) => void`<br/>trigger on filter value changing | N
onRowEdit | Function |  | Typescript：`(context: PrimaryTableRowEditContext<T>) => void`<br/>trigger on row data is editing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`type PrimaryTableRowEditContext<T> = PrimaryTableCellParams<T> & { value: any; editedRow: T }`<br/> | N
onRowValidate | Function |  | Typescript：`(context: PrimaryTableRowValidateContext<T>) => void`<br/>trigger after row data validated。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`type PrimaryTableRowValidateContext<T> = { result: TableRowValidateResult<T>[]; trigger: TableValidateTrigger }`<br/><br/>`type TableValidateTrigger = 'self' \| 'parent'`<br/><br/>`export type TableRowValidateResult<T> = PrimaryTableCellParams<T> & { errorList: AllValidateResult[]; value: any }`<br/> | N
onSelectChange | Function |  | Typescript：`(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>) => void`<br/>trigger on select changing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/> | N
onSortChange | Function |  | Typescript：`(sort: TableSort, options: SortOptions<T>) => void`<br/>trigger on sort changing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/> | N
onValidate | Function |  | Typescript：`(context: PrimaryTableValidateContext) => void`<br/>trigger after row data validated。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableValidateContext { result: TableErrorListMap }`<br/><br/>`type TableErrorListMap = { [key: string]: AllValidateResult[] }`<br/> | N

### PrimaryTable Events

name | params | description
-- | -- | --
async-loading-click | `(context: { status: 'loading' \| 'load-more' })` | trigger on async loading text clicked
cell-click | `(context: PrimaryTableCellEventContext<T>)` | trigger on cell clicked。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number; e: MouseEvent }`<br/>
change | `(data: TableChangeData, context: TableChangeContext<T>)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`<br/><br/>`interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`<br/><br/>`type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'`<br/>
column-change | `(context: PrimaryTableColumnChange<T>)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: Event }`<br/>
column-controller-visible-change | `(visible: boolean, context: { trigger: 'cancel' \| 'confirm' })` | \-
data-change | `(data: Array<T>, context: TableDataChangeContext)` | trigger on data changing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface TableDataChangeContext { trigger: 'sort' }`<br/>
display-columns-change | `(value: CheckboxGroupValue)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`import { CheckboxGroupValue } from '@Checkbox'`<br/>
drag-sort | `(context: DragSortContext<T>)` | trigger on drag sort。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`<br/><br/>`import { SortableEvent, SortableOptions } from 'sortablejs'`<br/>
expand-change | `(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>)` | trigger on expand row keys changing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }`<br/>
filter-change | `(filterValue: FilterValue, context: { col?: PrimaryTableCol<T> })` | trigger on filter value changing
row-edit | `(context: PrimaryTableRowEditContext<T>)` | trigger on row data is editing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`type PrimaryTableRowEditContext<T> = PrimaryTableCellParams<T> & { value: any; editedRow: T }`<br/>
row-validate | `(context: PrimaryTableRowValidateContext<T>)` | trigger after row data validated。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`type PrimaryTableRowValidateContext<T> = { result: TableRowValidateResult<T>[]; trigger: TableValidateTrigger }`<br/><br/>`type TableValidateTrigger = 'self' \| 'parent'`<br/><br/>`export type TableRowValidateResult<T> = PrimaryTableCellParams<T> & { errorList: AllValidateResult[]; value: any }`<br/>
select-change | `(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>)` | trigger on select changing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/>
sort-change | `(sort: TableSort, options: SortOptions<T>)` | trigger on sort changing。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/>
validate | `(context: PrimaryTableValidateContext)` | trigger after row data validated。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableValidateContext { result: TableErrorListMap }`<br/><br/>`type TableErrorListMap = { [key: string]: AllValidateResult[] }`<br/>

### PrimaryTableInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
validateRowData | `(rowValue: any)` | \- | required
validateTableData | \- | \- | required
