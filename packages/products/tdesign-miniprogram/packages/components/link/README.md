:: BASE_DOC ::

## API

### Link Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | String / Slot | - | 链接内容。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
disabled | Boolean | false | 是否为禁用态 | N
hover | Boolean | - | 是否开启点击反馈 | N
navigator-props | Object | - | 与 navigator 原生组件属性保持一致，具体使用参考：[微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)。使用时请将形如 `open-type` 风格的属性名改为 `openType` 风格 | N
prefix-icon | String / Object / Slot | - | 前置图标。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
status | String | normal | 已废弃。组件状态。可选项：normal/active/disabled | N
suffix-icon | String / Object / Slot | - | 后置图标。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
underline | Boolean | - | 是否显示链接下划线 | N

### Link Events

名称 | 参数 | 描述
-- | -- | --
complete | \- | 页面链接执行完成后触发（失败或成功均会触发）
fail | \- | 页面链接跳转失败后触发
success | \- | 页面链接跳转成功后触发

### Link External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-hover | 悬停样式类
t-class-prefix-icon | 前置图标样式类
t-class-suffix-icon | 后置图标样式类
