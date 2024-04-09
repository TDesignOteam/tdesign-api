:: BASE_DOC ::

## API

### Tag Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
closable | Boolean / Object | false | 标签是否可关闭 | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | String / Object / Slot | - | 标签中的图标，可自定义图标呈现。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
max-width | String / Number | - | 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large/extra-large | N
theme | String | default | 组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success | N
variant | String | dark | 标签风格变体。可选项：dark/light/outline/light-outline | N

### Tag Events

名称 | 参数 | 描述
-- | -- | --
click | - | 点击时触发
close | - | 如果关闭按钮存在，点击关闭按钮时触发
### Tag External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### CheckTag Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
checked | Boolean | undefined | 标签选中的状态，默认风格（theme=default）才有选中态 | N
default-checked | Boolean | undefined | 标签选中的状态，默认风格（theme=default）才有选中态。非受控属性 | N
closable | Boolean | false | 标签是否可关闭 | N
content | String / Number / Array / Slot | - | 组件子元素；传入数组时：[选中内容，非选中内容]。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
disabled | Boolean | false | 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 | N
icon | String / Object / Slot | - | 标签图标。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
shape | String | square | 标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark | N
size | String | medium | 标签尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
variant | String | dark | `0.26.0`。标签风格变体。可选项：dark/light/outline/light-outline | N

### CheckTag Events

名称 | 参数 | 描述
-- | -- | --
change | `(checked: boolean)` | 状态切换时触发
click | - | 点击标签时触发
close | \- | 如果关闭按钮存在，点击关闭按钮时触发
### CheckTag External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
