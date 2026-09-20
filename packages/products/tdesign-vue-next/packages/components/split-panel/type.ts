/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSplitPanelProps {
  /**
   * 初始面板大小，支持数字 px 或者文字 '百分比%' 类型
   */
  defaultSize?: string | number;
  /**
   * 当前面板的最大尺寸,支持数字 px 或者文字 '百分比%' 类型-继承父级 panelSize.max
   */
  max?: string | number;
  /**
   * 当前面板的最小尺寸,支持数字 px 或者文字 '百分比%' 类型-继承父级 panelSize.min
   */
  min?: string | number;
  /**
   * 是否开启拖拽伸缩
   * @default true
   */
  resizable?: boolean;
}
