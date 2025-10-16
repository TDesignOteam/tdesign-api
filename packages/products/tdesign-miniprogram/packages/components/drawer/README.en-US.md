:: BASE_DOC ::

## API

### Drawer Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
close-on-overlay-click | Boolean | true | \- | N
destroy-on-close | Boolean | false | \- | N

items | Array | - | Typescript：`DrawerItem[]` `interface DrawerItem { title: string; icon: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts) | N
overlay-props | Object | {} | Typescript：`OverlayProps`，[Overlay API Documents](./overlay?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts) | N
placement | String | right | options: left/right | N
show-overlay | Boolean | true | \- | N
title | String | - | `0.29.0` | N
using-custom-navbar | Boolean | false | \- | N
visible | Boolean | false | \- | N
z-index | Number | 11500 | \- | N

### Drawer Slots

name | Description
-- | --
footer | `0.29.0`
title | `0.29.0`

### Drawer Events

name | params | description
-- | -- | --
close | `(trigger: DrawerTriggerSource)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts)。<br/>`type DrawerTriggerSource = 'overlay'`<br/>
item-click | `(index: number; item: DrawerItem)` | \-
overlay-click | \- | \-
