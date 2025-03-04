:: BASE_DOC ::

## API

### RangeInputPopup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
autoWidth | Boolean | false | 宽度随内容自适应 | N
disabled | Boolean | - | 是否禁用范围输入框，值为数组表示可分别控制某一个输入框是否禁用 | N
inputValue | Array | - | 输入框的值。TS 类型：`RangeInputValue` | N
defaultInputValue | Array | - | 输入框的值。非受控属性。TS 类型：`RangeInputValue` | N
label | TNode | - | 左侧文本。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
panel | TNode | - | 下拉框内容，可完全自定义。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
popupProps | Object | - | 透传 Popup 浮层组件全部属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/range-input/type.ts) | N
popupVisible | Boolean | - | 是否显示下拉框 | N
defaultPopupVisible | Boolean | - | 是否显示下拉框。非受控属性 | N
rangeInputProps | Object | - | 透传 RangeInput 组件全部属性。TS 类型：`RangeInputProps`，[RangeInput API Documents](./range-input?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/range-input/type.ts) | N
readonly | Boolean | undefined | 只读状态，值为真会隐藏输入框，且无法打开下拉框 | N
status | String | default | 输入框状态。可选项：default/success/warning/error | N
tips | TNode | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onInputChange | Function |  | TS 类型：`(value: RangeInputValue, context?: RangeInputValueChangeContext)  => void`<br/>输入框值发生变化时触发，`context.trigger` 表示触发输入框值变化的来源：文本输入触发、清除按钮触发等。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/range-input/type.ts)。<br/>`type RangeInputValueChangeContext = { e?: InputEvent \| MouseEvent; trigger?: 'input' \| 'clear', position?: RangeInputPosition }`<br/> | N
onPopupVisibleChange | Function |  | TS 类型：`(visible: boolean, context: PopupVisibleChangeContext) => void`<br/>下拉框显示或隐藏时触发。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/range-input/type.ts)。<br/>`import { PopupVisibleChangeContext } from '@Popup'`<br/> | N
