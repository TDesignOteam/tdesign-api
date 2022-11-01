:: BASE_DOC ::

## API
### Footer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
copyright | String | '' | 版权信息，type 为`text`生效 | N
logo | Object | - | 图标配置，type 为`logo`生效。`logo.icon` 表示图标链接地址，`logo.title` 表示标题文本，`logo.url` 表示链接跳转地址。TS 类型：`FooterLogo` `interface FooterLogo { icon: string; title?: string; titleUrl?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts) | N
style | String | - | 自定义组件样式 | N
text-link-list | Array | [] | 链接列表，type 为`text`生效。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式。TS 类型：`Array<LinkObj>` `interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts) | N
theme | String | 'text' | 页脚展示类型。可选项：text/logo | N
