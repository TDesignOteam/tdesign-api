:: BASE_DOC ::

## API

### InputOTP Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
autofocus | Boolean | false | 是否自动聚焦 | N
disabled | Boolean | false | 是否禁用 | N
inputMode | String | numeric | 对应原生 `inputMode`，控制移动端弹出的键盘类型。可选项：numeric/text/decimal/tel/search/email/url | N
length | Number | 6 | 验证码总位数，即输入格数量 | N
mask | Boolean / String | false | 是否遮掩显示真实字符，不会修改原始值。TS 类型：`boolean \| string` | N
name | String | - | 元素的 name 属性，通常用于表单提交 | N
pattern | String | - | 输入校验正则。TS 类型：`string \| RegExp` | N
placeholder | String / Array | - | 输入格的占位符，可传入数组为每个格子单独设置。TS 类型：`string \| string[]` | N
readonly | Boolean | false | 是否只读 | N
separator | TElement | - | 分隔符，在指定索引的输入框后渲染分隔符。TS 类型：`TNode \| ((index: number) => TNode)`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
status | String | default | 校验状态。可选项：default/error | N
value | String | - | 验证码的值 | N
defaultValue | String | - | 验证码的值。非受控属性 | N
onChange | Function |  | TS 类型：`(value: string) => void`<br/>在输入、粘贴、剪切、删除时均会触发，返回变化后的新值 | N
onComplete | Function |  | TS 类型：`(value: string) => void`<br/>当输入框内容全部填充时触发回调 | N
