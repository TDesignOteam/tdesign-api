/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdButtonProps } from './type';
const props: TdButtonProps = {
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    value: false,
  },
  /** 按钮内容 */
  content: {
    type: String,
  },
  /** 自定义 dataset，可通过 event.currentTarget.dataset.custom 获取 */
  customDataset: {
    type: Object,
  },
  /** 禁用状态 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件类名 */
  externalClasses: {
    type: Array,
  },
  /** 是否为幽灵按钮（镂空按钮） */
  ghost: {
    type: Boolean,
    value: false,
  },
  /** 图标名称。值为字符串表示图标名称，值为 Object 类型，表示透传至 icon。 */
  icon: {
    type: null,
  },
  /** 图标属性，透传至 icon */
  iconProps: {
    type: Object,
    value: {},
  },
  /** 是否显示为加载状态 */
  loading: {
    type: Boolean,
    value: false,
  },
  /** 透传加载组件全部属性 */
  loadingProps: {
    type: Object,
  },
  /** 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形 */
  shape: {
    type: String,
    value: 'rectangle',
  },
  /** 组件尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /** 按钮标签 `id` */
  tId: {
    type: String,
    value: '',
  },
  /** 组件风格，依次为品牌色、危险色 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 同小程序的 `formType`，[button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) */
  type: {
    type: String,
  },
  /** 按钮形式，基础、线框、文字 */
  variant: {
    type: String,
    value: 'base',
  },
};

export default props;
