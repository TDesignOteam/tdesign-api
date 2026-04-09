:: BASE_DOC ::

## API

### Indexes Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
current | String / Number | - | 索引列表的激活项，默认首项。支持语法糖 `v-model:current` | N
default-current | String / Number | - | 索引列表的激活项，默认首项。非受控属性 | N
index-list | Array | - | 索引字符列表。不传默认 `A-Z`。TS 类型：`Array<string \| number>` | N
show-full-index | Boolean | false | `0.9.0`。是否显示完整的索引内容，默认只显示首字符。TS 类型：`Boolean` | N
sticky | Boolean | true | 索引是否吸顶，默认为true。TS 类型：`Boolean` | N
sticky-offset | Number | 0 | 锚点吸顶时与顶部的距离	 | N

### Indexes Events

名称 | 参数 | 描述
-- | -- | --
change | `(index: string \| number)` | 索引发生变更时触发事件
select | `(index: string \| number)` | 点击侧边栏时触发事件

### Indexes Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容


### IndexesAnchor Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
index | String / Number | - | 索引字符 | N

### IndexesAnchor Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### IndexesAnchor External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-sidebar | 侧边栏样式类
t-class-sidebar-item | 侧边栏选项样式类
