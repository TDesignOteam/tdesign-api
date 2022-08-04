## tdesign-generate-api

### npm run api:download

下载最新的 API 数据

### npm run api:docs

**自动生成 API 文档、Types 定义、Props 定义**

如果需要直接输出到项目中，可使用参数 `finalProject`，即 `npm run api:docs Button 'React(PC)' finalProject`

```bash
# Vue2, 使用 map-props 实现的受控和非受控，使用这个生成 API
npm run api:docs Button 'Vue(PC)'
# Vue2, 使用 useDefault/useVModel 实现的受控和非受控，使用这个生成 API
npm run api:docs Button 'Vue(PC)' useDefault
# Vue3
npm run api:docs Button 'VueNext(PC)'
npm run api:docs Button 'React(PC)'
# Vue3
npm run api:docs Button 'Vue(Mobile)'
npm run api:docs Button 'React(Mobile)'
npm run api:docs Button 'Miniprogram'
```

**自动生成某框架全部 API 文档（包含不同的语言）**

```bash
# Vue2
npm run api:docs ALL 'Vue(PC)' onlyDocs
npm run api:docs ALL 'React(PC)' onlyDocs
# Vue3
npm run api:docs ALL 'VueNext(PC)' onlyDocs
# Vue3
npm run api:docs ALL 'Vue(Mobile)' onlyDocs
npm run api:docs ALL 'React(Mobile)' onlyDocs
npm run api:docs ALL 'Miniprogram' onlyDocs
```

**参数组合使用**

```bash
npm run api:docs Button 'Vue(PC)' useDefault,finalProject,onlyDocs,isUseUnitTest
```

| name | description |
| -- | -- |
| finalProject | 是否直接输出 API 相关产物到各个仓库项目中，默认输出当前项目 `tdesign-api` |
| onlyDocs | 是否仅输出文档，不输出 TS 定义 |
| useDefault | 只有 Vue2 需要关注这个参数。使用 map-props 实现受控时不需要该参数，使用 useDefault/useVModel 实现受控时，则一定需要该参数 |
| isUseUnitTest | 是否输出单测用例（实践组件不多，实验性功能） |


## npm run api:vscode

自动生成 vscode 提示语

```bash
npm run api:vscode 'Vue(PC)'
npm run api:vscode 'React(PC)'
```
