:: BASE_DOC ::

## API

### ActionSheet Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
align | String | center | options: center/left | N
cancel-text | String | - | \- | N
count | Number | 8 | \- | N
description | String | - | \- | N
items | Array | [] | Typescript: `Array<string \| ActionSheetItem>` `interface ActionSheetItem { label: string; description?: string; color?: string; disabled?: boolean; icon?: string \| object; suffixIcon?: string \| object }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/action-sheet/type.ts) | N
popup-props | Object | {} | Typescript: `PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/action-sheet/type.ts) | N
show-cancel | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
theme | String | list | options: list/grid | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | `v-model:visible` is supported | N
default-visible | Boolean | false | uncontrolled property | N

### ActionSheet Events

name | params | description
-- | -- | --
cancel | \- | \-
close | `(context: { trigger: ActionSheetTriggerSource })` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/action-sheet/type.ts)。<br/>`type ActionSheetTriggerSource = 'overlay' \| 'command' \| 'select' `<br/>
selected | `(context: {  selected: ActionSheetItem \| string, index: number })` | \-

### ActionSheet Slots

name | Description
-- | --
\- | \-

### ActionSheet External Classes

className | Description
-- | --
t-class | \-
t-class-cancel | \-
t-class-content | \-
