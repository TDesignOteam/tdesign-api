
const props = `

### Guide Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
backButtonProps | Object | - | 透传 返回按钮 的全部属性，示例：\`{ content: '返回', theme: 'default' }\`。TS 类型：\`ButtonProps\` | N
counter | TNode | - | 用于自定义渲染计数部分。TS 类型：\`TNode<{ current: number; total: number }>\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
counter | String / Function | - | 用于自定义渲染计数部分。TS 类型：\`string \| ((params: { total: number; current: number }) => string)\` | N
current | Number | - | 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景 | N
defaultCurrent | Number | - | 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景。非受控属性 | N
finishButtonProps | Object | - | 透传 完成按钮 的全部属性，示例：\`{ content: '完成', theme: 'primary' }\`。TS 类型：\`ButtonProps\` | N
hideBack | Boolean | false | 是否隐藏返回按钮 | N
hideCounter | Boolean | false | 是否隐藏计数 | N
hidePrev | Boolean | false | 是否隐藏上一步按钮 | N
hideSkip | Boolean | false | 是否隐藏跳过按钮 | N
highlightPadding | Number | 8 | 高亮框的内边距 | N
highlightPadding | Number | 16 | 高亮框的内边距，单位rpx | N
mode | String | popup | 引导框的类型。可选项：popup/dialog | N
mode | String | popover | 引导框的类型。可选项：popover/dialog | N
nextButtonProps | Object | - | 透传 下一步按钮 的全部属性，示例：{ content: '下一步', theme: 'primary' }。TS 类型：\`ButtonProps\`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/guide/type.ts) | N
prevButtonProps | Object | - | 透传 上一步按钮 的全部属性，示例：{ content: '上一步', theme: 'default' }。TS 类型：\`ButtonProps\` | N
showOverlay | Boolean | true | 是否出现遮罩层 | N
skipButtonProps | Object | - | 透传 跳过按钮 的全部属性，{ content: '跳过', theme: 'default' }。TS 类型：\`ButtonProps\` | N
steps | Array | - | 用于定义每个步骤的内容，包括高亮的节点、相对位置和具体的文案内容等。TS 类型：\`Array<GuideStep>\` | N
usingCustomNavbar | Boolean | false | 是否使用了自定义导航栏 | N
zIndex | Number | 999999 | 提示框的层级 | N
onBack | Function |  | TS 类型：\`(context: { e: MouseEvent, current: number, total: number  }) => void\`<br/>点击返回按钮时触发 | N
onChange | Function |  | TS 类型：\`(current: number, context?: { e: MouseEvent,  total: number }) => void\`<br/>当前步骤发生变化时触发 | N
onFinish | Function |  | TS 类型：\`(context: { e: MouseEvent, current: number, total: number  }) => void\`<br/>点击完成按钮时触发 | N
onNextStepClick | Function |  | TS 类型：\`(context: { e: MouseEvent, next: number, current: number, total: number  }) => void\`<br/>点击下一步时触发 | N
onPrevStepClick | Function |  | TS 类型：\`(context: { e: MouseEvent, prev: number, current: number, total: number  }) => void\`<br/>点击上一步时触发 | N
onSkip | Function |  | TS 类型：\`(context: { e: MouseEvent, current: number, total: number  }) => void\`<br/>点击跳过按钮时触发 | N

### Guide Events

名称 | 参数 | 描述
-- | -- | --
back | \`(context: { e: MouseEvent, current: number, total: number  })\` | 点击返回按钮时触发
change | \`(current: number, context?: { e: MouseEvent,  total: number })\` | 当前步骤发生变化时触发
finish | \`(context: { e: MouseEvent, current: number, total: number  })\` | 点击完成按钮时触发
next-step-click | \`(context: { e: MouseEvent, next: number, current: number, total: number  })\` | 点击下一步时触发
prev-step-click | \`(context: { e: MouseEvent, prev: number, current: number, total: number  })\` | 点击上一步时触发
skip | \`(context: { e: MouseEvent, current: number, total: number  })\` | 点击跳过按钮时触发

### Guide External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-back | 返回按钮样式类
t-class-body | 高亮框提示内容主体样式类
t-class-finish | 结束按钮样式类
t-class-footer | 高亮框底部操作区域样式类
t-class-next | 下一步按钮样式类
t-class-popover | 引导框样式类
t-class-reference | 高亮框样式类
t-class-skip | 跳过按钮样式类
t-class-title | 高亮框提示内容标题样式类
t-class-tooltip | 高亮框提示内容区域样式类

### GuideStep

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
backButtonProps | Object | - | 用于自定义当前引导框的返回按钮的内容。TS 类型：\`ButtonProps\` | N
body | String / TNode | - | 当前步骤提示框的内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
body | String | - | 当前步骤提示框的内容，支持插槽：slot="body-{{index}}" (1、当要显示body-{{index}}插槽时，请将body设置为空；2、当要显示content-{{index}}插槽完全自定义内容时，请将body和title都设置为空) | N
children | String / TNode | - | 自定义内容，同 content。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
content | TNode | - | 用户自定义引导弹框的内容，一旦存在，此时除 \`placement\`、\`offset\`和\`element\` 外，其它属性全部失效）。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
element | String / Function | - | 必需。高亮的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'#tdesign' 或 () => document.querySelector('#tdesign')。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | Y
element | Function | - | 必需。高亮的节点。示例： \`() => new Promise((resolve) => this.createSelectorQuery().select('#tdesign').boundingClientRect((rect) => resolve(rect)).exec())\`。TS 类型：\`StepElement\` \`type StepElement = () => Promise<WechatMiniprogram.BoundingClientRectCallbackResult>\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/guide/type.ts) | Y
finishButtonProps | Object | - | 透传 完成 的全部属性，示例：\`{ content: '完成', theme: 'primary' }\`。TS 类型：\`ButtonProps\` | N
highlightContent | TNode | - | 用户自定义的高亮框 (仅当 \`mode\` 为 \`popup\` 时生效)。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
highlightContent | TNode | - | 用户自定义的高亮框 (仅当 \`mode\` 为 \`popover\` 时生效)。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
highlightPadding | Number | - | 高亮框的内边距 | N
highlightPadding | Number | - | 高亮框的内边距，单位rpx | N
mode | String | - | 引导框的类型。可选项：popup/dialog | N
mode | String | - | 引导框的类型。可选项：popover/dialog | N
nextButtonProps | Object | - | 用于自定义当前引导框的下一步按钮的内容。TS 类型：\`ButtonProps\` | N
offset | Array | - | 【讨论确认中】相对于 placement 的偏移量，示例：[-10, 20] 或 ['10px', '8px']。TS 类型：\`Array<string \| number>\` | N
offset | Array | - | 相对于 placement 的偏移量[left, top]，默认单位rpx，示例：[-10, 20] 或 ['10px', '8px'] 或 ['20rpx', '16rpx'] (仅当 \`mode\` 为 \`popover\` 时生效)。TS 类型：\`Array<string \| number>\` | N
placement | String | 'top' | 引导框相对于高亮元素出现的位置。TS 类型：\`StepPopupPlacement \| StepDialogPlacement\` \`type StepPopupPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'\` \`type StepDialogPlacement = 'top'\|'center' \`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/guide/type.ts) | N
placement | String | 'top' | 引导框相对于高亮元素出现的位置，(仅当 \`mode\` 为 \`popover\` 时生效)。TS 类型：\`StepPopoverPlacement \` \`type StepPopoverPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'\|'center'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/guide/type.ts) | N
popoverProps | Object | - | 透传全部属性到 Popover 组件。\`mode=popover\` 时有效。TS 类型：\`PopoverProps\`，[Popover API Documents](./popover?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/guide/type.ts) | N
popupProps | Object | - | 透传 Popup 组件全部属性。\`mode=popup\` 时有效。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/guide/type.ts) | N
prevButtonProps | Object | - | 用于自定义当前引导框的上一步按钮的内容。TS 类型：\`ButtonProps\` | N
showOverlay | Boolean | true | 是否出现遮罩层 | N
skipButtonProps | Object | - | 用于自定义当前步骤引导框的跳过按钮的内容。TS 类型：\`ButtonProps\` | N
stepOverlayClass | String | - | 覆盖引导框的类名 | N
title | String / TNode | - | 当前步骤的标题内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
title | String | - | 当前步骤的标题内容，支持插槽：slot="title-{{index}}" (1、当要显示body-{{index}}插槽时，请将title设置为空；2、当要显示content-{{index}}插槽完全自定义内容时，请将body和title都设置为空) | N

`;
module.exports = {
  props,
};

