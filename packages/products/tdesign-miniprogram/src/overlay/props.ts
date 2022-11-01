/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdOverlayProps } from './type';
const props: TdOverlayProps = {
  /** 自定义样式（即将废弃，推荐使用 `style` ） */
  customStyle: {
    type: String,
    value: '',
  },
  /** 动画时长，单位毫秒 */
  duration: {
    type: Number,
    value: 300,
  },
  /** 防止滚动穿透 */
  preventScrollThrough: {
    type: Boolean,
    value: true,
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /** 遮罩层是否透明 */
  transparent: {
    type: Boolean,
    value: false,
  },
  /** 是否展示 */
  visible: {
    type: Boolean,
    value: null,
    required: true,
  },
  /** 是否展示，非受控属性 */
  defaultVisible: {
    type: Boolean,
    value: true,
    required: true,
  },
  /** 遮罩的层级 */
  zIndex: {
    type: Number,
    value: 1000,
  },
};

export default props;
