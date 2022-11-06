:: BASE_DOC ::

## API
### Badge Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
color | String | - | 颜色 | N
content | String | - | 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义 | N
count | String / Number / Slot | 0 | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染 | N
custom-style | String | - | 自定义组件样式 | N
dot | Boolean | false | 是否为红点 | N
external-classes | Array | - | 组件类名，分别用于设置外层元素、默认内容、右上角内容等元素类名。`['t-class', 't-class-content', 't-class-count']` | N
max-count | Number | 99 | 封顶的数字值 | N
offset | Array | - | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：`Array<string \| number>` | N
shape | String | circle | 形状。可选项：circle/square/round/ribbon | N
show-zero | Boolean | false | 当数值为 0 时，是否展示徽标 | N
size | String | medium | 尺寸。可选项：small/medium | N
