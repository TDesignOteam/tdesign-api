/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdFormListProps {
  /**
   * 渲染函数
   */
  children?: (fields: FormListField[], operation: FormListFieldOperation) => React.ReactNode;
  /**
   * 设置子元素默认值，如果与 Form 的 initialData 冲突则以 Form 为准
   * @default []
   */
  initialData?: Array<any>;
  /**
   * 表单字段名称
   */
  name?: string | number;
  /**
   * 表单字段校验规则
   */
  rules?: { [field in keyof FormData]: Array<FormRule> } | Array<FormRule>;
}

export type FormListField = { key: number; name: number; isListField: boolean };

export type FormListFieldOperation = {
  add: (defaultValue?: any, insertIndex?: number) => void;
  remove: (index: number | number[]) => void;
  move: (from: number, to: number) => void;
};
