/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TreeOptionData } from '../common/common';

export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
  /**
   * 关闭按钮
   * @default true
   */
  closeBtn?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 可选项数据源
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<CascaderOption>;
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
   * 标题
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选项值
   * @default null
   */
  value?: {
    type: null;
    value?: null;
  };
  /**
   * 选项值，非受控属性
   * @default null
   */
  defaultValue?: {
    type: null;
    value?: null;
  };
  /**
   * 是否展示
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
