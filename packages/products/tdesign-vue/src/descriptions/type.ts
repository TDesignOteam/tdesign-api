/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode, SizeEnum, ClassName } from '../common';

export interface TdDescriptionsProps {
  /**
   * 是否带边框
   * @default false
   */
  bordered?: boolean;
  /**
   * 字段名右侧是否携带冒号“：”
   */
  colon?: boolean;
  /**
   * 一行 DescriptionItem 的数量
   * @default 2
   */
  columns?: number;
  /**
   * 字段值内容的对齐方式：左对齐、居中对齐
   * @default left
   */
  contentAlign?: 'left' | 'right' | 'center';
  /**
   * 描述项的排列方向
   * @default horizontal
   */
  itemLayout?: 'horizontal' | 'vertical';
  /**
   * 描述项的列表
   */
  items?: Array<T>;
  /**
   * 字段标签对齐方式：左对齐、右对齐、居中对齐
   * @default left
   */
  labelAlign?: 'left' | 'right' | 'center';
  /**
   * 自定义描述项的标签的类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`
   */
  labelClassName?: ClassName;
  /**
   * 排列方向
   * @default horizontal
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * 组件尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 描述列表的标题
   */
  title?: string | TNode;
}

export interface TdDescriptionItemProps {
  /**
   * 描述项内容
   */
  content?: string | TNode;
  /**
   * 描述项标签
   */
  label?: string | TNode;
  /**
   * 占用的宽度数量
   * @default 1
   */
  span?: number;
}
