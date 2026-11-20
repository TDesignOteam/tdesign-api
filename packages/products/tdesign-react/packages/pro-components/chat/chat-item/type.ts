/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { AvatarProps } from '../avatar';
import type { TNode } from '../common';

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
   * 值为false不显示思维链，为string则显示内置推理内容交互，为对象则单独配置推理内容
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

export interface TdChatReasoning {
  expandIconPlacement?: 'left' | 'right';
  onExpandChange?: (isExpand: boolean) => void;
  collapsePanelProps?: Object;
}
