/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { OverlayProps } from '../overlay';
import { TNode, TElement, TreeOptionData, TreeKeysType, TScroll } from '../common';

export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
  /**
   * 父子节点选中状态不再关联，可各自选中或取消
   * @default false
   */
  checkStrictly?: boolean;
  /**
   * 关闭按钮
   * @default true
   */
  closeBtn?: TNode;
  /**
   * 头部
   */
  header?: TElement;
  /**
   * 用来定义 value / label / children / disabled 在 `options` 中对应的字段别名
   */
  keys?: CascaderKeysType;
  /**
   * 是否异步加载
   * @default false
   */
  lazy?: boolean;
  /**
   * 是否完成异步加载
   * @default false
   */
  loadCompleted?: boolean;
  /**
   * 中间内容
   */
  middleContent?: TElement;
  /**
   * 可选项数据源
   * @default []
   */
  options?: Array<CascaderOption>;
  /**
   * 遮罩层的属性，透传至 overlay
   * @default {}
   */
  overlayProps?: OverlayProps;
  /**
   * 未选中时的提示文案
   * @default 选择选项
   */
  placeholder?: string;
  /**
   * 懒加载和虚拟滚动。为保证组件收益最大化，当数据量小于阈值 `scroll.threshold` 时，无论虚拟滚动的配置是否存在，组件内部都不会开启虚拟滚动，`scroll.threshold` 默认为 `100`
   */
  scroll?: TScroll;
  /**
   * 每级展示的次标题
   * @default []
   */
  subTitles?: Array<string>;
  /**
   * 展示风格
   * @default step
   */
  theme?: 'step' | 'tab';
  /**
   * 标题
   */
  title?: TNode;
  /**
   * 选项值
   */
  value?: string | number;
  /**
   * 选项值，非受控属性
   */
  defaultValue?: string | number;
  /**
   * 是否展示
   * @default false
   */
  visible?: boolean;
  /**
   * 值发生变更时触发
   */
  onChange?: (value: string | number, selectedOptions: CascaderOption[]) => void;
  /**
   * 关闭时触发
   */
  onClose?: (trigger: CascaderTriggerSource) => void;
  /**
   * 选择后触发
   */
  onPick?: (context: { value: string | number; label: string; index: number; level: number }) => void;
}

export type CascaderKeysType = TreeKeysType;

export type CascaderTriggerSource = 'overlay' | 'close-btn' | 'finish';
