/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdListProps {
  /**
   * 自定义加载中。值为空不显示加载中，值为 'loading' 显示加载中状态，值为 'load-more' 显示加载更多状态。值类型为函数，则表示自定义加载状态呈现内容
   */
  asyncLoading?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 底部
   */
  footer?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 头部
   */
  header?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 排列方式（待设计稿输出）
   * @default horizontal
   */
  layout?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
  };
  /**
   * 尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: 'small' | 'medium' | 'large';
  };
  /**
   * 是否展示分割线
   * @default false
   */
  split?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否展示斑马纹
   * @default false
   */
  stripe?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export interface TdListItemProps {
  /**
   * 操作栏
   */
  action?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
}
