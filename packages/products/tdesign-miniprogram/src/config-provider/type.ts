/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface GlobalConfigProvider {
  /**
   * 动画效果控制，`ripple` 指波纹动画， `expand` 指展开动画，`fade` 指渐变动画。默认为 `{ include: ['ripple','expand','fade'], exclude: [] }`
   */
  animation?: Partial<Record<'include' | 'exclude', Array<AnimationType>>>;
  /**
   * CSS 类名前缀
   * @default t
   */
  classPrefix?: string;
}

export interface InputConfig {
  /**
   * 语言配置，“请输入”占位符描述文本
   * @default ''
   */
  placeholder?: string;
}

export type AnimationType = 'ripple' | 'expand' | 'fade';
