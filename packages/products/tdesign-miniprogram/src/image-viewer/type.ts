/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdImageViewerProps {
  /**
   * 遮罩的背景颜色
   * @default rgba(0, 0, 0, .6)
   */
  backgroundColor?: {
    type: null;
    value?: string | number;
  };
  /**
   * 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以完全自定义关闭按钮
   * @default true
   */
  closeBtn?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示删除操作
   * @default false
   */
  deleteBtn?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图片数组
   * @default []
   */
  images?: {
    type: ArrayConstructor;
    value?: Array<string>;
  };
  /**
   * 初始化页码
   * @default 0
   */
  initialIndex?: {
    type: NumberConstructor;
    value?: Number;
  };
  /**
   * 最大放大比例
   * @default 3
   */
  maxZoom?: {
    type: NumberConstructor;
    value?: Number;
  };
  /**
   * 是否显示页码
   * @default false
   */
  showIndex?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 隐藏/显示预览
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 隐藏/显示预览，非受控属性
   * @default false
   */
  defaultVisible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
