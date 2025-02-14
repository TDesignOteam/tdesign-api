/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button';
import { TNode } from '../common';

export interface TdDialogCardProps
  extends Pick<
    TdDialogProps,
    | 'body'
    | 'cancelBtn'
    | 'closeBtn'
    | 'confirmBtn'
    | 'footer'
    | 'header'
    | 'theme'
    | 'onCancel'
    | 'onCloseBtnClick'
    | 'onConfirm'
    | 'confirmLoading'
  > {
  /**
   * 对话框内容
   */
  body?: string | TNode;
  /**
   * 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件
   */
  cancelBtn?: string | ButtonProps | TNode | null;
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例
   * @default true
   */
  closeBtn?: string | ButtonProps | TNode | null;
  /**
   * 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件
   * @default true
   */
  confirmBtn?: string | ButtonProps | TNode | null;
  /**
   * 确认按钮加载状态
   */
  confirmLoading?: string | ButtonProps | TNode | null;
  /**
   * 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 不显示任何内容，值类型为 Function 表示自定义底部内容
   * @default true
   */
  footer?: boolean | TNode;
  /**
   * 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 string 则直接显示值，值类型为 Function 表示自定义头部内容
   * @default true
   */
  header?: string | boolean | TNode;
  /**
   * 对话框风格
   * @default default
   */
  theme?: 'default' | 'info' | 'warning' | 'danger' | 'success';
  /**
   * 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件
   */
  onCancel?: (context: { e: MouseEvent }) => void;
  /**
   * 点击右上角关闭按钮时触发
   */
  onCloseBtnClick?: (context: { e: MouseEvent }) => void;
  /**
   * 如果“确认”按钮存在，则点击“确认”按钮时触发，或者键盘按下回车键时触发
   */
  onConfirm?: (context: { e: MouseEvent | KeyboardEvent }) => void;
}
