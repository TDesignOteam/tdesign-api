
const props = `

### Transition Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
appear | Boolean | false | 首次出现是否展示动画 | N
destoryOnHide | Boolean | false | 隐藏时是否销毁内容 | N
durations | Number / Array | - | 指定过渡时间。TS 类型：\`number \| number[]\` | N
name | String | t-transition | 过渡类名 | N
visible | Boolean | false | 是否显示 | N

`;
module.exports = {
  props,
};

