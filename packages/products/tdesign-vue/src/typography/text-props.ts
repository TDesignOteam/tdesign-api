/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTextProps } from '../typography/type';
import { PropType } from 'vue';

export default {
  /** 是否添加代码样式 */
  code: Boolean,
  /** 文本内容 */
  content: {
    type: [String, Function] as PropType<TdTextProps['content']>,
  },
  /** 文本内容 */
  default: {
    type: [String, Function] as PropType<TdTextProps['default']>,
  },
};
