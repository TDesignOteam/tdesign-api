:: BASE_DOC ::

## API

### Link Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式 | N
content | String / TNode | - | 链接内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-web-components/blob/develop/packages/components/common.ts) | N
disabled | Boolean | undefined | 禁用链接。优先级：Link.disabled > Form.disabled | N
download | String / Boolean | - | 使得浏览器将链接的 URL 视为可下载资源 | N
hover | String | underline | 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法。可选项：color/underline | N
href | String | - | 跳转链接 | N
prefixIcon | TNode | - | 前置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-web-components/blob/develop/packages/components/common.ts) | N
suffixIcon | TNode | - | 后置图标。TS 类型：`TNode`。[通用类型定义](https://github.com/TDesignOteam/tdesign-web-components/blob/develop/packages/components/common.ts) | N
target | String | - | 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同 | N
onClick | Function |  | TS 类型：`(e: MouseEvent) => void`<br/>点击事件，禁用状态不会触发点击事件 | N
