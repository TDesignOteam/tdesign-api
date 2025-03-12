/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button';
import { TElement } from '../common';
import { MouseEvent, TouchEvent } from 'react';

export interface TdFabProps {
  /**
   * 透传至 Button 组件
   */
  buttonProps?: ButtonProps;
  /**
   * 图标
   */
  icon?: TElement;
  /**
   * 文本内容
   * @default ''
   */
  text?: string;
  /**
   * 悬浮按钮点击事件
   */
  onClick?: (context: { e: MouseEvent<HTMLDivElement> }) => void;
  /**
   * 结束拖拽时触发
   */
  onDragEnd?: (context: { e: TouchEvent<HTMLDivElement> }) => void;
  /**
   * 开始拖拽时触发
   */
  onDragStart?: (context: { e: TouchEvent<HTMLDivElement> }) => void;
}
