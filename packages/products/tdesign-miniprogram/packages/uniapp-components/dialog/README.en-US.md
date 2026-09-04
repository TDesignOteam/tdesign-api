:: BASE_DOC ::

## API

### Dialog Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
actions | Array | - | Typescript: `Array<ButtonProps>`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/dialog/type.ts) | N
button-layout | String | horizontal | options: horizontal/vertical | N
cancel-btn | String / Object | - | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/dialog/type.ts) | N
close-btn | Boolean / Object | false | Typescript: `boolean \| ButtonProps \| null`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/dialog/type.ts) | N
close-on-overlay-click | Boolean | false | \- | N
confirm-btn | String / Object | - | \- | N
content | String | - | \- | N
overlay-props | Object | {} | Typescript: `OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/dialog/type.ts) | N
prevent-scroll-through | Boolean | true | \- | N
show-overlay | Boolean | true | \- | N
title | String | - | \- | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | - | \- | N
z-index | Number | 11500 | \- | N

### Dialog Events

name | params | description
-- | -- | --
cancel | `(context: { e: MouseEvent })` | \-
close | `(trigger: DialogEventSource)` | [see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/dialog/type.ts)。<br/>`type DialogEventSource = 'cancel' \| 'overlay' \| 'close-btn'`<br/>
confirm | `(context: { e: MouseEvent })` | \-
overlay-click | `(context: { e: MouseEvent })` | \-

### Dialog Slots

name | Description
-- | --
actions | \-
cancel-btn | \-
confirm-btn | \-
content | \-
middle | \-
title | \-
top | \-

### Dialog External Classes

className | Description
-- | --
t-class | \-
t-class-action | \-
t-class-cancel | \-
t-class-confirm | \-
t-class-content | \-
