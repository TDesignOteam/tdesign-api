/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { AvatarProps } from '../avatar';
import { TNode, TElement } from '../common';
import { MouseEvent, KeyboardEvent, FocusEvent, FormEvent } from 'react';

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
   * 自定义头像的插槽
   */
  avatar?: TElement;
  /**
   * 是否显示清空历史
   * @default true
   */
  clearHistory?: boolean;
  /**
   * 对话列表的数据
   */
  data?: Array<TdChatItemProps>;
  /**
   * 自定义时间的插槽
   */
  datetime?: TElement;
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
   * 自定义昵称的插槽
   */
  name?: TElement;
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
  scrollToBottom?: (params: { behavior: 'auto' | 'smooth' }) => void;
}

export interface TdChatLoadingProps {
  /**
   * 加载的状态形式
   * @default moving
   */
  animation?: 'moving' | 'gradient';
  /**
   * 加载过程展示的文字内容
   * @default ''
   */
  text?: string;
}

export interface TdChatItemProps {
  /**
   * 自定义的操作内容
   */
  actions?: TNode;
  /**
   * 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种
   * @default skeleton
   */
  animation?: 'skeleton' | 'moving' | 'gradient';
  /**
   * 自定义的头像配置
   */
  avatar?: String | AvatarProps | TNode;
  /**
   * 对话单元的内容
   */
  content?: TNode;
  /**
   * 对话单元的时间配置
   */
  datetime?: TNode;
  /**
   * 自定义的昵称
   */
  name?: TNode;
  /**
   * 值为false不显示思维链，为对象则单独配置思维链内容
   * @default false
   */
  reasoning?: boolean | TdChatReasoning;
  /**
   * 角色，不同选项配置不同的样式，支持类型包括用户、助手、错误、模型切换、系统消息
   */
  role?: 'user' | 'assistant' | 'error' | 'model-change' | 'system';
  /**
   * 新消息是否处于加载状态，加载状态默认显示骨架屏，接口请求返回数据时请将新消息加载状态置为false
   * @default false
   */
  textLoading?: boolean;
  /**
   * 气泡框样式，支持基础、线框、文字三种类型
   * @default text
   */
  variant?: 'base' | 'outline' | 'text';
}

export interface TdChatContentProps {
  /**
   * 聊天内容，支持 markdown 格式
   * @default ''
   */
  content?: string;
  /**
   * 角色，不同选项配置不同的样式，支持类型包括用户、助手、错误、模型切换、系统消息
   */
  role?: 'user' | 'assistant' | 'error' | 'model-change' | 'system';
}

export interface TdChatActionProps {
  /**
   * 被复制的内容
   * @default ''
   */
  content?: string;
  /**
   * 操作按钮是否可点击
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否点踩
   * @default false
   */
  isBad?: boolean;
  /**
   * 是否点赞
   * @default false
   */
  isGood?: boolean;
  /**
   * 操作按钮配置项，可配置操作按钮选项和顺序
   */
  operationBtn?: array;
  /**
   * 点击点赞，点踩，复制，重新生成按钮时触发
   */
  onOperation?: (value: string, context: { e: MouseEvent<HTMLElement> }) => void;
}

export interface TdChatInputProps {
  /**
   * 输入框是否自动聚焦
   * @default false
   */
  autofocus?: boolean;
  /**
   * 高度自动撑开。 autosize = true 表示组件高度自动撑开，同时，依旧允许手动拖高度。如果设置了 autosize.maxRows 或者 autosize.minRows 则不允许手动调整高度
   * @default { minRows: 1, maxRows: 5 }
   */
  autosize?: boolean | { minRows?: number; maxRows?: number };
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: boolean;
  /**
   * 输入框默认文案
   * @default ''
   */
  placeholder?: string;
  /**
   * 中止按钮是否可点击。等流式数据全部返回结束置为false，注意跟textLoading的控制时机不是同一个
   * @default false
   */
  stopDisabled?: boolean;
  /**
   * 输入框聚焦时触发
   */
  onBlur?: (value: string, context: { e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 输入框值发生变化时触发
   */
  onChange?: (
    value: string,
    context: { e: FormEvent<HTMLInputElement> | MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement> },
  ) => void;
  /**
   * 输入框聚焦时触发
   */
  onFocus?: (value: string, context: { e: FocusEvent<HTMLDivElement> }) => void;
  /**
   * 点击消息发送的回调方法
   */
  onSend?: (value: string, context: { e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 点击消息终止的回调方法
   */
  onStop?: (value: string, context: { e: MouseEvent<HTMLDivElement> }) => void;
}

export interface TdChatSenderProps {
  /**
   * 输入框左下角区域扩展
   */
  prefix?: TNode;
  /**
   * 中止按钮是否可点击。等流式数据全部返回结束置为false，注意跟textLoading的控制时机不是同一个
   * @default false
   */
  stopDisabled?: boolean;
  /**
   * 输入框右下角区域扩展
   */
  suffix?: TNode;
  /**
   * 点击消息发送的回调方法
   */
  onSend?: (value: string, context: { e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement> }) => void;
  /**
   * 点击消息终止的回调方法
   */
  onStop?: (value: string, context: { e: MouseEvent<HTMLDivElement> }) => void;
}

export interface TdChatReasoning {
  expandIconPlacement?: 'left' | 'right';
  onExpandChange?: (isExpand: boolean) => void;
  collapsePanelProps?: Object;
}
