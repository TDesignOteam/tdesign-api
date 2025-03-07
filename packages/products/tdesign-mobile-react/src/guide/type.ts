/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button';
import { MouseEvent } from 'react';

export interface TdGuideProps {
  /**
   * 透传 返回按钮 的全部属性，示例：`{ content: '返回', theme: 'default' }`
   */
  backButtonProps?: ButtonProps;
  /**
   * 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景
   */
  current?: number;
  /**
   * 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景，非受控属性
   */
  defaultCurrent?: number;
  /**
   * 透传 完成按钮 的全部属性，示例：`{ content: '完成', theme: 'primary' }`
   */
  finishButtonProps?: ButtonProps;
  /**
   * 是否隐藏返回按钮
   * @default false
   */
  hideBack?: boolean;
  /**
   * 是否隐藏计数
   * @default false
   */
  hideCounter?: boolean;
  /**
   * 是否隐藏跳过按钮
   * @default false
   */
  hideSkip?: boolean;
  /**
   * 高亮框的内边距
   * @default 8
   */
  highlightPadding?: number;
  /**
   * 引导框的类型
   * @default popover
   */
  mode?: 'popover' | 'dialog';
  /**
   * 透传 下一步按钮 的全部属性，示例：{ content: '下一步', theme: 'primary' }
   */
  nextButtonProps?: ButtonProps;
  /**
   * 是否出现遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 透传 跳过按钮 的全部属性，{ content: '跳过', theme: 'default' }
   */
  skipButtonProps?: ButtonProps;
  /**
   * 用于定义每个步骤的内容，包括高亮的节点、相对位置和具体的文案内容等
   */
  steps?: Array<GuideStep>;
  /**
   * 提示框的层级
   * @default 999999
   */
  zIndex?: number;
  /**
   * 点击返回按钮时触发
   */
  onBack?: (context: { e: MouseEvent<HTMLDivElement>; current: number; total: number }) => void;
  /**
   * 当前步骤发生变化时触发
   */
  onChange?: (current: number, context?: { e: MouseEvent<HTMLDivElement>; total: number }) => void;
  /**
   * 点击完成按钮时触发
   */
  onFinish?: (context: { e: MouseEvent<HTMLDivElement>; current: number; total: number }) => void;
  /**
   * 点击下一步时触发
   */
  onNextStepClick?: (context: { e: MouseEvent<HTMLDivElement>; next: number; current: number; total: number }) => void;
  /**
   * 点击跳过按钮时触发
   */
  onSkip?: (context: { e: MouseEvent<HTMLDivElement>; current: number; total: number }) => void;
}
