/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTreeSelectProps } from './type';
const props: TdTreeSelectProps = {
  /** 自定义选中值，优先级高于 `value` */
  customValue: {
    type: null,
  },
  /** 高度，默认单位为 px */
  height: {
    type: null,
    value: 336,
  },
  /** 用来定义 `value / label / disabled / children` 在 `options` 数据中对应的字段别名，示例：`{ value: 'key', label: 'name', children: 'list' }` */
  keys: {
    type: Object,
  },
  /** 是否允许多选 */
  multiple: {
    type: Boolean,
    value: false,
  },
  /** 选项 */
  options: {
    type: Array,
    value: [],
  },
  /** 选中值 */
  value: {
    type: null,
    value: null,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: null,
  },
};

export default props;
