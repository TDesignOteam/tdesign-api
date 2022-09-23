:: BASE_DOC ::

## API
### Tooltip Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
delay | Number | - | 【议案讨论中】延迟出现提示，用于异步加载提示信息需要延迟显示的业务场景下 | N
destroyOnClose | Boolean | true | 是否在关闭浮层时销毁浮层 | N
duration | Number | - | 用于设置提示默认显示多长时间之后消失，初始第一次有效，单位：毫秒 | N
placement | String | top | 浮层出现位置。TS 类型：`'mouse' | PopupPlacement`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tooltip/type.ts) | N
showArrow | Boolean | true | 是否显示浮层箭头 | N
theme | String | default | 文字提示风格。可选项：default/primary/success/danger/warning/light | N
`Omit<PopupProps, 'placement'>` | \- | - | 继承 `Omit<PopupProps, 'placement'>` 中的全部 API | N

### TooltipLite Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
color | String | - | 背景颜色，可传入 16 进制颜色码或 RGB 颜色值，优先级高于theme | N
content | String / Slot / Function | - | 文字提示内容。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
delay | Number / Array | - | 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 `'300'` 或者 `[200, 200]`。默认为：[250, 150]。TS 类型：`number | Array<number>` | N
placement | String | top | 提示浮层出现的位置。可选项：top/bottom | N
showArrow | Boolean | true | 是否显示箭头 | N
theme | String | dark | 组件风格，有亮色模式和暗色模式两种。可选项：light/dark | N
trigger | String | hover | 出现提示浮层的触发方式。可选项：hover/click/focus | N
triggerElement | String / Slot / Function | - | 触发元素。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
onVisibleChange | Function |  | TS 类型：`(visible: boolean, context: TooltipVisibleChangeContext) => void`<br/>当浮层隐藏或显示时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tooltip/type.ts)。<br/>`interface TooltipVisibleChangeContext { e?: TooltipTriggerEvent; trigger?: TooltipTriggerSource }`<br/><br/>`type TooltipTriggerEvent = MouseEvent | FocusEvent`<br/><br/>`type TooltipTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus'`<br/> | N

### TooltipLite Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: boolean, context: TooltipVisibleChangeContext)` | 当浮层隐藏或显示时触发。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/tooltip/type.ts)。<br/>`interface TooltipVisibleChangeContext { e?: TooltipTriggerEvent; trigger?: TooltipTriggerSource }`<br/><br/>`type TooltipTriggerEvent = MouseEvent | FocusEvent`<br/><br/>`type TooltipTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus'`<br/>
