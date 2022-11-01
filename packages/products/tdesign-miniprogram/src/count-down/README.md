:: BASE_DOC ::

## API
### CountDown Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
auto-start | Boolean | true | 是否自动开始倒计时 | N
content | String / Slot | 'default' | 最终倒计时的展示内容，值为'default'时使用默认的格式，否则使用自定义样式插槽 | N
format | String | HH:mm:ss | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | N
millisecond | Boolean | false | 是否开启毫秒级渲染 | N
size | String | 'small' | 倒计时尺寸。可选项：small/medium/large | N
split-with-unit | Boolean | false | 使用时间单位分割 | N
style | String | - | 自定义组件样式 | N
theme | String | 'default' | 倒计时风格。可选项：default/round/square | N
time | Number | - | 必需。倒计时时长，单位毫秒 | Y

### CountDown Events

名称 | 参数 | 描述
-- | -- | --
change | `(time: TimeData)` | 时间变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/count-down/type.ts)。<br/>`interface TimeData {  days: number; hours: number; minutes: number; seconds: number; milliseconds: number }`<br/>
finish | \- | 倒计时结束时触发
