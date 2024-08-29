/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { LoadingProps } from '../loading/index';
import { TooltipProps } from '../tooltip/index';
import { TNode, ClassName } from '../common/common';

export interface TdBaseTableProps<T extends TableRowData = TableRowData> {
  /**
   * 是否显示表格边框
   * @default false
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 单元格数据为空时呈现的内容
   */
  cellEmptyContent?: {
    type: StringConstructor;
    value?: string | TNode<BaseTableCellParams<T>>;
  };
  /**
   * 列配置，泛型 T 指表格数据类型
   * @default []
   */
  columns?: {
    type: ArrayConstructor;
    value?: Array<BaseTableCol<T>>;
  };
  /**
   * 数据源，泛型 T 指表格数据类型
   * @default []
   */
  data?: {
    type: ArrayConstructor;
    value?: Array<T>;
  };
  /**
   * 空表格呈现样式，支持全局配置 `GlobalConfigProvider`
   * @default ''
   */
  empty?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 【开发中】固定行（冻结行），示例：[M, N]，表示冻结表头 M 行和表尾 N 行。M 和 N 值为 0 时，表示不冻结行
   */
  fixedRows?: {
    type: ArrayConstructor;
    value?: Array<number>;
  };
  /**
   * 表格高度，超出后会出现滚动条。示例：100,  '30%',  '300'。值为数字类型，会自动加上单位 px。如果不是绝对固定表格高度，建议使用 `maxHeight`
   */
  height?: {
    type: null;
    value?: string | number;
  };
  /**
   * 加载中状态。值为 `true` 会显示默认加载中样式，可以通过 Function 和 插槽 自定义加载状态呈现内容和样式。值为 `false` 则会取消加载状态
   */
  loading?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 透传加载组件全部属性
   */
  loadingProps?: {
    type: ObjectConstructor;
    value?: Partial<LoadingProps>;
  };
  /**
   * 表格最大高度，超出后会出现滚动条。示例：100, '30%', '300'。值为数字类型，会自动加上单位 px
   */
  maxHeight?: {
    type: null;
    value?: string | number;
  };
  /**
   * 唯一标识一行数据的字段名，来源于 `data` 中的字段。如果是字段嵌套多层，可以设置形如 `item.a.id` 的方法
   * @default 'id'
   */
  rowKey: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示表头
   * @default true
   */
  showHeader?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示斑马纹
   * @default false
   */
  stripe?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 表格内容的总宽度，注意不是表格可见宽度。主要应用于 `table-layout: auto` 模式下的固定列显示。`tableContentWidth` 内容宽度的值必须大于表格可见宽度
   * @default ''
   */
  tableContentWidth?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 表格布局方式
   * @default fixed
   */
  tableLayout?: {
    type: StringConstructor;
    value?: 'auto' | 'fixed';
  };
  /**
   * 行内容上下方向对齐
   * @default middle
   */
  verticalAlign?: {
    type: StringConstructor;
    value?: 'top' | 'middle' | 'bottom';
  };
}

export interface BaseTableCol {
  /**
   * 列横向对齐方式
   * @default left
   */
  align?: 'left' | 'right' | 'center';
  /**
   * 列类名，值类型是 Function 使用返回值作为列类名；值类型不为 Function 时，值用于整列类名（含表头）。泛型 T 指表格数据类型
   */
  className?: TableColumnClassName<T> | TableColumnClassName<T>[];
  /**
   * 渲染列所需字段，值为 `serial-number` 表示当前列为「序号」列
   * @default ''
   */
  colKey?: string;
  /**
   * 单元格和表头内容超出时，是否显示省略号。如果仅希望单元格超出省略，可设置 `ellipsisTitle = false`。<br/> 值为 `true`，则超出省略浮层默认显示单元格内容；<br/>值类型为 `Function` 则自定义超出省略浮中层显示的内容；<br/>值类型为 `Object`，则自动透传属性到 Tooltip 组件，可用于调整浮层背景色和方向等特性。<br/> 同时透传 Tooltip 属性和自定义浮层内容，请使用 `{ props: { theme: 'light' }, content: () => 'something' }`。<br /> 请注意单元格超出省略的两个基本点：1. 内容元素是内联元素或样式（自定义单元格内容时需特别注意）；2. 内容超出父元素
   * @default false
   */
  ellipsis?:
    | boolean
    | TNode<BaseTableCellParams<T>>
    | TooltipProps
    | { props: TooltipProps; content: TNode<BaseTableCellParams<T>> };
  /**
   * 表头内容超出时，是否显示省略号。优先级高于 `ellipsis`。<br/>值为 `true`，则超出省略的浮层默认显示表头全部内容；<br/>值类型为 `Function` 用于自定义超出省略浮层显示的表头内容；<br/>值类型为 `Object`，则自动透传属性到 Tooltip 组件，则自动透传属性到 Tooltip 组件，可用于调整浮层背景色和方向等特性。<br/> 同时透传 Tooltip 属性和自定义浮层内容，请使用 `{ props: { theme: 'light' }, content: () => 'something' }`
   */
  ellipsisTitle?:
    | boolean
    | TNode<BaseTableColParams<T>>
    | TooltipProps
    | { props: TooltipProps; content: TNode<BaseTableColParams<T>> };
  /**
   * 固定列显示位置
   * @default left
   */
  fixed?: 'left' | 'right';
  /**
   * 透传 CSS 属性 `min-width` 到 `<col>` 元素。⚠️ 仅少部分浏览器支持，如：使用 [TablesNG](https://docs.google.com/document/d/16PFD1GtMI9Zgwu0jtPaKZJ75Q2wyZ9EZnVbBacOfiNA/preview) 渲染的 Chrome 浏览器支持 `minWidth`
   */
  minWidth?: string | number;
  /**
   * 列宽，可以作为最小宽度使用。当列宽总和小于 `table` 元素时，浏览器根据宽度设置情况自动分配宽度；当列宽总和大于 `table` 元素，表现为定宽。可以同时调整 `table` 元素的宽度来达到自己想要的效果
   */
  width?: string | number;
}

export interface TdPrimaryTableProps<T extends TableRowData = TableRowData>
  extends Omit<TdBaseTableProps<T>, 'columns' | 'onCellClick'> {
  /**
   * 行选中单选场景，是否允许取消选中
   */
  rowSelectionAllowUncheck?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 行选中类型，单选或多选。效果和 `columns` 中配置的 `{ colKey: 'row-select', type: 'single' }` 一样
   */
  rowSelectionType?: {
    type: StringConstructor;
    value?: 'single' | 'multiple';
  };
}

export interface TableRowData {
  [key: string]: any;
  children?: TableRowData[];
}

export type TableColumnClassName<T> = ClassName | ((context: CellData<T>) => ClassName);

export interface CellData<T> extends BaseTableCellParams<T> {
  type: 'th' | 'td';
}

export interface BaseTableColParams<T> {
  col: BaseTableCol<T>;
  colIndex: number;
}
