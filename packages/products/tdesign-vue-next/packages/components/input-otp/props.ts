/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { PropType } from 'vue';
import type { TdInputOTPProps } from './type';
export default {
  /** 是否自动聚焦 */
  autofocus: Boolean,
  /** 是否禁用 */
  disabled: Boolean,
  /** 验证码总位数，即输入格数量 */
  length: {
    type: Number,
    default: 6,
  },
  /** 是否遮掩显示真实字符，不会修改原始值 */
  mask: {
    type: [Boolean, String] as PropType<TdInputOTPProps['mask']>,
    default: false as TdInputOTPProps['mask'],
  },
  /** 元素的 name 属性，通常用于表单提交 */
  name: {
    type: String,
    default: '',
  },
  /** 输入校验正则 */
  pattern: {
    type: String as PropType<TdInputOTPProps['pattern']>,
    default: '' as TdInputOTPProps['pattern'],
  },
  /** 输入格的占位符，可传入数组为每个格子单独设置 */
  placeholder: {
    type: [String, Array] as PropType<TdInputOTPProps['placeholder']>,
  },
  /** 是否只读 */
  readonly: Boolean,
  /** 分隔符，在指定索引的输入框后渲染分隔符 */
  separator: {
    type: Function as PropType<TdInputOTPProps['separator']>,
  },
  /** 尺寸 */
  size: {
    type: String as PropType<TdInputOTPProps['size']>,
    default: 'medium' as TdInputOTPProps['size'],
    validator(val: TdInputOTPProps['size']): boolean {
      if (!val) return true;
      return ['small', 'medium', 'large'].includes(val);
    },
  },
  /** 校验状态 */
  status: {
    type: String as PropType<TdInputOTPProps['status']>,
    default: 'default' as TdInputOTPProps['status'],
    validator(val: TdInputOTPProps['status']): boolean {
      if (!val) return true;
      return ['default', 'error'].includes(val);
    },
  },
  /** 验证码的值 */
  value: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: undefined,
  },
  /** 验证码的值，非受控属性 */
  defaultValue: {
    type: String,
    default: '',
  },
  /** 在输入、粘贴、剪切、删除时均会触发，返回变化后的新值 */
  onChange: Function as PropType<TdInputOTPProps['onChange']>,
  /** 当输入框内容全部填充时触发回调 */
  onComplete: Function as PropType<TdInputOTPProps['onComplete']>,
};
