/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdLinkProps {
  /**
   * 禁用链接。优先级：Link.disabled > Form.disabled
   */
  disabled?: boolean;
  /**
   * 使得浏览器将链接的 URL 视为可下载资源
   */
  download?: string | boolean;
  /**
   * 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法
   * @default underline
   */
  hover?: 'color' | 'underline';
  /**
   * 跳转链接
   * @default ''
   */
  href?: string;
  /**
   * 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同
   * @default ''
   */
  target?: string;
  /**
   * 点击事件，禁用状态不会触发点击事件
   */
  onClick?: (e: MouseEvent) => void;
}
