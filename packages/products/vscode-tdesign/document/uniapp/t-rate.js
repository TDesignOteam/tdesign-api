
const props = `

### Rate Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
allowHalf | Boolean | false | 是否允许半选 | N
clearable | Boolean | false | 是否允许清除评分，如果允许，重新点击当前评分清除 | N
color | String / Array | '#ED7B2F' | 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB']。TS 类型：\`string \| Array<string>\` | N
color | String / Array | '#ED7B2F' | 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB']。TS 类型：\`string \| Array<string>\` | N
count | Number | 5 | 评分的数量 | N
disabled | Boolean | undefined | 是否禁用评分 | N
gap | Number | 4 | 评分图标的间距 | N
gap | String / Number | 8 | 评分图标的间距 | N
icon | TNode | - | 自定义评分图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Array | - | 自定义评分图标，[选中图标，未选中图标]。TS 类型：\`string \| string[]\` | N
icon | Array / TNode | - | 自定义评分图标，[选中图标，未选中图标]。TS 类型：\`Array<TNode \| Function>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
iconPrefix | String | undefined | 定义图标前缀 | N
placement | String | top | 选择评分弹框的位置，值为空字符表示不显示评分弹框。可选项：top / bottom / '' | N
showText | Boolean | false | 是否显示对应的辅助文字 | N
size | String | 24px | 评分图标的大小 | N
texts | Array | [] | 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']。TS 类型：\`Array<string>\` | N
value | Number | 0 | 选择评分的值 | N
defaultValue | Number | 0 | 选择评分的值。非受控属性 | N
variant | String | outline | 已废弃。形状类型，有描边类型和填充类型两种。可选项：outline/filled | N
onChange | Function |  | TS 类型：\`(value: number) => void\`<br/>评分数改变时触发 | N

### Rate Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: number)\` | 评分数改变时触发

### Rate External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-text | 文本样式类

`;
module.exports = {
  props,
};

