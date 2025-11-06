
const props = `

### Footer Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
copyright | String | '' | 已废弃。版权信息，type 为\`text\`生效 | N
height | String | - | 底栏高度。样式表（class）中定义的默认高度为：24px | N
links | Array | [] | 链接列表。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式。TS 类型：\`Array<LinkObj>\` \`interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/footer/type.ts) | N
links | Array | [] | 链接列表。name 表示链接名称， url 表示跳转链接，target 表示跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同。TS 类型：\`Array<LinkObj>\` \`interface LinkObj { name: string; url?: string; target?: string}\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/footer/type.ts) | N
logo | Object | - | 图标配置。\`logo.icon\` 表示图标链接地址，\`logo.title\` 表示标题文本，\`logo.url\` 表示链接跳转地址，\`logo.target\` 表示跳转方式。TS 类型：\`FooterLogo\` \`interface FooterLogo { icon: string; title?: string; url?: string; target?: string; }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/footer/type.ts) | N
logo | Object | - | 图标配置。\`logo.icon\` 表示图标链接地址，\`logo.title\` 表示标题文本，\`logo.url\` 表示链接。TS 类型：\`FooterLogo\` \`interface FooterLogo { icon: string; title?: string; url?: string }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/footer/type.ts) | N
text | String | '' | 版权信息 | N
textLinkList | Array | [] | 已废弃。链接列表，type 为\`text\`生效。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式。TS 类型：\`Array<LinkObj>\` \`interface LinkObj { name: string; url?: string; openType?: 'navigate' \| 'redirect' \| 'relaunch' \| 'switchTab' \| 'navigateBack' }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/footer/type.ts) | N
theme | String | 'text' | 已废弃。页脚展示类型。可选项：text/logo | N

`;
module.exports = {
  props,
};

