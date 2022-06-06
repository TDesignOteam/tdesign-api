:: BASE_DOC ::

## API

### InputNumber Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
align | String | - | 文本内容位置，居左/居中/居右。可选项：left/center/right | N
decimal-places | Number | undefined | [小数位数](https://en.wiktionary.org/wiki/decimal_place) | N
disabled | Boolean | false | 禁用组件 | N
max | Number | Infinity | 最大值 | N
min | Number | -Infinity | 最小值 | N
placeholder | String | undefined | 占位符 | N
size | String | medium | 组件尺寸。可选项：small/medium/large | N
step | Number | 1 | 数值改变步数，可以是小数 | N
theme | String | row | 按钮布局。可选项：column/row/normal | N
value | Number | undefined | 值 | N
default-value | Number | undefined | 值。非受控属性 | N

### InputNumber Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value: number, context: { e: FocusEvent })` | 失去焦点时触发
change | `(value: number, context: ChangeContext)` | 值变化时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input-number/type.ts)。<br/>`interface ChangeContext { type: ChangeSource; e: InputEvent | MouseEvent | FocusEvent }`<br/><br/>`type ChangeSource = 'add' | 'reduce' | 'input' | ''`<br/>
focus | `(value: number, context: { e: FocusEvent })` | 获取焦点时触发
