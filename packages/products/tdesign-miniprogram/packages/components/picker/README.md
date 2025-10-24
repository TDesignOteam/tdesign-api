:: BASE_DOC ::

## API

### Picker Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-close | Boolean | true | 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible | N
cancel-btn | String / Boolean | true | 取消按钮文字。TS 类型：`boolean \| string` | N
confirm-btn | String / Boolean | true | 确定按钮文字。TS 类型：`boolean \| string` | N

header | Boolean | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容 | N
item-height | Number | 80 | PickerItem 的子项高度，单位 rpx | N
keys | Object | - | 用来定义 value / label / icon 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
popup-props | Object | {} | 透传 Popup 组件全部属性。TS 类型：`PopupProps`，[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker/type.ts) | N
title | String | '' | 标题 | N
use-popup | Boolean | true | 是否使用弹出层包裹 | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
value | Array | - | 选中值。TS 类型：`Array<PickerValue>` `type PickerValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`Array<PickerValue>` `type PickerValue = string \| number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### Picker Events

名称 | 参数 | 描述
-- | -- | --
cancel | - | 点击取消按钮时触发
change | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number; disabled?: boolean; }> )` | 选中变化时候触发，即确认变化时触发
close | `(trigger: TriggerSource)` | `1.0.1`。关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'cancel-btn' \| 'confirm-btn'`<br/>
confirm | `(value: Array<PickerValue>, label: string, columns: Array<{ column: number; index: number; disabled?: boolean; }> )` | 点击确认按钮时触发
pick | `(value: Array<PickerValue>, label: string, column: number, index: number)` | 任何一列选中都会触发，不同的列参数不同。`column` 表示第几列变化，`index` 表示变化那一列的选中项下标

### Picker Slots

名称 | 描述
-- | --
\- | 默认插槽，自定义内容
content | 中间内容，介于头部跟内容之间
footer | 底部内容
header | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容


### PickerItem Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
format | Function | - | 格式化标签。TS 类型：`(option: PickerItemOption, columnIndex: number) => PickerItemOption` | N
options | Array | [] | 数据源。TS 类型：`PickerItemOption[]` `interface PickerItemOption { label: string; value: string \| number; icon?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/picker-item/type.ts) | N

### PickerItem Slots

名称 | 描述
-- | --
label-suffix-index | 列表子项后置插槽，用于自定义标签文本之后的内容。
