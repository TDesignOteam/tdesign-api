/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdTooltipLiteProps {
  /**
   * 背景颜色，可传入 16 进制颜色码或 RGB 颜色值，优先级高于theme
   * @default ''
   */
  color?: string;
  /**
   * 文字提示内容
   */
  content?: string | TNode;
  /**
   * 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 `'300'` 或者 `[200, 200]`。默认为：[250, 150]
   */
  delay?: number | Array<number>;
  /**
   * 提示浮层出现的位置
   * @default top
   */
  placement?: 'top' | 'bottom';
  /**
   * 是否显示箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * 组件风格，有亮色模式和暗色模式两种
   * @default dark
   */
  theme?: 'light' | 'dark';
  /**
   * 出现提示浮层的触发方式
   * @default hover
   */
  trigger?: 'hover' | 'click' | 'focus';
  /**
   * 触发元素
   */
  triggerElement?: string | TNode;
  /**
   * 当浮层隐藏或显示时触发
   */
  onVisibleChange?: (visible: boolean, context: TooltipVisibleChangeContext) => void;
}

export interface TooltipVisibleChangeContext {
  e?: TooltipTriggerEvent;
  trigger?: TooltipTriggerSource;
}

export type TooltipTriggerEvent = MouseEvent | FocusEvent;

export type TooltipTriggerSource =
  | 'document'
  | 'trigger-element-click'
  | 'trigger-element-hover'
  | 'trigger-element-blur'
  | 'trigger-element-focus';
