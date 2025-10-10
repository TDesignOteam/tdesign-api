:: BASE_DOC ::

## API

### Divider Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
align | String | center | 文本位置（仅在水平分割线有效）。可选项：left/right/center | N
content | String | - | 子元素 | N
dashed | Boolean | false | 是否虚线（仅在水平分割线有效） | N
layout | String | horizontal | 分隔线类型有两种：水平和垂直。可选项：horizontal/vertical | N

### Divider Slots

名称 | 描述
-- | --
content | 子元素

### Divider External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
