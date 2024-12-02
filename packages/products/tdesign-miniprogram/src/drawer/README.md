:: BASE_DOC ::

## API

### Drawer Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
close-on-overlay-click | Boolean | undefined | 点击蒙层时是否触发抽屉关闭事件 | N
destroy-on-close | Boolean | false | 抽屉关闭时是否销毁节点 | N
footer | Slot | - | `0.29.0`。抽屉的底部。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
items | Array | - | 抽屉里的列表项。TS 类型：`DrawerItem[]` `interface DrawerItem { title: string; icon: string; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts) | N
placement | String | right | 抽屉方向。可选项：left/right | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
title | String / Slot | - | `0.29.0`。抽屉的标题。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
visible | Boolean | false | 组件是否可见 | N
z-index | Number | 11500 | 抽屉层级，样式默认为 11500 | N

### Drawer Events

名称 | 参数 | 描述
-- | -- | --
close | `(trigger: DrawerTriggerSource)` | 关闭时触发。。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts)。<br/>`type DrawerTriggerSource = 'overlay'`<br/>
item-click | `(index: number; item: DrawerItem)` | 点击抽屉里的列表项
overlay-click | \- | 如果蒙层存在，点击蒙层时触发
