
const props = `

### Space Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
align | String | - | 对齐方式。可选项：start/end/center/baseline | N
breakLine | Boolean | false | 是否自动换行，仅在 horizontal 时有效	 | N
direction | String | horizontal | 间距方向。可选项：vertical/horizontal | N
separator | String / TNode | - | 分隔符。TS 类型：\`string \| TNode\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts) | N
size | String / Number / Array | 'medium' | 间距大小。TS 类型：\`SpaceSize \| SpaceSize[]\` \`type SpaceSize = number \| string \| SizeEnum\`。[通用类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/common/common.ts)。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/space/type.ts) | N

`;
module.exports = {
  props,
};

