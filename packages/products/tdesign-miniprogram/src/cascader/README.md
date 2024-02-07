:: BASE_DOC ::

## API
### Cascader Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
close-btn | Boolean / Slot | true | 关闭按钮。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
keys | Object | - | 用来定义 value / label 在 `options` 中对应的字段别名。TS 类型：`KeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
options | Array | [] | 可选项数据源。TS 类型：`Array<CascaderOption>` | N
placeholder | String | 选择选项 | 未选中时的提示文案 | N
sub-titles | Array | [] | 每级展示的次标题。TS 类型：`Array<string>` | N
theme | String | step | 展示风格。可选项：step/tab | N
title | String / Slot | - | 标题。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
value | String / Number | null | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N
visible | Boolean | false | 是否展示 | N

### Cascader Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: string \| number, selectedOptions: string[])` | `1.0.1`。值发生变更时触发
close | `(trigger: TriggerSource)` | `1.0.1`。关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/cascader/type.ts)。<br/>`type TriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/>
pick | `(value: string \| number, index: number)` | `1.0.1`。选择后触发
