:: BASE_DOC ::

## API
### GlobalConfigProvider

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
class-prefix | String | t | CSS 类名前缀 | N
qr-code | Object | - | 二维码全局配置。TS 类型：`QrCodeConfig` | N

### ImageConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
error-text | String | - | 图片加载失败显示的文本，中文默认为“图片无法显示” | N
loading-text | String | - | 图片加载中显示的文本，中文默认为“图片加载中” | N
replace-image-src | Function | - | 统一替换图片 `src` 地址，参数为组件的全部属性，返回值为新的图片地址。TS 类型：`(params: ImageProps) => string`，[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/config-provider/type.ts) | N

### InputConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
placeholder | String | - | 语言配置，“请输入”占位符描述文本 | N

### PullDownRefreshConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
loading-texts | Array | - | 提示文本描述，默认值：['下拉刷新', '松手刷新', '正在刷新', '刷新完成']。TS 类型：`string[]` | N

### QrCodeConfig

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
expired-text | String | - | 语言配置，“二维码过期”描述文本 | N
refresh-text | String | - | 语言配置，“点击刷新”描述文本 | N
scanned-text | String | - | 语言配置，“已扫描”描述文本 | N
