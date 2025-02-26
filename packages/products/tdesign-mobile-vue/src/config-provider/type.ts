/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ImageProps } from '../image';

export interface TdConfigProviderProps {
  /**
   * 全局配置
   */
  globalConfig?: GlobalConfigProvider;
}

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

export interface ImageConfig {
  /**
   * 图片加载失败显示的文本，中文默认为“图片无法显示”
   * @default ''
   */
  errorText?: string;
  /**
   * 图片加载中显示的文本，中文默认为“图片加载中”
   * @default ''
   */
  loadingText?: string;
  /**
   * 统一替换图片 `src` 地址，参数为组件的全部属性，返回值为新的图片地址
   */
  replaceImageSrc?: (params: ImageProps) => string;
}

export type AnimationType = 'ripple' | 'expand' | 'fade';
