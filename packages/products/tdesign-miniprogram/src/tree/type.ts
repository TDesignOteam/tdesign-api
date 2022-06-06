/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { CheckboxProps } from '../checkbox/index';
import { TNode, TreeOptionData } from '../common/common';

export interface TdTreeProps<T extends TreeOptionData = TreeOptionData> {
  /**
   * 节点是否可高亮
   * @default false
   */
  activable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否允许多个节点同时高亮
   * @default false
   */
  activeMultiple?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 高亮的节点值
   */
  actived?: {
    type: ArrayConstructor;
    value?: Array<TreeNodeValue>;
  };
  /**
   * 高亮的节点值，非受控属性
   */
  defaultActived?: {
    type: ArrayConstructor;
    value?: Array<TreeNodeValue>;
  };
  /**
   * 是否允许在过滤时节点折叠节点
   * @default false
   */
  allowFoldNodeOnFilter?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 透传属性到 checkbox 组件。参考 checkbox 组件 API
   */
  checkProps?: {
    type: ObjectConstructor;
    value?: CheckboxProps;
  };
  /**
   * 父子节点选中状态不再关联，可各自选中或取消
   * @default false
   */
  checkStrictly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 隐藏节点复选框
   * @default false
   */
  checkable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 树数据，泛型 `T` 表示树节点 TS 类型
   * @default []
   */
  data?: {
    type: ArrayConstructor;
    value?: Array<T>;
  };
  /**
   * 是否禁用树操作
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 数据为空时展示的文本
   * @default ''
   */
  empty?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否展开全部节点
   * @default false
   */
  expandAll?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 默认展开的级别，第一层为 0
   * @default 0
   */
  expandLevel?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 同级别展开互斥，手风琴效果
   * @default false
   */
  expandMutex?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否支持点击节点也能展开收起
   * @default false
   */
  expandOnClickNode?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 展开子节点时是否自动展开父节点
   * @default false
   */
  expandParent?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 展开的节点值
   * @default []
   */
  expanded?: {
    type: ArrayConstructor;
    value?: Array<TreeNodeValue>;
  };
  /**
   * 展开的节点值，非受控属性
   * @default []
   */
  defaultExpanded?: {
    type: ArrayConstructor;
    value?: Array<TreeNodeValue>;
  };
  /**
   * 节点过滤方法，只呈现返回值为 true 的节点，泛型 `T` 表示树节点 TS 类型
   */
  filter?: {
    type: null;
    value?: (node: TreeNodeModel<T>) => boolean;
  };
  /**
   * 节点是否有悬浮状态
   */
  hover?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 节点图标，可自定义
   * @default true
   */
  icon?: {
    type: BooleanConstructor;
    value?: boolean | TNode<TreeNodeModel>;
  };
  /**
   * 用来定义 value / label / children 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: TreeKeysType;
  };
  /**
   * 自定义节点内容，值为 false 不显示，值为 true 显示默认 label，值为字符串直接输出该字符串。泛型 `T` 表示树节点 TS 类型
   * @default true
   */
  label?: {
    type: StringConstructor;
    optionalTypes: Array<BooleanConstructor>;
    value?: string | boolean | TNode<TreeNodeModel<T>>;
  };
  /**
   * 延迟加载 children 为 true 的节点的子节点数据，即使 expandAll 被设置为 true，也同样延迟加载
   * @default true
   */
  lazy?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 连接线。值为 false 不显示连接线；值为 true 显示默认连接线；值类型为 Function 表示自定义连接线
   * @default false
   */
  line?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 加载子数据的方法，在展开节点时调用（仅当节点 children 为 true 时生效），泛型 `T` 表示树节点 TS 类型
   */
  load?: {
    type: null;
    value?: (node: TreeNodeModel<T>) => Promise<Array<T>>;
  };
  /**
   * 自定义节点操作项，泛型 `T` 表示树节点 TS 类型
   */
  operations?: {
    type: null;
    value?: TNode<TreeNodeModel<T>>;
  };
  /**
   * 节点展开折叠时是否使用过渡动画
   * @default true
   */
  transition?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选中值（组件为可选状态时）
   * @default []
   */
  value?: {
    type: ArrayConstructor;
    value?: Array<TreeNodeValue>;
  };
  /**
   * 选中值（组件为可选状态时），非受控属性
   * @default []
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: Array<TreeNodeValue>;
  };
  /**
   * 选中值模式。all 表示父节点和子节点全部会出现在选中值里面；parentFirst 表示当子节点全部选中时，仅父节点在选中值里面；onlyLeaft 表示无论什么情况，选中值仅呈现叶子节点
   * @default onlyLeaf
   */
  valueMode?: {
    type: StringConstructor;
    value?: 'onlyLeaf' | 'parentFirst' | 'all';
  };
}

