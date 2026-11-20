/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TNode } from '../common/common';

export interface TdMasonryProps {
  /**
   * 列数，可传入固定数值或按容器宽度断点配置（如 `{ 0: 2, 640: 3, 1024: 4 }`）
   * @default 2
   */
  column?: number | Record<number, number>;
  /**
   * 间距，可传入固定数值或按容器宽度断点配置（如 `{ 0: 8, 640: 12, 1024: 16 }`）
   * @default 0
   */
  gap?: number | Record<number, number>;
  /**
   * 瀑布流数据源数组，配合 `renderItem` 使用，除 `key` 外不限制数据项的字段和内容
   */
  items?: MasonryItem[];
  /**
   * 自定义渲染每一个瀑布流 item 的函数，接收数据项和索引，返回要展示的节点，配合 `items` 使用
   */
  renderItem?: (item: MasonryItem, index: number) => TNode;
  /**
   * 数据排布策略，可选值 `shortest`（最短列优先，将新项放入当前累计高度最小的列）、`sequential`（按序轮流，新项按固定顺序轮流放入各列）
   * @default shortest
   */
  strategy?: 'shortest' | 'sequential';
  /**
   * 瀑布流类型，可选值 `fixed-width`（固定宽度和自适应高度）、`fixed-both`（固定宽度和高度）、`fixed-height`（自适应宽度和固定高度）、`free-size`（动态宽高）
   * @default fixed-width
   */
  type?: 'fixed-width' | 'fixed-both' | 'fixed-height' | 'free-size';
  /**
   * 布局发生变化时触发
   */
  onLayoutChange?: (items: MasonryItemLayout[]) => void;
}

export interface MasonryItem {
  key: string | number;
  [prop: string]: any;
}

export interface MasonryItemLayout {
  key: string | number;
  index: number;
  column: number;
  x: number;
  y: number;
  width: number;
  height: number;
}
