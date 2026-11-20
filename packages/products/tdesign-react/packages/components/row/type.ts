/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdRowProps {
  /**
   * 纵向对齐方式，CSS 属性 `align-items` 值。其中 `top` 和 `start` 等效；`middle` 和 `center` 等效；`bottom` 和 `end` 等效
   * @default top
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline' | 'top' | 'middle' | 'bottom';
  /**
   * 栅格间隔，示例：`{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }`。当数据类型为 Number 和 Object 时，用于指定横向间隔。当数据类型为数组时，第一个参数为横向间隔，第二个参数为纵向间隔， [水平间隔, 垂直间隔]
   * @default 0
   */
  gutter?: number | GutterObject | Array<GutterObject | number>;
  /**
   * flex 布局下的水平排列方式
   * @default start
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  /**
   * 自定义元素标签
   * @default div
   */
  tag?: string;
}

export interface GutterObject {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}
