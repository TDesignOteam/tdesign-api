:: BASE_DOC ::

## API
### Steps Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
current | String / Number | - | 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成 | N
default-current | String / Number | undefined | 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成。非受控属性 | N
current-status | String | process | 用于控制 current 指向的步骤条的状态。可选项：default/process/finish/error | N
external-classes | Array | - | 组件类名，用于设置组件外层元素元素类名。`['t-class']` | N
layout | String | horizontal | 步骤条方向，有两种：横向和纵向。可选项：horizontal/vertical | N
readonly | Boolean | false | 只读状态 | N
separator | String | line | 步骤条分割符。可选项：line/dashed/arrow | N
style | String | - | 自定义组件样式 | N
theme | String | default | 步骤条风格。可选项：default/dot | N

### Steps Events

名称 | 参数 | 描述
-- | -- | --
change | `({current: string \| number, previous: string \| number})` | 当前步骤发生变化时触发

### StepItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot | '' | 步骤描述 | N
external-classes | Array | - | 组件类名，用于设置组件外层元素元素类名。`['t-class', 't-class-content', 't-class-title', 't-class-description', 't-class-extra']` | N
icon | String / Slot | - | 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标 | N
status | String | default | 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态。可选项：default/process/finish/error。TS 类型：`StepStatus` `type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/steps/type.ts) | N
style | String | - | 自定义组件样式 | N
sub-step-items | Array | [] | 子步骤条，仅支持 layout  = 'vertical' 时。TS 类型：`SubStepItem[]` `interface SubStepItem { status: StepStatus, title: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/steps/type.ts) | N
title | String / Slot | '' | 标题 | N
