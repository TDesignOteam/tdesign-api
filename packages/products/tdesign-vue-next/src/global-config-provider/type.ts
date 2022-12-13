/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { GlobalIconConfig } from 'tdesign-icons-vue-next';

export interface GlobalConfigProvider {
  /**
   * 警告全局配置
   */
  alert?: AlertConfig;
  /**
   * 锚点全局配置
   */
  anchor?: AnchorConfig;
  /**
   * 动画效果控制，`ripple` 指波纹动画， `expand` 指展开动画，`fade` 指渐变动画。默认为 `{ include: ['ripple','expand','fade'], exclude: [] }`
   */
  animation?: Partial<Record<'include' | 'exclude', Array<AnimationType>>>;
  /**
   * 日历组件全局配置
   */
  calendar?: CalendarConfig;
  /**
   * 级联选择器全局配置
   */
  cascader?: CascaderConfig;
  /**
   * CSS 类名前缀
   * @default t
   */
  classPrefix?: string;
  /**
   * 颜色选择器全局配置
   */
  colorPicker?: ColorPickerConfig;
  /**
   * 日期选择器全局配置
   */
  datePicker?: DatePickerConfig;
  /**
   * 对话框全局配置
   */
  dialog?: DialogConfig;
  /**
   * 抽屉全局配置
   */
  drawer?: DrawerConfig;
  /**
   * 表单组件全局配置
   */
  form?: FormConfig;
  /**
   * 引导全局配置
   */
  guide?: GuideConfig;
  /**
   * 图标全局配置
   */
  icon?: IconConfig;
  /**
   * 输入框组件全局配置
   */
  input?: InputConfig;
  /**
   * 列表组件全局配置
   */
  list?: ListConfig;
  /**
   * 消息组件全局配置
   */
  message?: MessageConfig;
  /**
   * 分页组件全局配置
   */
  pagination?: PaginationConfig;
  /**
   * 气泡确认框全局配置
   */
  popconfirm?: PopconfirmConfig;
  /**
   * 选择器组件全局配置
   */
  select?: SelectConfig;
  /**
   * 步骤条组件全局配置
   */
  steps?: StepsConfig;
  /**
   * 表格组件全局配置
   */
  table?: TableConfig;
  /**
   * 标签全局配置
   */
  tag?: TagConfig;
  /**
   * 时间选择器全局配置
   */
  timePicker?: TimePickerConfig;
  /**
   * 穿梭框全局配置
   */
  transfer?: TransferConfig;
  /**
   * 树组件全局配置
   */
  tree?: TreeConfig;
  /**
   * 树选择器组件全局配置
   */
  treeSelect?: TreeSelectConfig;
  /**
   * 上传组件全局配置
   */
  upload?: UploadConfig;
}

export type AnimationType = 'ripple' | 'expand' | 'fade';

export type IconConfig = GlobalIconConfig;
