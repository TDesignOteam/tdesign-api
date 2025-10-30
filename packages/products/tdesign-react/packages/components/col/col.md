:: BASE_DOC ::

## API

### Col Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
flex | String / Number | - | flex 布局填充。CSS 属性 flex 值。示例：2 / 3 / '100px' / 'auto' / '1 1 200px' | N
lg | Number / Object | - | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象（小尺寸电脑）。TS 类型：`number \| BaseColProps` | N
md | Number / Object | - | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象（超小尺寸电脑）。TS 类型：`number \| BaseColProps` | N
offset | Number | 0 | 栅格左侧的间隔格数，间隔内不可以有栅格 | N
order | Number | 0 | 栅格顺序，flex 布局模式下有效 | N
pull | Number | 0 | 栅格向左移动格数 | N
push | Number | 0 | 栅格向右移动格数 | N
sm | Number / Object | - | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象（平板）。TS 类型：`number \| BaseColProps` | N
span | Number | - | 栅格占位格数，为 0 时相当于 display: none | N
tag | String | div | 自定义元素标签 | N
xl | Number / Object | - | ≥1400px 响应式栅格，可为栅格数或一个包含其他属性的对象（中尺寸电脑）。TS 类型：`number \| BaseColProps` | N
xs | Number / Object | - | <768px 响应式栅格，可为栅格数或一个包含其他属性的对象（手机）。TS 类型：`number \| BaseColProps` `interface BaseColProps { offset?: number; order?: number; pull?: number; push?: number; span?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/col/type.ts) | N
xxl | Number / Object | - | ≥1880px 响应式栅格，可为栅格数或一个包含其他属性的对象（大尺寸电脑）。TS 类型：`number \| BaseColProps` | N
