:: BASE_DOC ::

## API

### List Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
async-loading | String | - | 自定义加载中。值为空不显示加载中，值为 'loading' 显示加载中状态，值为 'load-more' 显示加载更多状态。值类型为函数，则表示自定义加载状态呈现内容 | N
footer | String | - | 底部 | N
header | String | - | 头部 | N

### List Slots

名称 | 描述
-- | --
async-loading | 自定义 `async-loading` 显示内容
footer | 自定义 `footer` 显示内容
header | 自定义 `header` 显示内容
