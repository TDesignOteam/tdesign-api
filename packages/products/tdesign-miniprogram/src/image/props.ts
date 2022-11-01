/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdImageProps } from './type';
const props: TdImageProps = {
  /** 加载失败时显示的内容。值为 `default` 则表示使用默认加载失败风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `error`；值为其他则表示普通文本内容，如“加载失败” */
  error: {
    type: String,
    value: 'default',
  },
  /** 组件类名，分别用于设置加载组件外层元素，中间内容等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 是否开启图片懒加载 */
  lazy: {
    type: Boolean,
    value: false,
  },
  /** 加载态内容。值为 `default` 则表示使用默认加载中风格；值为空或者 `slot` 表示使用插槽渲染，插槽名称为 `loading`；值为其他则表示普通文本内容，如“加载中” */
  loading: {
    type: String,
    value: 'default',
  },
  /** 图片圆角类型 */
  shape: {
    type: String,
    value: 'square',
  },
  /** 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。 */
  showMenuByLongpress: {
    type: Boolean,
    value: false,
  },
  /** 图片链接 */
  src: {
    type: String,
    value: '',
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /**  */
  mode: {
    type: 只支持 scaleToFill/aspectFit/aspectFill/widthFix/heightFix，其余暂未支持，表现为居中,
    required: true,
  },
  /**  */
  webp: {
    type: 无需指定，默认支持,
    required: true,
  },
};

export default props;
