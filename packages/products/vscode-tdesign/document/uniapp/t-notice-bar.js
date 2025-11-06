
const props = `

### NoticeBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
content | String / Array / TNode | - | 文本内容。TS 类型：\`string \| string[] \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
direction | String | horizontal | 滚动方向。可选项：horizontal/vertical | N
interval | Number | 2000 | 间隔时间【仅在 direction='vertical' 有效】 | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放【仅在 direction='horizontal' 有效】。TS 类型：\`boolean \| NoticeBarMarquee\` \`interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/notice-bar/type.ts) | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：\`boolean \| NoticeBarMarquee\` \`interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/notice-bar/type.ts) | N
operation | String / TNode | - | 右侧额外信息。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
prefixIcon | TNode | - | 前缀图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
prefixIcon | String / Boolean / Object / TNode | true | 前缀图标。值为字符串表示图标名称，值为 \`false\` 表示不显示前缀图标，值为 \`Object\` 类型，表示透传至 \`icon\`，不传表示使用主题图标。TS 类型：\`string \| boolean \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
prefixIcon | Boolean / TNode | true | 用于自定义公告栏前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标。TS 类型：\`Boolean \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | TNode | - | 后缀图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
suffixIcon | String / Object / TNode | - | 后缀图标。值为字符串表示图标名称。值为 \`Object\` 类型，表示透传至 \`icon\`，不传表示不显示后缀图标。TS 类型：\`string \| object \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
theme | String | info | 内置主题。可选项：info/success/warning/error | N
visible | Boolean | false | 显示/隐藏 | N
defaultVisible | Boolean | false | 显示/隐藏。非受控属性 | N
onChange | Function |  | TS 类型：\`(current: number, source: '' \| 'autoplay' \| 'touch') => void\`<br/>当 \`direction="vertical"\` 时轮播切换时触发 | N
onChange | Function |  | TS 类型：\`(current: number, context: { source: NoticeBarChangeSource }) => void\`<br/>当 \`direction="vertical"\` 时轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/notice-bar/type.ts)。<br/>\`type NoticeBarChangeSource = '' \| 'autoplay' \| 'touch'\`<br/> | N
onClick | Function |  | TS 类型：\`(trigger: NoticeBarTrigger) => void\`<br/>点击事件。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/notice-bar/type.ts)。<br/>\`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';\`<br/> | N

### NoticeBar Events

名称 | 参数 | 描述
-- | -- | --
change | \`(current: number, source: '' \| 'autoplay' \| 'touch')\` | 当 \`direction="vertical"\` 时轮播切换时触发
change | \`(current: number, context: { source: NoticeBarChangeSource })\` | 当 \`direction="vertical"\` 时轮播切换时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/notice-bar/type.ts)。<br/>\`type NoticeBarChangeSource = '' \| 'autoplay' \| 'touch'\`<br/>
click | \`(trigger: NoticeBarTrigger)\` | 点击事件。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/notice-bar/type.ts)。<br/>\`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';\`<br/>

### NoticeBar Slots

名称 | 描述
-- | --
content | 文本内容
prefix-icon | 前缀图标
suffix-icon | 后缀图标

### NoticeBar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-operation | 右侧额外信息样式类
t-class-prefix-icon | 前置图标样式类
t-class-suffix-icon | 后置图标样式类

`;
module.exports = {
  props,
};

