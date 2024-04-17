:: BASE_DOC ::

## API


### CheckTag Props

name | type | default | description | required
-- | -- | -- | -- | --
checked | Boolean | - | `v-model` and `v-model:checked` is supported | N
defaultChecked | Boolean | - | uncontrolled property | N
closable | Boolean | false | \- | N
content | String / Number / Array / Slot / Function | - | Typescript：`string \| number \| string[] \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
default | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
disabled | Boolean | false | \- | N
icon | Slot / Function | - | Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
shape | String | square | options: square/round/mark | N
size | String | medium | options: small/medium/large。Typescript：`SizeEnum`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts) | N
variant | String | dark | options: dark/light/outline/light-outline | N
onChange | Function |  | Typescript：`(checked: boolean) => void`<br/> | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N

### CheckTag Events

name | params | description
-- | -- | --
change | `(checked: boolean)` | \-
click | `(context: { e: MouseEvent })` | \-
