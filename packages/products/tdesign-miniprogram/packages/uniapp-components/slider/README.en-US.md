:: BASE_DOC ::

## API

### Slider Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
colors | Array | [] | `deprecated`。Typescript: `Array<string>` | N
disabled | Boolean | undefined | \- | N
disabled-color | Array | [] | `deprecated`。Typescript: `Array<string>` | N
label | String / Boolean / Function | false | Typescript: `string \| boolean` | N
marks | Object / Array | {} | Typescript: `Record<number, string> \| Array<number>` | N
max | Number | 100 | \- | N
min | Number | 0 | \- | N
range | Boolean | false | \- | N
show-extreme-value | Boolean | false | \- | N
step | Number | 1 | \- | N
theme | String | default | options: default/capsule | N
value | Number / Array | 0 | `v-model:value` is supported。Typescript: `SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/slider/type.ts) | N
default-value | Number / Array | 0 | uncontrolled property。Typescript: `SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/slider/type.ts) | N
vertical | Boolean | false | \- | N

### Slider Events

name | params | description
-- | -- | --
change | `(value: SliderValue)` | \-
dragend | `(value: SliderValue, e: TouchEvent)` | \-
dragstart | `(e: TouchEvent)` | \-

### Slider External Classes

className | Description
-- | --
t-class | \-
t-class-bar | \-
t-class-bar-active | \-
t-class-bar-disabled | \-
t-class-cursor | \-
