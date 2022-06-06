/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { PopupProps } from '../popup/index';
import { TNode, ClassName } from '../common/common';

export interface BaseTableCol {
  /**
   * 列横向对齐方式
   * @default left
   */
  align?: 'left' | 'right' | 'center';
  /**
   * 透传 HTML 属性到列元素
   */
  attrs?: object;
  /**
   * 列类名，值类型是 Function 使用返回值作为列类名；值类型不为 Function 时，值用于整列类名（含表头）。泛型 T 指表格数据类型
   */
  className?: ClassName | ((context: CellData<T>) => ClassName);
  /**
   * 单元格和表头内容超出时，是否显示省略号。如果仅希望单元格超出省略，可设置 `ellipsisTitle = false`。<br/> 值为 `true`，则浮层默认显示单元格内容；<br/>值类型为 `Function` 则自定义浮层显示内容；<br/>值类型为 `Object`，则自动透传属性到 Popup 组件，可用于调整浮层方向等特性
   * @default false
   */
  ellipsis?: boolean | TNode<BaseTableCellParams<T>> | PopupProps;
  /**
   * 表头内容超出时，是否显示省略号。优先级高于 `ellipsis`。<br/>值为 `true`，则浮层默认显示表头全部内容；<br/>值类型为 `Function` 则自定义浮层显示表头内容；<br/>值类型为 `Object`，则自动透传属性到 Popup 组件，可用于调整浮层方向等特性
   */
  ellipsisTitle?: boolean | TNode<BaseTableColParams<T>> | PopupProps;
  /**
   * 固定列显示位置
   * @default left
   */
  fixed?: 'left' | 'right';
  /**
   * 列宽，可以作为最小宽度使用。当列宽总和小于 `table` 元素时，浏览器根据宽度设置情况自动分配宽度；当列宽总和大于 `table` 元素，表现为定宽。可以同时调整 `table` 元素的宽度来达到自己想要的效果
   */
  width?: string | number;
}

export interface TdPrimaryTableProps<T extends TableRowData = TableRowData>
  extends Omit<TdBaseTableProps<T>, 'columns' | 'onCellClick'> {}

export interface CellData<T> extends BaseTableCellParams<T> {
  type: 'th' | 'td';
}

export interface BaseTableColParams<T> {
  col: BaseTableCol<T>;
  colIndex: number;
}
