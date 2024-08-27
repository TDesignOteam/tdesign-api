/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { BadgeProps } from '../badge/index';

export interface TdSideBarProps {
  /**
   * 选项值
   */
  value?: {
    type: null;
    value?: string | number;
  };
  /**
   * 选项值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: string | number;
  };
}

export interface TdSideBarItemProps {
  /**
   * 透传至 Badge 组件
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: BadgeProps;
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
   * `1.0.0-rc.1`。图标，传对象则透传至 Icon
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 展示的标签
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 当前选项的值
   */
  value?: {
    type: null;
    value?: string | number;
  };
}
