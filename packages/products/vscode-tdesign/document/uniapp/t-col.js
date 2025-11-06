
const props = `

### Col Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
flex | String / Number | - | flex 布局填充。CSS 属性 flex 值。示例：2 / 3 / '100px' / 'auto' / '1 1 200px' | N
lg | Number / Object | - | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象（小尺寸电脑）。TS 类型：\`number \| BaseColProps\` | N
md | Number / Object | - | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象（超小尺寸电脑）。TS 类型：\`number \| BaseColProps\` | N
offset | Number | 0 | 栅格左侧的间隔格数，间隔内不可以有栅格 | N
offset | String / Number | - | 列的偏移量（默认单位px） | N
order | Number | 0 | 栅格顺序，flex 布局模式下有效 | N
pull | Number | 0 | 栅格向左移动格数 | N
push | Number | 0 | 栅格向右移动格数 | N
sm | Number / Object | - | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象（平板）。TS 类型：\`number \| BaseColProps\` | N
span | Number | - | 栅格占位格数，为 0 时相当于 display: none | N
span | String / Number | - | 列的宽度（默认单位px） | N
tag | String | div | 自定义元素标签 | N
xl | Number / Object | - | ≥1400px 响应式栅格，可为栅格数或一个包含其他属性的对象（中尺寸电脑）。TS 类型：\`number \| BaseColProps\` | N
xs | Number / Object | - | <768px 响应式栅格，可为栅格数或一个包含其他属性的对象（手机）。TS 类型：\`number \| BaseColProps\` \`interface BaseColProps { offset?: number; order?: number; pull?: number; push?: number; span?: number }\`。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/col/type.ts) | N
xxl | Number / Object | - | ≥1880px 响应式栅格，可为栅格数或一个包含其他属性的对象（大尺寸电脑）。TS 类型：\`number \| BaseColProps\` | N

### Col Slots

名称 | 描述
-- | --
- | 默认插槽，列内容

`;
module.exports = {
  props,
};

