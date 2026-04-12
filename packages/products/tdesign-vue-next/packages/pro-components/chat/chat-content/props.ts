/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatContentProps } from './type';
import { PropType } from 'vue';

export default {
  /** 聊天内容，支持多种内容类型。可以是字符串或结构化对象 */
  content: {
    type: [String, Object] as PropType<TdChatContentProps['content']>,
  },
  /** engine可选项：cherry-markdown/marked,options是透传给 ChatMarkdown 组件的全部属性 */
  markdownProps: {
    type: Object as PropType<TdChatContentProps['markdownProps']>,
  },
  /** 角色，不同选项配置不同的样式，支持类型包括用户、助手、错误、模型切换、系统消息 */
  role: {
    type: String as PropType<TdChatContentProps['role']>,
    validator(val: TdChatContentProps['role']): boolean {
      if (!val) return true;
      return ['user', 'assistant', 'error', 'model-change', 'system'].includes(val);
    },
  },
  /** 正文状态 */
  status: {
    type: String as PropType<TdChatContentProps['status']>,
    validator(val: TdChatContentProps['status']): boolean {
      if (!val) return true;
      return ['error', ''].includes(val);
    },
  },
};
