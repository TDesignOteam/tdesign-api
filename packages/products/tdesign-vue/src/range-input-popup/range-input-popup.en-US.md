:: BASE_DOC ::

## API

### RangeInputPopup Props

name | type | default | description | required
-- | -- | -- | -- | --
autoWidth | Boolean | false | \- | N
disabled | Boolean | - | \- | N
inputValue | Array | - | `.sync` is supported。Typescript：`RangeInputValue` | N
defaultInputValue | Array | - | uncontrolled property。Typescript：`RangeInputValue` | N
label | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
panel | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts) | N
popupVisible | Boolean | - | \- | N
defaultPopupVisible | Boolean | - | uncontrolled property | N
rangeInputProps | Object | - | Typescript：`RangeInputProps`，[RangeInput API Documents](./range-input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts) | N
readonly | Boolean | undefined | \- | N
status | String | default | options: default/success/warning/error | N
tips | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
onInputChange | Function |  | Typescript：`(value: RangeInputValue, context?: RangeInputValueChangeContext)  => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`type RangeInputValueChangeContext = { e?: InputEvent \| MouseEvent; trigger?: 'input' \| 'clear', position?: RangeInputPosition }`<br/> | N
onPopupVisibleChange | Function |  | Typescript：`(visible: boolean, context: PopupVisibleChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`import { PopupVisibleChangeContext } from '@Popup'`<br/> | N

### RangeInputPopup Events

name | params | description
-- | -- | --
input-change | `(value: RangeInputValue, context?: RangeInputValueChangeContext) ` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`type RangeInputValueChangeContext = { e?: InputEvent \| MouseEvent; trigger?: 'input' \| 'clear', position?: RangeInputPosition }`<br/>
popup-visible-change | `(visible: boolean, context: PopupVisibleChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/range-input/type.ts)。<br/>`import { PopupVisibleChangeContext } from '@Popup'`<br/>
