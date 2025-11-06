
const props = `

### Navbar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
animation | Boolean | true | 是否添加动画效果 | N
background | String | - | 已废弃。背景 | N
capsule | TNode | - | 左侧胶囊区域。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
delta | Number | 1 | 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack | N
fixed | Boolean | true | 是否固定在顶部 | N
homeIcon | String | - | 已废弃。首页图标地址。值为 '' 或者 undefined 则表示不显示返回图标，值为 'circle' 表示显示默认图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址 | N
left | String / TNode | - | 左侧区域。值为 \`string\` 表示文本，为其他表示自定义内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
left | TNode | - | 左侧内容区域。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
left | TNode | - | 左侧区域。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
leftArrow | Boolean | false | 是否展示左侧箭头 | N
leftIcon | String | - | 已废弃。左侧图标地址，值为 '' 或者 undefined 则表示不显示返回图标，值为 'arrow-left' 表示显示返回图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址 | N
right | String / TNode | - | 右侧区域。值为 \`string\` 表示文本，为其他表示自定义内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
right | TNode | - | 右侧区域。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
safeAreaInsetTop | Boolean | true | 是否开启顶部安全区适配 | N
title | String / TNode | - | 页面标题。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
titleMaxLength | Number | - | 标题文字最大长度，超出的范围使用 \`...\` 表示 | N
visible | Boolean | true | 是否显示 | N
onComplete | Function |  | TS 类型：\`() => void\`<br/>navigateBack 执行完成后触发（失败或成功均会触发） | N
onFail | Function |  | TS 类型：\`() => void\`<br/>navigateBack 执行失败后触发 | N
onGoBack | Function |  | TS 类型：\`() => void\`<br/>点击左侧箭头时触发 | N
onGoHome | Function |  | TS 类型：\`() => void\`<br/>已废弃。点击 Home 触发 | N
onLeftClick | Function |  | TS 类型：\`() => void\`<br/>点击左侧区域时触发 | N
onLeftClick | Function |  | TS 类型：\`() => void\`<br/>点击左侧按钮时触发 | N
onRightClick | Function |  | TS 类型：\`() => void\`<br/>点击右侧区域时触发 | N
onRightClick | Function |  | TS 类型：\`() => void\`<br/>点击右侧图标时触发 | N
onSuccess | Function |  | TS 类型：\`() => void\`<br/>navigateBack 执行成功后触发 | N

### Navbar Events

名称 | 参数 | 描述
-- | -- | --
complete | \- | navigateBack 执行完成后触发（失败或成功均会触发）
fail | \- | navigateBack 执行失败后触发
go-back | \- | 点击左侧箭头时触发
go-home | \- | 已废弃。点击 Home 触发
left-click | \- | 点击左侧区域时触发
left-click | \- | 点击左侧按钮时触发
right-click | \- | 点击右侧区域时触发
right-click | \- | 点击右侧图标时触发
success | \- | navigateBack 执行成功后触发

### Navbar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-capsule | 左侧胶囊区域样式类
t-class-center | 中间内容样式类
t-class-home-icon | 首页图标样式类
t-class-left | 左侧内容样式类
t-class-left-icon | 左侧图标样式类
t-class-nav-btn | 导航按钮样式类
t-class-title | 标题样式类

`;
module.exports = {
  props,
};

