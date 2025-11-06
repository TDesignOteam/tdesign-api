
const props = `

### Tabs Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
action | String / TNode | - | 选项卡右侧的操作区域。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
addable | Boolean | false | 选项卡是否可增加 | N
animation | Object | - | 动画效果设置。其中 duration 表示动画时长。（单位：秒）。TS 类型：\`TabAnimation\` \`type TabAnimation = { duration: number } & Record<string, any>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tabs/type.ts) | N
animation | Object | - | 动画效果设置。其中 duration 表示动画时长。TS 类型：\`TabAnimation\` \`type TabAnimation = { duration: number } & Record<string, any>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tabs/type.ts) | N
bottomLineMode | String | fixed | 激活下划线的模式。可选项：fixed/auto/full | N
children | TNode | - | 组件子元素。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | false | 是否禁用选项卡 | N
dragSort | Boolean | false | 是否开启拖拽调整顺序 | N
list | Array | - | 选项卡列表。TS 类型：\`Array<TdTabPanelProps>\` | N
middle | TNode | - | 中间内容，介于头部和内容之间。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
middle | TNode | - | 中间内容，介于头部和内容之间。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
placement | String | top | 选项卡位置。可选项：left/top/bottom/right | N
scrollPosition | String | auto | Tab较多的时候，选中滑块滚动最终停留的位置。可选项：auto/start/center/end | N
showBottomLine | Boolean | true | 是否展示底部激活线条 | N
size | String | medium | 组件尺寸。可选项：medium/large | N
spaceEvenly | Boolean | true | 选项卡头部空间是否均分 | N
spaceEvenly | Boolean | true | 选项卡头部空间是否均分 | N
split | Boolean | true | \`1.1.10\`。是否展示分割线 | N
split | Boolean | true | 是否展示分割线 | N
sticky | Boolean | false | 是否开启粘性布局 | N
stickyProps | Object | - | 透传至 Sticky 组件。TS 类型：\`StickyProps\`，[Sticky API Documents](./sticky?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tabs/type.ts) | N
swipeable | Boolean | true | 是否可以滑动切换 | N
theme | String | normal | 选项卡风格，包含 默认风格 和 卡片风格两种。可选项：normal/card | N
theme | String | line | 标签的样式。可选项：line/tag/card | N
value | String / Number | - | 激活的选项卡值。TS 类型：\`TabValue\` \`type TabValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tabs/type.ts) | N
defaultValue | String / Number | - | 激活的选项卡值。非受控属性。TS 类型：\`TabValue\` \`type TabValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tabs/type.ts) | N
onAdd | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>添加选项卡时触发 | N
onChange | Function |  | TS 类型：\`(value: TabValue, label: string) => void\`<br/>激活的选项卡发生变化时触发 | N
onChange | Function |  | TS 类型：\`(value: TabValue) => void\`<br/>激活的选项卡发生变化时触发 | N
onClick | Function |  | TS 类型：\`(value: TabValue, label: string) => void\`<br/>点击选项卡时触发 | N
onDragSort | Function |  | TS 类型：\`(context: TabsDragSortContext) => void\`<br/>拖拽排序时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tabs/type.ts)。<br/>\`interface TabsDragSortContext { currentIndex: number; current: TabValue; targetIndex: number; target: TabValue }\`<br/> | N
onRemove | Function |  | TS 类型：\`(options: { value: TabValue; index: number; e: MouseEvent }) => void\`<br/>删除选项卡时触发 | N
onScroll | Function |  | TS 类型：\`(scrollTop: number, isFixed: boolean) => void\`<br/>页面滚动时触发 | N

### Tabs Events

名称 | 参数 | 描述
-- | -- | --
add | \`(context: { e: MouseEvent })\` | 添加选项卡时触发
change | \`(value: TabValue, label: string)\` | 激活的选项卡发生变化时触发
change | \`(value: TabValue)\` | 激活的选项卡发生变化时触发
click | \`(value: TabValue, label: string)\` | 点击选项卡时触发
drag-sort | \`(context: TabsDragSortContext)\` | 拖拽排序时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tabs/type.ts)。<br/>\`interface TabsDragSortContext { currentIndex: number; current: TabValue; targetIndex: number; target: TabValue }\`<br/>
remove | \`(options: { value: TabValue; index: number; e: MouseEvent })\` | 删除选项卡时触发
scroll | \`(scrollTop: number, isFixed: boolean)\` | 页面滚动时触发

### Tabs Slots

名称 | 描述
-- | --
- | 默认插槽，自定义选项卡内容

### Tabs External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-active | 激活态样式类
t-class-content | 内容样式类
t-class-item | 选项样式类
t-class-track | 滚动条样式类


### TabPanel Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
badgeProps | Object | - | 透传至 Badge 组件 | N
default | TNode | - | 用于自定义选项卡导航，同 panel。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
destroyOnHide | Boolean | true | 选项卡内容隐藏时是否销毁 | N
disabled | Boolean | false | 是否禁用当前选项卡 | N
draggable | Boolean | true | 选项卡组件开启允许拖动排序时，当前选项卡是否允许拖动 | N
icon | String / Object | - | \`1.0.0-rc.1\`。图标，传对象则透传至 Icon | N
icon | TNode | - | 图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | String / TNode | - | 选项卡名称，可自定义选项卡导航内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | String | - | 选项卡名称 | N
lazy | Boolean | false | 是否启用选项卡懒加载 | N
panel | String / TNode | - | 用于自定义选项卡面板内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
removable | Boolean | false | 当前选项卡是否允许移除 | N
value | String / Number | - | 选项卡的值，唯一标识。TS 类型：\`TabValue\` | N
value | String / Number | - | 选项卡的值，唯一标识。TS 类型：\`TabValue\`，[Tabs API Documents](./tabs?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/tabs/type.ts) | N
onRemove | Function |  | TS 类型：\`(options: { value: TabValue; e: MouseEvent }) => void\`<br/>点击删除按钮时触发 | N

### TabPanel Events

名称 | 参数 | 描述
-- | -- | --
remove | \`(options: { value: TabValue; e: MouseEvent })\` | 点击删除按钮时触发

### TabPanel Slots

名称 | 描述
-- | --
- | 默认插槽，自定义选项卡面板内容

`;
module.exports = {
  props,
};

