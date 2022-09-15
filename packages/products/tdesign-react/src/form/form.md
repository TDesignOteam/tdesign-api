:: BASE_DOC ::

## API
### FormItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
for | String | - | label 原生属性 | N
help | TNode | - | 表单项说明内容。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
initialData | String / Number / Object / Array | - | 表单初始数据，重置时所需初始数据。TS 类型：`InitialData` `type InitialData = any`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | N
label | TNode | '' | 字段标签名称。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
labelAlign | String | - | 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。默认使用 Form 的对齐方式，优先级高于 Form.labelAlign。可选项：left/right/top | N
labelWidth | String / Number | - | 可以整体设置标签宽度，优先级高于 Form.labelWidth | N
name | String / Number / Array | - | 表单字段名称。TS 类型：`NamePath` `type NamePath = string | number | Array<string | number>`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | N
requiredMark | Boolean | undefined | 是否显示必填符号（*），优先级高于 Form.requiredMark | N
rules | Array | - | 表单字段校验规则。TS 类型：`Array<FormRule>` | N
showErrorMessage | Boolean | undefined | 校验不通过时，是否显示错误提示信息，优先级高于 `Form.showErrorMessage` | N
status | String | - | 校验状态，可在需要完全自主控制校验状态时使用。TS 类型：`'error' | 'warning' | 'success' | 'validating'` | N
statusIcon | TNode | undefined | 校验状态图标，值为 `true` 显示默认图标，默认图标有 成功、失败、警告 等，不同的状态图标不同。`statusIcon` 值为 `false`，不显示图标。`statusIcon` 值类型为渲染函数，则可以自定义右侧状态图标。优先级高级 Form 的 statusIcon。TS 类型：`boolean | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
successBorder | Boolean | false | 是否显示校验成功的边框，默认不显示 | N
tips | TNode | - | 自定义提示内容，样式跟随 `status` 变动，可在需要完全自主控制校验规则时使用。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
