:: BASE_DOC ::

## API

### Footer Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
copyright | String | '' | `deprecated` | N
links | Array | [] | `1.0.0`。Typescript：`Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/footer/type.ts) | N
logo | Object | - | Typescript：`FooterLogo` `interface FooterLogo { icon: string; title?: string; url?: string }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/footer/type.ts) | N
text | String | '' | `1.0.0` | N
text-link-list | Array | [] | `deprecated`。Typescript：`Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/footer/type.ts) | N
theme | String | 'text' | `deprecated`。options: text/logo | N
