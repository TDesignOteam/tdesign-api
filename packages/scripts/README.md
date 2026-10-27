# tdesign-generate-api

组件 API 数据按组件存放在 `packages/data`，该目录是唯一数据源。服务、CLI 和生成脚本直接读取这些 JSON 文件，不再需要同步 SQLite 数据库或聚合的 `api.json`。

## pnpm api:check

校验组件数据文件、记录 ID、字段格式和派生字段。

## pnpm api:add / pnpm api:update

通过 JSON 草稿新增或修改 API，命令会启动本地服务并只写入对应组件的数据文件。执行前使用 `--help` 查看字段格式。

## npm run api:docs

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
npm run api:docs Button 'Vue(PC)' useDefault,finalProject,onlyDocs,vitest
```

| name | description |
| -- | -- |
| finalProject | 是否直接输出 API 相关产物到各个仓库项目中，默认输出当前项目 `tdesign-api` |
| onlyDocs | 是否仅输出文档，不输出 TS 定义 |
| useDefault | 只有 Vue2 需要关注这个参数。使用 map-props 实现受控时不需要该参数，使用 useDefault/useVModel 实现受控时，则一定需要该参数 |
| vitest | 是否同时输出单测用例 |

## npm run api:vscode

自动生成 vscode 提示语

```bash
npm run api:vscode 'Vue(PC)'
npm run api:vscode 'React(PC)'
```

## npm run api:helper

自动生成代码提示文件

```bash
npm run api:helper 'Vue(PC)'
npm run api:helper 'VueNext(PC)'
npm run api:helper 'Vue(Mobile)'
```

直接输出到项目仓库中

```bash
npm run api:helper 'Vue(PC)' 1 finalProject
npm run api:helper 'VueNext(PC)' 1 finalProject
npm run api:helper 'Vue(Mobile)' 1 finalProject
```
