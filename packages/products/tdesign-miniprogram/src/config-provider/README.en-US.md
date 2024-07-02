:: BASE_DOC ::

## API
### GlobalConfigProvider

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
animation | Object | - | Typescript：`Partial<Record<'include'\|'exclude', Array<AnimationType>>>` `type AnimationType = 'ripple' \| 'expand' \| 'fade'`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/config-provider/type.ts) | N
class-prefix | String | t | \- | N

### InputConfig

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
placeholder | String | - | \- | N

### ImageConfig

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
error-text | String | - | loading text, default value is "Error" | N
loading-text | String | - | loading text, default value is "loading" | N
replace-image-src | Function | - | replace all `src` attribute of images。Typescript：`(params: ImageProps) => string`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/config-provider/type.ts) | N
