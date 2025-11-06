
const props = `

### Popover Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
children | String / TNode | - | 触发元素，同 triggerElement。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
closeOnClickOutside | Boolean | true | 是否在点击外部元素后关闭菜单  | N
content | String / TNode | - | 确认框内容。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
default | String / TNode | - | 触发元素，同 triggerElement。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
showArrow | Boolean | true | 是否显示浮层箭头 | N
theme | String | dark | 弹出气泡主题。可选项：dark/light/brand/success/warning/error | N
triggerElement | String / TNode | - | 触发元素。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
visible | Boolean | - | 是否显示气泡确认框 | N
onVisibleChange | Function |  | TS 类型：\`(visible: boolean) => void\`<br/>确认框显示或隐藏时触发 | N

### Popover Events

名称 | 参数 | 描述
-- | -- | --
visible-change | \`(visible: boolean)\` | 确认框显示或隐藏时触发

`;
module.exports = {
  props,
};

