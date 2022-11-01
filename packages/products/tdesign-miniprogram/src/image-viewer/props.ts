/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdImageViewerProps } from './type';
const props: TdImageViewerProps = {
  /** 遮罩的背景颜色 */
  backgroundColor: {
    type: null,
    value: rgba(0, 0, 0, .6),
  },
  /** 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以完全自定义关闭按钮 */
  closeBtn: {
    type: Boolean,
    value: true,
  },
  /** 是否显示删除操作 */
  deleteBtn: {
    type: Boolean,
    value: false,
  },
  /** 图片数组 */
  images: {
    type: Array,
    value: [],
  },
  /** 初始化页码 */
  initialIndex: {
    type: Number,
    value: 0,
  },
  /** 最大放大比例 */
  maxZoom: {
    type: Number,
    value: 3,
  },
  /** 是否显示页码 */
  showIndex: {
    type: Boolean,
    value: false,
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /** 隐藏/显示预览 */
  visible: {
    type: Boolean,
    value: null,
  },
  /** 隐藏/显示预览，非受控属性 */
  defaultVisible: {
    type: Boolean,
    value: false,
  },
};

export default props;
