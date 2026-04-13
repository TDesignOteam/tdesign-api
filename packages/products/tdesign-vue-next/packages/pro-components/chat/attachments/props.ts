/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdAttachmentsProps } from './type';
import { PropType } from 'vue';

export default {
  /** 是否启用图片预览功能 */
  imageViewer: {
    type: Boolean,
    default: true,
  },
  /** 附件列表 */
  items: {
    type: Array as PropType<TdAttachmentsProps['items']>,
  },
  /** 是否显示删除按钮 */
  overflow: {
    type: String as PropType<TdAttachmentsProps['overflow']>,
    default: 'wrap' as TdAttachmentsProps['overflow'],
    validator(val: TdAttachmentsProps['overflow']): boolean {
      if (!val) return true;
      return ['scrollX', 'scrollY', 'wrap'].includes(val);
    },
  },
  /** 是否显示删除按钮 */
  removable: {
    type: Boolean,
    default: true,
  },
  /** 点击文件时触发 */
  onFileClick: Function as PropType<TdAttachmentsProps['onFileClick']>,
  /** 点击删除按钮时触发 */
  onRemove: Function as PropType<TdAttachmentsProps['onRemove']>,
};
