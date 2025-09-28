:: BASE_DOC ::

## API

### Switch Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
custom-value | Array | [true, false] | Typescript：`Array<SwitchValue>` | N
disabled | Boolean | undefined | \- | N
icon | Array | [] | `0.27.0`。Typescript：`string[]` | N
label | Array | [] | `0.27.0`。Typescript：`string[]` | N
loading | Boolean | false | `0.27.0` | N
size | String | medium | `0.27.0`。options: small/medium/large | N
value | String / Number / Boolean | null | Typescript：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/switch/type.ts) | N
default-value | String / Number / Boolean | undefined | uncontrolled property。Typescript：`SwitchValue` `type SwitchValue = string \| number \| boolean`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/switch/type.ts) | N

### Switch Events

name | params | description
-- | -- | --
change | `(value: SwitchValue)` | \-

### Switch External Classes

className | Description
-- | --
t-class | \-
t-class-body | \-
t-class-dot | \-
t-class-label | \-
