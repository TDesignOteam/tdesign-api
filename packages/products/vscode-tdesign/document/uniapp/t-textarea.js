
const props = `

### Textarea Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
adjustPosition | Boolean | true | 键盘弹起时，是否自动上推页面 | N
allowInputOverMax | Boolean | false | 超出 \`maxlength\` 或 \`maxcharacter\` 之后是否还允许输入 | N
autofocus | Boolean | false | 自动聚焦，拉起键盘 | N
autosize | Boolean / Object | false | 高度自动撑开。 autosize = true 表示组件高度自动撑开，同时，依旧允许手动拖高度。如果设置了 autosize.maxRows 或者 autosize.minRows 则不允许手动调整高度。TS 类型：\`boolean \| { minRows?: number; maxRows?: number }\` | N
autosize | Boolean / Object | false | 是否自动增高，值为 true 时，style.height 不生效。支持传入对象，如 { maxHeight: 120, minHeight: 20 }。TS 类型：\`boolean \| { maxHeight?: number, minHeight?: number }\` | N
bordered | Boolean | false | 是否显示外边框 | N
confirmHold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起点 | N
confirmType | String | return | 设置键盘右下角按钮的文字，仅在 type='text'时生效。可选项：return/send/search/next/go/done。TS 类型：\`'return' \| 'send' \| 'search' \| 'next' \| 'go' \| 'done'\` | N
cursor | Number | -1 | 指定 focus 时的光标位置 | N
cursorColor | String | #0052d9 | 【试验性】光标颜色，仅在 Skyline 下有效 | N
cursorColor | String | #0052d9 | 光标颜色 | N
cursorSpacing | Number | 0 | 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离 | N
disableDefaultPadding | Boolean | false | 是否去掉 iOS 下的默认内边距 | N
disabled | Boolean | undefined | 是否禁用文本框 | N
fixed | Boolean | false | 如果 textarea 是在一个 \`position:fixed\` 的区域，需要显式指定属性 fixed 为 true | N
focus | Boolean | false | 自动聚焦 | N
holdKeyboard | Boolean | false | focus时，点击页面的时候不收起键盘 | N
indicator | Boolean | false | 显示文本计数器，如 0/140。当 \`maxlength < 0 && maxcharacter < 0\` 成立时， indicator无效 | N
label | String / TNode | - | 左侧文本。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
layout | String | horizontal | 标题输入框布局方式。可选项：vertical/horizontal | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 | N
maxlength | String / Number | - | 用户最多可以输入的字符个数。TS 类型：\`string \| number\` | N
maxlength | Number | -1 | 用户最多可以输入的字符个数，值为 -1 的时候不限制最大长度 | N
name | String | - | 名称，HTML 元素原生属性 | N
placeholder | String | undefined | 占位符 | N
placeholderClass | String | textarea-placeholder | 指定 placeholder 的样式类，目前仅支持color,font-size和font-weight | N
placeholderStyle | String | - | 指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight | N
readonly | Boolean | undefined | 只读状态 | N
selectionEnd | Number | -1 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | N
selectionStart | Number | -1 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | N
showConfirmBar | Boolean | true | 是否显示键盘上方带有”完成“按钮那一栏 | N
status | String | default | 文本框状态。可选项：default/success/warning/error | N
tips | String / TNode | - | 输入框下方提示文本，会根据不同的 \`status\` 呈现不同的样式。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
value | String / Number | - | 文本框值。TS 类型：\`TextareaValue\` \`type TextareaValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/textarea/type.ts) | N
defaultValue | String / Number | - | 文本框值。非受控属性。TS 类型：\`TextareaValue\` \`type TextareaValue = string \| number\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/textarea/type.ts) | N
onBlur | Function |  | TS 类型：\`(value: TextareaValue, context: { e: FocusEvent }) => void\`<br/>失去焦点时触发 | N
onBlur | Function |  | TS 类型：\`(value: TextareaValue, cursor: number) => void\`<br/>失去焦点时触发 | N
onChange | Function |  | TS 类型：\`(value: TextareaValue, context?: { e?: InputEvent }) => void\`<br/>输入内容变化时触发 | N
onChange | Function |  | TS 类型：\`(value: TextareaValue, cursor: number) => void\`<br/>输入内容变化时触发 | N
onCompositionend | Function |  | TS 类型：\`(value: string, context: { e: CompositionEvent }) => void\`<br/>中文输入结束时触发 | N
onCompositionstart | Function |  | TS 类型：\`(value: string, context: { e: CompositionEvent }) => void\`<br/>中文输入开始时触发 | N
onEnter | Function |  | TS 类型：\`(value: TextareaValue) => void\`<br/>点击完成时触发 | N
onFocus | Function |  | TS 类型：\`(value: TextareaValue, context : { e: FocusEvent }) => void\`<br/>获得焦点时触发 | N
onFocus | Function |  | TS 类型：\`(value: TextareaValue) => void\`<br/>获得焦点时触发 | N
onKeyboardheightchange | Function |  | TS 类型：\`(height: number, duration: number) => void\`<br/>键盘高度发生变化的时候触发此事件 | N
onKeydown | Function |  | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\`<br/>键盘按下时触发 | N
onKeypress | Function |  | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\`<br/>按下字符键时触发（keydown -> keypress -> keyup） | N
onKeyup | Function |  | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\`<br/>释放键盘时触发 | N
onLineChange | Function |  | TS 类型：\`(value: TextareaValue) => void\`<br/>行高发生变化时触发 | N
onValidate | Function |  | TS 类型：\`(context: { error?: 'exceed-maximum' \| 'below-minimum' }) => void\`<br/>字数超出限制时触发 | N

### Textarea Events

名称 | 参数 | 描述
-- | -- | --
blur | \`(value: TextareaValue, context: { e: FocusEvent })\` | 失去焦点时触发
blur | \`(value: TextareaValue, cursor: number)\` | 失去焦点时触发
change | \`(value: TextareaValue, context?: { e?: InputEvent })\` | 输入内容变化时触发
change | \`(value: TextareaValue, cursor: number)\` | 输入内容变化时触发
compositionend | \`(value: string, context: { e: CompositionEvent })\` | 中文输入结束时触发
compositionstart | \`(value: string, context: { e: CompositionEvent })\` | 中文输入开始时触发
enter | \`(value: TextareaValue)\` | 点击完成时触发
focus | \`(value: TextareaValue, context : { e: FocusEvent })\` | 获得焦点时触发
focus | \`(value: TextareaValue)\` | 获得焦点时触发
keyboardheightchange | \`(height: number, duration: number)\` | 键盘高度发生变化的时候触发此事件
keydown | \`(value: TextareaValue, context: { e: KeyboardEvent })\` | 键盘按下时触发
keypress | \`(value: TextareaValue, context: { e: KeyboardEvent })\` | 按下字符键时触发（keydown -> keypress -> keyup）
keyup | \`(value: TextareaValue, context: { e: KeyboardEvent })\` | 释放键盘时触发
line-change | \`(value: TextareaValue)\` | 行高发生变化时触发
validate | \`(context: { error?: 'exceed-maximum' \| 'below-minimum' })\` | 字数超出限制时触发

### Textarea External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-indicator | 计数器样式类
t-class-label | 左侧文本样式类
t-class-textarea | 多行文本框样式类

`;
module.exports = {
  props,
};

