:: BASE_DOC ::

## API
### Drawer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
close-on-overlay-click | Boolean | true | 点击蒙层时是否触发抽屉关闭事件 | N
destroy-on-close | Boolean | false | 抽屉关闭时是否销毁节点 | N
items | Array | - | 抽屉里的列表项。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts) | N
placement | String | right | 抽屉方向。可选项：left/right | N
show-overlay | Boolean | true | 是否显示遮罩层 | N
style | String | - | 自定义组件样式 | N
visible | Boolean | false | 组件是否可见 | N
z-index | Number | - | 抽屉层级，样式默认为 11500 | N

### Drawer Events

名称 | 参数 | 描述
-- | -- | --
close | `(trigger: DrawerEventSource)` | 关闭事件，取消按钮点击时、关闭按钮点击时、点击蒙层时均会触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/drawer/type.ts)。<br/>`type DrawerEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'`<br/>
item-click | `(index: number; item: DrawerItem)` | 点击抽屉里的列表项
overlay-click | \- | 如果蒙层存在，点击蒙层时触发
