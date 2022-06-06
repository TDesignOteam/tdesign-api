/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTransferProps } from './type';
const props: TdTransferProps = {
  /** 用于控制复选框属性 */
  checkboxProps: {
    type: Object,
  },
  /** 数据列表选中项 */
  checked: {
    type: Array,
    value: null,
  },
  /** 数据列表选中项，非受控属性 */
  defaultChecked: {
    type: Array,
    value: [],
  },
  /** 全量数据 */
  data: {
    type: Array,
    value: [],
  },
  /** 穿梭框可操作方向 */
  direction: {
    type: String,
    value: 'both',
  },
  /** 禁用全部操作：搜索、选中、移动、分页等。[源列表, 目标列表]，示例：[true, false] 或者 true */
  disabled: {
    type: Boolean,
    optionalTypes: [Array],
    value: false,
  },
  /** 列表为空时呈现的内容。值类型为数组，则表示分别控制源列表和目标列表数据为空的呈现内容 */
  empty: {
    type: String,
    optionalTypes: [Array],
    value: '',
  },
  /** 穿梭框底部内容 */
  footer: {
    type: Array,
  },
  /** 方向操作按钮。默认显示组件内置操作图标。自定义操作图标示例：['向左', '向右'] 或者 `[() => <i class='left' />, () => <i class='left' />]` 或者 `(h, direction) => direction === 'left' ? '《' : '》'` */
  operation: {
    type: Array,
  },
  /** 分页配置，值为空则不显示。具体 API 参考分页组件。值类型为数组，表示可分别控制源列表和目标列表分页组件 */
  pagination: {
    type: Object,
    optionalTypes: [Array],
  },
  /** 搜索框配置，值为 false 表示不显示搜索框；值为 true 表示显示默认搜索框；值类型为对象，用于透传 Props 到 Input 组件；值类型为数组，则分别表示控制两侧搜索框 */
  search: {
    type: Boolean,
    optionalTypes: [Object,Array],
    value: false,
  },
  /** 是否显示全选，值类型为数组则表示分别控制源列表和目标列表 */
  showCheckAll: {
    type: Boolean,
    optionalTypes: [Array],
    value: true,
  },
  /** 目标数据列表排列顺序 */
  targetSort: {
    type: String,
    value: 'original',
  },
  /** 穿梭框标题，示例：['源列表', '目标列表'] 或者 `[() => 'A', () => 'B']` 或者 `({ type }) => type === 'source' ? '源' : '目标'` */
  title: {
    type: Array,
    value: [],
  },
  /** 目标数据列表数据 */
  value: {
    type: Array,
    value: null,
  },
  /** 目标数据列表数据，非受控属性 */
  defaultValue: {
    type: Array,
    value: [],
  },
};

export default props;
