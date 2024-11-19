/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdRangeInputPopupProps } from '../range-input/type';
import { PropType } from 'vue';

export default {
  /** 输入框状态 */
  status: {
    type: String as PropType<TdRangeInputPopupProps['status']>,
    default: 'default' as TdRangeInputPopupProps['status'],
    validator(val: TdRangeInputPopupProps['status']): boolean {
      if (!val) return true;
      return ['default', 'success', 'warning', 'error'].includes(val);
    },
  },
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  tips: {
    type: [String, Function] as PropType<TdRangeInputPopupProps['tips']>,
  },
};
