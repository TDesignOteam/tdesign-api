/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatActionbarProps } from './type';
import { PropType } from 'vue';

export default {
  /** 操作栏配置 */
  actionBar: {
    type: Array as PropType<TdChatActionbarProps['actionBar']>,
    default: ['replay','copy','good','bad','share'],
  },
  /** 评价类型， 可选 'good'（点赞） 或者 'bad'（点踩）， 默认为空 */
  comment: {
    type: String as PropType<TdChatActionbarProps['comment']>,
    validator(val: TdChatActionbarProps['comment']): boolean {
      if (!val) return true;
      return ['good', 'bad'].includes(val);
    },
  },
  /** 被复制的内容 */
  content: {
    type: String,
    default: '',
  },
  /** 点击点赞，点踩，复制，分享，重新生成按钮时触发发 */
  onActions: Function as PropType<TdChatActionbarProps['onActions']>,
};
