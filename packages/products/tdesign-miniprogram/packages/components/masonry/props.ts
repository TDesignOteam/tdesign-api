/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdMasonryProps } from './type';
const props: TdMasonryProps = {
  /** 列数，可传入固定数值或按容器宽度断点配置（如 `{ 0: 2, 640: 3, 1024: 4 }`） */
  column: {
    type: null,
    value: 2,
  },
  /** 间距，可传入固定数值或按容器宽度断点配置（如 `{ 0: 8, 640: 12, 1024: 16 }`） */
  gap: {
    type: null,
    value: 0,
  },
  /** 瀑布流数据源数组，配合 `renderItem` 使用，除 `key` 外不限制数据项的字段和内容 */
  items: {
    type: Array,
  },
  /** 自定义渲染每一个瀑布流 item 的函数，接收数据项和索引，返回要展示的节点，配合 `items` 使用 */
  renderItem: {
    type: null,
  },
  /** 数据排布策略，可选值 `shortest`（最短列优先，将新项放入当前累计高度最小的列）、`sequential`（按序轮流，新项按固定顺序轮流放入各列） */
  strategy: {
    type: String,
    value: 'shortest',
  },
  /** 瀑布流类型，可选值 `fixed-width`（固定宽度和自适应高度）、`fixed-both`（固定宽度和高度）、`fixed-height`（自适应宽度和固定高度）、`free-size`（动态宽高） */
  type: {
    type: String,
    value: 'fixed-width',
  },
};

export default props;
