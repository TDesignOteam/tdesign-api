:: BASE_DOC ::

## API
### PrimaryTable Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
asyncLoading | String / Slot / Function | - | 异步加载状态。值为 `loading` 显示默认文字 “正在加载中，请稍后”，值为 `loading-more` 显示“点击加载更多”，值为其他，表示完全自定义异步加载区域内容。TS 类型：`'loading' \| 'load-more' \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
columnController | Object | - | 自定义显示列控制器，值为空不会显示。具体属性请看下方 `TableColumnController` 文档。TS 类型：`TableColumnController` | N
columnControllerVisible | Boolean | undefined | 是否显示列配置弹框控制器，只要该属性值不为 `undefined`，弹框的显示/隐藏完全由该属性控制。支持语法糖 `.sync` | N
defaultColumnControllerVisible | Boolean | undefined | 是否显示列配置弹框控制器，只要该属性值不为 `undefined`，弹框的显示/隐藏完全由该属性控制。非受控属性 | N
columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<PrimaryTableCol<T>>` | N
displayColumns | Array | - | 列配置功能中，当前显示的列。支持语法糖 `.sync`。TS 类型：`CheckboxGroupValue` | N
defaultDisplayColumns | Array | - | 列配置功能中，当前显示的列。非受控属性。TS 类型：`CheckboxGroupValue` | N
dragSort | String | - | 拖拽排序方式，值为 `row` 表示行拖拽排序，这种方式无法进行文本复制，慎用。值为`row-handler` 表示通过拖拽手柄进行行拖拽排序。值为 `col` 表示列顺序拖拽。值为 `row-handler-col` 表示同时支持行拖拽和列拖拽。⚠️`drag-col` 已废弃，请勿使用。。可选项：row/row-handler/col/row-handler-col/drag-col | N
dragSortOptions | Object | - | 拖拽排序扩展参数，具体参数见 [Sortable](https://github.com/SortableJS/Sortable)。TS 类型：`SortableOptions` | N
editableCellState | Function | - | 单元格是否允许编辑。返回值为 `true` 则表示可编辑；返回值为 `false` 则表示不可编辑，只读状态。TS 类型：`EditableCellType<T>` `type EditableCellType<T> = (params: PrimaryTableCellParams<T>) => boolean`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
editableRowKeys | Array | - | 处于编辑状态的行。TS 类型：`Array<string \| number>` | N
expandIcon | Boolean / Slot / Function | true | 用于控制是否显示「展开图标列」，值为 `false` 则不会显示。可以精确到某一行是否显示，还可以自定义展开图标内容。`expandedRow` 存在时，该参数有效。支持全局配置 `GlobalConfigProvider`。TS 类型：`boolean \| TNode<ExpandArrowRenderParams<T>>` `interface ExpandArrowRenderParams<T> { row: T; index: number }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
expandOnRowClick | Boolean | - | 是否允许点击行展开 | N
expandedRow | String / Slot / Function | - | 展开行内容，泛型 T 指表格数据类型。TS 类型：`TNode<TableExpandedRowParams<T>>` `interface TableExpandedRowParams<T> { row: T; index: number; columns: PrimaryTableCol<T>[] \| BaseTableCol<T>[] }`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
expandedRowKeys | Array | [] | 展开行。支持语法糖 `.sync`。TS 类型：`Array<string \| number>` | N
defaultExpandedRowKeys | Array | [] | 展开行。非受控属性。TS 类型：`Array<string \| number>` | N
filterIcon | Slot / Function | - | 自定义过滤图标，支持全局配置 `GlobalConfigProvider`。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
filterRow | String / Slot / Function | - | 自定义过滤状态行及清空筛选等。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
filterValue | Object | - | 过滤数据的值。支持语法糖 `.sync`。TS 类型：`FilterValue` `type FilterValue = { [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
defaultFilterValue | Object | - | 过滤数据的值。非受控属性。TS 类型：`FilterValue` `type FilterValue = { [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
hideSortTips | Boolean | - | 隐藏排序文本提示，支持全局配置 `GlobalConfigProvider`，默认全局配置值为 `false` | N
indeterminateSelectedRowKeys | Array | - | 半选状态行。选中行请更为使用 `selectedRowKeys` 控制。TS 类型：`Array<string \| number>` | N
multipleSort | Boolean | false | 是否支持多列排序 | N
reserveSelectedRowOnPaginate | Boolean | true | 行选中功能，是否在分页时保留上一页选中结果不清空，本地数据分页场景下，会全选所有页数据。值为 `false` 则表示全部选中操作停留在当前页，不跨分页；本地数据分页场景下，全选仅选中当前页 | N
selectedRowKeys | Array | [] | 选中行，控制属性。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制。支持语法糖 `.sync`。TS 类型：`Array<string \| number>` | N
defaultSelectedRowKeys | Array | [] | 选中行，控制属性。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制。非受控属性。TS 类型：`Array<string \| number>` | N
showSortColumnBgColor | Boolean | false | 当前排序列是否显示背景色 | N
sort | Object / Array | - | 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序。支持语法糖 `.sync`。TS 类型：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
defaultSort | Object / Array | - | 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序。非受控属性。TS 类型：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts) | N
sortIcon | Slot / Function | - | 自定义排序图标，支持全局配置 `GlobalConfigProvider`。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
sortOnRowDraggable | Boolean | false | 已废弃。允许表格行拖拽时排序。请更为使用 `dragSort=\"row\"` | N
`Omit<BaseTableProps<T>, 'columns' \| 'onCellClick'>` | \- | - | 继承 `Omit<BaseTableProps<T>, 'columns' \| 'onCellClick'>` 中的全部 API | N
onAsyncLoadingClick | Function |  | TS 类型：`(context: { status: 'loading' \| 'load-more' }) => void`<br/>异步加载区域被点击时触发 | N
onCellClick | Function |  | TS 类型：`(context: PrimaryTableCellEventContext<T>) => void`<br/>单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number; e: MouseEvent }`<br/> | N
onChange | Function |  | TS 类型：`(data: TableChangeData, context: TableChangeContext<T>) => void`<br/>分页、排序、过滤等内容变化时触发，泛型 T 指表格数据类型，`currentData` 表示变化后的数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`<br/><br/>`interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`<br/><br/>`type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'`<br/> | N
onColumnChange | Function |  | TS 类型：`(context: PrimaryTableColumnChange<T>) => void`<br/>确认操作之前列配置发生变化时触发。`context.columns` 表示已选中的列；`context.currentColumn` 表示本次变化操作的列，值不存在表示全选操作；`context.type` 表示当前操作属于选中列或是取消列。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: Event }`<br/> | N
onColumnControllerVisibleChange | Function |  | TS 类型：`(visible: boolean, context: { trigger: 'cancel' \| 'confirm' }) => void`<br/>列配置弹窗显示或隐藏变化时触发 | N
onDataChange | Function |  | TS 类型：`(data: Array<T>, context: TableDataChangeContext) => void`<br/>本地数据排序导致 `data` 变化时触发，第一个参数指变化后的数据，第二个参数 `context.trigger` 表示触发本次变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface TableDataChangeContext { trigger: 'sort' }`<br/> | N
onDisplayColumnsChange | Function |  | TS 类型：`(value: CheckboxGroupValue) => void`<br/>确认列配置时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`import { CheckboxGroupValue } from '@Checkbox'`<br/> | N
onDragSort | Function |  | TS 类型：`(context: DragSortContext<T>) => void`<br/>拖拽排序时触发，`data` 表示排序前的数据，`newData` 表示拖拽排序结束后的新数据，`sort=row` 表示行拖拽事件触发，`sort=col` 表示列拖拽事件触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`<br/><br/>`import { SortableEvent, SortableOptions } from 'sortablejs'`<br/> | N
onExpandChange | Function |  | TS 类型：`(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>) => void`<br/>展开行发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }`<br/> | N
onFilterChange | Function |  | TS 类型：`(filterValue: FilterValue, context: { col?: PrimaryTableCol<T> }) => void`<br/>过滤参数发生变化时触发，泛型 T 指表格数据类型 | N
onRowEdit | Function |  | TS 类型：`(context: PrimaryTableRowEditContext<T>) => void`<br/>行编辑时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`type PrimaryTableRowEditContext<T> = PrimaryTableCellParams<T> & { value: any; editedRow: T }`<br/> | N
onRowValidate | Function |  | TS 类型：`(context: PrimaryTableRowValidateContext<T>) => void`<br/>行编辑校验完成后触发，即组件实例方法 `validateRowData` 执行结束后触发。`result` 表示校验结果，`trigger=self` 表示编辑组件内部触发的校验，`trigger='parent'` 表示表格父组件触发的校验。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`type PrimaryTableRowValidateContext<T> = { result: TableRowValidateResult<T>[]; trigger: TableValidateTrigger }`<br/><br/>`type TableValidateTrigger = 'self' \| 'parent'`<br/><br/>`export type TableRowValidateResult<T> = PrimaryTableCellParams<T> & { errorList: AllValidateResult[]; value: any }`<br/> | N
onSelectChange | Function |  | TS 类型：`(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>) => void`<br/>选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/> | N
onSortChange | Function |  | TS 类型：`(sort: TableSort, options: SortOptions<T>) => void`<br/>排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/> | N
onValidate | Function |  | TS 类型：`(context: PrimaryTableValidateContext) => void`<br/>可编辑行表格，全部数据校验完成后触发。即组件实例方法 `validateTableData` 执行结束后触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableValidateContext { result: TableErrorListMap }`<br/><br/>`type TableErrorListMap = { [key: string]: AllValidateResult[] }`<br/> | N

### PrimaryTable Events

名称 | 参数 | 描述
-- | -- | --
async-loading-click | `(context: { status: 'loading' \| 'load-more' })` | 异步加载区域被点击时触发
cell-click | `(context: PrimaryTableCellEventContext<T>)` | 单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number; e: MouseEvent }`<br/>
change | `(data: TableChangeData, context: TableChangeContext<T>)` | 分页、排序、过滤等内容变化时触发，泛型 T 指表格数据类型，`currentData` 表示变化后的数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`<br/><br/>`interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`<br/><br/>`type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'`<br/>
column-change | `(context: PrimaryTableColumnChange<T>)` | 确认操作之前列配置发生变化时触发。`context.columns` 表示已选中的列；`context.currentColumn` 表示本次变化操作的列，值不存在表示全选操作；`context.type` 表示当前操作属于选中列或是取消列。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: Event }`<br/>
column-controller-visible-change | `(visible: boolean, context: { trigger: 'cancel' \| 'confirm' })` | 列配置弹窗显示或隐藏变化时触发
data-change | `(data: Array<T>, context: TableDataChangeContext)` | 本地数据排序导致 `data` 变化时触发，第一个参数指变化后的数据，第二个参数 `context.trigger` 表示触发本次变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface TableDataChangeContext { trigger: 'sort' }`<br/>
display-columns-change | `(value: CheckboxGroupValue)` | 确认列配置时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`import { CheckboxGroupValue } from '@Checkbox'`<br/>
drag-sort | `(context: DragSortContext<T>)` | 拖拽排序时触发，`data` 表示排序前的数据，`newData` 表示拖拽排序结束后的新数据，`sort=row` 表示行拖拽事件触发，`sort=col` 表示列拖拽事件触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`<br/><br/>`import { SortableEvent, SortableOptions } from 'sortablejs'`<br/>
expand-change | `(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>)` | 展开行发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }`<br/>
filter-change | `(filterValue: FilterValue, context: { col?: PrimaryTableCol<T> })` | 过滤参数发生变化时触发，泛型 T 指表格数据类型
row-edit | `(context: PrimaryTableRowEditContext<T>)` | 行编辑时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`type PrimaryTableRowEditContext<T> = PrimaryTableCellParams<T> & { value: any; editedRow: T }`<br/>
row-validate | `(context: PrimaryTableRowValidateContext<T>)` | 行编辑校验完成后触发，即组件实例方法 `validateRowData` 执行结束后触发。`result` 表示校验结果，`trigger=self` 表示编辑组件内部触发的校验，`trigger='parent'` 表示表格父组件触发的校验。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`type PrimaryTableRowValidateContext<T> = { result: TableRowValidateResult<T>[]; trigger: TableValidateTrigger }`<br/><br/>`type TableValidateTrigger = 'self' \| 'parent'`<br/><br/>`export type TableRowValidateResult<T> = PrimaryTableCellParams<T> & { errorList: AllValidateResult[]; value: any }`<br/>
select-change | `(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>)` | 选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/>
sort-change | `(sort: TableSort, options: SortOptions<T>)` | 排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/>
validate | `(context: PrimaryTableValidateContext)` | 可编辑行表格，全部数据校验完成后触发。即组件实例方法 `validateTableData` 执行结束后触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableValidateContext { result: TableErrorListMap }`<br/><br/>`type TableErrorListMap = { [key: string]: AllValidateResult[] }`<br/>

### PrimaryTableInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
validateRowData | `(rowValue: any)` | \- | 必需。校验行信息，校验完成后，会触发事件 `onRowValidate`。参数 `rowValue` 表示行唯一标识的值
validateTableData | \- | \- | 必需。校验表格全部数据，校验完成后，会触发事件 `onValidate`
