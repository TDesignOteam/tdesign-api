/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { CheckboxProps } from '../checkbox/index';
import { PaginationProps, PageInfo } from '../pagination/index';
import { InputProps } from '../input/index';
import { TNode } from '../common/common';

export interface TdTransferProps {
  /**
   * 用于控制复选框属性
   */
  checkboxProps?: {
    type: ObjectConstructor;
    value?: CheckboxProps;
  };
  /**
   * 数据列表选中项
   * @default []
   */
  checked?: {
    type: ArrayConstructor;
    value?: Array<TransferValue>;
  };
  /**
   * 数据列表选中项，非受控属性
   * @default []
   */
  defaultChecked?: {
    type: ArrayConstructor;
    value?: Array<TransferValue>;
  };
  /**
   * 全量数据
   * @default []
   */
  data?: {
    type: ArrayConstructor;
    value?: Array<T>;
  };
  /**
   * 穿梭框可操作方向
   * @default both
   */
  direction?: {
    type: StringConstructor;
    value?: 'left' | 'right' | 'both';
  };
  /**
   * 禁用全部操作：搜索、选中、移动、分页等。[源列表, 目标列表]，示例：[true, false] 或者 true
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: boolean | Array<boolean>;
  };
  /**
   * 列表为空时呈现的内容。值类型为数组，则表示分别控制源列表和目标列表数据为空的呈现内容
   * @default ''
   */
  empty?: {
    type: StringConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: EmptyType | Array<EmptyType>;
  };
  /**
   * 穿梭框底部内容
   */
  footer?: {
    type: ArrayConstructor;
    value?: Array<string | TNode> | TNode<{ type: TransferListType }>;
  };
  /**
   * 方向操作按钮。默认显示组件内置操作图标。自定义操作图标示例：['向左', '向右'] 或者 `[() => <i class='left' />, () => <i class='left' />]` 或者 `(h, direction) => direction === 'left' ? '《' : '》'`
   */
  operation?: {
    type: ArrayConstructor;
    value?: Array<string | TNode> | TNode<{ direction: 'left' | 'right' }>;
  };
  /**
   * 分页配置，值为空则不显示。具体 API 参考分页组件。值类型为数组，表示可分别控制源列表和目标列表分页组件
   */
  pagination?: {
    type: ObjectConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: PaginationProps | Array<PaginationProps>;
  };
  /**
   * 搜索框配置，值为 false 表示不显示搜索框；值为 true 表示显示默认搜索框；值类型为对象，用于透传 Props 到 Input 组件；值类型为数组，则分别表示控制两侧搜索框
   * @default false
   */
  search?: {
    type: BooleanConstructor;
    optionalTypes: Array<ObjectConstructor | ArrayConstructor>;
    value?: SearchOption | Array<SearchOption>;
  };
  /**
   * 是否显示全选，值类型为数组则表示分别控制源列表和目标列表
   * @default true
   */
  showCheckAll?: {
    type: BooleanConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: boolean | Array<boolean>;
  };
  /**
   * 目标数据列表排列顺序
   * @default original
   */
  targetSort?: {
    type: StringConstructor;
    value?: 'original' | 'push' | 'unshift';
  };
  /**
   * 穿梭框标题，示例：['源列表', '目标列表'] 或者 `[() => 'A', () => 'B']` 或者 `({ type }) => type === 'source' ? '源' : '目标'`
   * @default []
   */
  title?: {
    type: ArrayConstructor;
    value?: Array<TitleType> | TNode<{ type: TransferListType }>;
  };
  /**
   * 自定义渲染节点
   */
  transferItem?: {
    type: null;
    value?: TNode<TransferItem<T>>;
  };
  /**
   * 目标数据列表数据
   * @default []
   */
  value?: {
    type: ArrayConstructor;
    value?: Array<TransferValue>;
  };
  /**
   * 目标数据列表数据，非受控属性
   * @default []
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: Array<TransferValue>;
  };
}

export type EmptyType = string | TNode;

export type SearchOption = boolean | InputProps;

export type TitleType = string | TNode;

export type TransferListType = 'source' | 'target';

export interface TransferItem<T extends DataOption = DataOption> {
  data: T;
  index: number;
  type: TransferListType;
}
