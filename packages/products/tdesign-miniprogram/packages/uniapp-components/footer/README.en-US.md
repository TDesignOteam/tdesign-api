:: BASE_DOC ::

## API

### Footer Props

name | type | default | description | required
-- | -- | -- | -- | --
custom-style | Object | - | CSS(Cascading Style Sheets) | N
copyright | String | '' | `deprecated` | N
links | Array | [] | Typescript: `Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/footer/type.ts) | N
logo | Object | - | Typescript: `FooterLogo` `interface FooterLogo { icon: string; title?: string; url?: string }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/footer/type.ts) | N
text | String | '' | \- | N
text-link-list | Array | [] | `deprecated`。Typescript: `Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[see more ts definition](https://github.com/tencent/tdesign-miniprogram/blob/develop/packages/uniapp-components/footer/type.ts) | N
theme | String | 'text' | `deprecated`。options: text/logo | N
