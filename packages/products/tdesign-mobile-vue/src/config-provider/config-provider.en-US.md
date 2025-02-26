:: BASE_DOC ::

## API

### ConfigProvider Props

name | type | default | description | required
-- | -- | -- | -- | --
globalConfig | Object | - | global config。Typescript：`GlobalConfigProvider` | N

### GlobalConfigProvider

name | type | default | description | required
-- | -- | -- | -- | --
animation | Object | - | Typescript：`Partial<Record<'include'\|'exclude', Array<AnimationType>>>` `type AnimationType = 'ripple' \| 'expand' \| 'fade'`。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/config-provider/type.ts) | N
classPrefix | String | t | \- | N

### InputConfig

name | type | default | description | required
-- | -- | -- | -- | --
placeholder | String | - | \- | N

### ImageConfig

name | type | default | description | required
-- | -- | -- | -- | --
errorText | String | - | loading text, default value is "Error" | N
loadingText | String | - | loading text, default value is "loading" | N
replaceImageSrc | Function | - | replace all `src` attribute of images。Typescript：`(params: ImageProps) => string`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/config-provider/type.ts) | N
