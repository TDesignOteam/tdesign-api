
const props = `

### Input Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
adjustPosition | Boolean | true | 键盘弹起时，是否自动上推页面 | N
align | String | left | 文本内容位置，居左/居中/居右。可选项：left/center/right | N
allowInputOverMax | Boolean | false | 超出 \`maxlength\` 或 \`maxcharacter\` 之后是否允许继续输入 | N
alwaysEmbed | Boolean | false | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | N
autoFocus | Boolean | false | (即将废弃，请直接使用 focus )自动聚焦，拉起键盘 | N
autoWidth | Boolean | false | 宽度随内容自适应 | N
autocomplete | String | undefined | 是否开启自动填充功能，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) | N
autofocus | Boolean | false | 自动聚焦 | N
borderless | Boolean | false | 是否开启无边框模式 | N
clearTrigger | String | always | 清空图标触发方式，仅在输入框有值时有效。可选项：always / focus | N
clearable | Boolean | false | 是否可清空 | N
clearable | Boolean / Object | false | 是否可清空，默认不启动。值为 \`true\` 表示使用默认清空按钮，值为 \`Object\` 表示透传至 \`icon\` | N
confirmHold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起 | N
confirmType | String | done | 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />\`send\` 右下角按钮为“发送”；<br />\`search\` 右下角按钮为“搜索”；<br />\`next\` 右下角按钮为“下一个”；<br />\`go\` 右下角按钮为“前往”；<br />\`done\` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)。可选项：send/search/next/go/done | N
cursor | Number | -1 | 必需。指定 focus 时的光标位置 | Y
cursorColor | String | #0052d9 | 光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制 | N
cursorColor | String | #0052d9 | 光标颜色 | N
cursorSpacing | Number | 0 | 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | N
disabled | Boolean | undefined | 是否禁用输入框 | N
enterkeyhint | String | - | 用于控制回车键样式，此 API 仅在部分浏览器支持，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)。可选项：enter/done/go/next/previous/search/send | N
errorMessage | String | - | 已废弃。错误提示文本，值为空不显示（废弃属性，如果需要，请更为使用 status 和 tips） | N
extra | TNode | - | 右侧额外内容。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
focus | Boolean | false | 获取焦点 | N
format | Function | - | 指定输入框展示值的格式。注意 \`type=number\` 时请勿使用，此功能建议更为使用 \`InputNumber\` 组件。TS 类型：\`InputFormatType\` \`type InputFormatType = (value: string) => string\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/input/type.ts) | N
format | Function | - | 指定输入框展示值的格式。TS 类型：\`InputFormatType\` \`type InputFormatType = (value: InputValue) => string\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/input/type.ts) | N
holdKeyboard | Boolean | false | focus时，点击页面的时候不收起键盘 | N
inputClass | String / Object / Array | - | t-input 同级类名，示例：'name1 name2 name3' 或 \`['name1', 'name2']\` 或 \`[{ 'name1': true }]\`。TS 类型：\`ClassName\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | String / TNode | - | 左侧文本。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
layout | String | horizontal | 标题输入框布局方式。可选项：vertical/horizontal | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。\`maxcharacter\` 和 \`maxlength\` 二选一使用 | N
maxlength | String / Number | - | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为空，不限制输入长度。\`maxcharacter\` 和 \`maxlength\` 二选一使用 | N
maxlength | Number | -1 | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。\`maxcharacter\` 和 \`maxlength\` 二选一使用 | N
name | String | - | 名称 | N
password | Boolean | false | 已废弃。是否是密码类型（已废弃，请更为使用 type 指定输入框类型） | N
placeholder | String | undefined | 占位符 | N
placeholderClass | String | input-placeholder | 指定 placeholder 的样式类 | N
placeholderStyle | String | - | 必需。指定 placeholder 的样式 | Y
prefixIcon | TNode | - | 组件前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
prefixIcon | String / Object / TNode | - | 组件前置图标。值为字符串表示图标名称，值为 \`Object\` 类型，表示透传至 \`icon\`。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
readonly | Boolean | undefined | 只读状态 | N
safePasswordCertPath | String | - | 安全键盘加密公钥的路径，只支持包内路径 | N
safePasswordCustomHash | String | - | 安全键盘计算 hash 的算法表达式，如 \`md5(sha1('foo' + sha256(sm3(password + 'bar'))))\` | N
safePasswordLength | Number | - | 安全键盘输入密码长度 | N
safePasswordNonce | String | - | 安全键盘加密盐值 | N
safePasswordSalt | String | - | 安全键盘计算 hash 盐值，若指定custom-hash 则无效 | N
safePasswordTimeStamp | Number | - | 安全键盘加密时间戳 | N
selectionEnd | Number | -1 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | N
selectionStart | Number | -1 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | N
showClearIconOnEmpty | Boolean | false | 输入框内容为空时，悬浮状态是否显示清空按钮，默认不显示 | N
showLimitNumber | Boolean | false | 是否在输入框右侧显示字数统计 | N
size | String | medium | 输入框尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
size | String | medium | 已废弃。输入框尺寸。可选项：small/medium。TS 类型：\`'medium' \| 'small'\` | N
size | String | small | 已废弃。输入框尺寸。可选项：small/medium。TS 类型：\`'medium' \| 'small'\` | N
spellCheck | Boolean | false | 是否开启拼写检查，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/spellcheck) | N
spellcheck | Boolean | false | 是否开启拼写检查，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/spellcheck) | N
status | String | default | 输入框状态。可选项：default/success/warning/error | N
suffix | String / TNode | - | 后置图标前的后置内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | TNode | - | 组件后置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | String / Object / TNode | - | 后置文本内容。值为字符串则表示图标名称，值为 \`Object\` 类型，表示透传至 \`icon\`。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
tips | String / TNode | - | 输入框下方提示文本，会根据不同的 \`status\` 呈现不同的样式。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
type | String | text | 输入框类型。\`type=number\` 仅支持最基础的数字输入功能，更多功能建议使用 \`InputNumber\` 组件。可选项：text/number/url/tel/password/search/submit/hidden | N
type | String | text | 输入框类型。可选项：text/number/idcard/digit/safe-password/password/nickname | N
type | String | text | 输入框类型。可选项：text/number/url/tel/password/search/submit/hidden | N
value | String / Number | - | 输入框的值。TS 类型：\`T\` \`type InputValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/input/type.ts) | N
defaultValue | String / Number | - | 输入框的值。非受控属性。TS 类型：\`T\` \`type InputValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/input/type.ts) | N
value | String / Number | - | 输入框的值。TS 类型：\`InputValue\` \`type InputValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/input/type.ts) | N
defaultValue | String / Number | - | 输入框的值。非受控属性。TS 类型：\`InputValue\` \`type InputValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/input/type.ts) | N
value | String / Number | - | 输入框的值。TS 类型：\`InputValue\` \`type InputValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/input/type.ts) | N
defaultValue | String / Number | - | 输入框的值。非受控属性。TS 类型：\`InputValue\` \`type InputValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/input/type.ts) | N
onBlur | Function |  | TS 类型：\`(value: T, context: { e: FocusEvent }) => void\`<br/>失去焦点时触发 | N
onBlur | Function |  | TS 类型：\`(value: InputValue) => void\`<br/>失去焦点时触发 | N
onBlur | Function |  | TS 类型：\`(value: InputValue, context: { e: FocusEvent }) => void\`<br/>失去焦点时触发 | N
onChange | Function |  | TS 类型：\`(value: T, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' }) => void\`<br/>输入框值发生变化时触发。参数 \`trigger=initial\` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 \`maxlength\` 限制 | N
onChange | Function |  | TS 类型：\`(value: InputValue, cursor: number, keyCode: number) => void\`<br/>输入框值发生变化时触发；cursor 为光标位置； | N
onChange | Function |  | TS 类型：\`(value: InputValue, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' }) => void\`<br/>输入框值发生变化时触发。\`trigger=initial\` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 \`maxlength\` 限制 | N
onClear | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>清空按钮点击时触发 | N
onClear | Function |  | TS 类型：\`() => void\`<br/>清空按钮点击时触发 | N
onClear | Function |  | TS 类型：\`(context: { e: TouchEvent }) => void\`<br/>清空按钮点击时触发 | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击组件时触发 | N
onClick | Function |  | TS 类型：\`(trigger: InputTrigger) => void\`<br/>点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts)。<br/>\`type InputTrigger = 'suffix' \| 'suffix-icon';\`<br/> | N
onCompositionend | Function |  | TS 类型：\`(value: string, context: { e: CompositionEvent }) => void\`<br/>中文输入结束时触发 | N
onCompositionstart | Function |  | TS 类型：\`(value: string, context: { e: CompositionEvent }) => void\`<br/>中文输入开始时触发 | N
onEnter | Function |  | TS 类型：\`(value: T, context: { e: KeyboardEvent }) => void\`<br/>回车键按下时触发 | N
onEnter | Function |  | TS 类型：\`(value: InputValue) => void\`<br/>回车键按下时触发 | N
onFocus | Function |  | TS 类型：\`(value: T, context: { e: FocusEvent }) => void\`<br/>获得焦点时触发 | N
onFocus | Function |  | TS 类型：\`(value: InputValue) => void\`<br/>获得焦点时触发 | N
onFocus | Function |  | TS 类型：\`(value: InputValue, context: { e: FocusEvent }) => void\`<br/>获得焦点时触发 | N
onKeyboardheightchange | Function |  | TS 类型：\`(height: number, duration: number) => void\`<br/>键盘高度发生变化的时候触发此事件 | N
onKeydown | Function |  | TS 类型：\`(value: T, context: { e: KeyboardEvent }) => void\`<br/>键盘按下时触发 | N
onKeypress | Function |  | TS 类型：\`(value: T, context: { e: KeyboardEvent }) => void\`<br/>按下字符键时触发（keydown -> keypress -> keyup） | N
onKeyup | Function |  | TS 类型：\`(value: T, context: { e: KeyboardEvent }) => void\`<br/>释放键盘时触发 | N
onMouseenter | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>进入输入框时触发 | N
onMouseleave | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>离开输入框时触发 | N
onNicknamereview | Function |  | TS 类型：\`(pass: boolean, timeout: boolean) => void\`<br/>用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效 | N
onPaste | Function |  | TS 类型：\`(context: { e: ClipboardEvent; pasteValue: string }) => void\`<br/>粘贴事件，\`pasteValue\` 表示粘贴板的内容 | N
onValidate | Function |  | TS 类型：\`(context: { error?: 'exceed-maximum' \| 'below-minimum' }) => void\`<br/>字数超出限制时触发 | N
onWheel | Function |  | TS 类型：\`(context: { e: WheelEvent }) => void\`<br/>输入框中滚动鼠标时触发 | N

### Input Events

名称 | 参数 | 描述
-- | -- | --
blur | \`(value: T, context: { e: FocusEvent })\` | 失去焦点时触发
blur | \`(value: InputValue)\` | 失去焦点时触发
blur | \`(value: InputValue, context: { e: FocusEvent })\` | 失去焦点时触发
change | \`(value: T, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' })\` | 输入框值发生变化时触发。参数 \`trigger=initial\` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 \`maxlength\` 限制
change | \`(value: InputValue, cursor: number, keyCode: number)\` | 输入框值发生变化时触发；cursor 为光标位置；
change | \`(value: InputValue, context?: { e?: InputEvent \| MouseEvent \| CompositionEvent; trigger: 'input' \| 'initial' \| 'clear' })\` | 输入框值发生变化时触发。\`trigger=initial\` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 \`maxlength\` 限制
clear | \`(context: { e: MouseEvent })\` | 清空按钮点击时触发
clear | \- | 清空按钮点击时触发
clear | \`(context: { e: TouchEvent })\` | 清空按钮点击时触发
click | \`(context: { e: MouseEvent })\` | 点击组件时触发
click | \`(trigger: InputTrigger)\` | 点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts)。<br/>\`type InputTrigger = 'suffix' \| 'suffix-icon';\`<br/>
compositionend | \`(value: string, context: { e: CompositionEvent })\` | 中文输入结束时触发
compositionstart | \`(value: string, context: { e: CompositionEvent })\` | 中文输入开始时触发
enter | \`(value: T, context: { e: KeyboardEvent })\` | 回车键按下时触发
enter | \`(value: InputValue)\` | 回车键按下时触发
focus | \`(value: T, context: { e: FocusEvent })\` | 获得焦点时触发
focus | \`(value: InputValue)\` | 获得焦点时触发
focus | \`(value: InputValue, context: { e: FocusEvent })\` | 获得焦点时触发
keyboardheightchange | \`(height: number, duration: number)\` | 键盘高度发生变化的时候触发此事件
keydown | \`(value: T, context: { e: KeyboardEvent })\` | 键盘按下时触发
keypress | \`(value: T, context: { e: KeyboardEvent })\` | 按下字符键时触发（keydown -> keypress -> keyup）
keyup | \`(value: T, context: { e: KeyboardEvent })\` | 释放键盘时触发
mouseenter | \`(context: { e: MouseEvent })\` | 进入输入框时触发
mouseleave | \`(context: { e: MouseEvent })\` | 离开输入框时触发
nicknamereview | \`(pass: boolean, timeout: boolean)\` | 用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效
paste | \`(context: { e: ClipboardEvent; pasteValue: string })\` | 粘贴事件，\`pasteValue\` 表示粘贴板的内容
validate | \`(context: { error?: 'exceed-maximum' \| 'below-minimum' })\` | 字数超出限制时触发
wheel | \`(context: { e: WheelEvent })\` | 输入框中滚动鼠标时触发

### Input Slots

名称 | 描述
-- | --
prefix-icon | 组件前置图标
suffix-icon | 后置文本图标
tips | 输入框下方提示内容

### Input External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-clearable | 清空按钮样式类
t-class-input | 输入框样式类
t-class-label | 标签样式类
t-class-prefix-icon | 前置图标样式类
t-class-suffix | 后置样式类
t-class-suffix-icon | 后置图标样式类
t-class-tips | 提示样式类


### InputGroup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
separate | Boolean | - | 多个输入框之间是否需要间隔 | N

`;
module.exports = {
  props,
};

