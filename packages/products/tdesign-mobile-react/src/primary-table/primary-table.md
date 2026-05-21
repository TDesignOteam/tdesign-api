:: BASE_DOC ::

## API

### PrimaryTable Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<PrimaryTableCol<T>>` | N
displayColumns | Array | - | 列配置功能中，当前显示的列。TS 类型：`CheckboxGroupValue` | N
defaultDisplayColumns | Array | - | 列配置功能中，当前显示的列。非受控属性。TS 类型：`CheckboxGroupValue` | N
dragSort | String | - | 拖拽排序方式，值为 `row` 表示行拖拽排序，这种方式无法进行文本复制，慎用。值为`row-handler` 表示通过拖拽手柄进行行拖拽排序。值为 `col` 表示列顺序拖拽。值为 `row-handler-col` 表示同时支持行拖拽和列拖拽。⚠️`drag-col` 已废弃，请勿使用。可选项：row/row-handler/col/row-handler-col/drag-col | N
dragSortOptions | Object | - | 拖拽排序扩展参数，具体参数见 [Sortable](https://github.com/SortableJS/Sortable)。TS 类型：`SortableOptions` | N
expandIcon | TNode | true | 用于控制是否显示「展开图标列」，值为 `false` 则不会显示。可以精确到某一行是否显示，还可以自定义展开图标内容。`expandedRow` 存在时，该参数有效。支持全局配置 `GlobalConfigProvider`。TS 类型：`boolean \| TNode<ExpandArrowRenderParams<T>>` `interface ExpandArrowRenderParams<T> { row: T; index: number }`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
expandOnRowClick | Boolean | - | 是否允许点击行展开 | N
expandedRow | TNode | - | 展开行内容，泛型 T 指表格数据类型。TS 类型：`TNode<TableExpandedRowParams<T>>` `interface TableExpandedRowParams<T> { row: T; index: number; columns: PrimaryTableCol<T>[] \| BaseTableCol<T>[] }`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
expandedRowKeys | Array | [] | 展开行。TS 类型：`Array<string \| number>` | N
defaultExpandedRowKeys | Array | [] | 展开行。非受控属性。TS 类型：`Array<string \| number>` | N
filterIcon | TElement | - | 自定义过滤图标，支持全局配置 `GlobalConfigProvider`。TS 类型：`TNode<{ col: PrimaryTableCol<T>; colIndex: number }>`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
filterRow | TNode | - | 自定义过滤状态行及清空筛选等。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
filterValue | Object | - | 过滤数据的值。TS 类型：`FilterValue` `type FilterValue = { [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
defaultFilterValue | Object | - | 过滤数据的值。非受控属性。TS 类型：`FilterValue` `type FilterValue = { [key: string]: any }`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
hideSortTips | Boolean | - | 隐藏排序文本提示，支持全局配置 `GlobalConfigProvider`，默认全局配置值为 `false` | N
indeterminateSelectedRowKeys | Array | - | 半选状态行。选中行请更为使用 `selectedRowKeys` 控制。TS 类型：`Array<string \| number>` | N
loadingMode | String | pull-refresh | 数据加载模式。可选项：pull-refresh/pagination | N
multipleSort | Boolean | false | 是否支持多列排序 | N
reserveSelectedRowOnPaginate | Boolean | true | 行选中功能，是否在分页时保留上一页选中结果不清空。分页场景下，会全选所有页数据，保留跨分页数据。值为 `false` 则表示全部选中操作停留在当前页，不跨分页。 | N
selectOnRowClick | Boolean | - | 是否在点击整行时选中 | N
selectedRowKeys | Array | [] | 选中行。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制。TS 类型：`Array<string \| number>` | N
defaultSelectedRowKeys | Array | [] | 选中行。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制。非受控属性。TS 类型：`Array<string \| number>` | N
showSortColumnBgColor | Boolean | false | 当前排序列是否显示背景色 | N
sort | Object / Array | - | 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序。TS 类型：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
defaultSort | Object / Array | - | 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序。非受控属性。TS 类型：`TableSort` `type TableSort = SortInfo \| Array<SortInfo>` `interface SortInfo { sortBy: string; descending: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
sortIcon | TElement | - | 自定义排序图标，支持全局配置 `GlobalConfigProvider`。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
onCellClick | Function |  | TS 类型：`(context: PrimaryTableCellEventContext<T>) => void`<br/>单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableCellEventContext<T> { row: T; col: PrimaryTableCol; rowIndex: number; colIndex: number; e: MouseEvent }`<br/> | N
onChange | Function |  | TS 类型：`(data: TableChangeData, context: TableChangeContext<T>) => void`<br/>分页、排序、过滤等内容变化时触发，泛型 T 指表格数据类型，`currentData` 表示变化后的数据。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface TableChangeData { sorter?: TableSort; filter?: FilterValue; pagination?: PaginationProps }`<br/><br/>`interface TableChangeContext<T> { trigger: TableChangeTrigger; currentData?: T[] }`<br/><br/>`type TableChangeTrigger = 'filter' \| 'sorter' \| 'pagination'`<br/> | N
onColumnChange | Function |  | TS 类型：`(context: PrimaryTableColumnChange<T>) => void`<br/>确认操作之前列配置发生变化时触发。`context.columns` 表示已选中的列；`context.currentColumn` 表示本次变化操作的列，值不存在表示全选操作；`context.type` 表示当前操作属于选中列或是取消列。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface PrimaryTableColumnChange<T> { columns?: CheckboxGroupValue; currentColumn?: PrimaryTableCol<T>; type?: 'check' \| 'uncheck'; e?: ChangeEvent }`<br/> | N
onDataChange | Function |  | TS 类型：`(data: Array<T>, context: TableDataChangeContext) => void`<br/>本地数据排序导致 `data` 变化时触发，第一个参数指变化后的数据，第二个参数 `context.trigger` 表示触发本次变化的来源。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface TableDataChangeContext { trigger: 'sort' }`<br/> | N
onDisplayColumnsChange | Function |  | TS 类型：`(value: CheckboxGroupValue) => void`<br/>确认列配置时触发。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`import { CheckboxGroupValue } from '@Checkbox'`<br/> | N
onDragSort | Function |  | TS 类型：`(context: DragSortContext<T>) => void`<br/>拖拽排序时触发，`data` 表示排序前的数据，`newData` 表示拖拽排序结束后的新数据，`sort=row` 表示行拖拽事件触发，`sort=col` 表示列拖拽事件触发。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface DragSortContext<T> { currentIndex: number; current: T; targetIndex: number; target: T; data: T[]; newData: T[]; currentData?: T[]; e: SortableEvent; sort: 'row' \| 'col' }`<br/><br/>`import { SortableEvent, SortableOptions } from 'sortablejs'`<br/> | N
onExpandChange | Function |  | TS 类型：`(expandedRowKeys: Array<string \| number>, options: ExpandOptions<T>) => void`<br/>展开行发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface ExpandOptions<T> { expandedRowData: Array<T>; currentRowData: T }`<br/> | N
onFilterChange | Function |  | TS 类型：`(filterValue: FilterValue, context: TableFilterChangeContext<T>) => void`<br/>过滤参数发生变化时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface TableFilterChangeContext<T> { col?: PrimaryTableCol<T>; trigger: 'filter-change' \| 'confirm' \| 'reset' \| 'clear' }`<br/> | N
onSelectChange | Function |  | TS 类型：`(selectedRowKeys: Array<string \| number>, options: SelectOptions<T>) => void`<br/>选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' \| 'check'; currentRowKey?: string; currentRowData?: T }`<br/> | N
onSortChange | Function |  | TS 类型：`(sort: TableSort, options: SortOptions<T>) => void`<br/>排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/> | N
