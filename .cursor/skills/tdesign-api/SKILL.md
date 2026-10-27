---
name: tdesign-api
description: 新增、修改 TDesign 组件 API，并将文档与类型导出到本地。
---

# 录入组件 API

通过终端命令将数据写入 packages/data 中对应组件的 JSON 文件。数据通过校验后方可写入，文档、类型定义和管理页面均直接读取这些文件。具体字段及取值请参阅对应命令的 --help 帮助信息。

## 新增

`pnpm api:add -- <file.json>`

执行前必须阅读 `pnpm api:add -- --help`。

## 更新

`pnpm api:update -- <file.json>`

执行前必须阅读 `pnpm api:update -- --help`。

## 导出

`pnpm api:docs <component> '<framework>' [flags]`

每条命令接收一个 `component` 与一个 `framework`。导出多个组件或多个框架时，按组合分别执行。

| 参数        | 取值                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------- |
| `component` | 组件名，例如 `Button`。全量文档为 `ALL`                                                        |
| `framework` | `Vue(PC)`、`VueNext(PC)`、`React(PC)`、`Vue(Mobile)`、`React(Mobile)`、`Miniprogram`、`UniApp` |
| `flags`     | 可省略。多项用逗号连接：`finalProject`、`useDefault`、`onlyDocs`                               |

- 默认写入本仓库 `packages/products`。`finalProject` 写入同级组件库。
- `useDefault` 只用于 `Vue(PC)`。该组件的 props 由 `useDefault` / `useVModel` 实现受控时附带；由 `mapProps` 实现时省略。
- `onlyDocs` 只生成 API 文档。`component` 为 `ALL` 时附带 `onlyDocs`。

```bash
# 例如
pnpm api:docs Button 'Vue(PC)'
pnpm api:docs Button 'VueNext(PC)' finalProject
pnpm api:docs Button 'Vue(PC)' useDefault,finalProject
pnpm api:docs ALL 'Vue(PC)' onlyDocs
```
