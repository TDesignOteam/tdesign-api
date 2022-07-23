## tdesign-generate-api

### npm run api:download

下载最新的 API 数据

### npm run api:docs

自动生成 API 文档、Types 定义、Props 定义

```bash
# 使用 map-props 实现的受控和非受控，使用这个生成 API
npm run api:docs Button 'Vue(PC)'
# 使用 useDefault/useVModel 实现的受控和非受控，使用这个生成 API
npm run api:docs Button 'Vue(PC)' useDefault
npm run api:docs Button 'VueNext(PC)'
npm run api:docs Button 'React(PC)'
npm run api:docs Button 'Vue(Mobile)'
npm run api:docs Button 'Miniprogram'
```

自动生成某框架全部 API 文档（包含不同的语言）

```bash
npm run api:docs ALL 'Vue(PC)' onlyDocs
npm run api:docs ALL 'React(PC)' onlyDocs
npm run api:docs ALL 'VueNext(PC)' onlyDocs
npm run api:docs ALL 'Vue(Mobile)' onlyDocs
npm run api:docs ALL 'React(Mobile)' onlyDocs
npm run api:docs ALL 'Miniprogram' onlyDocs
```

参数组合使用

```bash
npm run api:docs Button 'Vue(PC)' useDefault,finalProject,onlyDocs,isUseUnitTest
```


## npm run api:vscode

自动生成 vscode 提示语

```bash
npm run api:vscode 'Vue(PC)'
npm run api:vscode 'React(PC)'
```
