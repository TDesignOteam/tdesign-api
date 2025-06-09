:: BASE_DOC ::

## API

### Picker Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
auto-close | Boolean | true | \- | N
cancel-btn | String / Boolean | true | Typescript：`boolean \| string` | N
confirm-btn | String / Boolean | true | Typescript：`boolean \| string` | N
footer | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
header | Boolean / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
item-height | Number | 80 | \- | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
popup-props | Object | {} | popup properties。Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
title | String | '' | \- | N
use-popup | Boolean | true | \- | N
using-custom-navbar | Boolean | false | \- | N
value | Array | - | Typescript：`Array<PickerValue>` `type PickerValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`Array<PickerValue>` `type PickerValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
visible | Boolean | false | \- | N

### Picker Events

name | params | description
-- | -- | --
cancel | - | \-
change | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number }> )` | \-
close | `(trigger: TriggerSource)` | `1.0.1`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/>
confirm | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number }> )` | \-
pick | `(value: Array<PickerValue>, label: string, column: number, index: number)` | \-


### PickerItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
format | Function | - | Typescript：`(option: PickerItemOption, columnIndex: number) => PickerItemOption` | N
options | Array | [] | Typescript：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker-item/type.ts) | N
