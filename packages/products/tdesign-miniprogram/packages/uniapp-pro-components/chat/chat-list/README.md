:: BASE_DOC ::

## API

### ChatList Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
animation | String | skeleton | 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种。可选项：skeleton/moving/gradient/dot | N
data | Array | - | 对话列表的数据。TS 类型：`Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; status?: string }`。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-pro-components/chat/chat-list/type.ts) | N
layout | String | both | 对话布局形式，支持两侧对齐与左对齐。使用插槽自定义对话内容时不生效，得用`t-chat-message`的`placement`属性。可选项：both/single | N
reverse | Boolean | true | 是否表现为倒序 | N

### ChatList Events

名称 | 参数 | 描述
-- | -- | --
scroll | `(context: TdChatScrollContext)` | 滚动事件的回调。[详细类型定义](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/chat-list/type.ts)。<br/>` interface TdChatScrollContext { scrollLeft: number;   scrollTop: number;   scrollHeight: number;   scrollWidth: number;   deltaX: number;   deltaY: number}`<br/>

### ChatList Slots

名称 | 描述
-- | --
actionbar | 自定义操作按钮的插槽
