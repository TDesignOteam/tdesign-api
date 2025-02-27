/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { KeysType } from '../common/common';

export interface TdDropdownItemProps {
  /**
   * 是否禁用操作项
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 用来定义 value / label / disabled 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: KeysType;
  };
  /**
   * 标题
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否多选
   * @default false
   */
  multiple?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选项数据
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<DropdownOption>;
  };
  /**
   * 选项分栏（1-3）
   * @default 1
   */
  optionsColumns?: {
    type: null;
    value?: string | number;
  };
  /**
   * 复选框和内容相对位置，仅单选菜单栏有效
   * @default left
   */
  placement?: {
    type: StringConstructor;
    value?: 'left' | 'right';
  };
  /**
   * 选中值
   */
  value?: {
    type: null;
    value?: DropdownValue;
  };
  /**
   * 选中值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: DropdownValue;
  };
}

export interface DropdownOption {
  label: string;
  disabled: boolean;
  value: DropdownValue;
}

export type DropdownValue = string | number | Array<DropdownValue>;
