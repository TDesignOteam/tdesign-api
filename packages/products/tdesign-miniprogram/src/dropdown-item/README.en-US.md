:: BASE_DOC ::

## API

### DropdownItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
disabled | Boolean | false | \- | N
keys | Object | - | Typescript：`KeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
label | String | - | \- | N
multiple | Boolean | false | \- | N
options | Array | [] | Typescript：`Array<DropdownOption>` `interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
options-columns | String / Number | 1 | \- | N
options-layout | String | columns | `deprecated` | N
value | String / Number / Array | undefined | Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N
default-value | String / Number / Array | undefined | uncontrolled property。Typescript：`DropdownValue ` `type DropdownValue = string \| number \| Array<DropdownValue>;`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/dropdown-item/type.ts) | N

### DropdownItem Events

name | params | description
-- | -- | --
change | `(value: DropdownValue)` | \-
close | \- | \-
confirm | `(value: DropdownValue)` | \-
reset | \- | \-
### DropdownItem External Classes

className | Description
-- | --
t-class | \-
t-class-column | \-
t-class-column-item | \-
t-class-column-item-label | \-
t-class-content | \-
t-class-footer | \-
