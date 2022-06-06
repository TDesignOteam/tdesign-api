:: BASE_DOC ::

## API

### Tree Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
activable | Boolean | false | 节点是否可高亮 | N
active-multiple | Boolean | false | 是否允许多个节点同时高亮 | N
actived | Array | - | 高亮的节点值。TS 类型：`Array<TreeNodeValue>` | N
default-actived | Array | undefined | 高亮的节点值。非受控属性。TS 类型：`Array<TreeNodeValue>` | N
allow-fold-node-on-filter | Boolean | false | 是否允许在过滤时节点折叠节点 | N
check-props | Object | - | 透传属性到 checkbox 组件。参考 checkbox 组件 API。TS 类型：`CheckboxProps`，[Checkbox API Documents](./checkbox?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree/type.ts) | N
check-strictly | Boolean | false | 父子节点选中状态不再关联，可各自选中或取消 | N
checkable | Boolean | false | 隐藏节点复选框 | N
data | Array | [] | 树数据，泛型 `T` 表示树节点 TS 类型。TS 类型：`Array<T>` | N
disabled | Boolean | - | 是否禁用树操作 | N
empty | String / Slot | '' | 数据为空时展示的文本 | N
expand-all | Boolean | false | 是否展开全部节点 | N
expand-level | Number | 0 | 默认展开的级别，第一层为 0 | N
expand-mutex | Boolean | false | 同级别展开互斥，手风琴效果 | N
expand-on-click-node | Boolean | false | 是否支持点击节点也能展开收起 | N
expand-parent | Boolean | false | 展开子节点时是否自动展开父节点 | N
expanded | Array | [] | 展开的节点值。TS 类型：`Array<TreeNodeValue>` | N
default-expanded | Array | undefined | 展开的节点值。非受控属性。TS 类型：`Array<TreeNodeValue>` | N
filter | Function | - | 节点过滤方法，只呈现返回值为 true 的节点，泛型 `T` 表示树节点 TS 类型。TS 类型：`(node: TreeNodeModel<T>) => boolean` | N
hover | Boolean | - | 节点是否有悬浮状态 | N
icon | Boolean / Slot | true | 节点图标，可自定义 | N
keys | Object | - | 用来定义 value / label / children 在 `options` 中对应的字段别名。TS 类型：`TreeKeysType` `interface TreeKeysType { value?: string; label?: string; children?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree/type.ts) | N
label | String / Boolean / Slot | true | 自定义节点内容，值为 false 不显示，值为 true 显示默认 label，值为字符串直接输出该字符串。泛型 `T` 表示树节点 TS 类型 | N
lazy | Boolean | true | 延迟加载 children 为 true 的节点的子节点数据，即使 expandAll 被设置为 true，也同样延迟加载 | N
line | Boolean / Slot | false | 连接线。值为 false 不显示连接线；值为 true 显示默认连接线；值类型为 Function 表示自定义连接线 | N
load | Function | - | 加载子数据的方法，在展开节点时调用（仅当节点 children 为 true 时生效），泛型 `T` 表示树节点 TS 类型。TS 类型：`(node: TreeNodeModel<T>) => Promise<Array<T>>` | N
operations | Slot | - | 自定义节点操作项，泛型 `T` 表示树节点 TS 类型 | N
transition | Boolean | true | 节点展开折叠时是否使用过渡动画 | N
value | Array | [] | 选中值（组件为可选状态时）。TS 类型：`Array<TreeNodeValue>` `type TreeNodeValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree/type.ts) | N
default-value | Array | undefined | 选中值（组件为可选状态时）。非受控属性。TS 类型：`Array<TreeNodeValue>` `type TreeNodeValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree/type.ts) | N
value-mode | String | onlyLeaf | 选中值模式。all 表示父节点和子节点全部会出现在选中值里面；parentFirst 表示当子节点全部选中时，仅父节点在选中值里面；onlyLeaft 表示无论什么情况，选中值仅呈现叶子节点。可选项：onlyLeaf/parentFirst/all | N

### Tree Events

名称 | 参数 | 描述
-- | -- | --
active | `(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T> })` | 节点激活时触发，泛型 `T` 表示树节点 TS 类型
change | `(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T> })` | 节点选中状态变化时触发，context.node 表示当前变化的选项，泛型 `T` 表示树节点 TS 类型
click | `(detail: { node: TreeNodeModel<T>;})` | 节点点击时触发，泛型 `T` 表示树节点 TS 类型
expand | `(value: Array<TreeNodeValue>, context: { node: TreeNodeModel<T>;})` | 节点展开或收起时触发，泛型 `T` 表示树节点 TS 类型
load | `(detail: { node: TreeNodeModel<T> })` | 异步加载后触发，泛型 `T` 表示树节点 TS 类型

### TreeInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
append-to | `(value: TreeNodeValue, newData: T | Array<T>)` | \- | 为指定节点添加子节点，默认添加到根节点，泛型 `T` 表示树节点 TS 类型
get-index | `(value: TreeNodeValue)` | `number` | 获取指定节点下标
get-item | `(value: TreeNodeValue)` | `TreeNodeModel<T>` | 获取指定节点所有信息，泛型 `T` 表示树节点 TS 类型
get-items | `(value?: TreeNodeValue)` | `Array<TreeNodeModel<T>>` | 获取某节点的全部子孙节点；参数为空，则表示获取整棵树的全部节点，泛型 `T` 表示树节点 TS 类型
get-parent | `(value: TreeNodeValue)` | `TreeNodeModel<T>` | 获取指定节点的直属父节点，泛型 `T` 表示树节点 TS 类型
get-parents | `(value: TreeNodeValue)` | `TreeNodeModel<T>[]` | 获取指定节点的全部父节点，泛型 `T` 表示树节点 TS 类型
get-path | `(value: TreeNodeValue)` | `TreeNodeModel<T>[]` | 自下而上获取全路径数据，泛型 `T` 表示树节点 TS 类型
insert-after | `(value: TreeNodeValue, newData: T)` | \- | 插入新节点到指定节点后面，泛型 `T` 表示树节点 TS 类型
insert-before | `(value: TreeNodeValue, newData: T)` | \- | 插入新节点到指定节点前面，泛型 `T` 表示树节点 TS 类型
remove | `(value: TreeNodeValue)` | \- | 移除指定节点
set-item | `(value: TreeNodeValue, options: TreeNodeState)` | \- | 设置节点状态

### TreeNodeState

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
activable | Boolean | false | 节点是否允许被激活 | N
actived | Boolean | false | 节点是否被激活 | N
checkable | Boolean | false | 节点是否允许被选中 | N
checked | Boolean | false | 节点是否被选中 | N
disabled | Boolean | false | 节点是否被禁用 | N
expand-mutex | Boolean | false | 子节点是否互斥展开 | N
expanded | Boolean | false | 节点是否已展开 | N
indeterminate | Boolean | false | 节点是否为半选中状态 | N
label | String | - | 节点标签文案 | N
loading | Boolean | false | 子节点数据是否在加载中 | N
value | String / Number | - | 节点值 | N
visible | Boolean | false | 节点是否可视 | N
