:: BASE_DOC ::

## API


### NoticeBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | String / Array | - | 文本内容 | N
direction | String | horizontal | 滚动方向。可选项：horizontal/vertical | N
interval | Number | 2000 | 间隔时间【仅在 direction='vertical' 有效】 | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放【仅在 direction='horizontal' 有效】。TS 类型：`boolean \| NoticeBarMarquee` `interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/notice-bar/type.ts) | N
operation | String | - | 右侧额外信息 | N
prefix-icon | String / Boolean / Object | true | 前缀图标。值为字符串表示图标名称，值为 `false` 表示不显示前缀图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标 | N
suffix-icon | String / Object | - | 后缀图标。值为字符串表示图标名称。值为 `Object` 类型，表示透传至 `icon`，不传表示不显示后缀图标 | N
theme | String | info | 内置主题。可选项：info/success/warning/error | N
visible | Boolean | false | 显示/隐藏 | N
default-visible | Boolean | undefined | 显示/隐藏。非受控属性 | N

### NoticeBar Slots

名称 | 描述
-- | --
content | 文本内容
operation | 右侧额外信息
prefix-icon | 前缀图标
suffix-icon | 后缀图标

### NoticeBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(current: number, source: '' \| 'autoplay' \| 'touch')` | 当 `direction="vertical"` 时轮播切换时触发
click | `(trigger: NoticeBarTrigger)` | 点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>

### NoticeBar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-operation | 右侧额外信息样式类
t-class-prefix-icon | 前置图标样式类
t-class-suffix-icon | 后置图标样式类
