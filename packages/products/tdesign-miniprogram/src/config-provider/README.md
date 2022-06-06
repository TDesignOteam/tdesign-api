:: BASE_DOC ::

## API

### GlobalConfigProvider

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
animation | Object | - | 动画效果控制，`ripple` 指波纹动画， `expand` 指展开动画，`fade` 指渐变动画。默认为 `{ include: ['ripple','expand','fade'], exclude: [] }`。TS 类型：`Partial<Record<'include'|'exclude', Array<AnimationType>>>` `type AnimationType = 'ripple' | 'expand' | 'fade'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/config-provider/type.ts) | N
class-prefix | String | t | CSS 类名前缀 | N

### InputConfig

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
placeholder | String | - | 语言配置，“请输入”占位符描述文本 | N
