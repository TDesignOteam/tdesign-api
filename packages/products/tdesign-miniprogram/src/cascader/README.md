:: BASE_DOC ::

## API

### Cascader Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
check-props | Object | - | 参考 checkbox 组件 API。TS 类型：`CheckboxProps`，[Checkbox API Documents](./checkbox?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts) | N
check-strictly | Boolean | false | 父子节点选中状态不再关联，可各自选中或取消 | N
clearable | Boolean | false | 是否支持清空选项 | N
disabled | Boolean | false | 是否禁用组件 | N
empty | String / Slot | - | 无匹配选项时的内容，默认全局配置为 '暂无数据' | N
filterable | Boolean | false | 是否可搜索 | N
keys | Object | - | 用来定义 value / label / children 在 `options` 中对应的字段别名。TS 类型：`CascaderKeysType` `interface CascaderKeysType { value?: string; label?: string; children?: string | boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts) | N
lazy | Boolean | true | 延迟加载 children 为 true 的子节点，即使 expandAll 被设置为 true，也同样延迟加载 | N
load | Function | - | 加载子树数据的方法（仅当节点 children 为 true 时生效）。TS 类型：`(node: TreeNodeModel<CascaderOption>) => Promise<Array<CascaderOption>>` | N
max | Number | 0 | 用于控制多选数量，值为 0 则不限制 | N
multiple | Boolean | false | 是否允许多选 | N
options | Array | [] | 可选项数据源。TS 类型：`Array<CascaderOption>` | N
placeholder | String | undefined | 占位符 | N
popup-props | Object | - | 参考 popup 组件 API。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts) | N
show-all-levels | Boolean | true | 选中值使用完整路径，输入框在单选时也显示完整路径 | N
size | String | medium | 组件尺寸。可选项：large/medium/small。TS 类型：`SizeEnum` | N
trigger | String | click | 展开下一层级的方式。可选项：click/hover | N
value | String / Number / Array | [] | 选中项的值。TS 类型：`CascaderValue<CascaderOption>` `type CascaderValue<T extends TreeOptionData = TreeOptionData> = string | number | T | Array<CascaderValue<T>>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts) | N
default-value | String / Number / Array | undefined | 选中项的值。非受控属性。TS 类型：`CascaderValue<CascaderOption>` `type CascaderValue<T extends TreeOptionData = TreeOptionData> = string | number | T | Array<CascaderValue<T>>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts) | N
value-mode | String | onlyLeaf | 选中值模式。all 表示父节点和子节点全部会出现在选中值里面；parentFirst 表示当子节点全部选中时，仅父节点在选中值里面；onlyLeaf 表示无论什么情况，选中值仅呈现叶子节点。可选项：onlyLeaf/parentFirst/all | N

### Cascader Events

名称 | 参数 | 描述
-- | -- | --
blur | `(detail: { value: CascaderValue<CascaderOption>; e: FocusEvent })` | 当输入框失去焦点时触发
change | `(value: CascaderValue<CascaderOption>, context: CascaderChangeContext<CascaderOption>)` | 选中值发生变化时触发。TreeNodeModel 从树组件中导出。`context.node` 表示触发事件的节点，`context.source` 表示触发事件的来源。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts)。<br/>`interface CascaderChangeContext<CascaderOption> { node?: TreeNodeModel<CascaderOption>; source: CascaderChangeSource }`<br/><br/>`import { TreeNodeModel } from '@Tree'`<br/><br/>`type CascaderChangeSource = 'invalid-value' | 'check' | 'clear' | 'uncheck'`<br/>
focus | `(detail: { value: CascaderValue<CascaderOption>; e: FocusEvent })` | 获得焦点时触发
remove | `(context: RemoveContext<CascaderOption>)` | 多选模式下，选中数据被移除时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts)。<br/>`interface RemoveContext<T> { value: CascaderValue<T>; node: TreeNodeModel<T> }`<br/>
