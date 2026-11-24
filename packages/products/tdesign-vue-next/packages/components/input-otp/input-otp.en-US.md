:: BASE_DOC ::

## API

### InputOTP Props

name | type | default | description | required
-- | -- | -- | -- | --
autofocus | Boolean | false | Whether to auto focus the first input cell | N
disabled | Boolean | false | Whether to disable all input cells | N
length | Number | 6 | Total number of digits of the verification code, i.e., the number of input cells | N
mask | Boolean / String | false | Whether to mask the real characters on display; the original value is not modified. Typescript: `boolean \| string` | N
name | String | - | The name attribute for the element, typically used in form submissions | N
pattern | String | - | Validation pattern for the input. Typescript: `string \| RegExp` | N
placeholder | String / Array | - | Placeholder of the input cell; pass an array to set each cell individually. Typescript: `string \| string[]` | N
readonly | Boolean | false | Whether it is read-only | N
separator | Slot / Function | - | Separator, rendered after the input cell at the specified index. Typescript: `TNode \| ((index: number) => TNode)`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
size | String | medium | Size. options: small/medium/large. Typescript: `SizeEnum`. [see more ts definition](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
status | String | default | Validation status. options: default/error | N
value | String | - | The value of the verification code. `v-model` and `v-model:value` is supported | N
defaultValue | String | - | The value of the verification code. uncontrolled property | N
onChange | Function |  | Typescript: `(value: string) => void`<br/>Triggered on typing, pasting, cutting, and deleting; returns the new value after the change | N
onComplete | Function |  | Typescript: `(value: string) => void`<br/>Triggered when all input cells are filled | N

### InputOTP Events

name | params | description
-- | -- | --
change | `(value: string)` | Triggered on typing, pasting, cutting, and deleting; returns the new value after the change
complete | `(value: string)` | Triggered when all input cells are filled
