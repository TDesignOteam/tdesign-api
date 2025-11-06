
const props = `

### Message Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
action | String / TNode | - | 已废弃。操作。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
align | String | left | 文本对齐方式。可选项：left/center。TS 类型：\`MessageAlignType\` \`type MessageAlignType = 'left' \| 'center'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts) | N
closeBtn | String / Boolean / TNode | undefined | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮。TS 类型：\`string \| boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closeBtn | String / Boolean / Object / TNode | false | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：'user'，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件。TS 类型：\`string \| boolean \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | - | 用于自定义消息弹出内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
duration | Number | 3000 | 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器 | N
gap | String / Number / Boolean | 12 | 两条 \`message\` 之间的间距 | N
icon | Boolean / TNode | true | 用于自定义消息前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
icon | String / Boolean / Object / TNode | true | 消息提醒前面的图标，可以自定义。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：'info'，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件。TS 类型：\`string \| boolean \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
link | String / Object / TNode | - | 链接名称。值为字符串表示链接名称，值为 \`Object\` 类型，表示透传至 \`Link\`。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：\`boolean \| MessageMarquee\` \`interface MessageMarquee { speed?: number; loop?: number; delay?: number }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts) | N
offset | Array | - | 相对于 placement 的偏移量，默认单位 rpx。示例：[-10, 20] 或 ['10rpx', '8rpx']。TS 类型：\`Array<string \| number>\` | N
offset | Array | - | 相对于 placement 的偏移量，示例：[-10, 20] 或 ['10px', '8px']。TS 类型：\`Array<string \| number>\` | N
single | Boolean | true | 是否保持仅显示一条信息 | N
theme | String | info | 消息组件风格。可选项：info/success/warning/error/question/loading。TS 类型：\`MessageThemeList\` \`type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error' \| 'question' \| 'loading'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts) | N
theme | String | info | 消息组件风格。可选项：info/success/warning/error。TS 类型：\`MessageThemeList\` \`type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts) | N
visible | Boolean | false | 是否显示，隐藏时默认销毁组件 | N
defaultVisible | Boolean | false | 是否显示，隐藏时默认销毁组件。非受控属性 | N
zIndex | Number | - | 元素层级，样式默认为 5000 | N
zIndex | Number | 15000 | 元素层级，样式默认为 15000 | N
onActionBtnClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>已废弃。当操作按钮存在时，用户点击操作按钮时触发 | N
onChange | Function |  | TS 类型：\`(visible: boolean) => void\`<br/>已废弃。可见性变化时触发 | N
onClose | Function |  | TS 类型：\`(context: { trigger: 'close-click' \| 'duration-end', e?: MouseEvent }) => void\`<br/>关闭消息时触发 | N
onClose | Function |  | TS 类型：\`(context: { trigger: 'close-click' \| 'duration-end', e?: MouseEvent }) => void\`<br/>已废弃。关闭消息时触发。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
onCloseBtnClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>当关闭按钮存在时，用户点击关闭按钮触发 | N
onClosed | Function |  | TS 类型：\`() => void\`<br/>已废弃。关闭消息并且动画结束后触发 | N
onDurationEnd | Function |  | TS 类型：\`() => void\`<br/>计时结束后触发 | N
onLinkClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>当\`link\`链接存在时，点击链接文本时触发 | N
onOpen | Function |  | TS 类型：\`() => void\`<br/>已废弃。展示Message时触发 | N
onOpened | Function |  | TS 类型：\`() => void\`<br/>已废弃。展示Message时并且动画结束后触发 | N

### Message Events

名称 | 参数 | 描述
-- | -- | --
action-btn-click | \`(context: { e: MouseEvent })\` | 已废弃。当操作按钮存在时，用户点击操作按钮时触发
change | \`(visible: boolean)\` | 已废弃。可见性变化时触发
close | \`(context: { trigger: 'close-click' \| 'duration-end', e?: MouseEvent })\` | 关闭消息时触发
close | \`(context: { trigger: 'close-click' \| 'duration-end', e?: MouseEvent })\` | 已废弃。关闭消息时触发。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)
close-btn-click | \`(context: { e: MouseEvent })\` | 当关闭按钮存在时，用户点击关闭按钮触发
closed | \- | 已废弃。关闭消息并且动画结束后触发
duration-end | \- | 计时结束后触发
link-click | \`(context: { e: MouseEvent })\` | 当\`link\`链接存在时，点击链接文本时触发
open | \- | 已废弃。展示Message时触发
opened | \- | 已废弃。展示Message时并且动画结束后触发

### Message Slots

名称 | 描述
-- | --
- | 默认插槽，作用同 \`content\` 插槽
close-btn | 关闭按钮
content | 自定义消息弹出内容
icon | 消息提醒前面的图标
link | 链接名称

### Message External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-close-btn | 关闭按钮样式类
t-class-content | 内容样式类
t-class-icon | 图标样式类
t-class-link | 链接样式类

### MessageOptions

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
attach | String / Function | 'body' | 指定弹框挂载的父节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
className | String | - | 类名 | N
offset | Array | - | 相对于 placement 的偏移量，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：\`Array<string \| number>\` | N
placement | String | top | 弹出消息位置。可选项：center/top/left/right/bottom/top-left/top-right/bottom-left/bottom-right。TS 类型：\`MessagePlacementList\` \`type MessagePlacementList = 'center' \| 'top' \| 'left' \| 'right' \| 'bottom' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts) | N
style | Object | - | 内敛样式。TS 类型：\`CSSProperties\` | N
zIndex | Number | 5000 | 消息层级 | N
\`MessageProps\` | \- | - | 继承 \`MessageProps\` 中的全部属性 | N


### $Message Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
theme | String | - | 必需。消息类型。TS 类型：\`MessageThemeList\`
message | String / Object | - | 必需。消息内容。TS 类型：\`string \| TNode \| MessageOptions\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)
duration | Number | 3000 | 消息显示时长，单位：毫秒。值为 0 表示永久显示
context | \- | - | 要继承的应用的上下文。。TS 类型：\`AppContext\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)


### $Message.info Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
message | String / Object | - | 必需。消息内容。TS 类型：\`string \| TNode \| MessageInfoOptions\` \`type MessageInfoOptions = Omit<MessageOptions, 'theme'>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/message/type.ts)
duration | Number | 3000 | 消息显示时长，单位：毫秒。值为 0 表示永久显示
context | \- | - | 要继承的应用的上下文。。TS 类型：\`AppContext\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)


### $Message.error Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
message | String / Object | - | 必需。消息内容。TS 类型：\`string \| TNode \| MessageInfoOptions\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)
duration | Number | 3000 | 消息显示时长，单位：毫秒。值为 0 表示永久显示
context | \- | - | 要继承的应用的上下文。。TS 类型：\`AppContext\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)


### $Message.warning Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
message | String / Object | - | 必需。消息内容。TS 类型：\`string \| TNode \| MessageInfoOptions\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)
duration | Number | 3000 | 消息显示时长，单位：毫秒。值为 0 表示永久显示
context | \- | - | 要继承的应用的上下文。。TS 类型：\`AppContext\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)


### $Message.success Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
message | String / Object | - | 必需。消息内容。TS 类型：\`string \| TNode \| MessageInfoOptions\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)
duration | Number | 3000 | 消息显示时长，单位：毫秒。值为 0 表示永久显示
context | \- | - | 要继承的应用的上下文。。TS 类型：\`AppContext\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)


### $Message.loading Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
message | String / Object | - | 必需。消息提醒内容。TS 类型：\`string \| TNode \| MessageInfoOptions\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)
duration | Number | 3000 | 消息显示时长，单位：毫秒。值为 0 表示永久显示
context | \- | - | 要继承的应用的上下文。。TS 类型：\`AppContext\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)


### $Message.question Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
message | String / Object | - | 必需。消息内容。TS 类型：\`string \| TNode \| MessageInfoOptions\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)
duration | Number | 3000 | 消息显示时长，单位：毫秒。值为 0 表示永久显示
context | \- | - | 要继承的应用的上下文。。TS 类型：\`AppContext\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)


### $Message.close Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
options | Object | - | 必需。该插件参数为 $Message.info() 等插件执行后的返回值。示例：\`const msg = $Message.info({}); $Message.close(msg)\`。TS 类型：\`Promise<MessageInstance>\`


### $Message.closeAll Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
\- | \- | - | \-


### $Message.config Props

参数名称 | 参数类型 | 参数默认值 | 参数描述
-- | -- | -- | --
message | Object | - | 必需。全局提醒插件全局配置。TS 类型：\`MessageOptions\`

`;
module.exports = {
  props,
};

