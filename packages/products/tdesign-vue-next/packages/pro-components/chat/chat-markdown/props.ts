/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatMarkdownProps } from './type';
import { PropType } from 'vue';

export default {
  /** markdown 内容文本 */
  content: {
    type: String,
    default: '',
  },
  /** Markdown 解析器基础配置 */
  options: {
    type: Object as PropType<TdChatMarkdownProps['options']>,
  },
};
