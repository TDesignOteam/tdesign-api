:: BASE_DOC ::

## API

### Alert Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
close | String / Boolean / Slot | false | 关闭按钮。值为 true 则显示默认关闭按钮；值为 false 则不显示按钮；值类型为 string 则直接显示；值类型为 Function 则可以自定关闭按钮。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
max-line | Number | 0 | 内容显示最大行数，超出的内容会折叠收起，用户点击后再展开。值为 0 表示不折叠 | N
message | String / Slot | - | 内容（子元素）。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
operation | Slot | - | 跟在告警内容后面的操作区。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
theme | String | info | 组件风格。可选项：success/info/warning/error | N
title | String / Slot | - | 标题。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N

### Alert Events

名称 | 参数 | 描述
-- | -- | --
close | - | 关闭按钮点击时触发
closed | `(detail: { e: TransitionEvent })` | 告警提示框关闭动画结束后触发
