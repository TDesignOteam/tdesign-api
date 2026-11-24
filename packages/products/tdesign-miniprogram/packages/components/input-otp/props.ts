/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdInputOTPProps } from './type';
const props: TdInputOTPProps = {
  /** 是否自动聚焦 */
  autofocus: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 对应原生 `inputMode`，控制移动端弹出的键盘类型 */
  inputMode: {
    type: String,
    value: 'numeric',
  },
  /** 验证码总位数，即输入格数量 */
  length: {
    type: Number,
    value: 6,
  },
  /** 是否遮掩显示真实字符，不会修改原始值 */
  mask: {
    type: null,
    value: false,
  },
  /** 元素的 name 属性，通常用于表单提交 */
  name: {
    type: String,
    value: '',
  },
  /** 输入校验正则 */
  pattern: {
    type: String,
    value: '',
  },
  /** 输入格的占位符，可传入数组为每个格子单独设置 */
  placeholder: {
    type: null,
  },
  /** 是否只读 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 分隔符 */
  separator: {
    type: String,
    value: '',
  },
  /** 尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 校验状态 */
  status: {
    type: String,
    value: 'default',
  },
  /** 验证码的值 */
  value: {
    type: String,
    value: null,
  },
  /** 验证码的值，非受控属性 */
  defaultValue: {
    type: String,
    value: '',
  },
};

export default props;
