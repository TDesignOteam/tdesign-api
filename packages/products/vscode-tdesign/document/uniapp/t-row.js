
const props = `

### Row Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | top | 纵向对齐方式，CSS 属性 \`align-items\` 值。其中 \`top\` 和 \`start\` 等效；\`middle\` 和 \`center\` 等效；\`bottom\` 和 \`end\` 等效。可选项：start/end/center/stretch/baseline/top/middle/bottom | N
gutter | Number / Object / Array | 0 | 栅格间隔，示例：\`{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }\`。当数据类型为 Number 和 Object 时，用于指定横向间隔。当数据类型为数组时，第一个参数为横向间隔，第二个参数为纵向间隔， [水平间隔, 垂直间隔]。TS 类型：\`number \|  GutterObject \| Array<GutterObject \| number>\` \`interface GutterObject { xs?: number; sm?: number; md?: number; lg?: number, xl?: number; xxl?: number; } \`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/row/type.ts) | N
gutter | String / Number | - | 列之间的间距（默认单位px） | N
justify | String | start | flex 布局下的水平排列方式。可选项：start/end/center/space-around/space-between | N
tag | String | div | 自定义元素标签 | N

### Row Slots

名称 | 描述
-- | --
- | 默认插槽，行内容

`;
module.exports = {
  props,
};

