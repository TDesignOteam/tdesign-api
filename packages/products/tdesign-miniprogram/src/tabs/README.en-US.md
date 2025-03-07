:: BASE_DOC ::

## API

### Tabs Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
animation | Object | - | Typescript：`TabAnimation` `type TabAnimation = { duration: number } & Record<string, any>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
bottom-line-mode | String | fixed | options: fixed/auto/full | N
middle | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
show-bottom-line | Boolean | true | \- | N
space-evenly | Boolean | true | \- | N
split | Boolean | true | \- | N
sticky | Boolean | false | \- | N
sticky-props | Object | - | Typescript：`StickyProps`，[Sticky API Documents](./sticky?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
swipeable | Boolean | true | \- | N
theme | String | line | options: line/tag/card | N
value | String / Number | - | Typescript：`TabValue` `type TabValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N
default-value | String / Number | undefined | uncontrolled property。Typescript：`TabValue` `type TabValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tabs/type.ts) | N

### Tabs Events

name | params | description
-- | -- | --
change | `(value: TabValue, label: string)` | \-
click | `(value: TabValue, label: string)` | \-
scroll | `(scrollTop: number, isFixed: boolean)` | \-

### Tabs External Classes

className | Description
-- | --
t-class | \-
t-class-active | \-
t-class-content | \-
t-class-item | \-
t-class-track | \-


### TabPanel Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
badge-props | Object | - | \- | N
disabled | Boolean | false | \- | N
icon | String / Object | - | \- | N
label | String | - | \- | N
lazy | Boolean | false | Enable tab lazy loading | N
panel | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
value | String / Number | - | Typescript：`TabValue`，[Tabs API Documents](./tabs?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tab-panel/type.ts) | N
