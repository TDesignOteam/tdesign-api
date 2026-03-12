:: BASE_DOC ::

## API

### Switch Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
custom-value | Array | [true, false] | Typescript: `Array<SwitchValue>` | N
disabled | Boolean | undefined | \- | N
icon | Array | [] | Typescript: `string[]` | N
label | Array | [] | Typescript: `string[]` | N
loading | Boolean | false | \- | N
size | String | medium | options: small/medium/large | N
value | String / Number / Boolean | null | `v-model:value` is supported。Typescript: `SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/switch/type.ts) | N
default-value | String / Number / Boolean | null | uncontrolled property。Typescript: `SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/switch/type.ts) | N

### Switch Events

name | params | description
-- | -- | --
change | `(value: SwitchValue, context: { e: MouseEvent })` | \-

### Switch External Classes

className | Description
-- | --
t-class | \-
t-class-body | \-
t-class-dot | \-
t-class-label | \-
