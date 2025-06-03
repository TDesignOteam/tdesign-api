/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdQrCodeProps } from './type';
import { PropType } from 'vue';

export default {
  /** 二维码背景颜色 */
  bgColor: {
    type: String,
    default: 'transparent',
  },
  /** 是否有边框 */
  borderless: Boolean,
  /** 二维码颜色 */
  color: {
    type: String,
    default: '',
  },
  /** 二维码中图片的地址或自定义icon */
  icon: {
    type: [String, Function] as PropType<TdQrCodeProps['icon']>,
  },
  /** 二维码中图片的大小 */
  iconSize: {
    type: [Number, Object] as PropType<TdQrCodeProps['iconSize']>,
    default: 40,
  },
  /** 二维码纠错等级 */
  level: {
    type: String as PropType<TdQrCodeProps['level']>,
    default: 'M' as TdQrCodeProps['level'],
    validator(val: TdQrCodeProps['level']): boolean {
      if (!val) return true;
      return ['L', 'M', 'Q', 'H'].includes(val);
    },
  },
  /** 二维码大小 */
  size: {
    type: Number,
    default: 160,
  },
  /** 二维码状态 */
  status: {
    type: String as PropType<TdQrCodeProps['status']>,
    default: 'active' as TdQrCodeProps['status'],
    validator(val: TdQrCodeProps['status']): boolean {
      if (!val) return true;
      return ['active', 'expired', 'loading', 'scanned'].includes(val);
    },
  },
  /** 自定义状态渲染器 */
  statusRender: {
    type: Function as PropType<TdQrCodeProps['statusRender']>,
  },
  /** 渲染类型 */
  type: {
    type: String as PropType<TdQrCodeProps['type']>,
    default: 'canvas' as TdQrCodeProps['type'],
    validator(val: TdQrCodeProps['type']): boolean {
      if (!val) return true;
      return ['canvas', 'svg'].includes(val);
    },
  },
  /** 扫描后的文本 */
  value: {
    type: String,
    default: '',
  },
  /** 点击"点击刷新"的回调 */
  onRefresh: Function as PropType<TdQrCodeProps['onRefresh']>,
};
