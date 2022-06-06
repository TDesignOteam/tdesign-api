/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdRangeInputProps } from './type';
const props: TdRangeInputProps = {
  /** 输入框高亮状态序号 */
  activeIndex: {
    type: Number,
    value: 0,
  },
  /** 是否可清空 */
  clearable: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用范围输入框，值为数组表示可分别控制某一个输入框是否禁用 */
  disabled: {
    type: Boolean,
    optionalTypes: [Array],
    value: false,
  },
  /** 指定输入框展示值的格式 */
  format: {
    type: Array,
    optionalTypes: [ null],
  },
  /** 透传 Input 输入框组件全部属性，数组第一项表示第一个输入框属性，第二项表示第二个输入框属性。示例：`[{ label: 'A', name: 'A-name' }, { label: 'B',  name: 'B-name' }]` */
  inputProps: {
    type: Object,
    optionalTypes: [Array],
  },
  /** 左侧内容 */
  label: {
    type: String,
  },
  /** 占位符，示例：'请输入' 或者 ['开始日期', '结束日期'] */
  placeholder: {
    type: String,
    optionalTypes: [Array],
  },
  /** 范围分隔符 */
  separator: {
    type: String,
    value: '-',
  },
  /** 输入框状态 */
  status: {
    type: String,
  },
  /** 后置图标前的后置内容 */
  suffix: {
    type: String,
  },
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  tips: {
    type: String,
  },
  /** 范围输入框的值 */
  value: {
    type: Array,
    value: null,
  },
  /** 范围输入框的值，非受控属性 */
  defaultValue: {
    type: Array,
  },
};

export default props;
