:: BASE_DOC ::

## API


### RangeInput Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
activeIndex | Number | - | \- | N
clearable | Boolean | false | \- | N
disabled | Boolean | undefined | \- | N
format | Array / Function | - | Typescript：`InputFormatType \| Array<InputFormatType>` | N
inputProps | Object / Array | - | Typescript：`InputProps \| Array<InputProps>`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/range-input/type.ts) | N
label | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
placeholder | String / Array | - | Typescript：`string \| Array<string>` | N
prefixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
separator | TNode | '-' | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
status | String | default | options: default/success/warning/error | N
suffix | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
suffixIcon | TElement | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
tips | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
value | Array | [] | Typescript：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/range-input/type.ts) | N
defaultValue | Array | [] | uncontrolled property。Typescript：`RangeInputValue` `type RangeInputValue = Array<InputValue>`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/range-input/type.ts) | N
onBlur | Function |  | Typescript：`(value: RangeInputValue, context?: { e?: FocusEvent; position?: RangeInputPosition }) => void`<br/> | N
onChange | Function |  | Typescript：`(value: RangeInputValue, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; position?: RangeInputPosition; trigger?: 'input' \| 'initial' \| 'clear' })    => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/range-input/type.ts)。<br/>`type RangeInputPosition = 'first' \| 'second' \| 'all'`<br/> | N
onClear | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onClick | Function |  | Typescript：`(context?: { e?: MouseEvent; position?: RangeInputPosition }) => void`<br/> | N
onEnter | Function |  | Typescript：`(value: RangeInputValue, context?: { e?: InputEvent \| MouseEvent; position?: RangeInputPosition })  => void`<br/> | N
onFocus | Function |  | Typescript：`(value: RangeInputValue, context?: { e?: FocusEvent; position?: RangeInputPosition }) => void`<br/> | N

### RangeInputInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
blur | `(options?: {position?: RangeInputPosition})` | \- | \-


### RangeInputPopup Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
status | String | default | options: default/success/warning/error | N
tips | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
