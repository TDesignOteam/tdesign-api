:: BASE_DOC ::

## API


### CountDown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-start | Boolean | true | 是否自动开始倒计时 | N
content | String / Slot | 'default' | 最终倒计时的展示内容，值为'default'时使用默认的格式，否则使用自定义样式插槽。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
format | String | HH:mm:ss | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | N
millisecond | Boolean | false | 是否开启毫秒级渲染 | N
size | String | 'medium' | `0.5.1`。倒计时尺寸。可选项：small/medium/large | N
split-with-unit | Boolean | false | `0.5.1`。使用时间单位分割 | N
theme | String | 'default' | `0.5.1`。倒计时风格。可选项：default/round/square | N
time | Number | 0 | 必需。倒计时时长，单位毫秒 | Y

### CountDown Events

名称 | 参数 | 描述
-- | -- | --
change | `(time: TimeData)` | 时间变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/components/count-down/type.ts)。<br/>`interface TimeData {  days: number; hours: number; minutes: number; seconds: number; milliseconds: number }`<br/>
finish | \- | 倒计时结束时触发

### CountDown External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-count | 计数样式类
t-class-split | 分隔线样式类
