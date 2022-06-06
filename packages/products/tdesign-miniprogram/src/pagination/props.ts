/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdPaginationProps } from './type';
const props: TdPaginationProps = {
  /** 是否禁用分页组件 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 折叠时最多显示页码按钮数 */
  foldedMaxPageBtn: {
    type: Number,
    value: 5,
  },
  /** 最多显示页码按钮数 */
  maxPageBtn: {
    type: Number,
    value: 10,
  },
  /** 分页总页数 */
  pageSize: {
    type: Number,
    value: null,
  },
  /** 分页总页数，非受控属性 */
  defaultPageSize: {
    type: Number,
    value: 10,
  },
  /** 分页大小控制器，值为 [] 则不显示 */
  pageSizeOptions: {
    type: Array,
    value: () => [5, 10, 20, 50],
  },
  /** 是否显示跳转首页尾页页码控制器 */
  showFirstAndLastPageBtn: {
    type: Boolean,
    value: false,
  },
  /** 是否显示跳转页码控制器 */
  showJumper: {
    type: Boolean,
    value: false,
  },
  /** 是否显示页码控制器 */
  showPageNumber: {
    type: Boolean,
    value: true,
  },
  /** 是否显示分页数量控制器 */
  showPageSize: {
    type: Boolean,
    value: true,
  },
  /** 是否显示跳转前后页页码控制器 */
  showPreviousAndNextBtn: {
    type: Boolean,
    value: true,
  },
  /** 分页组件尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 分页组件风格 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 数据总条数 */
  total: {
    type: Number,
    value: 0,
  },
  /** 用于自定义总条数呈现内容。默认显示总条数，值为 false 则不显示 */
  totalContent: {
    type: Boolean,
    value: true,
  },
};

export default props;
