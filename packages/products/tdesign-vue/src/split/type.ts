/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TNode } from '../common';

export interface TdSplitProps {
  /**
   * 分割方向。horizontal：左右排列；vertical：上下排列
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 拖拽图标
   */
  draggerIcon?: string | TNode;
  /**
   * 面板之间的间距（px），会体现在分割条视觉上
   * @default 0
   */
  gap?: number;
  /**
   * 延迟渲染模式
   * @default false
   */
  lazy?: boolean;
  /**
   * 定义每个面板的最大最小比例
   */
  panelSize?: { min?: number; max?: number };
  /**
   * 自定义分割条的样式类名
   * @default ''
   */
  splitterClassName?: string;
  /**
   * 分割条的可交互区域宽度/高度（px）
   * @default 6
   */
  splitterSize?: number;
  /**
   * 拖拽过程中尺寸变化的回调（像素值数组）
   */
  onResize?: (sizes: number[]) => void;
  /**
   * 拖拽结束时的回调
   */
  onResizeEnd?: (sizes: number[]) => void;
  /**
   * 开始拖拽时的回调
   */
  onResizeStart?: (sizes: number[]) => void;
}

/** 组件实例方法 */
export interface SplitInstanceFunctions {
  /**
   * 获取当前各面板的像素尺寸
   */
  getSizes?: () => number[];
  /**
   * 重置为初始尺寸
   */
  reset?: () => void;
  /**
   * 程序化设置尺寸
   */
  setSizes?: (sizes: (number | string | 'auto')[]) => void;
}
