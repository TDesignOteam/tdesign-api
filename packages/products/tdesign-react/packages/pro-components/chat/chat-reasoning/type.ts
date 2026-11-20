/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { CollapsePanelProps } from '../collapse';
import type { CollapseValue } from '../collapse';
import type { TElement } from '../common';

export interface TdChatReasoningProps {
  /**
   * 透传给 CollapsePanel 组件的全部属性
   * @default { destroyOnCollapse: false }
   */
  collapsePanelProps?: CollapsePanelProps;
  /**
   * 当前折叠面板展开图标。优先级低于collapsePanelProps.expandIcon
   */
  expandIcon?: TElement;
  /**
   * 展开图标位置，可选项：left/right
   * @default right
   */
  expandIconPlacement?: 'left' | 'right';
  /**
   * 折叠面板头内容。优先级低于collapsePanelProps.header
   */
  header?: TElement;
  /**
   * 折叠面板尾内容。优先级低于collapsePanelProps.headerRightContent
   */
  headerRightContent?: TElement;
  /**
   * 展开图标点击事件
   */
  onExpandChange?: (value: CollapseValue) => void;
}
