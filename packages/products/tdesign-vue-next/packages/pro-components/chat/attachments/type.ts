/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdAttachmentItem } from 'tdesign-web-components';

export interface TdAttachmentsProps {
  /**
   * 是否启用图片预览功能
   * @default true
   */
  imageViewer?: boolean;
  /**
   * 附件列表
   */
  items?: TdAttachmentItem;
  /**
   * 是否显示删除按钮
   * @default wrap
   */
  overflow?: 'scrollX' | 'scrollY' | 'wrap';
  /**
   * 是否显示删除按钮
   * @default true
   */
  removable?: boolean;
  /**
   * 点击文件时触发
   * @default ''
   */
  onFileClick?: (item: TdAttachmentItem) => void;
  /**
   * 点击删除按钮时触发
   * @default ''
   */
  onRemove?: (item: TdAttachmentItem, index: number) => void;
}
