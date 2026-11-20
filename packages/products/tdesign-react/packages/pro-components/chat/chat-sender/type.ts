/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { MouseEvent, KeyboardEvent, FocusEvent, FormEvent } from 'react';
import type { TextareaProps } from '../textarea';
import type { TNode } from '../common';

export interface TdChatSenderProps {
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: boolean;
  /**
   * 发送按钮是否处于加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 输入框默认文案。组件内置默认值为：'请输入消息...'
   * @default ''
   */
  placeholder?: string;
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
   * 透传给  Textarea 组件的全部属性
   */
  textareaProps?: TextareaProps;
  /**
   * 输入框的值
   * @default ''
   */
  value?: string;
  /**
   * 输入框的值，非受控属性
   * @default ''
   */
  defaultValue?: string;
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
