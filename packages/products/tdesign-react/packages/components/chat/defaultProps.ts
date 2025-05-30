/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import {
  TdChatProps,
  TdChatLoadingProps,
  TdChatItemProps,
  TdChatActionProps,
  TdChatInputProps,
  TdChatSenderProps,
  TdChatReasoningProps,
} from './type';

export const chatDefaultProps: TdChatProps = {
  animation: 'skeleton',
  clearHistory: true,
  isStreamLoad: false,
  layout: 'both',
  reverse: true,
  textLoading: false,
};

export const chatLoadingDefaultProps: TdChatLoadingProps = { animation: 'gradient' };

export const chatItemDefaultProps: TdChatItemProps = {
  animation: 'skeleton',
  reasoning: false,
  textLoading: false,
  variant: 'text',
};

export const chatActionDefaultProps: TdChatActionProps = {
  disabled: false,
  isBad: false,
  isGood: false,
  operationBtn: ['replay', 'copy', 'good', 'bad'],
};

export const chatInputDefaultProps: TdChatInputProps = {
  autofocus: false,
  autosize: '{ minRows: 1, maxRows: 5 }',
  disabled: false,
  stopDisabled: false,
};

export const chatSenderDefaultProps: TdChatSenderProps = { disabled: false, stopDisabled: false };

export const chatReasoningDefaultProps: TdChatReasoningProps = {
  collapsePanelProps: '{ destroyOnCollapse: false }',
  expandIconPlacement: 'right',
};
