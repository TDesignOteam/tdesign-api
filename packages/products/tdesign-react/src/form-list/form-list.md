:: BASE_DOC ::

## API
### FormList Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
children | Function | - | 渲染函数。TS 类型：`(fields: FormListField[], operation: FormListFieldOperation) => React.ReactNode` `type FormListField = { key: number; name: number; isListField: boolean }` `type FormListFieldOperation = { add: (defaultValue?: any, insertIndex?: number) => void, remove: (index: number | number[]) => void, move: (from: number, to: number) => void  }`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form-list/type.ts) | N
initialData | Array | [] | 设置子元素默认值，如果与 Form 的 initialData 冲突则以 Form 为准。TS 类型：`Array<any>` | N
name | String / Number | - | 表单字段名称 | N
rules | Object / Array | - | 表单字段校验规则。TS 类型：`{ [field in keyof FormData]: Array<FormRule> } | Array<FormRule>` | N
