
const props = `

### Popup Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
attach | String / Function | 'body' | 指定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
children | String / TNode | - | 触发元素，同 triggerElement。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closeBtn | Boolean / TNode | - | 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closeBtn | Boolean / TNode | - | 是否展示关闭按钮，值为 \`true\` 显示默认关闭按钮；值为 \`false\` 则不显示关闭按钮；也可以自定义关闭按钮。TS 类型：\`boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closeOnOverlayClick | Boolean | true | 点击遮罩层是否关闭 | N
content | String / TNode | - | 浮层里面的内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
default | String / TNode | - | 触发元素，同 triggerElement。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
delay | Number / Array | - | 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 \`'300'\` 或者 \`[200, 200]\`。默认为：[250, 150]。TS 类型：\`number \| Array<number>\` | N
destroyOnClose | Boolean | false | 是否在关闭浮层时销毁浮层 | N
destroyOnClose | Boolean | false | 是否在关闭浮层时销毁浮层 | N
disabled | Boolean | - | 是否禁用组件 | N
duration | Number | 240 | 动画过渡时间 | N
hideEmptyPopup | Boolean | false | 浮层是否隐藏空内容，默认不隐藏 | N
lockScroll | Boolean | true | 是否锁定内容滚动 | N
overlayClassName | String / Object / Array | - | 浮层类名，示例：'name1 name2 name3' 或 \`['name1', 'name2']\` 或 \`[{ 'name1': true }]\`。TS 类型：\`ClassName\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
overlayInnerClassName | String / Object / Array | - | 浮层内容部分类名，示例：'name1 name2 name3' 或 \`['name1', 'name2']\` 或 \`[{ 'name1': true }]\`。TS 类型：\`ClassName\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
overlayInnerStyle | Boolean / Object / Function | - | 浮层内容部分样式，第一个参数 \`triggerElement\` 表示触发元素 DOM 节点，第二个参数 \`popupElement\` 表示浮层元素 DOM 节点。TS 类型：\`Styles \| ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
overlayProps | Object | {} | 遮罩层的属性，透传至 overlay。TS 类型：\`OverlayProps\`，[Overlay API Documents](./overlay?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts) | N
overlayStyle | Boolean / Object / Function | - | 浮层样式，第一个参数 \`triggerElement\` 表示触发元素 DOM 节点，第二个参数 \`popupElement\` 表示浮层元素 DOM 节点。TS 类型：\`Styles \| ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
placement | String | top | 浮层出现位置。TS 类型：\`PopupPlacement\` \`type PopupPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts) | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/center | N
popperOptions | Object | - | popper 初始化配置，详情参考 https://popper.js.org/docs/ | N
preventScrollThrough | Boolean | true | 防止滚动穿透 | N
preventScrollThrough | Boolean | true | 是否阻止背景滚动 | N
showArrow | Boolean | false | 是否显示浮层箭头 | N
showOverlay | Boolean | true | 是否显示遮罩层 | N
transitionName | String | - | 弹出层内容区的动画名，等价于transition组件的name属性 | N
transitionProps | Object | - | 动画效果定义。TS 类型：\`TdTransitionProps\` \`interface PopupVisibleChangeContext { trigger: 'close-btn' \| 'overlay' }\`，[Transition API Documents](./transition?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts) | N
trigger | String | hover | 触发浮层出现的方式。可选项：hover/click/focus/mousedown/context-menu | N
triggerElement | String / TNode | - | 触发元素。值类型为字符串表示元素选择器。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
usingCustomNavbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | - | 是否显示浮层。TS 类型：\`boolean\` | N
defaultVisible | Boolean | - | 是否显示浮层。非受控属性。TS 类型：\`boolean\` | N
zIndex | Number | - | 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500 | N
zIndex | Number | 11500 | 组件层级，Web 侧样式默认为 5500，移动端样式默认为 1500，小程序样式默认为11500 | N
onClose | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>组件准备关闭时触发 | N
onClosed | Function |  | TS 类型：\`() => void\`<br/>组件关闭且动画结束后执行 | N
onOpen | Function |  | TS 类型：\`() => void\`<br/>组件准备展示时触发 | N
onOpened | Function |  | TS 类型：\`() => void\`<br/>组件展示且动画结束后执行 | N
onOverlayClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>内容面板点击时触发 | N
onScroll | Function |  | TS 类型：\`(context: { e: WheelEvent }) => void\`<br/>下拉选项滚动事件 | N
onScrollToBottom | Function |  | TS 类型：\`(context: { e: WheelEvent }) => void\`<br/>下拉滚动触底事件，常用于滚动到底执行具体业务逻辑 | N
onVisibleChange | Function |  | TS 类型：\`(visible: boolean, context: PopupVisibleChangeContext) => void\`<br/>当浮层隐藏或显示时触发，\`trigger=document\` 表示点击非浮层元素触发；\`trigger=context-menu\` 表示右击触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts)。<br/>\`interface PopupVisibleChangeContext { e?: PopupTriggerEvent; trigger?: PopupTriggerSource }\`<br/><br/>\`type PopupTriggerEvent = MouseEvent \| FocusEvent \| KeyboardEvent\`<br/><br/>\`type PopupTriggerSource = 'document' \| 'trigger-element-click' \| 'trigger-element-hover' \| 'trigger-element-blur' \| 'trigger-element-focus' \| 'trigger-element-mousedown' \| 'trigger-element-close' \| 'context-menu' \| 'keydown-esc'\`<br/> | N
onVisibleChange | Function |  | TS 类型：\`(visible: boolean, trigger: PopupSource)  => void\`<br/>当浮层隐藏或显示时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts)。<br/>\`type PopupSource = 'close-btn' \| 'overlay'\`<br/> | N

### Popup Events

名称 | 参数 | 描述
-- | -- | --
close | \`(context: { e: MouseEvent })\` | 组件准备关闭时触发
closed | \- | 组件关闭且动画结束后执行
open | \- | 组件准备展示时触发
opened | \- | 组件展示且动画结束后执行
overlay-click | \`(context: { e: MouseEvent })\` | 内容面板点击时触发
scroll | \`(context: { e: WheelEvent })\` | 下拉选项滚动事件
scroll-to-bottom | \`(context: { e: WheelEvent })\` | 下拉滚动触底事件，常用于滚动到底执行具体业务逻辑
visible-change | \`(visible: boolean, context: PopupVisibleChangeContext)\` | 当浮层隐藏或显示时触发，\`trigger=document\` 表示点击非浮层元素触发；\`trigger=context-menu\` 表示右击触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts)。<br/>\`interface PopupVisibleChangeContext { e?: PopupTriggerEvent; trigger?: PopupTriggerSource }\`<br/><br/>\`type PopupTriggerEvent = MouseEvent \| FocusEvent \| KeyboardEvent\`<br/><br/>\`type PopupTriggerSource = 'document' \| 'trigger-element-click' \| 'trigger-element-hover' \| 'trigger-element-blur' \| 'trigger-element-focus' \| 'trigger-element-mousedown' \| 'trigger-element-close' \| 'context-menu' \| 'keydown-esc'\`<br/>
visible-change | \`(visible: boolean, trigger: PopupSource) \` | 当浮层隐藏或显示时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts)。<br/>\`type PopupSource = 'close-btn' \| 'overlay'\`<br/>

### PopupInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
getOverlay | \- | \`HTMLElement \| null\` | 获取浮层元素
getOverlayState | \- | \`{ hover: boolean }\` | 获取浮层悬浮状态
getPopper | \- | \`Instance \| null\` | 获取当前组件 popper 实例。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/popup/type.ts)。<br/>\`import { Instance } from '@popperjs/core'\`<br/>
update | \- | \- | 更新浮层内容

### Popup Slots

名称 | 描述
-- | --
- | 默认插槽，作用同 \`content\` 插槽

### Popup External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类

`;
module.exports = {
  props,
};

