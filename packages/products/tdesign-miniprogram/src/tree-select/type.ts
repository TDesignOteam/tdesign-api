/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TreeOptionData } from '../common/common';

export interface TdTreeSelectProps<DataOption extends TreeOptionData = TreeOptionData> {
  /**
   * 数据
   * @default []
   */
  data?: {
    type: ArrayConstructor;
    value?: Array<DataOption>;
  };
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
