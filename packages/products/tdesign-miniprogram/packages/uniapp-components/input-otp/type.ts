/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { SizeEnum } from '../common/common';

export interface TdInputOTPProps {
  /**
   * 是否自动聚焦
   * @default false
   */
  autofocus?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 对应原生 `inputMode`，控制移动端弹出的键盘类型
   * @default numeric
   */
  inputMode?: 'numeric' | 'text' | 'decimal' | 'tel' | 'search' | 'email' | 'url';
  /**
   * 验证码总位数，即输入格数量
   * @default 6
   */
  length?: number;
  /**
   * 是否遮掩显示真实字符，不会修改原始值
   * @default false
   */
  mask?: boolean | string;
  /**
   * 元素的 name 属性，通常用于表单提交
   * @default ''
   */
  name?: string;
  /**
   * 输入校验正则
   * @default ''
   */
  pattern?: string | RegExp;
  /**
   * 输入格的占位符，可传入数组为每个格子单独设置
   */
  placeholder?: string | string[];
  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 分隔符
   * @default ''
   */
  separator?: string;
  /**
   * 尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 校验状态
   * @default default
   */
  status?: 'default' | 'error';
  /**
   * 验证码的值
   * @default ''
   */
  value?: string;
  /**
   * 验证码的值，非受控属性
   * @default ''
   */
  defaultValue?: string;
  /**
   * 在输入、粘贴、剪切、删除时均会触发，返回变化后的新值
   */
  onChange?: (value: string) => void;
  /**
   * 当输入框内容全部填充时触发回调
   */
  onComplete?: (value: string) => void;
}
