:: BASE_DOC ::

## API

### Rate Props

name | type | default | description | required
-- | -- | -- | -- | --
allowHalf | Boolean | false | \- | N
color | String / Array | '#ED7B2F' | Typescript：`string | Array<string>` | N
count | Number | 5 | \- | N
disabled | Boolean | false | \- | N
gap | Number | 8 | \- | N
icon | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
showText | Boolean | false | \- | N
size | String | - | \- | N
texts | Array | [] | Typescript：`Array<string>` | N
value | Number | 0 | `v-model` is supported | N
defaultValue | Number | 0 | uncontrolled property | N
onChange | Function |  | TS 类型：`(value: number) => void`<br/> | N

### Rate Events

name | params | description
-- | -- | --
change | `(value: number)` | \-
