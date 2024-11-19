:: BASE_DOC ::

## API

### RangeInputPopup Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
autoWidth | Boolean | false | \- | N
disabled | Boolean | - | \- | N
inputValue | Array | - | Typescript：`RangeInputValue` | N
defaultInputValue | Array | - | uncontrolled property。Typescript：`RangeInputValue` | N
label | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
panel | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/range-input/type.ts) | N
popupVisible | Boolean | - | \- | N
defaultPopupVisible | Boolean | - | uncontrolled property | N
rangeInputProps | Object | - | Typescript：`RangeInputProps`，[RangeInput API Documents](./range-input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/range-input/type.ts) | N
readonly | Boolean | undefined | \- | N
status | String | default | options: default/success/warning/error | N
tips | TNode | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
onInputChange | Function |  | Typescript：`(value: RangeInputValue, context?: RangeInputValueChangeContext)  => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/range-input/type.ts)。<br/>`type RangeInputValueChangeContext = { e?: InputEvent \| MouseEvent; trigger?: 'input' \| 'clear', position?: RangeInputPosition }`<br/> | N
onPopupVisibleChange | Function |  | Typescript：`(visible: boolean, context: PopupVisibleChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/range-input/type.ts)。<br/>`import { PopupVisibleChangeContext } from '@Popup'`<br/> | N
