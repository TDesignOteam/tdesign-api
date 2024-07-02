:: BASE_DOC ::

## API

### Timeline Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
label-align | String | left | label info placement。options: left/right/alternate/top/bottom | N
layout | String | vertical | time line layout。options: horizontal/vertical | N
mode | String | alternate | The position relationship between the label and the content text, 'alternate' is displayed on both sides of the axis, and 'same' is displayed on the same side。options: alternate/same | N
reverse | Boolean | false | \- | N
theme | String | default | options: default/dot | N


### TimelineItem Props

name | type | default | description | required
-- | -- | -- | -- | --
style | Object | - | CSS(Cascading Style Sheets) | N
custom-style | Object | - | CSS(Cascading Style Sheets)，used to set style on virtual component | N
content | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
dot | Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
dot-color | String | primary | Typescript：`string` | N
label | String / Slot | - | [see more ts definition](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts) | N
label-align | String | - | options: left/right/top/bottom | N

### TimelineItem Events

name | params | description
-- | -- | --
click | `(detail: { e: MouseEvent; item: TdTimelineItemProps })` | trigger on click
