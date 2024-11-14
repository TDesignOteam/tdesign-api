:: BASE_DOC ::

## API


### RangeInput Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
activeIndex | Number | - | 输入框高亮状态序号 | N
clearable | Boolean | false | 是否可清空 | N
disabled | Boolean | undefined | 是否禁用范围输入框 | N
format | Array / Function | - | 指定输入框展示值的格式。TS 类型：`InputFormatType \| Array<InputFormatType>` | N
inputProps | Object / Array | - | 透传 Input 输入框组件全部属性，数组第一项表示第一个输入框属性，第二项表示第二个输入框属性。示例：`[{ label: 'A', name: 'A-name' }, { label: 'B',  name: 'B-name' }]`。TS 类型：`InputProps \| Array<InputProps>`，[Input API Documents](./input?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/range-input/type.ts) | N
label | TNode | - | 左侧内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
placeholder | String / Array | - | 占位符，示例：'请输入' 或者 ['开始日期', '结束日期']。TS 类型：`string \| Array<string>` | N
prefixIcon | TElement | - | 组件前置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
separator | TNode | '-' | 范围分隔符。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
status | String | default | 输入框状态。可选项：default/success/warning/error | N
suffix | TNode | - | 后置图标前的后置内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
suffixIcon | TElement | - | 组件后置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
tips | TNode | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
value | Array | [] | 范围输入框的值。TS 类型：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/range-input/type.ts) | N
defaultValue | Array | [] | 范围输入框的值。非受控属性。TS 类型：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/range-input/type.ts) | N
onBlur | Function |  | TS 类型：`(value: RangeInputValue, context?: { e?: FocusEvent; position?: RangeInputPosition }) => void`<br/>范围输入框失去焦点时触发 | N
onChange | Function |  | TS 类型：`(value: RangeInputValue, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; position?: RangeInputPosition; trigger?: 'input' \| 'initial' \| 'clear' })    => void`<br/>范围输入框值发生变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/range-input/type.ts)。<br/>`type RangeInputPosition = 'first' \| 'second' \| 'all'`<br/> | N
onClear | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>清空按钮点击时触发 | N
onClick | Function |  | TS 类型：`(context?: { e?: MouseEvent; position?: RangeInputPosition }) => void`<br/>范围输入框点击时触发 | N
onEnter | Function |  | TS 类型：`(value: RangeInputValue, context?: { e?: InputEvent \| MouseEvent; position?: RangeInputPosition })  => void`<br/>回车键按下时触发 | N
onFocus | Function |  | TS 类型：`(value: RangeInputValue, context?: { e?: FocusEvent; position?: RangeInputPosition }) => void`<br/>范围输入框获得焦点时触发 | N

### RangeInputInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
blur | `(options?: {position?: RangeInputPosition})` | \- | 使其中一个输入框失去焦点


### RangeInputPopup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
status | String | default | 输入框状态。可选项：default/success/warning/error | N
tips | TNode | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
