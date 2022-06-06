:: BASE_DOC ::

## API

### BaseTableCol

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | left | 列横向对齐方式。可选项：left/right/center | N
attrs | Object | - | 透传 HTML 属性到列元素 | N
class-name | String / Object / Array / Function | - | 列类名，值类型是 Function 使用返回值作为列类名；值类型不为 Function 时，值用于整列类名（含表头）。泛型 T 指表格数据类型。TS 类型：`ClassName | ((context: CellData<T>) => ClassName)` `interface CellData<T> extends BaseTableCellParams<T> { type: 'th' | 'td' }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
ellipsis | Boolean / Object / Slot | false | 单元格和表头内容超出时，是否显示省略号。如果仅希望单元格超出省略，可设置 `ellipsisTitle = false`。<br/> 值为 `true`，则浮层默认显示单元格内容；<br/>值类型为 `Function` 则自定义浮层显示内容；<br/>值类型为 `Object`，则自动透传属性到 Popup 组件，可用于调整浮层方向等特性。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
ellipsis-title | Boolean / Object / Slot | undefined | 表头内容超出时，是否显示省略号。优先级高于 `ellipsis`。<br/>值为 `true`，则浮层默认显示表头全部内容；<br/>值类型为 `Function` 则自定义浮层显示表头内容；<br/>值类型为 `Object`，则自动透传属性到 Popup 组件，可用于调整浮层方向等特性。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts) | N
fixed | String | left | 固定列显示位置。可选项：left/right | N
width | String / Number | - | 列宽，可以作为最小宽度使用。当列宽总和小于 `table` 元素时，浏览器根据宽度设置情况自动分配宽度；当列宽总和大于 `table` 元素，表现为定宽。可以同时调整 `table` 元素的宽度来达到自己想要的效果 | N


### PrimaryTable Events

名称 | 参数 | 描述
-- | -- | --
select-change | `(selectedRowKeys: Array<string | number>, options: SelectOptions<T>)` | 选中行发生变化时触发，泛型 T 指表格数据类型。两个参数，第一个参数为选中行 keys，第二个参数为更多参数，具体如下：`type = uncheck` 表示当前行操作为「取消行选中」；`type = check` 表示当前行操作为「行选中」； `currentRowKey` 表示当前操作行的 rowKey 值； `currentRowData` 表示当前操作行的行数据。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts)。<br/>`interface SelectOptions<T> { selectedRowData: Array<T>; type: 'uncheck' | 'check'; currentRowKey?: string; currentRowData?: T }`<br/>
sort-change | `(sort: TableSort, options: SortOptions<T>)` | 排序发生变化时触发。其中 sortBy 表示当前排序的字段，sortType 表示排序的方式，currentDataSource 表示 sorter 排序后的结果，col 表示列配置。sort 值类型为数组时表示多字段排序。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/table/type.ts)。<br/>`interface SortOptions<T> { currentDataSource?: Array<T>; col: PrimaryTableCol }`<br/>
### PrimaryTable Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
omit-base-table-props-t-columns-on-cell-click | \- | - | 继承 `Omit<BaseTableProps<T>, 'columns' | 'onCellClick'>` 中的全部 API | N
