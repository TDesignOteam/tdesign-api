/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { MouseEvent, KeyboardEvent, FocusEvent, FormEvent } from 'react';
import type { TElement } from '../common';

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
   * 发送按钮的自定义扩展
   */
  suffixIcon?: TElement;
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
