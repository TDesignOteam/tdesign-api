/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdColorPickerProps } from './type';
import { PropType } from 'vue';

export default {
  /** 自动关闭。在点击遮罩层时自动关闭，不需要手动设置 visible */
  autoClose: {
    type: Boolean,
    default: true,
  },
  /** 是否可清空 */
  clearable: Boolean,
  /** 底部插槽，仅在 `usePopup` 为 `true` 时有效 */
  footer: {
    type: Function as PropType<TdColorPickerProps['footer']>,
  },
  /** 顶部插槽，仅在 `usePopup` 为 `true` 时有效 */
  header: {
    type: Function as PropType<TdColorPickerProps['header']>,
  },
  /** popupProps透传 */
  popupProps: {
    type: Object as PropType<TdColorPickerProps['popupProps']>,
    default: () => ({}),
  },
  /** 是否使用弹出层包裹颜色选择器 */
  usePopup: Boolean,
  /** 是否显示颜色选择器。`usePopup` 为 true 时有效 */
  visible: Boolean,
  /** 关闭按钮时触发 */
  onClose: Function as PropType<TdColorPickerProps['onClose']>,
};
