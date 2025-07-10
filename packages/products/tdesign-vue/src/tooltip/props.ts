/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTooltipProps } from './type';
import { PropType } from 'vue';

export default {
  /** 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。直接透传到 Popup 组件。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 `'300'` 或者 `[200, 200]`。默认为：[250, 150] */
  delay: {
    type: [Number, Array] as PropType<TdTooltipProps['delay']>,
  },
  /** 是否在关闭浮层时销毁浮层 */
  destroyOnClose: {
    type: Boolean,
    default: true,
  },
  /** 用于设置提示默认显示多长时间之后消失，初始第一次有效，单位：毫秒 */
  duration: {
    type: Number,
  },
  /** 浮层出现位置 */
  placement: {
    type: String as PropType<TdTooltipProps['placement']>,
    default: 'top',
  },
  /** 是否显示浮层箭头 */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /** 文字提示风格 */
  theme: {
    type: String as PropType<TdTooltipProps['theme']>,
    default: 'default' as TdTooltipProps['theme'],
    validator(val: TdTooltipProps['theme']): boolean {
      if (!val) return true;
      return ['default', 'primary', 'success', 'danger', 'warning', 'light'].includes(val);
    },
  },
};
