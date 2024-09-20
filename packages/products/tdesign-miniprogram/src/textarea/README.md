:: BASE_DOC ::

## API

### Textarea Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
adjust-position | Boolean | true | 键盘弹起时，是否自动上推页面 | N
autofocus | Boolean | false | 自动聚焦，拉起键盘 | N
autosize | Boolean / Object | false | 是否自动增高，值为 true 时，style.height 不生效。支持传入对象，如 { maxHeight: 120, minHeight: 20 }。TS 类型：`boolean \| { maxHeight?: number, minHeight?: number }` | N
bordered | Boolean | false | 是否显示外边框 | N
confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起点 | N
confirm-type | String | return | 设置键盘右下角按钮的文字，仅在 type='text'时生效。可选项：return/send/search/next/go/done。TS 类型：`'return' \| 'send' \| 'search' \| 'next' \| 'go' \| 'done'` | N
cursor | Number | -1 | 指定 focus 时的光标位置 | N
cursor-spacing | Number | 0 | 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离 | N
disable-default-padding | Boolean | false | 是否去掉 iOS 下的默认内边距 | N
disabled | Boolean | undefined | 是否禁用文本框 | N
fixed | Boolean | false | 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true | N
focus | Boolean | false | 自动聚焦 | N
hold-keyboard | Boolean | false | focus时，点击页面的时候不收起键盘 | N
indicator | Boolean | false | 显示文本计数器，如 0/140。当 `maxlength < 0 && maxcharacter < 0` 成立时， indicator无效 | N
label | String / Slot | - | 左侧文本。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 | N
maxlength | Number | -1 | 用户最多可以输入的字符个数，值为 -1 的时候不限制最大长度 | N
placeholder | String | undefined | 占位符 | N
placeholder-style | String | - | 指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight | N
selection-end | Number | -1 | 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | N
selection-start | Number | -1 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | N
show-confirm-bar | Boolean | true | 是否显示键盘上方带有”完成“按钮那一栏 | N
value | String / Number | - | 文本框值。TS 类型：`TextareaValue` `type TextareaValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/textarea/type.ts) | N
default-value | String / Number | undefined | 文本框值。非受控属性。TS 类型：`TextareaValue` `type TextareaValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/textarea/type.ts) | N

### Textarea Events

名称 | 参数 | 描述
-- | -- | --
blur | `(value: TextareaValue, cursor: number)` | 失去焦点时触发
change | `(value: TextareaValue, cursor: number)` | 输入内容变化时触发
enter | `(value: TextareaValue)` | 点击完成时触发
focus | `(value: TextareaValue)` | 获得焦点时触发
keyboardheightchange | `(height: number, duration: number)` | 键盘高度发生变化的时候触发此事件
line-change | `(value: TextareaValue)` | 行高发生变化时触发

### Textarea External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-indicator | 计数器样式类
t-class-label | 左侧文本样式类
t-class-textarea | 占位符样式类
