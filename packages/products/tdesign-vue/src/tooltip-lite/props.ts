/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTooltipLiteProps } from './type';
import { PropType } from 'vue';

export default {
  /** 背景颜色，可传入 16 进制颜色码或 RGB 颜色值，优先级高于theme */
  color: {
    type: String,
    default: '',
  },
  /** 文字提示内容 */
  content: {
    type: [String, Function] as PropType<TdTooltipLiteProps['content']>,
  },
  /** 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 `'300'` 或者 `[200, 200]`。默认为：[250, 150] */
  delay: {
    type: [Number, Array] as PropType<TdTooltipLiteProps['delay']>,
  },
  /** 提示浮层出现的位置 */
  placement: {
    type: String as PropType<TdTooltipLiteProps['placement']>,
    default: 'top' as TdTooltipLiteProps['placement'],
    validator(val: TdTooltipLiteProps['placement']): boolean {
      if (!val) return true;
      return ['top', 'bottom'].includes(val);
    },
  },
  /** 是否显示箭头 */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /** 组件风格，有亮色模式和暗色模式两种 */
  theme: {
    type: String as PropType<TdTooltipLiteProps['theme']>,
    default: 'dark' as TdTooltipLiteProps['theme'],
    validator(val: TdTooltipLiteProps['theme']): boolean {
      if (!val) return true;
      return ['light', 'dark'].includes(val);
    },
  },
  /** 出现提示浮层的触发方式 */
  trigger: {
    type: String as PropType<TdTooltipLiteProps['trigger']>,
    default: 'hover' as TdTooltipLiteProps['trigger'],
    validator(val: TdTooltipLiteProps['trigger']): boolean {
      if (!val) return true;
      return ['hover', 'click', 'focus'].includes(val);
    },
  },
  /** 触发元素 */
  triggerElement: {
    type: [String, Function] as PropType<TdTooltipLiteProps['triggerElement']>,
  },
  /** 当浮层隐藏或显示时触发 */
  onVisibleChange: Function as PropType<TdTooltipLiteProps['onVisibleChange']>,
};
