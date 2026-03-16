:: BASE_DOC ::

## API

### TabBar Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
bordered | Boolean | true | \- | N
fixed | Boolean | true | \- | N
placeholder | Boolean | false | \- | N
safe-area-inset-bottom | Boolean | true | \- | N
shape | String | normal | options: normal/round | N
split | Boolean | true | \- | N
theme | String | normal | options: normal/tag | N
value | String / Number / Array | - | `v-model:value` is supported。Typescript: `string \| number \| Array<string \| number>` | N
default-value | String / Number / Array | - | uncontrolled property。Typescript: `string \| number \| Array<string \| number>` | N
z-index | Number | 1 | \- | N

### TabBar External Classes

className | Description
-- | --
t-class | \-


### TabBarItem Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
badge-props | Object | {} | Typescript: `BadgeProps`，[Badge API Documents](./badge?tab=api)。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/tab-bar-item/type.ts) | N
icon | String / Object | - | \- | N
sub-tab-bar | Array | - | Typescript: `SubTabBarItem[] ` `interface SubTabBarItem { value: string; label: string }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/tab-bar-item/type.ts) | N
value | String / Number | - | \- | N

### TabBarItem Slots

name | Description
-- | --
icon | \-
