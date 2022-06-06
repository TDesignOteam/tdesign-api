:: BASE_DOC ::

## API

### Input Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | N
align | String | left | 文本内容位置，居左/居中/居右。可选项：left/center/right | N
borderless | Boolean | false | 【讨论中】是否开启无边框模式 | N
clearable | Boolean | false | 是否可清空 | N
confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起点 | N
confirm-type | String | done | 设置键盘右下角按钮的文字，仅在 type='text'时生效。可选项：send/search/next/go/done | N
disabled | Boolean | false | 是否禁用输入框 | N
error-message | String | - | 已废弃。错误提示文本，值为空不显示（废弃属性，如果需要，请更为使用 status 和 tips） | N
external-classes | Array | - | 组件类名，用于设置组件外层元素、输入框、占位符、错误信息等元素类名。`['t-class', 't-class-input', 't-class-placeholder', 't-class-error-msg']` | N
focus | Boolean | false | 自动聚焦 | N
format | Function | - | 【开发中】指定输入框展示值的格式。TS 类型：`InputFormatType` `type InputFormatType = (value: InputValue) => number | string`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
label | String / Slot | - | 左侧文本 | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
maxlength | Number | - | 用户最多可以输入的文本长度，一个中文等于一个计数长度。值小于等于 0 的时候，则表示不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
placeholder | String | undefined | 占位符 | N
prefix-icon | String / Slot | - | 组件前置图标，值为字符串则表示图标名称 | N
readonly | Boolean | false | 只读状态 | N
size | String | small | 输入框尺寸。可选项：small/medium。TS 类型：`'medium' | 'small'` | N
status | String | default | 输入框状态。可选项：default/success/warning/error | N
suffix | String / Slot | - | 后置图标前的后置内容 | N
suffix-icon | String / Slot | - | 后置文本内容，值为字符串则表示图标名称 | N
tips | String / Slot | - | 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 | N
type | String | text | 输入框类型。可选项：text/number/idcard/digit/safe-password/password | N
value | String / Number | - | 输入框的值。TS 类型：`InputValue` `type InputValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N
default-value | String / Number | undefined | 输入框的值。非受控属性。TS 类型：`InputValue` `type InputValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts) | N

### Input Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value: InputValue)` | 失去焦点时触发
change | `(value: InputValue)` | 输入框值发生变化时触发
clear | \- | 清空按钮点击时触发
enter | `(value: InputValue)` | 回车键按下时触发
focus | `(value: InputValue)` | 获得焦点时触发
