/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdRangeInputProps } from './type';
const props: TdRangeInputProps = {
  /** 输入框高亮状态序号 */
  activeIndex: {
    type: Number,
  },
  /** 是否可清空 */
  clearable: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用范围输入框 */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 指定输入框展示值的格式 */
  format: {
    type: null,
  },
  /** 透传 Input 输入框组件全部属性，数组第一项表示第一个输入框属性，第二项表示第二个输入框属性。示例：`[{ label: 'A', name: 'A-name' }, { label: 'B',  name: 'B-name' }]` */
  inputProps: {
    type: null,
  },
  /** 左侧内容 */
  label: {
    type: String,
  },
  /** 占位符，示例：'请输入' 或者 ['开始日期', '结束日期'] */
  placeholder: {
    type: null,
  },
  /** 范围分隔符 */
  separator: {
    type: String,
    value: '-',
  },
  /** 输入框状态 */
  status: {
    type: String,
    value: 'default',
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
    value: [],
  },
};

export default props;
