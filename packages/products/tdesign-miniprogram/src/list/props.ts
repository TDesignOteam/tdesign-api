/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdListProps } from './type';
const props: TdListProps = {
  /** 自定义加载中。值为空不显示加载中，值为 'loading' 显示加载中状态，值为 'load-more' 显示加载更多状态。值类型为函数，则表示自定义加载状态呈现内容 */
  asyncLoading: {
    type: String,
  },
  /** 底部 */
  footer: {
    type: String,
  },
  /** 头部 */
  header: {
    type: String,
  },
  /** 排列方式（待设计稿输出） */
  layout: {
    type: String,
    value: 'horizontal',
  },
  /** 尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 是否展示分割线 */
  split: {
    type: Boolean,
    value: false,
  },
  /** 是否展示斑马纹 */
  stripe: {
    type: Boolean,
    value: false,
  },
};

export default props;
