/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdFormProps } from './type';
const props: TdFormProps = {
  /** 是否在表单标签字段右侧显示冒号 */
  colon: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用整个表单 */
  disabled: {
    type: Boolean,
    value: undefined,
  },
  /** 是否阻止表单提交默认事件（表单提交默认事件会刷新页面），设置为 `true` 可以避免刷新 */
  preventSubmitDefault: {
    type: Boolean,
    value: true,
  },
  /** 表单字段校验规则 */
  rules: {
    type: Object,
  },
  /** 表单校验不通过时，是否自动滚动到第一个校验不通过的字段，平滑滚动或是瞬间直达。值为空则表示不滚动 */
  scrollToFirstError: {
    type: String,
  },
};

export default props;
