:: BASE_DOC ::

## API

### Slider Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
colors | Array | [] | `deprecated`。Typescript：`Array<string>` | N
disabled | Boolean | false | \- | N
disabled-color | Array | [] | `deprecated`。Typescript：`Array<string>` | N
label | String / Boolean | false | Typescript：`string \| boolean` | N
marks | Object / Array | {} | Typescript：`Record<number, string> \| Array<number>` | N
max | Number | 100 | \- | N
min | Number | 0 | \- | N
range | Boolean | false | \- | N
show-extreme-value | Boolean | false | \- | N
step | Number | 1 | \- | N
theme | String | default | `0.30.0`。options: default/capsule | N
value | Number / Array | 0 | Typescript：`SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N
default-value | Number / Array | undefined | uncontrolled property。Typescript：`SliderValue` `type SliderValue = number \| Array<number>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/slider/type.ts) | N
vertical | Boolean | false | \- | N

### Slider Events

name | params | description
-- | -- | --
change | `(value: SliderValue)` | \-
dragend | \- | \-
dragstart | \- | \-
### Slider External Classes

className | Description
-- | --
t-class | \-
t-class-bar | \-
t-class-bar-active | \-
t-class-bar-disabled | \-
t-class-cursor | \-
