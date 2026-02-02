:: BASE_DOC ::

## API

### Cascader Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
check-strictly | Boolean | false | 父子节点选中状态不再关联，可各自选中或取消 | N
close-btn | Boolean | true | 关闭按钮 | N
keys | Object | - | 用来定义 value / label / children / disabled 在 `options` 中对应的字段别名。TS 类型：`CascaderKeysType` `type CascaderKeysType = TreeKeysType`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/cascader/type.ts) | N
options | Array | [] | 可选项数据源。TS 类型：`Array<CascaderOption>` | N
placeholder | String | 选择选项 | 未选中时的提示文案 | N
sub-titles | Array | [] | 每级展示的次标题。TS 类型：`Array<string>` | N
theme | String | step | 展示风格。可选项：step/tab | N
title | String | - | 标题 | N
value | String / Number | null | 选项值 | N
default-value | String / Number | undefined | 选项值。非受控属性 | N
visible | Boolean | false | 是否展示 | N

### Cascader Events

名称 | 参数 | 描述
-- | -- | --
change | `(value: string \| number, selectedOptions: string[])` | `1.0.1`。值发生变更时触发
close | `(trigger: CascaderTriggerSource)` | `1.0.1`。关闭时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/cascader/type.ts)。<br/>`type CascaderTriggerSource = 'overlay' \| 'close-btn' \| 'finish'`<br/>
pick | `(value: string \| number, label: string, index: number, level: number)` | `1.0.1`。选择后触发

### Cascader Slots

名称 | 描述
-- | --
close-btn | 自定义 `close-btn` 显示内容
header | `1.9.1`。头部
middle-content | `1.12.2`。中间内容
title | 自定义 `title` 显示内容
