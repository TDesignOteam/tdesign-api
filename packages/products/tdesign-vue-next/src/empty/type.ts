/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ImageProps } from '../image';
import { TNode, Styles } from '../common';

export interface TdEmptyProps {
  /**
   * 操作区域
   */
  action?: TNode;
  /**
   * 描述文字
   */
  description?: string | TNode;
  /**
   * 图片地址
   */
  image?: string | ImageProps | TNode;
  /**
   * 透传图片样式表
   */
  imageStyle?: Styles;
  /**
   * 错误标题
   */
  title?: string | TNode;
  /**
   * 组件类型，如：空数据/成功/失败/网络错误/建设中
   * @default empty
   */
  type?: 'empty' | 'success' | 'fail' | 'network-error' | 'maintenance';
}
