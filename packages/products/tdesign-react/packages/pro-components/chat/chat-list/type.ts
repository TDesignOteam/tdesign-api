/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { MouseEvent } from 'react';
import type { TNode, TElement } from '../common';

export interface TdChatProps {
  /**
   * 自定义操作按钮的插槽
   */
  actions?: TElement;
  /**
   * 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种
   * @default skeleton
   */
  animation?: 'skeleton' | 'moving' | 'gradient';
  /**
   * 自定义每个对话单元的头像插槽
   */
  avatar?: TNode<{ item: TdChatItemProps; index: number }>;
  /**
   * 是否显示清空历史
   * @default true
   */
  clearHistory?: boolean;
  /**
   * 自定义每个对话单独的聊天内容
   */
  content?: TNode<{ item: TdChatItemProps; index: number }>;
  /**
   * 对话列表的数据
   */
  data?: Array<TdChatItemMeta>;
  /**
   * 自定义每个对话单元的时间
   */
  datetime?: TNode<{ item: TdChatItemProps; index: number }>;
  /**
   * 流式加载是否结束
   * @default false
   */
  isStreamLoad?: boolean;
  /**
   * 对话布局形式，支持两侧对齐与左对齐
   * @default both
   */
  layout?: 'both' | 'single';
  /**
   * 自定义每个对话单元的昵称
   */
  name?: TNode<{ item: TdChatItemProps; index: number }>;
  /**
   * 自定义每个对话单元的思考过程的插槽
   */
  reasoning?: TNode<{ item: TdChatItemProps; index: number }>;
  /**
   * 是否表现为倒序
   * @default true
   */
  reverse?: boolean;
  /**
   * 新消息是否处于加载状态，加载状态默认显示骨架屏，接口请求返回数据时请将新消息加载状态置为false
   * @default false
   */
  textLoading?: boolean;
  /**
   * 点击清空历史按钮回调
   */
  onClear?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 滚动事件的回调
   */
  onScroll?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
}

/** 组件实例方法 */
export interface ChatInstanceFunctions {
  /**
   * 对话列表过长时，支持对话列表重新滚动回底部的方法
   */
  scrollToBottom?: (params: ScrollToBottomParams) => void;
}

export interface TdChatItemMeta {
  avatar?: string;
  name?: string;
  role?: string;
  datetime?: string;
  content?: string;
  reasoning?: string;
}

export type ScrollToBottomParams = { behavior: 'auto' | 'smooth' };
