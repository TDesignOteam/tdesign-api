/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSearchProps } from './type';
import { PropType } from 'vue';

export default {
  /** 搜索框宽度自适应 */
  autoWidth: Boolean,
  /** 联想词列表，如果不存在或长度为 0 则不显示联想框。可以使用函数 `label` 自定义联想词为任意内容；也可使用插槽 `option` 定义联想词内容，插槽参数为 `{ option: AutocompleteOption; index: number }`。如果 `group` 值为 `true` 则表示当前项为分组标题 */
  autocompleteOptions: {
    type: Array as PropType<TdSearchProps['autocompleteOptions']>,
  },
  /** 是否默认聚焦 */
  autofocus: Boolean,
  /** 无边框模式 */
  borderless: {
    type: Boolean,
    default: true,
  },
  /** 是否启用清除控件 */
  clearable: {
    type: Boolean,
    default: true,
  },
  /** 是否禁用 */
  disabled: Boolean,
  /** 自定义过滤方法，用于对现有数据进行搜索过滤，判断是否过滤某一项数据。其中参数 `keyword` 指当前的搜索词，参数 `option` 指每一项联想词，函数返回 true 则显示当前联想词，函数返回 `false` 则隐藏当前联想词 */
  filter: {
    type: Function as PropType<TdSearchProps['filter']>,
  },
  /** 透传 Input 组件全部属性 */
  inputProps: {
    type: Object as PropType<TdSearchProps['inputProps']>,
  },
  /** 搜索框内部左侧内容，位于 `prefixIcon` 左侧 */
  label: {
    type: [String, Function] as PropType<TdSearchProps['label']>,
    default: '' as TdSearchProps['label'],
  },
  /** 批量搜索模式，也叫多行搜索，输入框表现为类似 `textarea`，允许输入多行搜索内容 */
  multiline: Boolean,
  /** 占位符 */
  placeholder: {
    type: String,
    default: '',
  },
  /** 透传 Popup 组件全部属性 */
  popupProps: {
    type: Object as PropType<TdSearchProps['popupProps']>,
  },
  /** 前置图标 */
  prefixIcon: {
    type: Function as PropType<TdSearchProps['prefixIcon']>,
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /** 基于 SelectInput 组件开发，透传组件全部属性 */
  selectInputProps: {
    type: Object as PropType<TdSearchProps['selectInputProps']>,
  },
  /** 搜索框内部右侧内容，位于 `suffixIcon` 右侧 */
  suffix: {
    type: [String, Function] as PropType<TdSearchProps['suffix']>,
    default: '' as TdSearchProps['suffix'],
  },
  /** 后置图标，默认为搜索图标。值为 `null` 时则不显示 */
  suffixIcon: {
    type: Function as PropType<TdSearchProps['suffixIcon']>,
  },
  /** 透传 Textarea 组件全部属性 */
  textareaProps: {
    type: Object as PropType<TdSearchProps['textareaProps']>,
  },
  /** 值 */
  value: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: undefined,
  },
  /** 值，非受控属性 */
  defaultValue: {
    type: String,
    default: '',
  },
  /** 失去焦点时触发 */
  onBlur: Function as PropType<TdSearchProps['onBlur']>,
  /** 搜索关键词发生变化时触发，可能场景有：搜索框内容发生变化、点击联想词 */
  onChange: Function as PropType<TdSearchProps['onChange']>,
  /** 点击清除时触发 */
  onClear: Function as PropType<TdSearchProps['onClear']>,
  /** 回车键按下时触发 */
  onEnter: Function as PropType<TdSearchProps['onEnter']>,
  /** 获得焦点时触发 */
  onFocus: Function as PropType<TdSearchProps['onFocus']>,
  /** 搜索触发，包含：Enter 键、联想关键词点击、清空按钮点击、搜索框后置内容点击（含后置图标）、搜索框前置内容点击（含前置图标）等 */
  onSearch: Function as PropType<TdSearchProps['onSearch']>,
};
