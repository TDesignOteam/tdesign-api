:: BASE_DOC ::

## API

### ChatActionbar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
action-bar | Array | ['replay', 'copy', 'good', 'bad', 'share'] | 操作栏配置。TS 类型：`Array<'replay'\|'copy'\|'good'\|'bad'\|'share'>` | N
chat-id | String | - | 【实验】聊天消息的唯一标识 | N
comment | String | - | 评价内容 | N
content | String | - | 被复制的内容 | N
copy-mode | String | markdown | 【实验】复制内容的模式，可选 'markdown'（复制markdown原文）或 'text'（复制纯文本）。可选项：markdown/text | N
disabled | Boolean | false | 【讨论中】操作按钮是否可点击 | N
placement | String | start | 【实验】操作栏位置。可选项：start/end/space-around/space-between | N

### ChatActionbar Events

名称 | 参数 | 描述
-- | -- | --
actions | `(detail: {name: string, active: boolean})` | 点击点赞，点踩，复制，分享，重新生成按钮时触发发
