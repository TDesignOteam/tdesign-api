
const props = `

### Collapse Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
borderless | Boolean | false | 无边框模式 | N
children | String / TNode | - | 折叠面板列表内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
defaultExpandAll | Boolean | false | 默认是否展开全部 | N
disabled | Boolean | - | 是否禁用面板展开/收起操作 | N
expandIcon | Boolean / TNode | true | 展开图标。值为 undefined 或 false 则不显示展开图标；值为 true 显示默认图标；值类型为函数，则表示完全自定义展开图标。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
expandIcon | Boolean | true | 展开图标 | N
expandIconPlacement | String | left | 展开图标的位置，左侧或右侧。可选项：left/right | N
expandMutex | Boolean | false | 每个面板互斥展开，每次只展开一个面板 | N
expandOnRowClick | Boolean | true | 是否允许点击整行标题展开面板 | N
theme | String | default | 折叠面板风格。可选项：default/card | N
value | Array | [] | 展开的面板集合。TS 类型：\`CollapseValue\` \`type CollapseValue = Array<string \| number>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/collapse/type.ts) | N
defaultValue | Array | [] | 展开的面板集合。非受控属性。TS 类型：\`CollapseValue\` \`type CollapseValue = Array<string \| number>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/collapse/type.ts) | N
onChange | Function |  | TS 类型：\`(value: CollapseValue, context: { e: MouseEvent }) => void\`<br/>切换面板时触发，返回变化的值 | N

### Collapse Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: CollapseValue, context: { e: MouseEvent })\` | 切换面板时触发，返回变化的值

### Collapse Slots

名称 | 描述
-- | --
- | 默认插槽，自定义内容区域内容


### CollapsePanel Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
children | String / TNode | - | 折叠面板内容，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | - | 折叠面板内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
default | String / TNode | - | 折叠面板内容，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
destroyOnCollapse | Boolean | false | 当前面板处理折叠状态时，是否销毁面板内容 | N
disabled | Boolean | undefined | 禁止当前面板展开，优先级大于 Collapse 的同名属性 | N
expandIcon | Boolean / TNode | undefined | 当前折叠面板展开图标，优先级大于 Collapse 的同名属性。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
header | String / TNode | - | 面板头内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
headerLeftIcon | String / TNode | - | 面板头左侧图标。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
headerLeftIcon | TNode | - | 面板头左侧图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
headerRightContent | String / TNode | - | 面板头的右侧区域，一般用于呈现面板操作。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
placement | String | bottom | 选项卡内容的位置。可选项：bottom/top | N
value | String / Number | - | 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识 | N

### CollapsePanel Slots

名称 | 描述
-- | --
- | 默认插槽，作用同 \`content\` 插槽

### CollapsePanel External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-header | 头部样式类

`;
module.exports = {
  props,
};

