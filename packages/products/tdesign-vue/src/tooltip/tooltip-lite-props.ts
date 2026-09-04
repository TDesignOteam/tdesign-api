/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTooltipLiteProps } from '../tooltip/type';
import { PropType } from 'vue';

export default {
  /** 文字提示内容 */
  content: {
    type: [String, Function] as PropType<TdTooltipLiteProps['content']>,
  },
  /** 提示浮层出现的位置 */
  placement: {
    type: String as PropType<TdTooltipLiteProps['placement']>,
    default: 'top' as TdTooltipLiteProps['placement'],
    validator(val: TdTooltipLiteProps['placement']): boolean {
      if (!val) return true;
      return ['top', 'bottom', 'mouse'].includes(val);
    },
  },
  /** 是否显示箭头 */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /** 文字提示浮层是否需要阴影 */
  showShadow: {
    type: Boolean,
    default: true,
  },
  /** 组件风格，有亮色模式和暗色模式两种 */
  theme: {
    type: String as PropType<TdTooltipLiteProps['theme']>,
    default: 'default' as TdTooltipLiteProps['theme'],
    validator(val: TdTooltipLiteProps['theme']): boolean {
      if (!val) return true;
      return ['light', 'default'].includes(val);
    },
  },
  /** 触发元素 */
  triggerElement: {
    type: [String, Function] as PropType<TdTooltipLiteProps['triggerElement']>,
  },
};
