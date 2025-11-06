
const props = `

### Search Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
action | String / TNode | '' | 自定义右侧操作按钮文字。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
action | String / TNode | '' | 自定义右侧操作按钮文字，如：“取消”。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
adjustPosition | Boolean | true | 键盘弹起时，是否自动上推页面 | N
alwaysEmbed | Boolean | false | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | N
autoWidth | Boolean | false | 搜索框宽度自适应 | N
autocompleteOptions | Array | - | 联想词列表，如果不存在或长度为 0 则不显示联想框。支持自定义联想词为任意内容。如果 \`group\` 值为 \`true\` 则表示当前项为分组标题。TS 类型：\`Array<AutocompleteOption>\` \`type AutocompleteOption = string \| { label: string \| TNode; group?: boolean }\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/search/type.ts) | N
autocompleteOptions | Array | - | 联想词列表，如果不存在或长度为 0 则不显示联想框。可以使用函数 \`label\` 自定义联想词为任意内容；也可使用插槽 \`option\` 定义联想词内容，插槽参数为 \`{ option: AutocompleteOption; index: number }\`。如果 \`group\` 值为 \`true\` 则表示当前项为分组标题。TS 类型：\`Array<AutocompleteOption>\` \`type AutocompleteOption = string \| { label: string \| TNode; group?: boolean }\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/search/type.ts) | N
autocompleteOptions | Array | - | 【开发中】联想词列表，如果不存在或长度为 0 则不显示联想框。可以使用函数 \`label\` 自定义联想词为任意内容；也可使用插槽 \`option\` 定义联想词内容，插槽参数为 \`{ option: AutocompleteOption; index: number }\`。如果 \`group\` 值为 \`true\` 则表示当前项为分组标题。TS 类型：\`Array<AutocompleteOption>\` \`type AutocompleteOption = string \| { label: string; group?: boolean }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/search/type.ts) | N
autocompleteOptions | Array | - | 【讨论中】联想词列表，如果不存在或长度为 0 则不显示联想框。可以使用函数 \`label\` 自定义联想词为任意内容；也可使用插槽 \`option\` 定义联想词内容，插槽参数为 \`{ option: AutocompleteOption; index: number }\`。如果 \`group\` 值为 \`true\` 则表示当前项为分组标题。TS 类型：\`Array<AutocompleteOption>\` \`type AutocompleteOption = string \| { label: string \| TNode; group?: boolean }\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/search/type.ts) | N
autofocus | Boolean | false | 是否默认聚焦 | N
borderless | Boolean | true | 无边框模式 | N
center | Boolean | false | 是否居中 | N
clearTrigger | String | always | 清空图标触发方式，仅在输入框有值时有效。可选项：always / focus | N
clearable | Boolean | true | 是否启用清除控件 | N
clearable | Boolean | true | 是否可清空 | N
confirmHold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起 | N
confirmType | String | search | 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />\`send\` 右下角按钮为“发送”；<br />\`search\` 右下角按钮为“搜索”；<br />\`next\` 右下角按钮为“下一个”；<br />\`go\` 右下角按钮为“前往”；<br />\`done\` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)。可选项：send/search/next/go/done | N
cursor | Number | -1 | 必需。指定 focus 时的光标位置 | Y
cursorSpacing | Number | 0 | 搜索框聚焦时底部与键盘的距离 | N
disabled | Boolean | false | 是否禁用 | N
disabled | Boolean | - | 禁用状态 | N
filter | Function | - | 自定义过滤方法，用于对现有数据进行搜索过滤，判断是否过滤某一项数据。其中参数 \`keyword\` 指当前的搜索词，参数 \`option\` 指每一项联想词，函数返回 true 则显示当前联想词，函数返回 \`false\` 则隐藏当前联想词。TS 类型：\`(keyword: string, option: any) => boolean \| Promise<boolean>\` | N
focus | Boolean | false | 是否聚焦 | N
holdKeyboard | Boolean | false | focus时，点击页面的时候不收起键盘 | N
inputProps | Object | - | 透传 Input 组件全部属性。TS 类型：\`InputProps\`，[Input API Documents](./input?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/search/type.ts) | N
label | String / TNode | '' | 搜索框内部左侧内容，位于 \`prefixIcon\` 左侧。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
label | String | '' | 已废弃。左侧文本 | N
leftIcon | String / TNode | 'search' | 左侧图标。如果需要使用 \`Slot\` 进行自定义，必须将该值设置为假值。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
leftIcon | String / TNode | 'search' | 左侧图标。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。\`maxcharacter\` 和 \`maxlength\` 二选一使用 | N
maxlength | Number | -1 | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。\`maxcharacter\` 和 \`maxlength\` 二选一使用 | N
maxlength | String / Number | - | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为空，不限制输入长度。\`maxcharacter\` 和 \`maxlength\` 二选一使用 | N
multiline | Boolean | false | 批量搜索模式，也叫多行搜索，输入框表现为类似 \`textarea\`，允许输入多行搜索内容 | N
placeholder | String | '' | 占位符 | N
placeholderClass | String | input-placeholder | 指定 placeholder 的样式类 | N
placeholderStyle | String | - | 必需。指定 placeholder 的样式 | Y
popupProps | Object | - | 透传 Popup 组件全部属性。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/search/type.ts) | N
prefixIcon | String / TNode | 'search' | 已废弃。前置图标，默认为搜索图标。值为 \`null\` 时则不显示。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
prefixIcon | TNode | - | 已废弃。前置图标，默认为搜索图标。值为 \`null\` 时则不显示。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
prefixIcon | TNode | - | 前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
readonly | Boolean | undefined | 只读状态 | N
resultList | Array | [] | 预览结果列表。TS 类型：\`Array<string>\` | N
rightIcon | String / TNode | 'close-circle-filled' | 已废弃。右侧图标。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
selectInputProps | Object | - | 基于 SelectInput 组件开发，透传组件全部属性。TS 类型：\`SelectInputProps\`，[SelectInput API Documents](./select-input?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/search/type.ts) | N
selectionEnd | Number | -1 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | N
selectionStart | Number | -1 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | N
shape | String | 'square' | 搜索框形状。可选项：square/round | N
suffix | String / TNode | '' | 搜索框内部右侧内容，位于 \`suffixIcon\` 右侧。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | TNode | - | 已废弃。后置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | TNode | - | 后置图标，默认为搜索图标。值为 \`null\` 时则不显示。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | String / TNode | - | 已废弃。后置图标。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
textareaProps | Object | - | 透传 Textarea 组件全部属性。TS 类型：\`TextareaProps\`，[Textarea API Documents](./textarea?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/search/type.ts) | N
type | String | 'text' | 拉起键盘的类型。可选项：text/number/idcard/digit/nickname | N
value | String | - | 值 | N
defaultValue | String | - | 值。非受控属性 | N
value | String | '' | 值 | N
value | String | - | 值，搜索关键词 | N
defaultValue | String | - | 值，搜索关键词。非受控属性 | N
onActionClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击搜索框右侧操作内容时触发 | N
onActionClick | Function |  | TS 类型：\`({}) => void\`<br/>点击右侧操作按钮文字时触发 | N
onBlur | Function |  | TS 类型：\`(context: { value: string; e: FocusEvent }) => void\`<br/>失去焦点时触发 | N
onBlur | Function |  | TS 类型：\`({ value: string }) => void\`<br/>失去焦点时触发 | N
onChange | Function |  | TS 类型：\`(value: string, context: { trigger: 'input-change' \| 'option-click'; e?: InputEvent \| MouseEvent }) => void\`<br/>搜索关键词发生变化时触发，可能场景有：搜索框内容发生变化、点击联想词 | N
onChange | Function |  | TS 类型：\`(value: string, context: { e?: InputEvent \| MouseEvent }) => void\`<br/>搜索关键词发生变化时触发，可能场景有：搜索框内容发生变化、点击联想词 | N
onChange | Function |  | TS 类型：\`({ value: string }) => void\`<br/>值发生变化时触发 | N
onClear | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击清除时触发 | N
onClear | Function |  | TS 类型：\`({ value: string }) => void\`<br/>点击清除时触发 | N
onEnter | Function |  | TS 类型：\`(context: { value: string; e: KeyboardEvent }) => void\`<br/>回车键按下时触发 | N
onFocus | Function |  | TS 类型：\`(context: { value: string; e: FocusEvent }) => void\`<br/>获得焦点时触发 | N
onFocus | Function |  | TS 类型：\`({ value: string }) => void\`<br/>聚焦时触发 | N
onSearch | Function |  | TS 类型：\`(context?: { value: string; trigger: 'enter' \| 'option-click' \| 'clear' \| 'suffix-click' \| 'prefix-click'; e?: InputEvent \| MouseEvent }) => void\`<br/>搜索触发，包含：Enter 键、联想关键词点击、清空按钮点击、搜索框后置内容点击（含后置图标）、搜索框前置内容点击（含前置图标）等 | N
onSearch | Function |  | TS 类型：\`(context?: { value: string; trigger: 'submit' \| 'option-click' \| 'clear'; e?: InputEvent \| MouseEvent }) => void\`<br/>【讨论中】搜索触发，包含：手机键盘提交健、联想关键词点击、清空按钮点击等 | N
onSearch | Function |  | TS 类型：\`(context?: { value: string; trigger: 'submit' \| 'option-click' \| 'clear'; e?: InputEvent \| MouseEvent }) => void\`<br/>搜索触发，包含：手机键盘提交健、联想关键词点击、清空按钮点击等 | N
onSubmit | Function |  | TS 类型：\`(context: { value: string; e: KeyboardEvent }) => void\`<br/>提交时触发，如：手机键盘提交按钮点击 | N
onSubmit | Function |  | TS 类型：\`({ value: string }) => void\`<br/>提交时触发 | N

### Search Events

名称 | 参数 | 描述
-- | -- | --
action-click | \`(context: { e: MouseEvent })\` | 点击搜索框右侧操作内容时触发
action-click | \`({})\` | 点击右侧操作按钮文字时触发
blur | \`(context: { value: string; e: FocusEvent })\` | 失去焦点时触发
blur | \`({ value: string })\` | 失去焦点时触发
change | \`(value: string, context: { trigger: 'input-change' \| 'option-click'; e?: InputEvent \| MouseEvent })\` | 搜索关键词发生变化时触发，可能场景有：搜索框内容发生变化、点击联想词
change | \`(value: string, context: { e?: InputEvent \| MouseEvent })\` | 搜索关键词发生变化时触发，可能场景有：搜索框内容发生变化、点击联想词
change | \`({ value: string })\` | 值发生变化时触发
clear | \`(context: { e: MouseEvent })\` | 点击清除时触发
clear | \`({ value: string })\` | 点击清除时触发
enter | \`(context: { value: string; e: KeyboardEvent })\` | 回车键按下时触发
focus | \`(context: { value: string; e: FocusEvent })\` | 获得焦点时触发
focus | \`({ value: string })\` | 聚焦时触发
search | \`(context?: { value: string; trigger: 'enter' \| 'option-click' \| 'clear' \| 'suffix-click' \| 'prefix-click'; e?: InputEvent \| MouseEvent })\` | 搜索触发，包含：Enter 键、联想关键词点击、清空按钮点击、搜索框后置内容点击（含后置图标）、搜索框前置内容点击（含前置图标）等
search | \`(context?: { value: string; trigger: 'submit' \| 'option-click' \| 'clear'; e?: InputEvent \| MouseEvent })\` | 【讨论中】搜索触发，包含：手机键盘提交健、联想关键词点击、清空按钮点击等
search | \`(context?: { value: string; trigger: 'submit' \| 'option-click' \| 'clear'; e?: InputEvent \| MouseEvent })\` | 搜索触发，包含：手机键盘提交健、联想关键词点击、清空按钮点击等
submit | \`(context: { value: string; e: KeyboardEvent })\` | 提交时触发，如：手机键盘提交按钮点击
submit | \`({ value: string })\` | 提交时触发

### Search Slots

名称 | 描述
-- | --
left-icon | 左侧图标

### Search External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-action | 操作按钮样式类
t-class-clear | 右侧图标样式类
t-class-input | 输入框样式类
t-class-input-container | 输入框容器样式类
t-class-left | 左侧图标样式类

`;
module.exports = {
  props,
};

