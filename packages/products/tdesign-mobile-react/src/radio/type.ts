/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode, KeysType } from '../common';
import { ChangeEvent } from 'react';

export interface TdRadioProps<T = RadioValue> {
  /**
   * 已废弃。复选框和内容相对位置
   * @default left
   */
  align?: 'left' | 'right';
  /**
   * 是否允许取消选中
   * @default false
   */
  allowUncheck?: boolean;
  /**
   * 是否为块级元素
   * @default true
   */
  block?: boolean;
  /**
   * 是否开启无边框模式
   */
  borderless?: boolean;
  /**
   * 是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * 是否选中，非受控属性
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * 单选内容，同 label
   */
  children?: TNode;
  /**
   * 单选内容
   */
  content?: TNode;
  /**
   * 是否禁用组件内容（content）触发选中
   * @default false
   */
  contentDisabled?: boolean;
  /**
   * 是否为禁用态。如果存在父组件 RadioGroup，默认值由 RadioGroup.disabled 控制。优先级：Radio.disabled > RadioGroup.disabled > Form.disabled
   */
  disabled?: boolean;
  /**
   * 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标、值为 'none' 则表示没有图标
   * @default 'circle'
   */
  icon?: 'circle' | 'line' | 'dot' | 'none' | Array<TNode>;
  /**
   * 主文案
   */
  label?: TNode;
  /**
   * 内容最大行数限制
   * @default 5
   */
  maxContentRow?: number;
  /**
   * 主文案最大行数限制
   * @default 3
   */
  maxLabelRow?: number;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 复选框和内容相对位置。优先级高于 RadioGroup.placement。Radio 单独存在时，默认值为 left。如果父组件存在 RadioGroup，默认值便由 RadioGroup.placement 决定
   */
  placement?: 'left' | 'right';
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * 单选按钮的值
   */
  value?: T;
  /**
   * 选中状态变化时触发
   */
  onChange?: (checked: boolean, context: { e: ChangeEvent<HTMLDivElement> }) => void;
}

export interface TdRadioGroupProps<T = RadioValue> {
  /**
   * 是否允许取消选中
   * @default false
   */
  allowUncheck?: boolean;
  /**
   * 是否开启无边框模式；优先级低于 Radio
   * @default false
   */
  borderless?: boolean;
  /**
   * 是否禁用全部子单选框。优先级：Radio.disabled > RadioGroup.disabled > Form.disabled
   */
  disabled?: boolean;
  /**
   * 自定义选中图标和非选中图标。示例：[选中态图标地址，非选中态图标地址]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标
   * @default 'circle'
   */
  icon?: 'circle' | 'line' | 'dot' | Array<TNode>;
  /**
   * 用来定义 value / label / disabled 在 `options` 中对应的字段别名
   */
  keys?: KeysType;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同
   */
  options?: Array<RadioOption>;
  /**
   * 复选框和内容相对位置。优先级低于 Radio.placement
   * @default left
   */
  placement?: 'left' | 'right';
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * 选中的值
   */
  value?: T;
  /**
   * 选中的值，非受控属性
   */
  defaultValue?: T;
  /**
   * 选中值发生变化时触发, `context.name` 指 RadioGroup 的 name 属性
   */
  onChange?: (value: T, context: { e: ChangeEvent<HTMLDivElement>; name?: string }) => void;
}

export type RadioOption = string | number | RadioOptionObj;

export interface RadioOptionObj {
  label?: string | TNode;
  value?: string | number | boolean;
  disabled?: boolean;
}

export type RadioValue = string | number | boolean;
