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
  autofocus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 对应原生 `inputMode`，控制移动端弹出的键盘类型
   * @default numeric
   */
  inputMode?: {
    type: StringConstructor;
    value?: 'numeric' | 'text' | 'decimal' | 'tel' | 'search' | 'email' | 'url';
  };
  /**
   * 验证码总位数，即输入格数量
   * @default 6
   */
  length?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否遮掩显示真实字符，不会修改原始值
   * @default false
   */
  mask?: {
    type: null;
    value?: boolean | string;
  };
  /**
   * 元素的 name 属性，通常用于表单提交
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 输入校验正则
   * @default ''
   */
  pattern?: {
    type: StringConstructor;
    value?: string | RegExp;
  };
  /**
   * 输入格的占位符，可传入数组为每个格子单独设置
   */
  placeholder?: {
    type: null;
    value?: string | string[];
  };
  /**
   * 是否只读
   * @default false
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 分隔符
   * @default ''
   */
  separator?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: SizeEnum;
  };
  /**
   * 校验状态
   * @default default
   */
  status?: {
    type: StringConstructor;
    value?: 'default' | 'error';
  };
  /**
   * 验证码的值
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 验证码的值，非受控属性
   * @default ''
   */
  defaultValue?: {
    type: StringConstructor;
    value?: string;
  };
}
