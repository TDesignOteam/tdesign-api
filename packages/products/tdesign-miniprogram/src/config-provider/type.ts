/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ImageProps } from '../image/index';

export interface GlobalConfigProvider {
  /**
   * CSS 类名前缀
   * @default t
   */
  classPrefix?: string;
  /**
   * 二维码全局配置
   */
  qrCode?: QrCodeConfig;
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

export interface InputConfig {
  /**
   * 语言配置，“请输入”占位符描述文本
   * @default ''
   */
  placeholder?: string;
}

export interface PullDownRefreshConfig {
  /**
   * 提示文本描述，默认值：['下拉刷新', '松手刷新', '正在刷新', '刷新完成']
   */
  loadingTexts?: string[];
}
