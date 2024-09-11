/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCheckboxGroupProps<T = CheckboxGroupValue> {
  /**
   * 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled
   */
  disabled?: boolean;
  /**
   * 支持最多选中的数量
   */
  max?: number;
  /**
   * 统一设置内部复选框 HTML 属性
   * @default ''
   */
  name?: string;
  /**
   * 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」
   */
  options?: Array<CheckboxOption>;
  /**
   * 选中值
   * @default []
   */
  value?: T;
  /**
   * 选中值，非受控属性
   * @default []
   */
  defaultValue?: T;
  /**
   * 值变化时触发。`context.current` 表示当前变化的数据项，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中，`context.option` 表示当前变化的数据项
   */
  onChange?: (value: T, context: CheckboxGroupChangeContext) => void;
}

export type CheckboxOption = string | number | CheckboxOptionObj;

export interface CheckboxOptionObj extends TdCheckboxProps {
  text?: string;
}

export type CheckboxGroupValue = Array<string | number | boolean>;

export interface CheckboxGroupChangeContext {
  e: Event;
  current: string | number;
  option: CheckboxOption | TdCheckboxProps;
  type: 'check' | 'uncheck';
}