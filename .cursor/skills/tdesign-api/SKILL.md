---
name: tdesign-api
description: 新增、修改、校验 TDesign 组件 API，并导出文档、类型、VS Code 提示和代码提示。
---

# 录入组件 API

通过终端命令将数据写入 `packages/data` 中对应组件的 JSON 文件。数据通过校验后方可写入。文档、类型定义和管理页面直接读取这些文件。字段与取值阅读对应命令的 `--help`。

## 新增

`pnpm api:add -- <file.json>`

执行前必须阅读 `pnpm api:add -- --help`。

## 更新

`pnpm api:update -- <file.json>`

执行前必须阅读 `pnpm api:update -- --help`。

## 校验

`pnpm api:lint`

校验组件数据文件、记录 ID 和字段格式。

## 导出

`pnpm api:docs <component> '<framework>' [flags]`

每条命令接收一个 `component` 与一个 `framework`。导出多个组件或多个框架时，按组合分别执行。

| 参数        | 取值                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------- |
| `component` | 组件名，例如 `Button`。全量文档为 `ALL`                                                        |
| `framework` | `Vue(PC)`、`VueNext(PC)`、`React(PC)`、`Vue(Mobile)`、`React(Mobile)`、`Miniprogram`、`UniApp` |
| `flags`     | 可省略。多项用逗号连接：`finalProject`、`useDefault`、`onlyDocs`、`vitest`                     |

- 默认写入本仓库 `packages/products`。`finalProject` 写入同级组件库。
- `onlyDocs` 只生成 API 文档。`component` 为 `ALL` 时附带 `onlyDocs`，同时省略 `useDefault`。
- `vitest` 同时输出测试用例。
- 从用户请求中取出 `component` 与 `framework`，按下表决定是否把 `useDefault` 写入命令。执行前读取 `packages/scripts/vitest/const/vue2-use-default.js`，文件里的数组与下表不一致时以文件为准。

| framework | component                                                                                                                                          | `useDefault` |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `Vue(PC)` | `Table`、`RangeInput`、`SelectInput`、`TagInput`、`Select`、`TreeSelect`、`Cascader`、`DatePicker`、`TimePicker`、`Upload`、`Menu`、`AutoComplete` | 附带         |
| `Vue(PC)` | 其他组件                                                                                                                                           | 省略         |
| 其他取值  | 任意                                                                                                                                               | 省略         |

```bash
pnpm api:docs Button 'Vue(PC)'
pnpm api:docs Button 'VueNext(PC)' finalProject
pnpm api:docs Select 'Vue(PC)' useDefault,finalProject
pnpm api:docs ALL 'Vue(PC)' onlyDocs
```

## VS Code 提示

`pnpm api:vscode '<framework>'`

```bash
pnpm api:vscode 'Vue(PC)'
pnpm api:vscode 'React(PC)'
```

## 代码提示

`pnpm api:helper '<framework>'`

`framework` 取 `Vue(PC)`、`VueNext(PC)`、`Vue(Mobile)`、`UniApp`。

```bash
pnpm api:helper 'Vue(PC)'
pnpm api:helper 'VueNext(PC)'
pnpm api:helper 'Vue(Mobile)'
```
