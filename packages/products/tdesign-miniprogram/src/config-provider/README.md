:: BASE_DOC ::

## API
### GlobalConfigProvider

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
animation | Object | - | 动画效果控制，`ripple` 指波纹动画， `expand` 指展开动画，`fade` 指渐变动画。默认为 `{ include: ['ripple','expand','fade'], exclude: [] }`。TS 类型：`Partial<Record<'include'\|'exclude', Array<AnimationType>>>` `type AnimationType = 'ripple' \| 'expand' \| 'fade'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/config-provider/type.ts) | N
class-prefix | String | t | CSS 类名前缀 | N

### InputConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
placeholder | String | - | 语言配置，“请输入”占位符描述文本 | N

### ImageConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
error-text | String | - | 图片加载失败显示的文本，中文默认为“图片无法显示” | N
loading-text | String | - | 图片加载中显示的文本，中文默认为“图片加载中” | N
replace-image-src | Function | - | 统一替换图片 `src` 地址，参数为组件的全部属性，返回值为新的图片地址。TS 类型：`(params: ImageProps) => string`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/config-provider/type.ts) | N
