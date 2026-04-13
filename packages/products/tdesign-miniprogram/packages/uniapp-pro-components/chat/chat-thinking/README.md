:: BASE_DOC ::

## API

### ChatThinking Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
animation | String | moving | 加载动画类型。可选项：skeleton/moving/gradient/dot | N
collapsed | Boolean | false | 是否折叠 | N
content | Object | - | 必需。思考内容对象。TS 类型：`{ text?: string; title?: string }` | Y
layout | String | block | 布局方式。可选项：block/border | N
max-height | Number | - | 内容区域最大高度，超出会自动滚动 | N
status | String | pending | 必需。思考状态。可选项：complete/stop/error/pending | Y

### ChatThinking Events

名称 | 参数 | 描述
-- | -- | --
collapsed-change | `(value: boolean)` | 切换折叠面板时触发

### ChatThinking Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容
