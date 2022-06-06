:: BASE_DOC ::

## API

### Picker Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
cancel-btn | String | 取消 | 取消按钮文字 | N
confirm-btn | String | 确认 | 确定按钮文字 | N
footer | Slot | - | 底部内容 | N
header | Boolean / Slot | true | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容 | N
title | String | '' | 标题 | N
value | Array | - | 选中值。TS 类型：`Array<PickerValue>` `type PickerValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
default-value | Array | undefined | 选中值。非受控属性。TS 类型：`Array<PickerValue>` `type PickerValue = string | number`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
visible | Boolean | false | 是否显示 | N

### Picker Events

名称 | 参数 | 描述
-- | -- | --
cancel | `(index: number)` | 点击取消按钮时触发
change | `(value: Array<PickerValue>)` | 选中变化时候触发
confirm | `(value: PickerValue)` | 点击确认确认按钮时触发

### PickerItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
options | Array | [] | 数据源。TS 类型：`Array<PickerItemOption>` `interface PickerItemOption { label: string; value: string | number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/picker/type.ts) | N
value | String / Number | - | 默认选中的选项 | N
