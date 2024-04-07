:: BASE_DOC ::

## API

### TabBar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
bordered | Boolean | true | \- | N
fixed | Boolean | true | \- | N
safe-area-inset-bottom | Boolean | true | \- | N
shape | String | normal | options: normal/round | N
split | Boolean | true | \- | N
theme | String | normal | options: normal/tag | N
value | String / Number / Array | null | Typescript：`string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`string \| number \| Array<string \| number>` | N

### TabBar Events

name | params | description
-- | -- | --
change | `(value: string \| number)` | \-
### TabBar External Classes

className | Description
-- | --
t-class | \-


### TabBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
badge-props | Object | - | Typescript：`BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar-item/type.ts) | N
icon | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
sub-tab-bar | Array | - | Typescript：`SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-bar-item/type.ts) | N
value | String / Number | - | \- | N
