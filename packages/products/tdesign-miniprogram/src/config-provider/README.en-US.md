:: BASE_DOC ::

## API
### GlobalConfigProvider

name | type | default | description | required
-- | -- | -- | -- | --
class-prefix | String | t | \- | N
qr-code | Object | - | QRCode global configs。Typescript：`QrCodeConfig` | N

### ImageConfig

name | type | default | description | required
-- | -- | -- | -- | --
error-text | String | - | loading text, default value is "Error" | N
loading-text | String | - | loading text, default value is "loading" | N
replace-image-src | Function | - | replace all `src` attribute of images。Typescript：`(params: ImageProps) => string`，[Image API Documents](./image?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/config-provider/type.ts) | N

### InputConfig

name | type | default | description | required
-- | -- | -- | -- | --
placeholder | String | - | \- | N

### PullDownRefreshConfig

name | type | default | description | required
-- | -- | -- | -- | --
loading-texts | Array | - | Typescript：`string[]` | N

### QrCodeConfig

name | type | default | description | required
-- | -- | -- | -- | --
expired-text | String | - | Language configuration, "QR code expired" description text | N
refresh-text | String | - | Language configuration, "QR code refresh" description text | N
scanned-text | String | - | Language configuration, "QR code scanned" description text | N
