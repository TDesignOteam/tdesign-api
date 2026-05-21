:: BASE_DOC ::

## API

### BaseTable Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
bordered | Boolean | false | 是否显示表格边框 | N
cellEmptyContent | TNode | - | 单元格数据为空时呈现的内容。TS 类型：`string \| TNode<BaseTableCellParams<T>>`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
columns | Array | [] | 列配置，泛型 T 指表格数据类型。TS 类型：`Array<BaseTableCol<T>>` | N
data | Array | [] | 数据源，泛型 T 指表格数据类型。TS 类型：`Array<T>` | N
empty | TNode | '' | 空表格呈现样式，支持全局配置 `GlobalConfigProvider`。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
fixedRows | Array | - | `0.16.0`。固定行（冻结行），示例：[M, N]，表示冻结表头 M 行和表尾 N 行。M 和 N 值为 0 时，表示不冻结行。TS 类型：`Array<number>` | N
footerSummary | TNode | - | 表尾总结行。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
height | String / Number | - | 表格高度，超出后会出现滚动条。示例：100,  '30%',  '300'。值为数字类型，会自动加上单位 px。如果不是绝对固定表格高度，建议使用 `maxHeight` | N
loading | TNode | undefined | 加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态。TS 类型：`boolean \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
loadingProps | Object | - | 透传加载组件全部属性。TS 类型：`Partial<LoadingProps>`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
maxHeight | String / Number | - | 表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px | N
rowAttributes | Object / Array / Function | - | `0.17.0`。HTML 标签 `tr` 的属性。类型为 Function 时，参数说明：`params.row` 表示行数据；`params.rowIndex` 表示行下标；`params.type=body` 表示属性作用于 `tbody` 中的元素；`params.type=foot` 表示属性作用于 `tfoot` 中的元素。<br />示例一：{ draggable: true }，<br />示例二：[{ draggable: true }, { title: '超出省略显示' }]。<br /> 示例三：() => [{ draggable: true }]。TS 类型：`TableRowAttributes<T>` `type TableRowAttributes<T> = HTMLElementAttributes \| ((params: { row: T; rowIndex: number; type: 'body' \| 'foot' }) => HTMLElementAttributes) \| Array<TableRowAttributes<T>>`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
rowClassName | String / Object / Array / Function | - | `0.17.0`。行类名，泛型 T 指表格数据类型。`params.row` 表示行数据；`params.rowIndex` 表示行下标；`params.type=body`  表示类名作用于 `tbody` 中的元素；`params.type= tfoot` 表示类名作用于 `tfoot` 中的元素。TS 类型：`ClassName \| ((params: RowClassNameParams<T>) => ClassName)` `interface RowClassNameParams<T> { row: T; rowIndex: number; rowKey?: string; type?: 'body' \| 'foot' }`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
rowKey | String | 'id' | 必需。唯一标识一行数据的字段名，来源于 `data` 中的字段。如果是字段嵌套多层，可以设置形如 `item.a.id` 的方法 | Y
rowspanAndColspan | Function | - | 用于自定义合并单元格，泛型 T 指表格数据类型。示例：`({ row, col, rowIndex, colIndex }) => { rowspan: 2, colspan: 3 }`。TS 类型：`TableRowspanAndColspanFunc<T>` `type TableRowspanAndColspanFunc<T extends TableRowData = TableRowData> = (params: BaseTableCellParams<T>) => RowspanColspan` `interface RowspanColspan { colspan?: number; rowspan?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts) | N
showHeader | Boolean | true | 是否显示表头 | N
stripe | Boolean | false | 是否显示斑马纹 | N
tableContentWidth | String | - | 表格内容的总宽度，注意不是表格可见宽度。主要应用于 `table-layout: auto` 模式下的固定列显示。`tableContentWidth` 内容宽度的值必须大于表格可见宽度 | N
tableLayout | String | fixed | 表格布局方式。可选项：auto/fixed | N
verticalAlign | String | middle | 行内容上下方向对齐。可选项：top/middle/bottom | N
onCellClick | Function |  | TS 类型：`(context: BaseTableCellEventContext<T>) => void`<br/>单元格点击时触发。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface BaseTableCellEventContext<T extends TableRowData = TableRowData> { row: T; col: BaseTableCol<T>; rowIndex: number; colIndex: number; e: MouseEvent }`<br/> | N
onRowClick | Function |  | TS 类型：`(context: RowEventContext<T>) => void`<br/>行点击时触发，泛型 T 指表格数据类型。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/table/type.ts)。<br/>`interface RowEventContext<T extends TableRowData = TableRowData> { row: T; index: number; e: MouseEvent }`<br/> | N
onScroll | Function |  | TS 类型：`(params: { e: UIEvent }) => void`<br/>表格内容滚动时触发 | N

### BaseTableInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
refreshTable | \- | \- | 必需。全部重新渲染表格
