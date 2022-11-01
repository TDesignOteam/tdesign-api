/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdOverlayProps {
  /**
   * 自定义样式（即将废弃，推荐使用 `style` ）
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 动画时长，单位毫秒
   * @default 300
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 防止滚动穿透
   * @default true
   */
  preventScrollThrough?: {
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
   * 遮罩层是否透明
   * @default false
   */
  transparent?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否展示
   * @default true
   */
  visible: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否展示，非受控属性
   * @default true
   */
  defaultVisible: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 遮罩的层级
   * @default 1000
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}
