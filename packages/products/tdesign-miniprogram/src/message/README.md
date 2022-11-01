:: BASE_DOC ::

## API
### Message Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
action | String / Slot | - | 操作 | N
align | String | left | 文本对齐方式。可选项：left/center。TS 类型：`MessageAlignType` `type MessageAlignType = 'left' \| 'center'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
close-btn | String / Boolean / Slot | undefined | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮 | N
content | String / Slot | - | 用于自定义消息弹出内容 | N
duration | Number | 3000 | 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。 | N
external-classes | Array | - | 样式类名，分别用于设置 组件外层、消息内容、左侧图标、操作按钮、关闭按钮等元素类名。`['t-class', 't-class-content', 't-class-icon', 't-class-action', 't-class-close-btn']` | N
icon | String / Boolean / Slot | true | 消息提醒前面的图标。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 'info' 或 'bell' 则显示组件内置图标。也可以完全自定义图标节点。TS 类型：`boolean \| 'info' \| 'bell'` | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：`boolean \| DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
offset | Array | - | 相对于 placement 的偏移量，示例：[-10, 20] 或 ['10rpx', '8rpx']。TS 类型：`Array<string \| number>` | N
style | String | - | 自定义组件样式 | N
theme | String | info | 消息组件风格。可选项：info/success/warning/error。TS 类型：`MessageThemeList` `type MessageThemeList = 'info' \| 'success' \| 'warning' \| 'error'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/message/type.ts) | N
visible | Boolean | false | 是否显示，隐藏时默认销毁组件 | N
default-visible | Boolean | undefined | 是否显示，隐藏时默认销毁组件。非受控属性 | N
z-index | Number | 15000 | 元素层级，样式默认为 15000 | N

### Message Events

名称 | 参数 | 描述
-- | -- | --
action-btn-click | - | 当操作按钮存在时，用户点击操作按钮时触发
close | `(context?: { trigger: 'duration' \| 'close-click' })` | 关闭消息时触发
close-btn-click | - | 当关闭按钮存在时，用户点击关闭按钮触发
duration-end | \- | 计时结束后触发
