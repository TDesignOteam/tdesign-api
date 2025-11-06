
const props = `

### Steps Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
current | String / Number | - | 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成 | N
defaultCurrent | String / Number | - | 当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = 'FINISH' 表示所有状态完成。非受控属性 | N
currentStatus | String | process | 用于控制 current 指向的步骤条的状态。可选项：default/process/finish/error | N
layout | String | horizontal | 步骤条方向，有两种：横向和纵向。可选项：horizontal/vertical | N
options | Array | - | 步骤条数据列表（作用和 StepItem 效果一样）。TS 类型：\`Array<TdStepItemProps>\` | N
readonly | Boolean | undefined | 只读状态 | N
separator | String | line | 步骤条分割符。可选项：line/dashed/arrow | N
sequence | String | positive | 步骤条顺序。可选项：positive/reverse | N
theme | String | default | 步骤条风格。可选项：default/dot | N
onChange | Function |  | TS 类型：\`(current: string \| number, previous: string \| number, context?: { e?: MouseEvent }) => void\`<br/>当前步骤发生变化时触发 | N
onChange | Function |  | TS 类型：\`({current: string \| number, previous: string \| number}) => void\`<br/>当前步骤发生变化时触发 | N

### Steps Events

名称 | 参数 | 描述
-- | -- | --
change | \`(current: string \| number, previous: string \| number, context?: { e?: MouseEvent })\` | 当前步骤发生变化时触发
change | \`({current: string \| number, previous: string \| number})\` | 当前步骤发生变化时触发

### Steps Slots

名称 | 描述
-- | --
- | 默认插槽，自定义步骤条内容

### Steps External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### StepItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
children | String / TNode | - | 步骤描述，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | '' | 步骤描述。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
default | String / TNode | - | 步骤描述，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
extra | String / TNode | - | 显示在步骤描述下方的额外内容，比如：操作项。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
extra | String / TNode | - | 步骤条自定义内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | Boolean / TNode | true | 图标，默认显示内置图标，也可以自定义图标，值为 false 则不显示图标。优先级大于 \`status\` 定义的图标。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / TNode | - | 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
status | String | default | 当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态。可选项：default/process/finish/error。TS 类型：\`StepStatus\` \`type StepStatus = 'default' \| 'process' \| 'finish' \| 'error'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/steps/type.ts) | N
subStepItems | Array | [] | 已废弃。子步骤条，仅支持 layout  = 'vertical' 时。TS 类型：\`SubStepItem[]\` \`interface SubStepItem { status: StepStatus, title: string }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/steps/type.ts) | N
title | String / TNode | '' | 标题。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
titleRight | String / TNode | '' | 标题右侧数据 仅支持 layout = 'vertical' 时。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
value | String / Number | - | 当前步骤标识 | N

### StepItem Slots

名称 | 描述
-- | --
- | 默认插槽，自定义步骤内容
icon | 自定义 \`icon\` 显示内容

### StepItem External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-description | 描述样式类
t-class-extra | 额外样式类
t-class-title | 标题样式类

`;
module.exports = {
  props,
};

