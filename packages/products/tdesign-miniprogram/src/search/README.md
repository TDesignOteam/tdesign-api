:: BASE_DOC ::

## API
### Search Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
action | String / Slot | '' | 用于自定义搜索框右侧内容，如：“取消” | N
autocomplete-options | Array | - | 【开发中】联想词列表，如果不存在或长度为 0 则不显示联想框。可以使用函数 `label` 自定义联想词为任意内容；也可使用插槽 `option` 定义联想词内容，插槽参数为 `{ option: AutocompleteOption; index: number }`。如果 `group` 值为 `true` 则表示当前项为分组标题。TS 类型：`Array<AutocompleteOption>` `type AutocompleteOption = string \| { label: string; group?: boolean }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/search/type.ts) | N
autofocus | Boolean | false | 是否默认聚焦 | N
center | Boolean | false | 是否居中 | N
clearable | Boolean | true | 是否可清空 | N
disabled | Boolean | - | 禁用状态 | N
external-classes | Array | - | 组件外部样式类名，分别用于设置组件外层类名、输入框类名、输入框容器类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型。`['t-class', 't-class-input', 't-class-input-container', 't-class-cancel','t-class-left','t-class-right']` | N
filter | Function | - | 自定义过滤方法，用于对现有数据进行搜索过滤，判断是否过滤某一项数据。其中参数 `keyword` 指当前的搜索词，参数 `option` 指每一项联想词，函数返回 true 则显示当前联想词，函数返回 `false` 则隐藏当前联想词。TS 类型：`(keyword: string, option: any) => boolean \| Promise<boolean>` | N
focus | Boolean | false | 是否聚焦，同小程序官方属性 | N
label | String / Slot | '' | 搜索框内部左侧内容，位于 `prefixIcon` 左侧 | N
placeholder | String | '' | 占位符 | N
prefix-icon | String / Slot | 'search' | 前置图标，默认为搜索图标。值为 `null` 时则不显示 | N
readonly | Boolean | false | 只读状态 | N
shape | String | 'square' | 搜索框形状。可选项：square/round | N
style | String | - | 自定义组件样式 | N
suffix | String / Slot | '' | 搜索框内部右侧内容，位于 `suffixIcon` 右侧 | N
suffix-icon | String / Slot | - | 后置图标 | N
value | String | - | 值，搜索关键词 | N
default-value | String | undefined | 值，搜索关键词。非受控属性 | N

### Search Events

名称 | 参数 | 描述
-- | -- | --
action-click | - | 点击搜索框右侧操作内容时触发
blur | `(detail: { value: string })` | 失去焦点时触发
change | `({ value: string; trigger: 'input-change' \| 'option-click' })` | 搜索关键词发生变化时触发，可能场景有：搜索框内容发生变化、点击联想词
clear | - | 点击清除时触发
focus | `(detail: { value: string })` | 获得焦点时触发
search | `(context?: { value: string; trigger: 'submit' \| 'option-click' \| 'clear'; e?: InputEvent \| MouseEvent })` | 搜索触发，包含：手机键盘提交健、联想关键词点击、清空按钮点击等
