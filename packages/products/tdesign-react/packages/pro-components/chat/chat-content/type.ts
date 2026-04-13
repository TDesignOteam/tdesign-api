/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ChatMarkdownProps } from '../chat-markdown';

export interface TdChatContentProps {
  /**
   * 聊天内容，支持多种内容类型。可以是字符串或结构化对象
   */
  content?: string | ChatContentData;
  /**
   * engine可选项：cherry-markdown/marked,options是透传给 ChatMarkdown 组件的全部属性
   */
  markdownProps?: { engine: 'cherry-markdown' | 'marked'; options: ChatMarkdownProps };
  /**
   * 角色，不同选项配置不同的样式，支持类型包括用户、助手、错误、模型切换、系统消息
   */
  role?: 'user' | 'assistant' | 'error' | 'model-change' | 'system';
  /**
   * 正文状态
   */
  status?: 'error' | '';
}

export interface ChatContentData {
  type: 'text' | 'markdown';
  data: any;
}
