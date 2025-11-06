
const props = `

### Indexes Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
current | String / Number | - | 索引列表的激活项，默认首项 | N
defaultCurrent | String / Number | - | 索引列表的激活项，默认首项。非受控属性 | N
indexList | Array | - | 索引字符列表。不传默认 \`A-Z\`。TS 类型：\`Array<string \| number>\` | N
list | Array | [] | 已废弃。索引列表的列表数据。每个元素包含三个子元素，index(string)：索引值，例如1，2，3，...或A，B，C等；title(string): 索引标题，可不填将默认设为索引值；children(Array<{title: string}>): 子元素列表，title为子元素的展示文案。TS 类型：\`ListItem[] \` \`interface ListItem { title: string;  index: string;  children: { title: string; [key: string]: any} [] }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/indexes/type.ts) | N
sticky | Boolean | true | 索引是否吸顶，默认为true。TS 类型：\`Boolean\` | N
stickyOffset | Number | 0 | 锚点吸顶时与顶部的距离	 | N
onChange | Function |  | TS 类型：\`(index: string \| number) => void\`<br/>索引发生变更时触发事件 | N
onSelect | Function |  | TS 类型：\`(index: string \| number) => void\`<br/>点击侧边栏时触发事件 | N

### Indexes Events

名称 | 参数 | 描述
-- | -- | --
change | \`(index: string \| number)\` | 索引发生变更时触发事件
select | \`(index: string \| number)\` | 点击侧边栏时触发事件

### Indexes Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容


### IndexesAnchor Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
index | String / Number | - | 索引字符 | N

### IndexesAnchor Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容

### IndexesAnchor External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-sidebar | 侧边栏样式类
t-class-sidebar-item | 侧边栏选项样式类

`;
module.exports = {
  props,
};

