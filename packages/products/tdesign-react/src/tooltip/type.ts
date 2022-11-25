/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdTooltipLiteProps {
  /**
   * 触发元素，同 triggerElement
   */
  children?: TNode;
  /**
   * 文字提示内容
   */
  content?: TNode;
  /**
   * 提示浮层出现的位置
   * @default top
   */
  placement?: 'top' | 'bottom' | 'mouse';
  /**
   * 是否显示箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * 文字提示浮层是否需要阴影
   * @default true
   */
  showShadow?: boolean;
  /**
   * 组件风格，有亮色模式和暗色模式两种
   * @default default
   */
  theme?: 'light' | 'default';
  /**
   * 触发元素
   */
  triggerElement?: TNode;
}
