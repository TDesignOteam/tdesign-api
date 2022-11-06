:: BASE_DOC ::

## API
### CollapsePanel Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot | - | 折叠面板内容 | N
custom-style | String | - | 自定义组件样式 | N
disabled | Boolean | undefined | 禁止当前面板展开，优先级大于 Collapse 的同名属性 | N
expand-icon | Boolean / Slot | undefined | 当前折叠面板展开图标，优先级大于 Collapse 的同名属性 | N
external-classes | Array | - | 组件类名，用于组件外层元素、标题、内容。`['t-class', 't-class-header', 't-class-content']` | N
header | String / Slot | - | 面板头内容 | N
header-right-content | String / Slot | - | 面板头的右侧区域，一般用于呈现面板操作 | N
value | String / Number | - | 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识 | N
