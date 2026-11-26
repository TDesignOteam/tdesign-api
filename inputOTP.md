# InputOTP 验证码输入框 API（React）

## 基础属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 | 技术栈 |
| --- | --- | --- | --- | --- | --- |
| `length` | 验证码总位数，即输入格数量 | `number` | - | `6` | React / Vue |
| `value` | 验证码的值 | `string` | - | - | React / Vue |
| `defaultValue` | 验证码的值。非受控属性 | `string` | - | - | React / Vue |
| `pattern` | 输入校验正则，不匹配的输入将被整体拒绝（而非逐字符过滤）；可传字符串或 `RegExp` | `string \| RegExp` | - | - | React / Vue |
| `mask` | 是否遮掩显示真实字符；传字符串时作为遮掩字符（建议单个字符或 emoji），原始 `value` 不被修改 | `boolean \| string` | - | `false` | React / Vue |
| `separator` | 在指定位置的输入格后渲染分隔符。TS 类型：`string \| TNode \| ((index: number) => TNode)` | `TNode` | - | - | React / Vue |
| `placeholder` | 输入格占位字符，可传数组为每个格子单独设置 | `string \| string[]` | - | - | React / Vue |
| `inputMode` | 对应原生 `inputMode`，控制移动端弹出的键盘类型 | `string` | `'numeric'` / `'text'` / `'decimal'` / `'tel'` / `'search'` / `'email'` / `'url'` | `'numeric'` | React / Vue |
| `size` | 尺寸。TS 类型：`SizeEnum` | `string` | `small` / `medium` / `large` | `medium` | React / Vue |
| `status` | 校验状态 | `string` | `default` / `error` | `default` | React / Vue |
| `disabled` | 是否禁用全部输入格 | `boolean` | - | `false` | React / Vue |
| `readonly` | 是否只读（不可编辑，但可选择/聚焦） | `boolean` | - | `false` | React / Vue |
| `autofocus` | 是否自动聚焦第一个输入格 | `boolean` | - | `false` | React / Vue |
| `name` | 名称；`value` 为完整字符串，便于原生表单提交 | `string` | - | - | React / Vue |


## 事件 (Events)

| 事件 | 说明 | 类型 | 技术栈 |
| --- | --- | --- | --- |
| `onChange` | 值变化时触发，参数为拼接后的完整字符串。TS 类型：`(value: string, context: { e?: InputEvent; trigger: 'input' \| 'clear' \| 'delete' \| 'paste' }) => void` | `Function` | React / Vue |
| `onComplete` | 所有输入格填满（值首次达到 `length`）时触发一次，携带完整值。TS 类型：`(value: string) => void` | `Function` | React / Vue |
