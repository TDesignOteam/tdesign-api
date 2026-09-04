:: BASE_DOC ::

## API

### ActionSheet Props

name | type | default | description | required
-- | -- | -- | -- | --
align | String | center | options: center/left | N
cancelText | String | - | \- | N
count | Number | 8 | \- | N
description | String | - | \- | N
items | Array | - | Typescript: `Array<string \| ActionSheetItem>` `interface ActionSheetItem { label: string; description?: string; color?: string; disabled?: boolean; icon?: TNode; suffixIcon?: TNode; badge?: BadgeProps }`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/action-sheet/type.ts) | N
popupProps | Object | {} | Typescript: `PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/action-sheet/type.ts) | N
showCancel | Boolean | true | \- | N
showOverlay | Boolean | true | \- | N
theme | String | list | options: list/grid | N
visible | Boolean | false | `v-model` and `v-model:visible` is supported | N
defaultVisible | Boolean | false | uncontrolled property | N
onCancel | Function |  | Typescript: `(context: { e: MouseEvent }) => void`<br/> | N
onClose | Function |  | Typescript: `(trigger: ActionSheetTriggerSource) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/action-sheet/type.ts)。<br/>`type ActionSheetTriggerSource = 'overlay' \| 'command' \| 'select' `<br/> | N
onSelected | Function |  | Typescript: `(selected: ActionSheetItem \| string, index: number) => void`<br/> | N

### ActionSheet Events

name | params | description
-- | -- | --
cancel | `(context: { e: MouseEvent })` | \-
close | `(trigger: ActionSheetTriggerSource)` | [see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/action-sheet/type.ts)。<br/>`type ActionSheetTriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(selected: ActionSheetItem \| string, index: number)` | \-
