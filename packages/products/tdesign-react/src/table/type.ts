/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { CheckboxGroupValue } from '../checkbox';
import { SortableEvent, SortableOptions } from 'sortablejs';
import { TNode, TElement } from '../common';
import { MouseEvent, ChangeEvent } from 'react';

export interface TdPrimaryTableProps<T extends TableRowData = TableRowData>
  extends Omit<TdBaseTableProps<T>, 'columns' | 'onCellClick'> {
  /**
   * 异步加载状态。值为 `loading` 显示默认文字 “正在加载中，请稍后”，值为 `loading-more` 显示“点击加载更多”，值为其他，表示完全自定义异步加载区域内容
   */
  asyncLoading?: 'loading' | 'load-more' | TNode;
  /**
   * 自定义显示列控制器，值为空不会显示。具体属性请看下方 `TableColumnController` 文档
   */
  columnController?: TableColumnController;
  /**
   * 是否显示列配置弹框控制器，只要该属性值不为 `undefined`，弹框的显示/隐藏完全由该属性控制
   */
  columnControllerVisible?: boolean;
  /**
   * 是否显示列配置弹框控制器，只要该属性值不为 `undefined`，弹框的显示/隐藏完全由该属性控制，非受控属性
   */
  defaultColumnControllerVisible?: boolean;
  /**
   * 列配置，泛型 T 指表格数据类型
   * @default []
   */
  columns?: Array<PrimaryTableCol<T>>;
  /**
   * 列配置功能中，当前显示的列
   */
  displayColumns?: CheckboxGroupValue;
  /**
   * 列配置功能中，当前显示的列，非受控属性
   */
  defaultDisplayColumns?: CheckboxGroupValue;
  /**
   * 拖拽排序方式，值为 `row` 表示行拖拽排序，这种方式无法进行文本复制，慎用。值为`row-handler` 表示通过拖拽手柄进行行拖拽排序。值为 `col` 表示列顺序拖拽。值为 `row-handler-col` 表示同时支持行拖拽和列拖拽。⚠️`drag-col` 已废弃，请勿使用。
   */
  dragSort?: 'row' | 'row-handler' | 'col' | 'row-handler-col' | 'drag-col';
  /**
   * 拖拽排序扩展参数，具体参数见 [Sortable](https://github.com/SortableJS/Sortable)
   */
  dragSortOptions?: SortableOptions;
  /**
   * 单元格是否允许编辑。返回值为 `true` 则表示可编辑；返回值为 `false` 则表示不可编辑，只读状态
   */
  editableCellState?: EditableCellType<T>;
  /**
   * 处于编辑状态的行
   */
  editableRowKeys?: Array<string | number>;
  /**
   * 用于控制是否显示「展开图标列」，值为 `false` 则不会显示。可以精确到某一行是否显示，还可以自定义展开图标内容。`expandedRow` 存在时，该参数有效。支持全局配置 `GlobalConfigProvider`
   * @default true
   */
  expandIcon?: boolean | TNode<ExpandArrowRenderParams<T>>;
  /**
   * 是否允许点击行展开
   */
  expandOnRowClick?: boolean;
  /**
   * 展开行内容，泛型 T 指表格数据类型
   */
  expandedRow?: TNode<TableExpandedRowParams<T>>;
  /**
   * 展开行
   * @default []
   */
  expandedRowKeys?: Array<string | number>;
  /**
   * 展开行，非受控属性
   * @default []
   */
  defaultExpandedRowKeys?: Array<string | number>;
  /**
   * 自定义过滤图标，支持全局配置 `GlobalConfigProvider`
   */
  filterIcon?: TElement;
  /**
   * 自定义过滤状态行及清空筛选等
   */
  filterRow?: TNode;
  /**
   * 过滤数据的值
   */
  filterValue?: FilterValue;
  /**
   * 过滤数据的值，非受控属性
   */
  defaultFilterValue?: FilterValue;
  /**
   * 隐藏排序文本提示，支持全局配置 `GlobalConfigProvider`，默认全局配置值为 `false`
   */
  hideSortTips?: boolean;
  /**
   * 半选状态行。选中行请更为使用 `selectedRowKeys` 控制
   */
  indeterminateSelectedRowKeys?: Array<string | number>;
  /**
   * 是否支持多列排序
   * @default false
   */
  multipleSort?: boolean;
  /**
   * 行选中功能，是否在分页时保留上一页选中结果不清空，本地数据分页场景下，会全选所有页数据。值为 `false` 则表示全部选中操作停留在当前页，不跨分页；本地数据分页场景下，全选仅选中当前页
   * @default true
   */
  reserveSelectedRowOnPaginate?: boolean;
  /**
   * 选中行，控制属性。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制
   * @default []
   */
  selectedRowKeys?: Array<string | number>;
  /**
   * 选中行，控制属性。半选状态行请更为使用 `indeterminateSelectedRowKeys` 控制，非受控属性
   * @default []
   */
  defaultSelectedRowKeys?: Array<string | number>;
  /**
   * 当前排序列是否显示背景色
   * @default false
   */
  showSortColumnBgColor?: boolean;
  /**
   * 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序
   */
  sort?: TableSort;
  /**
   * 排序控制。sortBy 排序字段；descending 是否进行降序排列。值为数组时，表示正进行多字段排序，非受控属性
   */
  defaultSort?: TableSort;
  /**
   * 自定义排序图标，支持全局配置 `GlobalConfigProvider`
   */
  sortIcon?: TElement;
  /**
   * 允许表格行拖拽时排序。请更为使用 `dragSort=\"row\"`
   * @default false
   * @deprecated
   */
  sortOnRowDraggable?: boolean;
  /**
   * 异步加载区域被点击时触发
   */
  onAsyncLoadingClick?: (context: { status: 'loading' | 'load-more' }) => void;
  /**
   * 单元格点击时触发
   */
  onCellClick?: (context: PrimaryTableCellEventContext<T>) => void;
  /**
   * 分页、排序、过滤等内容变化时触发，泛型 T 指表格数据类型，`currentData` 表示变化后的数据
   */
  onChange?: (data: TableChangeData, context: TableChangeContext<T>) => void;
  /**
   * 确认操作之前列配置发生变化时触发。`context.columns` 表示已选中的列；`context.currentColumn` 表示本次变化操作的列，值不存在表示全选操作；`context.type` 表示当前操作属于选中列或是取消列
   */
  onColumnChange?: (context: PrimaryTableColumnChange<T>) => void;
  /**
   * 列配置弹窗显示或隐藏变化时触发
   */
  onColumnControllerVisibleChange?: (visible: boolean, context: { trigger: 'cancel' | 'confirm' }) => void;
  /**
   * 本地数据排序导致 `data` 变化时触发，第一个参数指变化后的数据，第二个参数 `context.trigger` 表示触发本次变化的来源
   */
  onDataChange?: (data: Array<T>, context: TableDataChangeContext) => void;
  /**
   * 确认列配置时触发
   */
  onDisplayColumnsChange?: (value: CheckboxGroupValue) => void;
  /**
   * 拖拽排序时触发，`data` 表示排序前的数据，`newData` 表示拖拽排序结束后的新数据，`sort=row` 表示行拖拽事件触发，`sort=col` 表示列拖拽事件触发
   */
  onDragSort?: (context: DragSortContext<T>) => void;
  /**
   * 展开行发生变化时触发，泛型 T 指表格数据类型
   */
  onExpandChange?: (expandedRowKeys: Array<string | number>, options: ExpandOptions<T>) => void;
  /**
   * 过滤参数发生变化时触发，泛型 T 指表格数据类型
   */
  onFilterChange?: (filterValue: FilterValue, context: { col?: PrimaryTableCol<T> }) => void;
  /**
   * 行编辑时触发
   */
  onRowEdit?: (context: PrimaryTableRowEditContext<T>) => void;
  /**
   * 行编辑校验完成后触发，即组件实例方法 `validateRowData` 执行结束后触发。`result` 表示校验结果，`trigger=self` 表示编辑组件内部触发的校验，`trigger='parent'` 表示表格父组件触发的校验
   */
  onRowValidate?: (context: PrimaryTableRowValidateContext<T>) => void;
  /**
   * 选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据
   */
  onSelectChange?: (selectedRowKeys: Array<string | number>, options: SelectOptions<T>) => void;
  /**
   * 排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序
   */
  onSortChange?: (sort: TableSort, options: SortOptions<T>) => void;
  /**
   * 可编辑行表格，全部数据校验完成后触发。即组件实例方法 `validateTableData` 执行结束后触发
   */
  onValidate?: (context: PrimaryTableValidateContext) => void;
}