/** 组件实例方法 */
export interface TreeInstanceFunctions<T extends TreeOptionData = TreeOptionData> {
  /**
   * 为指定节点添加子节点，默认添加到根节点，泛型 `T` 表示树节点 TS 类型
   */
  appendTo?: {
    type: null;
    value?: (value: TreeNodeValue, newData: T | Array<T>) => void;
  };
  /**
   * 获取指定节点下标
   */
  getIndex?: {
    type: null;
    value?: (value: TreeNodeValue) => number;
  };
  /**
   * 获取指定节点所有信息，泛型 `T` 表示树节点 TS 类型
   */
  getItem?: {
    type: null;
    value?: (value: TreeNodeValue) => TreeNodeModel<T>;
  };
  /**
   * 获取某节点的全部子孙节点；参数为空，则表示获取整棵树的全部节点，泛型 `T` 表示树节点 TS 类型
   */
  getItems?: {
    type: null;
    value?: (value?: TreeNodeValue) => Array<TreeNodeModel<T>>;
  };
  /**
   * 获取指定节点的直属父节点，泛型 `T` 表示树节点 TS 类型
   */
  getParent?: {
    type: null;
    value?: (value: TreeNodeValue) => TreeNodeModel<T>;
  };
  /**
   * 获取指定节点的全部父节点，泛型 `T` 表示树节点 TS 类型
   */
  getParents?: {
    type: null;
    value?: (value: TreeNodeValue) => TreeNodeModel<T>[];
  };
  /**
   * 自下而上获取全路径数据，泛型 `T` 表示树节点 TS 类型
   */
  getPath?: {
    type: null;
    value?: (value: TreeNodeValue) => TreeNodeModel<T>[];
  };
  /**
   * 插入新节点到指定节点后面，泛型 `T` 表示树节点 TS 类型
   */
  insertAfter?: {
    type: null;
    value?: (value: TreeNodeValue, newData: T) => void;
  };
  /**
   * 插入新节点到指定节点前面，泛型 `T` 表示树节点 TS 类型
   */
  insertBefore?: {
    type: null;
    value?: (value: TreeNodeValue, newData: T) => void;
  };
  /**
   * 移除指定节点
   */
  remove?: {
    type: null;
    value?: (value: TreeNodeValue) => void;
  };
  /**
   * 设置节点状态
   */
  setItem?: {
    type: null;
    value?: (value: TreeNodeValue, options: TreeNodeState) => void;
  };
}

export interface TreeNodeState {
  /**
   * 节点是否允许被激活
   * @default false
   */
  activable?: boolean;
  /**
   * 节点是否被激活
   * @default false
   */
  actived?: boolean;
  /**
   * 节点是否允许被选中
   * @default false
   */
  checkable?: boolean;
  /**
   * 节点是否被选中
   * @default false
   */
  checked?: boolean;
  /**
   * 节点是否被禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 子节点是否互斥展开
   * @default false
   */
  expandMutex?: boolean;
  /**
   * 节点是否已展开
   * @default false
   */
  expanded?: boolean;
  /**
   * 节点是否为半选中状态
   * @default false
   */
  indeterminate?: boolean;
  /**
   * 节点标签文案
   * @default ''
   */
  label?: string;
  /**
   * 子节点数据是否在加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 节点值
   */
  value?: string | number;
  /**
   * 节点是否可视
   * @default false
   */
  visible?: boolean;
}

export interface TreeKeysType {
  value?: string;
  label?: string;
  children?: string;
}

export type TreeNodeValue = string | number;
