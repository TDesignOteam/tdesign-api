:: BASE_DOC ::

## API

### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot | - | 链接内容 | N
navigator-props | Object | - | 与 navigator 原生组件属性保持一致，具体使用参考：https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html。 | N
prefix-icon | String / Object / Slot | - | 前置图标 | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：`SizeEnum` | N
status | String | normal | 组件状态。可选项：normal/active/disabled | N
suffix-icon | String / Object / Slot | - | 前置图标 | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
underline | Boolean | - | 普通状态是否显示链接下划线 | N

### Link Events

名称 | 参数 | 描述
-- | -- | --
complete | \- | 页面链接执行完成后触发（失败或成功均会触发）
fail | \- | 页面链接跳转失败后触发
success | \- | 页面链接跳转成功后触发
