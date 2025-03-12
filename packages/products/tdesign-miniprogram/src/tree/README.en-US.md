:: BASE_DOC ::

## API

### Tree Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
actived | Array | - | Typescript：`Array<TreeNodeValue>` | N
allow-drop | Function | - | Determine whether the node can execute the drop operation。Typescript：`(detail: { e: DragEvent; dragNode: TreeNodeModel<T>; dropNode: TreeNodeModel<T>; dropPosition: number; }) => boolean` | N
allow-fold-node-on-filter | Boolean | false | \- | N
check-props | Object | - | Typescript：`CheckboxProps`，[Checkbox API Documents](./checkbox?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree/type.ts) | N
check-strictly | Boolean | false | \- | N
checkable | Boolean | false | \- | N
data | Array | [] | Typescript：`Array<T>` | N
disabled | Boolean | - | \- | N
empty | String / Slot | '' | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
expand-all | Boolean | false | \- | N
expand-level | Number | 0 | \- | N
expand-mutex | Boolean | false | \- | N
expand-on-click-node | Boolean | false | \- | N
expand-parent | Boolean | false | \- | N
expanded | Array | [] | Typescript：`Array<TreeNodeValue>` | N
filter | Function | - | Typescript：`(node: TreeNodeModel<T>) => boolean` | N
hover | Boolean | - | \- | N
icon | Boolean / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
keys | Object | - | alias field name in data。Typescript：`TreeKeysType`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
label | String / Boolean / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
lazy | Boolean | true | \- | N
line | Boolean / Slot | false | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
load | Function | - | Typescript：`(node: TreeNodeModel<T>) => Promise<Array<T>>` | N
operations | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
transition | Boolean | true | \- | N
value | Array | [] | Typescript：`Array<TreeNodeValue>` `type TreeNodeValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree/type.ts) | N
default-value | Array | undefined | uncontrolled property。Typescript：`Array<TreeNodeValue>` `type TreeNodeValue = string \| number`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree/type.ts) | N
value-mode | String | onlyLeaf | options: onlyLeaf/parentFirst/all | N

### Tree Events

name | params | description
-- | -- | --
active | `(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T>; e?: MouseEvent; trigger: 'node-click' \| 'setItem' })` | \-
change | `(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T>; e?: any; trigger: 'node-click' \| 'setItem' })` | \-
click | `(detail: { node: TreeNodeModel<T>;})` | \-
expand | `(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T>; e?: MouseEvent; trigger: 'node-click' \| 'icon-click' \| 'setItem' })` | \-
load | `(detail: { node: TreeNodeModel<T> })` | \-

### TreeInstanceFunctions 组件实例方法

name | params | return | description
-- | -- | -- | --
append-to | `(value: TreeNodeValue, newData: T \| Array<T>)` | \- | required
get-index | `(value: TreeNodeValue)` | `number` | required
get-item | `(value: TreeNodeValue)` | `TreeNodeModel<T>` | required
get-items | `(value?: TreeNodeValue)` | `Array<TreeNodeModel<T>>` | required
get-parent | `(value: TreeNodeValue)` | `TreeNodeModel<T>` | required
get-parents | `(value: TreeNodeValue)` | `TreeNodeModel<T>[]` | required
get-path | `(value: TreeNodeValue)` | `TreeNodeModel<T>[]` | required
get-tree-data | `(value?: TreeNodeValue)` | `Array<T>` | required。get tree struct data
insert-after | `(value: TreeNodeValue, newData: T)` | \- | required
insert-before | `(value: TreeNodeValue, newData: T)` | \- | required
remove | `(value: TreeNodeValue)` | \- | required
set-item | `(value: TreeNodeValue, options: TreeNodeState)` | \- | required

### TreeNodeState

name | type | default | description | required
-- | -- | -- | -- | --
activable | Boolean | false | \- | N
actived | Boolean | false | \- | N
checkable | Boolean | false | \- | N
checked | Boolean | false | \- | N
disabled | Boolean | false | \- | N
draggable | Boolean | true | \- | N
expand-mutex | Boolean | false | \- | N
expanded | Boolean | false | \- | N
indeterminate | Boolean | false | \- | N
label | String | - | \- | N
loading | Boolean | false | \- | N
value | String / Number | - | \- | N
visible | Boolean | false | \- | N
