:: BASE_DOC ::

## API

### Search Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
action | String / Slot | '' | 自定义右侧操作按钮文字。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | N
always-embed | Boolean | false | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | N
center | Boolean | false | 是否居中 | N
clearable | Boolean | true | 是否启用清除控件 | N
confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起 | N
confirm-type | String | search | 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)。可选项：send/search/next/go/done | N
cursor | Number | - | 必需。指定 focus 时的光标位置 | Y
cursor-spacing | Number | 0 | 搜索框聚焦时底部与键盘的距离 | N
disabled | Boolean | false | 是否禁用 | N
focus | Boolean | false | 是否聚焦 | N
hold-keyboard | Boolean | false | focus时，点击页面的时候不收起键盘 | N
label | String | '' | 已废弃。左侧文本 | N
left-icon | String / Slot | 'search' | 左侧图标。如果需要使用 `Slot` 进行自定义，必须将该值设置为假值。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
maxlength | Number | -1 | 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 | N
placeholder | String | '' | 占位符 | N
placeholder-class | String | input-placeholder | 指定 placeholder 的样式类 | N
placeholder-style | String | - | 必需。指定 placeholder 的样式 | Y
result-list | Array | [] | 预览结果列表。TS 类型：`Array<string>` | N
right-icon | String / Slot | 'close-circle-filled' | 已废弃。右侧图标。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
selection-end | Number | -1 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | N
selection-start | Number | -1 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | N
shape | String | 'square' | 搜索框形状。可选项：square/round | N
type | String | 'text' | 拉起键盘的类型。可选项：text/number/idcard/digit/nickname | N
value | String | '' | 值 | N

### Search Events

名称 | 参数 | 描述
-- | -- | --
action-click | `({})` | 点击右侧操作按钮文字时触发
blur | `({ value: string })` | 失去焦点时触发
change | `({ value: string })` | 值发生变化时触发
clear | `({ value: string })` | 点击清除时触发
focus | `({ value: string })` | 聚焦时触发
submit | `({ value: string })` | 提交时触发
### Search External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-action | 操作按钮样式类
t-class-clear | 右侧图标样式类
t-class-input | 输入框样式类
t-class-input-container | 输入框容器样式类
t-class-left | 左侧图标样式类
