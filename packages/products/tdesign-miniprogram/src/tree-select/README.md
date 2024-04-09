:: BASE_DOC ::

## API

### TreeSelect Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
height | String / Number | 336 | 高度，默认单位为 px | N
keys | Object | - | 用来定义 `value / label` 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
multiple | Boolean | false | 是否多选 | N
options | Array | [] | 选项。TS 类型：`Array<DataOption>` | N
value | String / Number / Array | - | 选中值。TS 类型：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N
default-value | String / Number / Array | undefined | 选中值。非受控属性。TS 类型：`TreeSelectValue` `type TreeSelectValue = string \| number \| Array<TreeSelectValue>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts) | N

### TreeSelect Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: TreeSelectValue, level: TreeLevel) ` | 点击任何节点均会触发；level 代表当前点击的层级，0 代表最左侧，依次递进。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/tree-select/type.ts)。<br/>`type TreeLevel: 0 \| 1 \| 2`<br/>
