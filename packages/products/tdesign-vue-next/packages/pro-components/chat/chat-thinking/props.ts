/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatThinkingProps } from './type';
import { PropType } from 'vue';

export default {
  /** 加载动画类型 */
  animation: {
    type: String as PropType<TdChatThinkingProps['animation']>,
    default: 'circle' as TdChatThinkingProps['animation'],
    validator(val: TdChatThinkingProps['animation']): boolean {
      if (!val) return true;
      return ['circle', 'moving', 'gradient'].includes(val);
    },
  },
  /** 是否折叠 */
  collapsed: Boolean,
  /** 思考内容对象 */
  content: {
    type: Object as PropType<TdChatThinkingProps['content']>,
    required: true,
  },
  /** 布局方式 */
  layout: {
    type: String as PropType<TdChatThinkingProps['layout']>,
    default: 'block' as TdChatThinkingProps['layout'],
    validator(val: TdChatThinkingProps['layout']): boolean {
      if (!val) return true;
      return ['block', 'border'].includes(val);
    },
  },
  /** 内容区域最大高度，超出会自动滚动 */
  maxHeight: {
    type: Number,
  },
  /** 思考状态 */
  status: {
    type: String as PropType<TdChatThinkingProps['status']>,
    default: 'pending' as TdChatThinkingProps['status'],
    required: true,
    validator(val: TdChatThinkingProps['status']): boolean {
            return ['complete', 'stop', 'error', 'pending'].includes(val);
    },
  },
};
