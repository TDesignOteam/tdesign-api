
const props = `

### Link Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
children | String / TNode | - | 链接内容，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | - | 链接内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | String / TNode | - | 链接内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
default | String / TNode | - | 链接内容，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
disabled | Boolean | undefined | 禁用链接。优先级：Link.disabled > Form.disabled | N
disabled | Boolean | false | 是否为禁用态 | N
download | String / Boolean | - | 使得浏览器将链接的 URL 视为可下载资源 | N
hover | String | underline | 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法。可选项：color/underline | N
hover | Boolean | - | 是否开启点击反馈 | N
href | String | - | 跳转链接 | N
navigatorProps | Object | - | 与 navigator 原生组件属性保持一致，具体使用参考：[微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)。使用时请将形如 \`open-type\` 风格的属性名改为 \`openType\` 风格 | N
prefixIcon | TNode | - | 前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
prefixIcon | String / Object / TNode | - | 前置图标。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
status | String | normal | 已废弃。组件状态。可选项：normal/active/disabled | N
suffixIcon | TNode | - | 后置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | String / Object / TNode | - | 后置图标。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
target | String | - | 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同 | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
underline | Boolean | - | 是否显示链接下划线 | N
underline | Boolean | - | 普通状态是否显示链接下划线 | N
onClick | Function |  | TS 类型：\`(e: MouseEvent) => void\`<br/>点击事件，禁用状态不会触发点击事件 | N
onComplete | Function |  | TS 类型：\`() => void\`<br/>页面链接执行完成后触发（失败或成功均会触发） | N
onFail | Function |  | TS 类型：\`() => void\`<br/>页面链接跳转失败后触发 | N
onSuccess | Function |  | TS 类型：\`() => void\`<br/>页面链接跳转成功后触发 | N

### Link Events

名称 | 参数 | 描述
-- | -- | --
click | \`(e: MouseEvent)\` | 点击事件，禁用状态不会触发点击事件
complete | \- | 页面链接执行完成后触发（失败或成功均会触发）
fail | \- | 页面链接跳转失败后触发
success | \- | 页面链接跳转成功后触发

### Link Slots

名称 | 描述
-- | --
- | 默认插槽，作用同 \`content\` 插槽

### Link External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-hover | 悬停样式类
t-class-prefix-icon | 前置图标样式类
t-class-suffix-icon | 后置图标样式类

`;
module.exports = {
  props,
};

