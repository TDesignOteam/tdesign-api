/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';
import { MouseEvent, ChangeEvent } from 'react';

export interface TdCheckboxProps {
  /**
   * 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用
   * @default false
   */
  checkAll?: boolean;
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
   * 多选框内容，同 label
   */
  children?: TNode;
  /**
   * 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled
   */
  disabled?: boolean;
  /**
   * 是否为半选
   * @default false
   */
  indeterminate?: boolean;
  /**
   * 主文案
   */
  label?: TNode;
  /**
   * 是否启用懒加载。数据量大时建议开启；加载复杂内容或大量图片时建议开启
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * HTML 原生属性
   * @default ''
   */
  title?: string;
  /**
   * 多选框的值
   */
  value?: string | number | boolean;
  /**
   * 值变化时触发
   */
  onChange?: (checked: boolean, context: { e: ChangeEvent<HTMLInputElement> }) => void;
  /**
   * 点击时触发，一般用于外层阻止冒泡场景
   */
  onClick?: (context: { e: MouseEvent<HTMLLabelElement> }) => void;
}

export interface TdCheckboxGroupProps<T = CheckboxGroupValue> {
  /**
   * 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled
   */
  disabled?: boolean;
  /**
   * 是否启用懒加载。子组件 Checkbox 数据量大时建议开启；加载复杂内容或大量图片时建议开启
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * 支持最多选中的数量
   */
  max?: number;
  /**
   * 统一设置内部复选框 HTML 属性
   * @default ''
   */
  name?: string;
  /**
   * 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」
   */
  options?: Array<CheckboxOption>;
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * 选中值
   * @default []
   */
  value?: T;
  /**
   * 选中值，非受控属性
   * @default []
   */
  defaultValue?: T;
  /**
   * 值变化时触发，`context.current` 表示当前变化的数据值，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中；`context.option` 表示当前变化的数据项；`context.current` 即将废弃，请勿使用
   */
  onChange?: (value: T, context: CheckboxGroupChangeContext) => void;
}

export type CheckboxOption = string | number | CheckboxOptionObj;

export interface CheckboxOptionObj extends TdCheckboxProps {
  text?: string;
}

export type CheckboxGroupValue = Array<string | number | boolean>;

export interface CheckboxGroupChangeContext {
  e: ChangeEvent<HTMLDivElement>;
  current: CheckboxOption | TdCheckboxProps;
  option: CheckboxOption | TdCheckboxProps;
  type: 'check' | 'uncheck';
}
