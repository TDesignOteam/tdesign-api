/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode, KeysType } from '../common';

export interface TdDropdownMenuProps {
  /**
   * 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 菜单展开方向
   * @default down
   */
  direction?: 'down' | 'up';
  /**
   * 动画时长
   * @default 200
   */
  duration?: string | number;
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 菜单栏 z-index 层级
   * @default 11600
   */
  zIndex?: number;
}

export interface TdDropdownItemProps {
  /**
   * 是否禁用操作项
   * @default false
   */
  disabled?: boolean;
  /**
   * 底部
   */
  footer?: TNode;
  /**
   * 用来定义 value / label / disabled 在 `options` 中对应的字段别名
   */
  keys?: KeysType;
  /**
   * 标题
   * @default ''
   */
  label?: string;
  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 选项数据
   * @default []
   */
  options?: Array<DropdownOption>;
  /**
   * 选项分栏（1-3）
   * @default 1
   */
  optionsColumns?: string | number;
  /**
   * 复选框和内容相对位置，仅单选菜单栏有效
   * @default left
   */
  placement?: 'left' | 'right';
  /**
   * 选中值
   */
  value?: DropdownValue;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: DropdownValue;
  /**
   * 选中值
   */
  modelValue?: DropdownValue;
  /**
   * 值改变时触发
   */
  onChange?: (value: DropdownValue) => void;
  /**
   * 点击确认时触发
   */
  onConfirm?: (value: DropdownValue) => void;
  /**
   * 点击重置时触发
   */
  onReset?: (value: DropdownValue) => void;
}

export interface DropdownOption {
  label: string;
  disabled: boolean;
  value: DropdownValue;
}

export type DropdownValue = string | number | Array<DropdownValue>;
