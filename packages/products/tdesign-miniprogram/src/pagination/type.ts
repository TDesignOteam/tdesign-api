/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdPaginationProps {
  /**
   * 是否禁用分页组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 折叠时最多显示页码按钮数
   * @default 5
   */
  foldedMaxPageBtn?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 最多显示页码按钮数
   * @default 10
   */
  maxPageBtn?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 分页总页数
   * @default 10
   */
  pageSize?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 分页总页数，非受控属性
   * @default 10
   */
  defaultPageSize?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 分页大小控制器，值为 [] 则不显示
   * @default () => [5, 10, 20, 50]
   */
  pageSizeOptions?: {
    type: ArrayConstructor;
    value?: Array<number | { label: string; value: number }>;
  };
  /**
   * 是否显示跳转首页尾页页码控制器
   * @default false
   */
  showFirstAndLastPageBtn?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示跳转页码控制器
   * @default false
   */
  showJumper?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示页码控制器
   * @default true
   */
  showPageNumber?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示分页数量控制器
   * @default true
   */
  showPageSize?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示跳转前后页页码控制器
   * @default true
   */
  showPreviousAndNextBtn?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 分页组件尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: 'small' | 'medium';
  };
  /**
   * 分页组件风格
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'simple';
  };
  /**
   * 数据总条数
   * @default 0
   */
  total?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 用于自定义总条数呈现内容。默认显示总条数，值为 false 则不显示
   * @default true
   */
  totalContent?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
