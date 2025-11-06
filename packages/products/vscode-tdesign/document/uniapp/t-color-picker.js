
const props = `

### ColorPicker Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
autoClose | Boolean | true | 自动关闭。在点击遮罩层时自动关闭，不需要手动设置 visible | N
borderless | Boolean | false | 无边框模式 | N
clearable | Boolean | false | 是否可清空 | N
colorModes | Array | ["monochrome", "linear-gradient"] | 颜色模式选择。同时支持单色和渐变两种模式，可仅使用单色或者渐变其中一种模式，也可以同时使用。\`monochrome\` 表示单色，\`linear-gradient\` 表示渐变色。TS 类型：\`Array<'monochrome' \| 'linear-gradient'>\` | N
colorModes | String / Array | "monochrome" | 颜色模式选择。同时支持单色和渐变两种模式，可仅使用单色或者渐变其中一种模式，也可以同时使用。\`monochrome\` 表示单色，\`linear-gradient\` 表示渐变色。TS 类型：\`colorModesEnum \| colorModesEnum[] \` \`type colorModesEnum = 'monochrome' \| 'linear-gradient'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts) | N
disabled | Boolean | undefined | 是否禁用组件 | N
enableAlpha | Boolean | false | 是否开启透明通道 | N
enableMultipleGradient | Boolean | true | 是否允许开启通过点击渐变轴增加渐变梯度，默认开启，关闭时只会存在起始和结束两个颜色 | N
fixed | Boolean | false | 如果 color-picker 是在一个 \`position:fixed\` 的区域，需要显式指定属性 fixed 为 true | N
footer | TNode | - | 底部插槽，仅在 \`usePopup\` 为 \`true\` 时有效。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
format | String | RGB | 格式化色值。\`enableAlpha\` 为真时，\`HEX8/RGBA/HSLA/HSVA\` 有效。可选项：HEX/HEX8/RGB/RGBA/HSL/HSLA/HSV/HSVA/CMYK/CSS | N
header | TNode | - | 顶部插槽，仅在 \`usePopup\` 为 \`true\` 时有效。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
inputProps | Object | - | 透传 Input 输入框组件全部属性。TS 类型：\`InputProps\`，[Input API Documents](./input?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts) | N
popupProps | Object | - | 透传 Popup 组件全部属性，如 \`placement\` \`overlayStyle\` \`overlayClassName\` \`trigger\`等。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts) | N
popupProps | Object | {} | 透传 Popup 组件全部属性。TS 类型：\`PopupProps\`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts) | N
recentColors | Array | [] | 最近使用的颜色。值为 [] 表示以组件内部的“最近使用颜色”为准，值长度大于 0 则以该值为准显示“最近使用颜色”。值为 false 或 null 则完全不显示“最近使用颜色”。TS 类型：\`Array<string> \| boolean \| null\` | N
defaultRecentColors | Array | [] | 最近使用的颜色。值为 [] 表示以组件内部的“最近使用颜色”为准，值长度大于 0 则以该值为准显示“最近使用颜色”。值为 false 或 null 则完全不显示“最近使用颜色”。非受控属性。TS 类型：\`Array<string> \| boolean \| null\` | N
selectInputProps | Object | - | 透传 SelectInputProps 筛选器输入框组件全部属性。TS 类型：\`SelectInputProps\`，[SelectInput API Documents](./select-input?tab=api)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts) | N
showPrimaryColorPreview | Boolean | true | 是否展示颜色选择条右侧的颜色预览区域 | N
size | String | medium | 组件尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
swatchColors | Array | undefined | 系统预设的颜色样例，值为 \`null\` 或 \`[]\` 则不显示系统色，值为 \`undefined\` 会显示组件内置的系统默认色。TS 类型：\`Array<string> \| null \| undefined\` | N
type | String | base | 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容。可选项：base/multiple。TS 类型：\`TypeEnum \` \`type TypeEnum = 'base' \| 'multiple'\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts) | N
usePopup | Boolean | false | 是否使用弹出层包裹颜色选择器 | N
value | String | - | 色值 | N
defaultValue | String | - | 色值。非受控属性 | N
value | String | - | 色值 | N
defaultValue | String | - | 色值。非受控属性 | N
visible | Boolean | false | 是否显示颜色选择器。\`usePopup\` 为 true 时有效 | N
onChange | Function |  | TS 类型：\`(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger }) => void\`<br/>选中的色值发生变化时触发，第一个参数 \`value\` 表示新色值，\`context.color\` 表示当前调色板控制器的色值，\`context.trigger\` 表示触发颜色变化的来源。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`type ColorPickerChangeTrigger = 'palette-saturation-brightness' \| 'palette-saturation' \| 'palette-brightness' \| 'palette-hue-bar' \| 'palette-alpha-bar' \| 'input' \| 'preset' \| 'recent' \`<br/> | N
onChange | Function |  | TS 类型：\`(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger }) => void\`<br/>选中的色值发生变化时触发，第一个参数 \`value\` 表示新色值，\`context.color\` 表示当前调色板控制器的色值，\`context.trigger\` 表示触发颜色变化的来源。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`type ColorPickerChangeTrigger = 'palette-hue-bar' \| 'palette-alpha-bar' \| 'preset' \`<br/> | N
onClear | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>清空按钮点击时触发 | N
onClose | Function |  | TS 类型：\`(trigger: ColorPickerTrigger) => void\`<br/>关闭按钮时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`type ColorPickerTrigger = 'overlay'\`<br/> | N
onPaletteBarChange | Function |  | TS 类型：\`(context: { color: ColorObject }) => void\`<br/>调色板控制器的值变化时触发，\`context.color\` 指调色板控制器的值。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; saturation: number; value: number; isGradient: boolean; linearGradient?: string; }\`<br/> | N
onPaletteBarChange | Function |  | TS 类型：\`(context: { color: ColorObject }) => void\`<br/>调色板控制器的值变化时触发，\`context.color\` 指调色板控制器的值。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}\`<br/> | N
onRecentColorsChange | Function |  | TS 类型：\`(value: Array<string>) => void\`<br/>最近使用颜色发生变化时触发 | N

### ColorPicker Events

名称 | 参数 | 描述
-- | -- | --
change | \`(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })\` | 选中的色值发生变化时触发，第一个参数 \`value\` 表示新色值，\`context.color\` 表示当前调色板控制器的色值，\`context.trigger\` 表示触发颜色变化的来源。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`type ColorPickerChangeTrigger = 'palette-saturation-brightness' \| 'palette-saturation' \| 'palette-brightness' \| 'palette-hue-bar' \| 'palette-alpha-bar' \| 'input' \| 'preset' \| 'recent' \`<br/>
change | \`(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger })\` | 选中的色值发生变化时触发，第一个参数 \`value\` 表示新色值，\`context.color\` 表示当前调色板控制器的色值，\`context.trigger\` 表示触发颜色变化的来源。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`type ColorPickerChangeTrigger = 'palette-hue-bar' \| 'palette-alpha-bar' \| 'preset' \`<br/>
clear | \`(context: { e: MouseEvent })\` | 清空按钮点击时触发
close | \`(trigger: ColorPickerTrigger)\` | 关闭按钮时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`type ColorPickerTrigger = 'overlay'\`<br/>
palette-bar-change | \`(context: { color: ColorObject })\` | 调色板控制器的值变化时触发，\`context.color\` 指调色板控制器的值。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; saturation: number; value: number; isGradient: boolean; linearGradient?: string; }\`<br/>
palette-bar-change | \`(context: { color: ColorObject })\` | 调色板控制器的值变化时触发，\`context.color\` 指调色板控制器的值。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/color-picker/type.ts)。<br/>\`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; value: number;}\`<br/>
recent-colors-change | \`(value: Array<string>)\` | 最近使用颜色发生变化时触发

`;
module.exports = {
  props,
};

