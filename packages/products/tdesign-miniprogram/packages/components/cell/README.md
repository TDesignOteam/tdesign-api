:: BASE_DOC ::

## API


### Cell Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
align | String | middle | 右侧内容的对齐方式，默认居中对齐。可选项：top/middle/bottom | N
arrow | Boolean / Object | false | 是否显示右侧箭头 | N
bordered | Boolean | true | 是否显示下边框 | N
click | String | - | 右侧内容 | N
description | String | - | 下方内容描述 | N
hover | Boolean | - | 是否开启点击反馈 | N
image | String | - | 主图 | N
jump-type | String | navigateTo | 链接跳转类型。可选项：switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Object | - | 左侧图标，出现在单元格标题的左侧 | N
note | String | - | 和标题同行的说明文字 | N
required | Boolean | false | 是否显示表单必填星号 | N
right-icon | String / Object | - | 最右侧图标 | N
title | String | - | 标题 | N
url | String | - | 点击后跳转链接地址。如果值为空，则表示不需要跳转 | N

### Cell Slots

名称 | 描述
-- | --
description | 下方内容描述
image | 主图
left-icon | 左侧图标，出现在单元格标题的左侧
note | 和标题同行的说明文字
right-icon | 最右侧图标
title | 标题

### Cell External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-center | 中间（`title`, `description`）内容样式类
t-class-description | 下方描述内容样式类
t-class-hover | 悬停样式类
t-class-image | 图片样式类
t-class-left | 左侧内容样式类
t-class-left-icon | 左侧图标样式类
t-class-note | 右侧说明文字样式类
t-class-right | 右侧内容样式类
t-class-right-icon | 右侧图标样式类
t-class-title | 标题样式类


### CellGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
bordered | Boolean | false | 是否显示组边框 | N
theme | String | default | 单元格组风格。可选项：default/card | N
title | String | - | 单元格组标题 | N

### CellGroup External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-title | 标题样式类

### CellGroup Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

## API


### Cell Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
align | String | middle | 右侧内容的对齐方式，默认居中对齐。可选项：top/middle/bottom | N
arrow | Boolean / Object | false | 是否显示右侧箭头 | N
bordered | Boolean | true | 是否显示下边框 | N
description | String | - | 下方内容描述 | N
hover | Boolean | - | 是否开启点击反馈 | N
image | String | - | 主图 | N
jump-type | String | navigateTo | 链接跳转类型。可选项：switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Object | - | 左侧图标，出现在单元格标题的左侧 | N
note | String | - | 和标题同行的说明文字 | N
required | Boolean | false | 是否显示表单必填星号 | N
right-icon | String / Object | - | 最右侧图标 | N
title | String | - | 标题 | N
url | String | - | 点击后跳转链接地址。如果值为空，则表示不需要跳转 | N

### Cell Events

名称 | 参数 | 描述
-- | -- | --
click | - | 右侧内容

### Cell Slots

名称 | 描述
-- | --
description | 下方内容描述
image | 主图
left-icon | 左侧图标，出现在单元格标题的左侧
note | 和标题同行的说明文字
right-icon | 最右侧图标
title | 标题

### Cell External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-center | 中间（`title`, `description`）内容样式类
t-class-description | 下方描述内容样式类
t-class-hover | 悬停样式类
t-class-image | 图片样式类
t-class-left | 左侧内容样式类
t-class-left-icon | 左侧图标样式类
t-class-note | 右侧说明文字样式类
t-class-right | 右侧内容样式类
t-class-right-icon | 右侧图标样式类
t-class-title | 标题样式类


### CellGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
bordered | Boolean | false | 是否显示组边框 | N
theme | String | default | 单元格组风格。可选项：default/card | N
title | String | - | 单元格组标题 | N

### CellGroup Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容区域内容

### CellGroup External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-title | 标题样式类
