:: BASE_DOC ::

## API

### NoticeBar Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | String / Array / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
direction | String | horizontal | options: horizontal/vertical | N
interval | Number | 2000 | \- | N
marquee | Boolean / Object | false | Typescript：`boolean \| NoticeBarMarquee` `interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }`。[see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/notice-bar/type.ts) | N
operation | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
prefix-icon | String / Boolean / Object / Slot | true | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
suffix-icon | String / Object / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts) | N
theme | String | info | options: info/success/warning/error | N
visible | Boolean | false | \- | N
default-visible | Boolean | undefined | uncontrolled property | N

### NoticeBar Events

name | params | description
-- | -- | --
change | `(current: number, source: '' \| 'autoplay' \| 'touch')` | \-
click | `(trigger: NoticeBarTrigger)` | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>

### NoticeBar External Classes

className | Description
-- | --
t-class | \-
t-class-content | \-
t-class-operation | \-
t-class-prefix-icon | \-
t-class-suffix-icon | \-
