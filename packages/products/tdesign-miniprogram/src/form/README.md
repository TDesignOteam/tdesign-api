:: BASE_DOC ::

## API

### Form Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
colon | Boolean | false | 是否在表单标签字段右侧显示冒号 | N
disabled | Boolean | undefined | 是否禁用整个表单 | N
prevent-submit-default | Boolean | true | 是否阻止表单提交默认事件（表单提交默认事件会刷新页面），设置为 `true` 可以避免刷新 | N
rules | Object | - | 表单字段校验规则。TS 类型：`{ [field in keyof FormData]: Array<FormRule> }` | N
scroll-to-first-error | String | - | 表单校验不通过时，是否自动滚动到第一个校验不通过的字段，平滑滚动或是瞬间直达。值为空则表示不滚动。可选项：smooth/auto | N

### Form Events

名称 | 参数 | 描述
-- | -- | --
reset | `(detail: { e?: FormResetEvent })` | 表单重置时触发

### FormItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
for | String | - | label 原生属性 | N
help | String / Slot | - | 表单项说明内容 | N
name | String / Number / Array | - | 表单字段名称。TS 类型：`string | number | Array<string | number>` | N
rules | Array | [] | 表单字段校验规则。TS 类型：`Array<FormRule>` | N

### FormRule

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
boolean | Boolean | - | 内置校验方法，校验值类型是否为布尔类型，示例：`{ boolean: true, message: '数据类型必须是布尔类型' }` | N
date | Boolean / Object | - | 内置校验方法，校验值是否为日期格式，[参数文档](https://github.com/validatorjs/validator.js)，示例：`{ date: { delimiters: '-' }, message: '日期分隔线必须是短横线（-）' }`。TS 类型：`boolean | IsDateOptions` `interface IsDateOptions { format: string; strictMode: boolean; delimiters: string[] }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
email | Boolean / Object | - | 内置校验方法，校验值是否为邮件格式，[参数文档](https://github.com/validatorjs/validator.js)，示例：`{ email: { ignore_max_length: true }, message: '请输入正确的邮箱地址' }`。TS 类型：`boolean | IsEmailOptions` `import { IsEmailOptions } from 'validator/es/lib/isEmail'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
enum | Array | - | 内置校验方法，校验值是否属于枚举值中的值。示例：`{ enum: ['primary', 'info', 'warning'], message: '值只能是 primary/info/warning 中的一种' }`。TS 类型：`Array<string>` | N
idcard | Boolean | - | 内置校验方法，校验值是否为身份证号码，组件校验正则为 `/^(\\d{18,18}|\\d{15,15}|\\d{17,17}x)$/i`，示例：`{ idcard: true, message: '请输入正确的身份证号码' }` | N
len | Number / Boolean | - | 内置校验方法，校验值固定长度，如：len: 10 表示值的字符长度只能等于 10 ，中文表示 2 个字符，英文为 1 个字符。示例：`{ len: 10, message: '内容长度不对' }`。<br />如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length === 10, message: '内容文本长度只能是 10 个字' }` | N
max | Number / Boolean | - | 内置校验方法，校验值最大长度，如：max: 100 表示值最多不能超过 100 个字符，中文表示 2 个字符，英文为 1 个字符。示例：`{ max: 10, message: '内容超出' }`。<br />如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length <= 10, message: '内容文本长度不能超过 10 个字' }`<br />如果数据类型数字（Number），则自动变为数字大小的比对 | N
message | String | - | 校验未通过时呈现的错误信息，值为空则不显示 | N
min | Number / Boolean | - | 内置校验方法，校验值最小长度，如：min: 10 表示值最多不能少于 10 个字符，中文表示 2 个字符，英文为 1 个字符。示例：`{ min: 10, message: '内容长度不够' }`。<br />如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length >= 10, message: '内容文本长度至少为 10 个字' }`。<br />如果数据类型数字（Number），则自动变为数字大小的比对 | N
number | Boolean | - | 内置校验方法，校验值是否为数字（1.2 、 1e5  都算数字），示例：`{ number: true, message: '请输入数字' }` | N
pattern | Object | - | 内置校验方法，校验值是否符合正则表达式匹配结果，示例：`{ pattern: /@qq.com/, message: '请输入 QQ 邮箱' }`。TS 类型：`RegExp` | N
required | Boolean | - | 内置校验方法，校验值是否已经填写。该值为 true，默认显示必填标记，可通过设置 `requiredMark: false` 隐藏必填标记 | N
telnumber | Boolean | - | 内置校验方法，校验值是否为手机号码，校验正则为 `/^1[3-9]\\d{9}$/`，示例：`{ telnumber: true, message: '请输入正确的手机号码' }` | N
trigger | String | change | 校验触发方式。可选项：change/blur | N
type | String | error | 校验未通过时呈现的错误信息类型，有 告警信息提示 和 错误信息提示 等两种。可选项：error/warning | N
url | Boolean / Object | - | 内置校验方法，校验值是否为网络链接地址，[参数文档](https://github.com/validatorjs/validator.js)，示例：`{ url: { protocols: ['http','https','ftp'] }, message: '请输入正确的 Url 地址' }`。TS 类型：`boolean | IsURLOptions` `import { IsURLOptions } from 'validator/es/lib/isURL'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
validator | Function | - | 自定义校验规则，示例：`{ validator: (val) => val.length > 0, message: '请输入内容'}`。TS 类型：`CustomValidator` `type CustomValidator = (val: ValueType) => CustomValidateResolveType | Promise<CustomValidateResolveType>` `type CustomValidateResolveType = boolean | CustomValidateObj` `interface CustomValidateObj { result: boolean; message: string; type?: 'error' | 'warning' | 'success' }` `type ValueType = any`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/form/type.ts) | N
