/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSplitProps, TdSplitPanelProps } from './type';
import { PropType } from 'vue';

export default {
  /** 必须是 Panel 组件，数量需与 initialSizes 长度匹配 */
  children: {
    type: [String, Function] as PropType<TdSplitProps['children']>,
    required: true,
  },
  /** 容器自定义类名 */
  className: {
    type: String,
    default: '',
  },
  /** 分割方向。horizontal：左右排列；vertical：上下排列 */
  direction: {
    type: String as PropType<TdSplitProps['direction']>,
    default: 'horizontal' as TdSplitProps['direction'],
    validator(val: TdSplitProps['direction']): boolean {
      if (!val) return true;
      return ['horizontal', 'vertical'].includes(val);
    },
  },
  /** 拖拽图标 */
  draggerIcon: {
    type: [String, Function] as PropType<TdSplitProps['draggerIcon']>,
  },
  /** 面板之间的间距（px），会体现在分割条视觉上 */
  gap: {
    type: Number,
    default: 0,
  },
  /** 延迟渲染模式 */
  lazy: Boolean,
  /** 定义每个面板的最大最小比例 */
  panelSize: {
    type: Object as PropType<TdSplitProps['panelSize']>,
  },
  /** 自定义分割条的样式类名 */
  splitterClassName: {
    type: String,
    default: '',
  },
  /** 分割条的可交互区域宽度/高度（px） */
  splitterSize: {
    type: Number,
    default: 6,
  },
  /** 拖拽过程中尺寸变化的回调（像素值数组） */
  onOnResize: Function as PropType<TdSplitProps['onOnResize']>,
  /** 拖拽结束时的回调 */
  onOnResizeEnd: Function as PropType<TdSplitProps['onOnResizeEnd']>,
  /** 开始拖拽时的回调 */
  onOnResizeStart: Function as PropType<TdSplitProps['onOnResizeStart']>,
};

export default {
  /** 面板内容 */
  children: {
    type: [String, Function] as PropType<TdSplitPanelProps['children']>,
  },
  /** 面板自定义类名 */
  className: {
    type: String,
    default: '',
  },
  /** 初始面板大小，支持数字 px 或者文字 '百分比%' 类型 */
  defaultSize: {
    type: [String, Number] as PropType<TdSplitPanelProps['defaultSize']>,
  },
  /** 当前面板的最大尺寸,支持数字 px 或者文字 '百分比%' 类型-继承父级 panelSize.max */
  max: {
    type: [String, Number] as PropType<TdSplitPanelProps['max']>,
  },
  /** 当前面板的最小尺寸,支持数字 px 或者文字 '百分比%' 类型-继承父级 panelSize.min */
  min: {
    type: [String, Number] as PropType<TdSplitPanelProps['min']>,
  },
  /** 是否开启拖拽伸缩 */
  resizable: {
    type: Boolean,
    default: true,
  },
};
