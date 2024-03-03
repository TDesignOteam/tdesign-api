/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { LoadingProps } from '../loading/index';
import { SizeEnum } from '../common/common';

export interface TdButtonProps {
  /**
   * 是否为块级元素
   * @default false
   */
  block?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 按钮内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义 dataset，可通过 event.currentTarget.dataset.custom 获取
   */
  customDataset?: {
    type: ObjectConstructor;
    value?: any;
  };
  /**
   * 禁用状态
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-icon', 't-class-loading'];
  };
  /**
   * 是否为幽灵按钮（镂空按钮）
   * @default false
   */
  ghost?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图标名称。值为字符串表示图标名称，值为 Object 类型，表示透传至 icon。
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 图标属性，透传至 icon
   * @default {}
   */
  iconProps?: {
    type: ObjectConstructor;
    value?: object;
  };
  /**
   * 是否显示为加载状态
   * @default false
   */
  loading?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 透传加载组件全部属性
   */
  loadingProps?: {
    type: ObjectConstructor;
    value?: LoadingProps;
  };
  /**
   * 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形
   * @default rectangle
   */
  shape?: {
    type: StringConstructor;
    value?: 'rectangle' | 'square' | 'round' | 'circle';
  };
  /**
   * 组件尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: SizeEnum;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 按钮标签 `id`
   * @default ''
   */
  tId?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件风格，依次为品牌色、危险色
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'primary' | 'danger' | 'light';
  };
  /**
   * 同小程序的 `formType`，[button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  type?: {
    type: StringConstructor;
    value?: 'submit' | 'reset';
  };
  /**
   * 按钮形式，基础、线框、文字
   * @default base
   */
  variant?: {
    type: StringConstructor;
    value?: 'base' | 'outline' | 'text';
  };
}
