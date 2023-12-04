/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode, TElement, Styles } from '../common';

export interface TdEmptyProps {
  /**
   * 操作区域
   */
  action?: TElement;
  /**
   * 描述文字
   */
  description?: TNode;
  /**
   * 图片地址
   */
  image?: TNode;
  /**
   * 透传图片样式表
   */
  imageStyle?: Styles;
  /**
   * 错误标题
   */
  title?: TNode;
  /**
   * 组件类型，如：空数据/成功/失败/网络错误/建设中
   */
  type?: 'empty' | 'success' | 'fail' | 'network-error' | 'maintenance';
}
