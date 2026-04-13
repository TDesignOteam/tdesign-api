:: BASE_DOC ::

## API

### ChatThinking Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
animation | String | circle | 加载动画类型。可选项：circle/moving/gradient | N
collapsed | Boolean | false | 是否折叠 | N
content | Object | - | 必需。思考内容对象。TS 类型：`{ text?: string; title?: string }` | Y
layout | String | block | 布局方式。可选项：block/border | N
maxHeight | Number | - | 内容区域最大高度，超出会自动滚动 | N
status | String | pending | 必需。思考状态。可选项：complete/stop/error/pending | Y
