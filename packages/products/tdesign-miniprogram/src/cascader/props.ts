/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCascaderProps } from './type';
const props: TdCascaderProps = {
  /** 参考 checkbox 组件 API */
  checkProps: {
    type: Object,
  },
  /** 父子节点选中状态不再关联，可各自选中或取消 */
  checkStrictly: {
    type: Boolean,
    value: false,
  },
  /** 是否支持清空选项 */
  clearable: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用组件 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 无匹配选项时的内容，默认全局配置为 '暂无数据' */
  empty: {
    type: String,
  },
  /** 是否可搜索 */
  filterable: {
    type: Boolean,
    value: false,
  },
  /** 用来定义 value / label / children 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 延迟加载 children 为 true 的子节点，即使 expandAll 被设置为 true，也同样延迟加载 */
  lazy: {
    type: Boolean,
    value: true,
  },
  /** 加载子树数据的方法（仅当节点 children 为 true 时生效） */
  load: {
    type: null,
  },
  /** 用于控制多选数量，值为 0 则不限制 */
  max: {
    type: Number,
    value: 0,
  },
  /** 是否允许多选 */
  multiple: {
    type: Boolean,
    value: false,
  },
  /** 可选项数据源 */
  options: {
    type: Array,
    value: [],
  },
  /** 占位符 */
  placeholder: {
    type: String,
    value: undefined,
  },
  /** 参考 popup 组件 API */
  popupProps: {
    type: Object,
  },
  /** 选中值使用完整路径，输入框在单选时也显示完整路径 */
  showAllLevels: {
    type: Boolean,
    value: true,
  },
  /** 组件尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 展开下一层级的方式 */
  trigger: {
    type: String,
    value: 'click',
  },
  /** 选中项的值 */
  value: {
    type: String,
    optionalTypes: [Number,Array],
    value: null,
  },
  /** 选中项的值，非受控属性 */
  defaultValue: {
    type: String,
    optionalTypes: [Number,Array],
    value: [],
  },
  /** 选中值模式。all 表示父节点和子节点全部会出现在选中值里面；parentFirst 表示当子节点全部选中时，仅父节点在选中值里面；onlyLeaf 表示无论什么情况，选中值仅呈现叶子节点 */
  valueMode: {
    type: String,
    value: 'onlyLeaf',
  },
};

export default props;
