
const props = `

### Icon Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
color | String | - | 图标颜色 | N
name | String | - | 必需。图标名称或图片链接 | Y
prefix | String | - | 自定义图标前缀 | N
size | String / Number | - | 图标大小, 如 \`20\`, \`20px\`, \`48rpx\`, 默认单位是 \`px\` | N
onClick | Function |  | TS 类型：\`() => void\`<br/>点击图标时触发 | N

### Icon Events

名称 | 参数 | 描述
-- | -- | --
click | \- | 点击图标时触发

### Icon External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### IconSVG Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
loadDefaultIcons | Boolean | true | 是否加载组件库内置图标 | N
name | String | - | 必需。图标名称 | Y
size | String | undefined | 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等 | N
style | String | - | HTML 原生属性。可用于设置图标颜色，如：style=\"color: red\" | N
url | String / Array | - | 图标地址，地址内容参考[组件内部默认加载图标](https://tdesign.gtimg.com/icon/web/index.js)。TS 类型：\`string \| Array<string>\` | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击时触发 | N

### IconSVG Events

名称 | 参数 | 描述
-- | -- | --
click | \`(context: { e: MouseEvent })\` | 点击时触发


### IconFont Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
loadDefaultIcons | Boolean | true | 是否加载组件库内置图标 | N
name | String | - | 必需。图标名称 | Y
size | String | undefined | 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等 | N
style | String | - | HTML 原生属性。可用于设置图标颜色，如：style=\"color: red\" | N
tag | String | i | 图标 DOM 元素，可选值：i/span/div/... | N
url | String / Array | - | 图标地址，地址内容参考[组件内部默认加载图标](https://tdesign.gtimg.com/icon/web/index.css)。也可以在 index.html 中引入图标地址。TS 类型：\`string \| Array<string>\` | N
onClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>点击时触发 | N

### IconFont Events

名称 | 参数 | 描述
-- | -- | --
click | \`(context: { e: MouseEvent })\` | 点击时触发

`;
module.exports = {
  props,
};

