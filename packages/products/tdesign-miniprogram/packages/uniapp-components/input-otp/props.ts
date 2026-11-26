/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdInputOTPProps } from './type';
export default {
  /** 是否自动聚焦 */
  autofocus: Boolean,
  /** 是否禁用 */
  disabled: Boolean,
  /** 对应原生 `inputMode`，控制移动端弹出的键盘类型 */
  inputMode: {
    type: String,
    default: 'numeric' as TdInputOTPProps['inputMode'],
    validator(val: TdInputOTPProps['inputMode']): boolean {
      if (!val) return true;
      return ['numeric', 'text', 'decimal', 'tel', 'search', 'email', 'url'].includes(val);
    },
  },
  /** 验证码总位数，即输入格数量 */
  length: {
    type: Number,
    default: 6,
  },
  /** 是否遮掩显示真实字符，不会修改原始值 */
  mask: {
    type: [Boolean, String],
    default: false as TdInputOTPProps['mask'],
  },
  /** 元素的 name 属性，通常用于表单提交 */
  name: {
    type: String,
    default: '',
  },
  /** 输入校验正则 */
  pattern: {
    type: String,
    default: '' as TdInputOTPProps['pattern'],
  },
  /** 输入格的占位符，可传入数组为每个格子单独设置 */
  placeholder: {
    type: [String, Array],
  },
  /** 是否只读 */
  readonly: Boolean,
  /** 分隔符 */
  separator: {
    type: String,
    default: '',
  },
  /** 尺寸 */
  size: {
    type: String,
    default: 'medium' as TdInputOTPProps['size'],
    validator(val: TdInputOTPProps['size']): boolean {
      if (!val) return true;
      return ['small', 'medium', 'large'].includes(val);
    },
  },
  /** 校验状态 */
  status: {
    type: String,
    default: 'default' as TdInputOTPProps['status'],
    validator(val: TdInputOTPProps['status']): boolean {
      if (!val) return true;
      return ['default', 'error'].includes(val);
    },
  },
  /** 验证码的值 */
  value: {
    type: String,
    default: '',
  },
  /** 验证码的值，非受控属性 */
  defaultValue: {
    type: String,
    default: '',
  },
  /** 在输入、粘贴、剪切、删除时均会触发，返回变化后的新值 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 当输入框内容全部填充时触发回调 */
  onComplete: {
    type: Function,
    default: () => ({}),
  },
};
