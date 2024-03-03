:: BASE_DOC ::

## API
### Button Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
block | Boolean | false | make button to be a block-level element | N
content | String / Slot | - | button's children elements。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
custom-dataset | Object | - | Typescript：`any` | N
disabled | Boolean | false | disable the button, make it can not be clicked | N
external-classes | Array | - | `['t-class', 't-class-icon', 't-class-loading']` | N
ghost | Boolean | false | make background-color to be transparent | N
icon | String / Object | - | icon name | N
icon-props | Object | {} | icon properties | N
loading | Boolean | false | set button to be loading state | N
loading-props | Object | - | Typescript：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/button/type.ts) | N
shape | String | rectangle | button shape。options: rectangle/square/round/circle | N
size | String | medium | a button has four size。options: extra-small/small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
style | String | - | \- | N
t-id | String | - | id | N
theme | String | default | button theme。options: default/primary/danger/light | N
type | String | - | type of button element, same as formType of Miniprogram。options: submit/reset | N
variant | String | base | button variant。options: base/outline/text | N

### Button Events

name | params | description
-- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
click | `(e: MouseEvent)` | trigger on click
