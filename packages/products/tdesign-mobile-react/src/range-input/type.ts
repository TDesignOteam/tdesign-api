/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdRangeInputPopupProps {
  /**
   * 输入框状态
   * @default default
   */
  status?: 'default' | 'success' | 'warning' | 'error';
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: TNode;
}