/** 组件实例方法 */
export interface PrimaryTableInstanceFunctions<T extends TableRowData = TableRowData> {
  /**
   * 校验行信息，校验完成后，会触发事件 `onRowValidate`。参数 `rowValue` 表示行唯一标识的值
   */
  validateRowData: (rowValue: any) => void;
  /**
   * 校验表格全部数据，校验完成后，会触发事件 `onValidate`
   */
  validateTableData: () => void;
}

export type EditableCellType<T> = (params: PrimaryTableCellParams<T>) => boolean;

export interface ExpandArrowRenderParams<T> {
  row: T;
  index: number;
}

export interface TableExpandedRowParams<T> {
  row: T;
  index: number;
  columns: PrimaryTableCol<T>[] | BaseTableCol<T>[];
}

export type FilterValue = { [key: string]: any };

export type TableSort = SortInfo | Array<SortInfo>;

export interface SortInfo {
  sortBy: string;
  descending: boolean;
}

export interface PrimaryTableCellEventContext<T> {
  row: T;
  col: PrimaryTableCol;
  rowIndex: number;
  colIndex: number;
  e: MouseEvent<HTMLDivElement>;
}

export interface TableChangeData {
  sorter?: TableSort;
  filter?: FilterValue;
  pagination?: PaginationProps;
}

