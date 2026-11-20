/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdBaseTableProps, TdPrimaryTableProps, TdEnhancedTableProps } from './type';

export const baseTableDefaultProps: TdBaseTableProps = {
  defaultActiveRowKeys: [],
  bordered: false,
  columns: [],
  data: [],
  disableDataPage: false,
  disableSpaceInactiveRow: undefined,
  empty: '',
  footData: [],
  footerAffixedBottom: false,
  headerAffixedTop: false,
  hover: false,
  keyboardRowHover: true,
  lazyLoad: false,
  loading: undefined,
  resizable: false,
  rowKey: 'id',
  showHeader: true,
  stripe: false,
  tableLayout: 'fixed',
  verticalAlign: 'middle',
};

export const primaryTableDefaultProps: Pick<
  TdPrimaryTableProps,
  | 'columnControllerVisible'
  | 'columns'
  | 'defaultExpandedRowKeys'
  | 'expandIcon'
  | 'multipleSort'
  | 'reserveSelectedRowOnPaginate'
  | 'defaultSelectedRowKeys'
  | 'showSortColumnBgColor'
> = {
  columnControllerVisible: undefined,
  columns: [],
  defaultExpandedRowKeys: [],
  expandIcon: true,
  multipleSort: false,
  reserveSelectedRowOnPaginate: true,
  defaultSelectedRowKeys: [],
  showSortColumnBgColor: false,
};

export const enhancedTableDefaultProps: TdEnhancedTableProps = { defaultExpandedTreeNodes: [] };
