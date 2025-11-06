
const props = `

### BackTop Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
children | String / TNode | - | 回到顶部内容，同 \`content\`。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
container | String / Function | 'body' | 监听滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
container | Function | - | 滚动的容器。TS 类型：\`() => HTMLElement\` | N
content | String / TNode | - | 回到顶部内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
default | String / TNode | - | 回到顶部内容，同 \`content\`。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
duration | Number | 200 | 回到顶部的耗时单位：毫秒 | N
fixed | Boolean | true | 是否绝对定位固定到屏幕右下方 | N
icon | String / Boolean / Object / TNode | true | 图标。值为 \`false\` 表示不显示图标。不传表示使用默认图标 \`'backtop'\`。TS 类型：\`string \| boolean \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | TNode | backtop | 图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | Boolean / TNode | true | 图标。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
offset | Array | ["24px", "80px"] | 回到顶部相对右下角的位置偏移，示例：[10, 20] 或 ['10em', '8rem']。TS 类型：\`Array<string \| number>\` | N
scrollTop | Number | 0 | 页面滚动距离 | N
shape | String | square | 回到顶部的形状。可选项：circle/square。TS 类型：\`BackTopShapeEnum \` \`type BackTopShapeEnum = 'circle' \| 'square'\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/back-top/type.ts) | N
size | String | medium | 组件尺寸。可选项：medium/small | N
target | Function | - | 定位滚动到指定对象。TS 类型：\`() => HTMLElement\` | N
target | String / Function | 'body' | 指定回到该对象。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
text | String | '' | 文案 | N
theme | String | round | 预设的样式类型。可选项：round/half-round/round-dark/half-round-dark | N
theme | String | light | 组件主题风格，浅色、主色、深色。可选项：light/primary/dark | N
visibilityHeight | Number | 200 | 滚动高度达到此参数值才出现 | N
visibleHeight | String / Number | '200px' | 滚动高度达到此参数值才出现 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击回到顶部时触发 | N
onToTop | Function |  | TS 类型：\`() => void\`<br/>点击触发 | N

### BackTop Events

名称 | 参数 | 描述
-- | -- | --
click | \`(context: { e: MouseEvent })\` | 点击回到顶部时触发
to-top | \- | 点击触发

### BackTop Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容
icon |  自定义图标内容

### BackTop External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-text | 文本样式类

`;
module.exports = {
  props,
};