export interface TableChangeContext<T> {
  trigger: TableChangeTrigger;
  currentData?: T[];
}

export type TableChangeTrigger = 'filter' | 'sorter' | 'pagination';

export interface PrimaryTableColumnChange<T> {
  columns?: CheckboxGroupValue;
  currentColumn?: PrimaryTableCol<T>;
  type?: 'check' | 'uncheck';
  e?: ChangeEvent<HTMLDivElement>;
}

export interface TableDataChangeContext {
  trigger: 'sort';
}

export interface DragSortContext<T> {
  currentIndex: number;
  current: T;
  targetIndex: number;
  target: T;
  data: T[];
  newData: T[];
  currentData?: T[];
  e: SortableEvent;
  sort: 'row' | 'col';
}

export interface ExpandOptions<T> {
  expandedRowData: Array<T>;
  currentRowData: T;
}

export type PrimaryTableRowEditContext<T> = PrimaryTableCellParams<T> & { value: any; editedRow: T };

export type PrimaryTableRowValidateContext<T> = { result: TableRowValidateResult<T>[]; trigger: TableValidateTrigger };

export type TableValidateTrigger = 'self' | 'parent';

export type TableRowValidateResult<T> = PrimaryTableCellParams<T> & { errorList: AllValidateResult[]; value: any };

export interface SelectOptions<T> {
  selectedRowData: Array<T>;
  type: 'uncheck' | 'check';
  currentRowKey?: string;
  currentRowData?: T;
}

export interface SortOptions<T> {
  currentDataSource?: Array<T>;
  col: PrimaryTableCol;
}

export interface PrimaryTableValidateContext {
  result: TableErrorListMap;
}

export type TableErrorListMap = { [key: string]: AllValidateResult[] };
