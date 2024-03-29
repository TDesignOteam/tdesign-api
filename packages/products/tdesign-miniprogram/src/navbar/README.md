:: BASE_DOC ::

## API
### Navbar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
animation | Boolean | true | 是否添加动画效果 | N
background | String | - | 背景 | N
delta | Number | 1 | 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack，只会触发一个 goback 事件供自行处理。 | N
external-classes | Array | - | 组件类名，分别用于设置组件外层元素、标题、左侧图标、首页图标、胶囊等元素类名。`['t-class', 't-class-title', 't-class-left-icon', 't-class-home-icon', 't-class-capsule']` | N
fixed | Boolean | true | 是否固定在顶部 | N
home-icon | String | - | 首页图标地址。值为 '' 或者 undefiend 则表示不显示返回图标，值为 'circle' 表示显示默认图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址 | N
left-icon | String | - | 左侧图标地址，值为 '' 或者 undefiend 则表示不显示返回图标，值为 'arrow-left' 表示显示返回图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址 | N
style | String | - | 自定义组件样式 | N
title | String / Slot | - | 页面标题 | N
title-max-length | Number | - | 标题文字最大长度，超出的范围使用 `...` 表示 | N
visible | Boolean | true | 是否显示 | N

### Navbar Events

名称 | 参数 | 描述
-- | -- | --
complete | \- | navigateBack 执行完成后触发（失败或成功均会触发）
fail | \- | navigateBack 执行失败后触发
go-back | \- | delta 值为 0 时，点击返回，触发该事件
go-home | \- | 点击 Home 触发
success | \- | navigateBack 执行成功后触发
