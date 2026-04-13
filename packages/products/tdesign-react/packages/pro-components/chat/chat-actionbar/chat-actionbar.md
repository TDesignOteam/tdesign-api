:: BASE_DOC ::

## API

### ChatActionbar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
actionBar | Array | ['replay','copy','good','bad','share'] | 操作栏配置。TS 类型：`Array<'replay'\|'copy'\|'good'\|'bad'\|'share'>` | N
comment | String | - | 评价类型， 可选 'good'（点赞） 或者 'bad'（点踩）， 默认为空。可选项：good/bad | N
content | String | - | 被复制的内容 | N
onActions | Function |  | TS 类型：`(value:string, context: { e: MouseEvent }) => void`<br/>点击点赞，点踩，复制，分享，重新生成按钮时触发发 | N
