/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdTransitionProps {
  /**
   * 首次出现是否展示动画
   * @default false
   */
  appear?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义容器类名
   * @default ''
   */
  customClass?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 隐藏时是否销毁内容
   * @default false
   */
  destoryOnHide?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 指定过渡时间
   */
  durations?: {
    type: null;
    value?: number | array;
  };
  /**
   * 过渡类名
   * @default 't-transition'
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
