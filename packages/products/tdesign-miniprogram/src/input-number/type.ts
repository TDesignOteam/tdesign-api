/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdInputNumberProps {
  /**
   * 文本内容位置，居左/居中/居右
   */
  align?: {
    type: StringConstructor;
    value?: 'left' | 'center' | 'right';
  };
  /**
   * [小数位数](https://en.wiktionary.org/wiki/decimal_place)
   */
  decimalPlaces?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 禁用组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 最大值
   * @default Infinity
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 最小值
   * @default -Infinity
   */
  min?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 占位符
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: 'small' | 'medium' | 'large';
  };
  /**
   * 数值改变步数，可以是小数
   * @default 1
   */
  step?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 按钮布局
   * @default row
   */
  theme?: {
    type: StringConstructor;
    value?: 'column' | 'row' | 'normal';
  };
  /**
   * 值
   */
  value?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 值，非受控属性
   */
  defaultValue?: {
    type: NumberConstructor;
    value?: number;
  };
}
