/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdFormItemProps {
  /**
   * label 原生属性
   * @default ''
   */
  for?: string;
  /**
   * 表单项说明内容
   */
  help?: TNode;
  /**
   * 表单初始数据，重置时所需初始数据
   */
  initialData?: InitialData;
  /**
   * 字段标签名称
   * @default ''
   */
  label?: TNode;
  /**
   * 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。默认使用 Form 的对齐方式，优先级高于 Form.labelAlign
   */
  labelAlign?: 'left' | 'right' | 'top';
  /**
   * 可以整体设置标签宽度，优先级高于 Form.labelWidth
   */
  labelWidth?: string | number;
  /**
   * 表单字段名称
   */
  name?: NamePath;
  /**
   * 是否显示必填符号（*），优先级高于 Form.requiredMark
   */
  requiredMark?: boolean;
  /**
   * 表单字段校验规则
   */
  rules?: Array<FormRule>;
  /**
   * 校验不通过时，是否显示错误提示信息，优先级高于 `Form.showErrorMessage`
   */
  showErrorMessage?: boolean;
  /**
   * 校验状态，可在需要完全自主控制校验状态时使用
   * @default ''
   */
  status?: 'error' | 'warning' | 'success' | 'validating';
  /**
   * 校验状态图标，值为 `true` 显示默认图标，默认图标有 成功、失败、警告 等，不同的状态图标不同。`statusIcon` 值为 `false`，不显示图标。`statusIcon` 值类型为渲染函数，则可以自定义右侧状态图标。优先级高级 Form 的 statusIcon
   */
  statusIcon?: TNode;
  /**
   * 是否显示校验成功的边框，默认不显示
   * @default false
   */
  successBorder?: boolean;
  /**
   * 自定义提示内容，样式跟随 `status` 变动，可在需要完全自主控制校验规则时使用
   */
  tips?: TNode;
}

export type InitialData = any;

export type NamePath = string | number | Array<string | number>;
