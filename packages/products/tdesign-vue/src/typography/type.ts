/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdTextProps {
  /**
   * 是否添加代码样式
   * @default false
   */
  code?: boolean;
  /**
   * 文本内容
   */
  content?: string | TNode;
  /**
   * 文本内容
   */
  default?: string | TNode;
}

export interface TdTitleProps {
  /**
   * 段落内容
   */
  content?: string | TNode;
  /**
   * 标题内容
   */
  default?: string | TNode;
  /**
   * 标题等级
   * @default h1
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface TdParagraphProps {
  /**
   * 段落内容
   */
  content?: string | TNode;
  /**
   * 段落内容
   */
  default?: string | TNode;
}
