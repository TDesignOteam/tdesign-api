/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { MouseEvent } from 'react';

export interface TdChatActionProps {
  /**
   * 被复制的内容
   * @default ''
   */
  content?: string;
  /**
   * 操作按钮是否可点击
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否点踩
   * @default false
   */
  isBad?: boolean;
  /**
   * 是否点赞
   * @default false
   */
  isGood?: boolean;
  /**
   * 操作按钮配置项，可配置操作按钮选项和顺序
   * @default ["replay", "copy", "good", "bad"]
   */
  operationBtn?: Array<'replay' | 'copy' | 'good' | 'bad'>;
  /**
   * 点击点赞，点踩，复制，重新生成按钮时触发
   */
  onOperation?: (value: string, context: { e: MouseEvent<HTMLElement> }) => void;
}
