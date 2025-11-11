:: BASE_DOC ::

## API

### ChatThinking Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
animation | String | moving | 内容区域最大高度，超出会自动滚动。可选项：circle/moving/gradient | N
collapsed | Boolean | false | 是否折叠 | N
content | Object | - | 必需。思考内容对象。TS 类型：`{ text?: string; title?: string }` | Y
layout | String | block | 布局方式。可选项：block/border | N
max-height | Number | - | 内容区域最大高度，超出会自动滚动 | N
status | String | pending | 必需。思考状态。可选项：complete/stop/error/pending | Y

### ChatThinking Events

名称 | 参数 | 描述
-- | -- | --
collapsed-change | `(value: Boolean)` | 切换折叠面板时触发
