/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { MouseEvent } from 'react';

export interface TdChatActionbarProps {
  /**
   * 操作栏配置
   * @default ['replay','copy','good','bad','share']
   */
  actionBar?: Array<'replay' | 'copy' | 'good' | 'bad' | 'share'>;
  /**
   * 评价类型， 可选 'good'（点赞） 或者 'bad'（点踩）， 默认为空
   */
  comment?: 'good' | 'bad';
  /**
   * 被复制的内容
   * @default ''
   */
  content?: string;
  /**
   * 点击点赞，点踩，复制，分享，重新生成按钮时触发发
   */
  onActions?: (value: string, context: { e: MouseEvent<HTMLDivElement> }) => void;
}
