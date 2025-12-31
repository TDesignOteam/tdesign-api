:: BASE_DOC ::

## API

### Badge Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
color | String | - | 颜色 | N
content | String | - | 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义 | N
count | String / Number | 0 | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染 | N
dot | Boolean | false | 是否为红点 | N
max-count | Number | 99 | 封顶的数字值 | N
offset | Array | - | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：`Array<string \| number>` | N
shape | String | circle | 徽标形状，其中 ribbon 和 ribbon-right 等效。可选项：circle/square/bubble/ribbon/ribbon-right/ribbon-left/triangle-right/triangle-left | N
show-zero | Boolean | false | 当数值为 0 时，是否展示徽标 | N
size | String | medium | 尺寸。可选项：medium/large | N

### Badge Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容
count | 徽标右上角内容

### Badge External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-count | 计数样式类
