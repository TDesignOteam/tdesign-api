/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSearchProps {
  /**
   * 用于自定义搜索框右侧内容，如：“取消”
   * @default ''
   */
  action?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 【开发中】联想词列表，如果不存在或长度为 0 则不显示联想框。可以使用函数 `label` 自定义联想词为任意内容；也可使用插槽 `option` 定义联想词内容，插槽参数为 `{ option: AutocompleteOption; index: number }`。如果 `group` 值为 `true` 则表示当前项为分组标题
   */
  autocompleteOptions?: {
    type: ArrayConstructor;
    value?: Array<AutocompleteOption>;
  };
  /**
   * 是否默认聚焦
   * @default false
   */
  autofocus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否居中
   * @default false
   */
  center?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否可清空
   * @default true
   */
  clearable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 禁用状态
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件外部样式类名，分别用于设置组件外层类名、输入框类名、输入框容器类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-input', 't-class-input-container', 't-class-cancel', 't-class-left', 't-class-right'];
  };
  /**
   * 自定义过滤方法，用于对现有数据进行搜索过滤，判断是否过滤某一项数据。其中参数 `keyword` 指当前的搜索词，参数 `option` 指每一项联想词，函数返回 true 则显示当前联想词，函数返回 `false` 则隐藏当前联想词
   */
  filter?: {
    type: undefined;
    value?: (keyword: string, option: any) => boolean | Promise<boolean>;
  };
  /**
   * 是否聚焦，同小程序官方属性
   * @default false
   */
  focus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 搜索框内部左侧内容，位于 `prefixIcon` 左侧
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 占位符
   * @default ''
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 前置图标，默认为搜索图标。值为 `null` 时则不显示
   * @default 'search'
   */
  prefixIcon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 只读状态
   * @default false
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 搜索框形状
   * @default 'square'
   */
  shape?: {
    type: StringConstructor;
    value?: 'square' | 'round';
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
   * 搜索框内部右侧内容，位于 `suffixIcon` 右侧
   * @default ''
   */
  suffix?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 后置图标
   */
  suffixIcon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 值，搜索关键词
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 值，搜索关键词，非受控属性
   * @default ''
   */
  defaultValue?: {
    type: StringConstructor;
    value?: string;
  };
}

export type AutocompleteOption = string | { label: string; group?: boolean };
