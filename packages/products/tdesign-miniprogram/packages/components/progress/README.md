:: BASE_DOC ::

## API


### Progress Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
color | String / Object / Array | '' | 进度条颜色。示例：'#ED7B2F' 或 'orange' 或 `['#f00', '#0ff', '#f0f']` 或 `{ '0%': '#f00', '100%': '#0ff' }` 或  `{ from: '#000', to: '#000' }` 等。TS 类型：`string \| Array<string> \| Record<string, string>` | N
label | String / Boolean / Slot | true | 进度百分比，可自定义。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
percentage | Number | 0 | 进度条百分比 | N
size | String / Number | 'default' | 进度条尺寸，仅对环形进度条有效。可选值：default/micro。default 值为 112； micro 值为 24 | N
status | String | - | 进度条状态。可选项：success/error/warning/active。TS 类型：`ProgressStatus` `type ProgressStatus = 'success' \| 'error' \| 'warning' \| 'active'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/progress/type.ts) | N
stroke-width | String / Number | - | 进度条线宽，默认单位 `px` | N
theme | String | line | 进度条风格。值为 line，标签（label）显示在进度条右侧；值为 plump，标签（label）显示在进度条里面；值为 circle，标签（label）显示在进度条正中间。可选项：line/plump/circle。TS 类型：`ProgressTheme` `type ProgressTheme = 'line' \| 'plump' \| 'circle'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/progress/type.ts) | N
track-color | String | '' | 进度条未完成部分颜色 | N

### Progress External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-bar | 进度文字样式类
t-class-label | 标签样式类
