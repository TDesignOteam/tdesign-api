:: BASE_DOC ::

## API

### TreeSelect Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
custom-value | String / Number / Array | - | Typescript：`TreeSelectValue` | N
height | String / Number | 336 | \- | N
keys | Object | - | alias filed name in options。Typescript：`TreeKeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<DataOption>` | N
value | String / Number / Array | - | Typescript：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tree-select/type.ts) | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tree-select/type.ts) | N

### TreeSelect Events

name | params | description
-- | -- | --
change | `(value: TreeSelectValue, level: TreeLevel) ` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tree-select/type.ts)。<br/>`type TreeLevel = 0 \| 1 \| 2`<br/>

### TreeSelect External Classes

className | Description
-- | --
t-class | \-
t-class-left-column | \-
t-class-left-item | \-
t-class-middle-item | \-
t-class-right-column | \-
t-class-right-item | \-
t-class-right-item-label | \-
