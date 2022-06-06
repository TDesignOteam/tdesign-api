/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { CheckboxProps } from '../checkbox/index';
import { PopupProps } from '../popup/index';
import { TreeOptionData, SizeEnum } from '../common/common';

export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
  /**
   * 参考 checkbox 组件 API
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
   * 是否支持清空选项
   * @default false
   */
  clearable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 无匹配选项时的内容，默认全局配置为 '暂无数据'
   */
  empty?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否可搜索
   * @default false
   */
  filterable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 用来定义 value / label / children 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: CascaderKeysType;
  };
  /**
   * 延迟加载 children 为 true 的子节点，即使 expandAll 被设置为 true，也同样延迟加载
   * @default true
   */
  lazy?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 加载子树数据的方法（仅当节点 children 为 true 时生效）
   */
  load?: {
    type: null;
    value?: (node: TreeNodeModel<CascaderOption>) => Promise<Array<CascaderOption>>;
  };
  /**
   * 用于控制多选数量，值为 0 则不限制
   * @default 0
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否允许多选
   * @default false
   */
  multiple?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 可选项数据源
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<CascaderOption>;
  };
  /**
   * 占位符
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 参考 popup 组件 API
   */
  popupProps?: {
    type: ObjectConstructor;
    value?: PopupProps;
  };
  /**
   * 选中值使用完整路径，输入框在单选时也显示完整路径
   * @default true
   */
  showAllLevels?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 展开下一层级的方式
   * @default click
   */
  trigger?: {
    type: StringConstructor;
    value?: 'click' | 'hover';
  };
  /**
   * 选中项的值
   * @default []
   */
  value?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor | ArrayConstructor>;
    value?: CascaderValue<CascaderOption>;
  };
  /**
   * 选中项的值，非受控属性
   * @default []
   */
  defaultValue?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor | ArrayConstructor>;
    value?: CascaderValue<CascaderOption>;
  };
  /**
   * 选中值模式。all 表示父节点和子节点全部会出现在选中值里面；parentFirst 表示当子节点全部选中时，仅父节点在选中值里面；onlyLeaf 表示无论什么情况，选中值仅呈现叶子节点
   * @default onlyLeaf
   */
  valueMode?: {
    type: StringConstructor;
    value?: 'onlyLeaf' | 'parentFirst' | 'all';
  };
}

export interface CascaderKeysType {
  value?: string;
  label?: string;
  children?: string | boolean;
}

export type CascaderValue<T extends TreeOptionData = TreeOptionData> = string | number | T | Array<CascaderValue<T>>;
