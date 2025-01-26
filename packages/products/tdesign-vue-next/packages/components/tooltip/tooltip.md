:: BASE_DOC ::

## API
### Tooltip Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
delay | Number / Array | - | 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。直接透传到 Popup 组件。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 `'300'` 或者 `[200, 200]`。默认为：[250, 150]。TS 类型：`number \| Array<number>` | N
destroyOnClose | Boolean | true | 是否在关闭浮层时销毁浮层 | N
duration | Number | - | 用于设置提示默认显示多长时间之后消失，初始第一次有效，单位：毫秒 | N
placement | String | top | 浮层出现位置。TS 类型：`PopupPlacement`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components/tooltip/type.ts) | N
showArrow | Boolean | true | 是否显示浮层箭头 | N
theme | String | default | 文字提示风格。可选项：default/primary/success/danger/warning/light | N
`PopupProps` | \- | - | 继承 `PopupProps` 中的全部 API | N

### TooltipLite Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Slot / Function | - | 文字提示内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components/common.ts) | N
placement | String | top | 提示浮层出现的位置。可选项：top/bottom/mouse | N
showArrow | Boolean | true | 是否显示箭头 | N
showShadow | Boolean | true | 文字提示浮层是否需要阴影 | N
theme | String | default | 组件风格，有亮色模式和暗色模式两种。可选项：light/default | N
triggerElement | String / Slot / Function | - | 触发元素。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/tree/develop/packages/components/common.ts) | N
