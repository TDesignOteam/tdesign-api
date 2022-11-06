:: BASE_DOC ::

## API
### Stepper Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
custom-style | String | - | 自定义组件样式 | N
disable-input | Boolean | false | 禁用输入框 | N
disabled | Boolean | false | 禁用全部操作 | N
external-classes | Array | - | 组件类名，分别用于表示组件外层元素、输入框、右侧递增号、左侧递减号等元素类名。`['t-class', 't-class-input', 't-class-add', 't-class-minus']` | N
input-width | Number | - | 输入框宽度 | N
max | Number | 100 | 最大值 | N
min | Number | 0 | 最小值 | N
step | Number | 1 | 步长 | N
theme | String | normal | 组件风格。可选项：normal/grey | N
value | String / Number | 0 | 值 | N
default-value | String / Number | undefined | 值。非受控属性 | N

### Stepper Events

名称 | 参数 | 描述
-- | -- | --
blur | `({ type: string \| number })` | 输入框失去焦点时触发
change | `({ value: string \| number })` | 数值发生变更时触发
overlimit | `({type: 'minus' \| 'plus'})` | 数值超出限制时触发
