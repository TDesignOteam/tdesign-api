:: BASE_DOC ::

## API

### ColorPicker Props

name | type | default | description | required
-- | -- | -- | -- | --
autoClose | Boolean | true | \- | N
clearable | Boolean | false | \- | N
footer | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
header | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
popupProps | Object | {} | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/color-picker/type.ts) | N
usePopup | Boolean | false | \- | N
visible | Boolean | false | \- | N
onClose | Function |  | Typescript：`(trigger: ColorPickerTrigger) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerTrigger = 'overlay'`<br/> | N

### ColorPicker Events

name | params | description
-- | -- | --
close | `(trigger: ColorPickerTrigger)` | [see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/color-picker/type.ts)。<br/>`type ColorPickerTrigger = 'overlay'`<br/>
