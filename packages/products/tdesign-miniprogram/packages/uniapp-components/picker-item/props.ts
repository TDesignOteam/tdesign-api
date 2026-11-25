/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdPickerItemProps } from './type';
export default {
  /** 格式化标签 */
  format: {
    type: Function,
  },
  /** PickerItem的子项高度，单位 rpx */
  itemHeight: {
    type: Number,
    default: 80,
  },
  /** 数据源 */
  options: {
    type: Array,
    default: (): TdPickerItemProps['options'] => [],
  },
};
