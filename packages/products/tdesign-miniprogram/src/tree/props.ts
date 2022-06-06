/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTreeProps } from './type';
const props: TdTreeProps = {
  /** 节点是否可高亮 */
  activable: {
    type: Boolean,
    value: false,
  },
  /** 是否允许多个节点同时高亮 */
  activeMultiple: {
    type: Boolean,
    value: false,
  },
  /** 高亮的节点值 */
  actived: {
    type: Array,
    value: null,
  },
  /** 高亮的节点值，非受控属性 */
  defaultActived: {
    type: Array,
  },
  /** 是否允许在过滤时节点折叠节点 */
  allowFoldNodeOnFilter: {
    type: Boolean,
    value: false,
  },
  /** 透传属性到 checkbox 组件。参考 checkbox 组件 API */
  checkProps: {
    type: Object,
  },
  /** 父子节点选中状态不再关联，可各自选中或取消 */
  checkStrictly: {
    type: Boolean,
    value: false,
  },
  /** 隐藏节点复选框 */
  checkable: {
    type: Boolean,
    value: false,
  },
  /** 树数据，泛型 `T` 表示树节点 TS 类型 */
  data: {
    type: Array,
    value: [],
  },
  /** 是否禁用树操作 */
  disabled: {
    type: Boolean,
  },
  /** 数据为空时展示的文本 */
  empty: {
    type: String,
    value: '',
  },
  /** 是否展开全部节点 */
  expandAll: {
    type: Boolean,
    value: false,
  },
  /** 默认展开的级别，第一层为 0 */
  expandLevel: {
    type: Number,
    value: 0,
  },
  /** 同级别展开互斥，手风琴效果 */
  expandMutex: {
    type: Boolean,
    value: false,
  },
  /** 是否支持点击节点也能展开收起 */
  expandOnClickNode: {
    type: Boolean,
    value: false,
  },
  /** 展开子节点时是否自动展开父节点 */
  expandParent: {
    type: Boolean,
    value: false,
  },
  /** 展开的节点值 */
  expanded: {
    type: Array,
    value: null,
  },
  /** 展开的节点值，非受控属性 */
  defaultExpanded: {
    type: Array,
    value: [],
  },
  /** 节点过滤方法，只呈现返回值为 true 的节点，泛型 `T` 表示树节点 TS 类型 */
  filter: {
    type: null,
  },
  /** 节点是否有悬浮状态 */
  hover: {
    type: Boolean,
  },
  /** 节点图标，可自定义 */
  icon: {
    type: Boolean,
    value: true,
  },
  /** 用来定义 value / label / children 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 自定义节点内容，值为 false 不显示，值为 true 显示默认 label，值为字符串直接输出该字符串。泛型 `T` 表示树节点 TS 类型 */
  label: {
    type: String,
    optionalTypes: [Boolean],
    value: true,
  },
  /** 延迟加载 children 为 true 的节点的子节点数据，即使 expandAll 被设置为 true，也同样延迟加载 */
  lazy: {
    type: Boolean,
    value: true,
  },
  /** 连接线。值为 false 不显示连接线；值为 true 显示默认连接线；值类型为 Function 表示自定义连接线 */
  line: {
    type: Boolean,
    value: false,
  },
  /** 加载子数据的方法，在展开节点时调用（仅当节点 children 为 true 时生效），泛型 `T` 表示树节点 TS 类型 */
  load: {
    type: null,
  },
  /** 节点展开折叠时是否使用过渡动画 */
  transition: {
    type: Boolean,
    value: true,
  },
  /** 选中值（组件为可选状态时） */
  value: {
    type: Array,
    value: null,
  },
  /** 选中值（组件为可选状态时），非受控属性 */
  defaultValue: {
    type: Array,
    value: [],
  },
  /** 选中值模式。all 表示父节点和子节点全部会出现在选中值里面；parentFirst 表示当子节点全部选中时，仅父节点在选中值里面；onlyLeaft 表示无论什么情况，选中值仅呈现叶子节点 */
  valueMode: {
    type: String,
    value: 'onlyLeaf',
  },
};

export default props;
