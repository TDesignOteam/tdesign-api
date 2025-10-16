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
description | String / Slot | - | 下方内容描述。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
hover | Boolean | - | 是否开启点击反馈 | N
image | String / Slot | - | 主图。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
jump-type | String | navigateTo | 链接跳转类型。可选项：switchTab/reLaunch/redirectTo/navigateTo | N
left-icon | String / Object / Slot | - | 左侧图标，出现在单元格标题的左侧。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
note | String / Slot | - | 和标题同行的说明文字。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
required | Boolean | false | 是否显示表单必填星号 | N
right-icon | String / Object / Slot | - | 最右侧图标。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
title | String / Slot | - | 标题。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
url | String | - | 点击后跳转链接地址。如果值为空，则表示不需要跳转 | N

### Cell Events

名称 | 参数 | 描述
-- | -- | --
click | - | 右侧内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)

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
