:: BASE_DOC ::

## API


### NoticeBar Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
content | TNode | - | 文本内容。TS 类型：`string \| string[] \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
direction | String | horizontal | 滚动方向。可选项：horizontal/vertical | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：`boolean \| NoticeBarMarquee` `interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/notice-bar/type.ts) | N
operation | TNode | - | 右侧额外信息。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
prefixIcon | TElement | - | 前缀图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
suffixIcon | TElement | - | 后缀图标。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts) | N
theme | String | info | 内置主题。可选项：info/success/warning/error | N
visible | Boolean | false | 显示/隐藏 | N
defaultVisible | Boolean | false | 显示/隐藏。非受控属性 | N
onChange | Function |  | TS 类型：`(current: number, context: { source: NoticeBarChangeSource }) => void`<br/>当 `direction="vertical"` 时轮播切换时触发。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarChangeSource = '' \| 'autoplay' \| 'touch'`<br/> | N
onClick | Function |  | TS 类型：`(trigger: NoticeBarTrigger) => void`<br/>点击事件。[详细类型定义](https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/> | N
