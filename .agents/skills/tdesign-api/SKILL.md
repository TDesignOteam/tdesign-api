---
name: tdesign-api
description: 用于新增或更新 TDesign 组件 API，校验定义并导出文档与类型。
---

# TDesign 组件 API 管理

## 0. 执行流程

严格按顺序完成，避免查阅仓库和手改数据，禁止跳过或调整步骤：

1. 根据任务类型，读取帮助文档
2. 根据用户提供的信息和命令帮助，执行新增或更新命令
3. 执行校验命令，确保 API 格式通过
4. 读取文档导出帮助，逐个执行对应框架的命令，导出数据到当前仓库
5. 向用户确认格式是否正确，没问题后导出数据到指定组件库仓库
6. 验收导出文件

| 框架   | `api:add` / `api:update`                        | `api:docs`                                                          |
| ------ | ----------------------------------------------- | ------------------------------------------------------------------- |
| Web 端 | `Vue(PC),React(PC)`                             | `Vue(PC)`、`VueNext(PC)`、`React(PC)`                               |
| 移动端 | `Vue(Mobile),React(Mobile),Miniprogram`         | `Vue(Mobile)`、`React(Mobile)`、`Miniprogram`                       |
| UniApp | `UniApp`                                        | `UniApp`                                                            |

组件库仓库路径需要与 `tdesign-api` 同级。

## 1. 数据源与目录

- `packages/data` 是唯一数据源，服务、CLI、生成脚本都从这里读，禁止绕开命令手改数据。
- 默认产物写到本仓库 `packages/products/<框架>`，按组件、按框架按需导出，不要全量刷新 `props.ts` / `md`。
- 组件清单、插件、TS 类型登记在 `packages/scripts/map.json`。未登记的数据文件、未合并进父组件的独立 TS 类型，不会单独输出文档 / `type.ts` / `props.ts`。

## 2. 新增或更新

执行前必须先读对应帮助文档，再执行命令，中间避免查阅仓库。

### 新增

用户需求为新增、添加、加一个属性/事件时使用。

```bash
pnpm api:add --help
pnpm api:add --<options>
```

**优先复用已有定义**：新增前先在 `packages/data` 和 `map.json` 里找是否已存在等价的 API 定义（含独立 TS 类型）。能复用就复用，不重复新增。

### 更新

用户需求为更新、修改、调整描述/默认值/类型时用。

假如无法匹配已有 API，跟用户确认，不擅自新增。

```bash
pnpm api:update --help
pnpm api:update --<options>
```

### 约束

1. 对象类型（用户给出 `{ key?: Type }` 字面量时）：
   - `--field_type Object`
   - `--custom_field_type` 参数参考 `Name【interface Name { ... }】`。其中 `Name` 为用户指定的类型名；未指定则用组件名字和 `field_name` 的 PascalCase，形如 `ComponentFieldName`。

2. 用户只给类型、没有描述时，补全中英文 `field_desc_zh`、`field_desc_en`。其他将传入的必填参数原文不足时，停止流程，向用户确认。

## 3. 校验格式

```bash
pnpm api:lint
```

`api:lint` 会自动修复部分格式问题，并写回 `packages/data`。

若仍失败时，根据报错信息，使用 `api:update` 修改内容后重新校验。

## 4. 导出文档与类型

修改 API 后必须重新生成对应的文档副本（md / `type.ts` / `props`），不能只改数据不留产物。

```bash
pnpm api:docs -- --help
pnpm api:docs -- <component> '<framework>'
pnpm api:docs -- <component> '<framework>' finalProject
```

- 一次只做一个组件 + 一个框架，多组合分别执行。
- Web 依次导出 `Vue(PC)`、`VueNext(PC)`、`React(PC)`；移动端依次导出 `Vue(Mobile)`、`React(Mobile)`、`Miniprogram`；UniApp 单独跑。
- 除非用户明确要求，禁止添加 `vitest`、`onlyDocs`；Vue2 受控组件（Table、Select、Upload 等）需要时添加 `useDefault`。
- 全量 `ALL` 只允许 `onlyDocs`，且不带 `useDefault`；`ALL` 只处理 `map.json` 已登记的名称，中英文各跑一遍。

## 5. 验收产物

对照组件库 `git show HEAD:<file>` 与当前导出物。

### 5.1 类型

对刚导出的组件目录进行类型检查。如果报错则修复生成器或 API 数据后重导，禁止把错误类型留在组件库。

### 5.2 额外 API

只验收 `finalProject` 写入的组件库本体。`packages/products` 必须与数据源一致，禁止按组件库现状回删。

对比组件库 `HEAD` 与本次 `finalProject` 导出，列出新出现的 API 名（`md` 表格行、`type.ts` 字段、`props.ts` / `defaultProps.ts`）。

对于组件库未实现的项，在组件库内去除相关数据，并告知用户。

允许留在组件库的只有本轮 `api:add` / `api:update` 的 `field_name`，以及用户明确要求同步到组件库的项。

## 6. 其他命令行工具

按框架执行；需要写组件库时加 `finalProject`。

- `pnpm api:vscode -- '<framework>'`：生成 vscode-tdesign 插件用的属性说明
- `pnpm api:completion -- '<framework>'`：生成 Vetur / Volar 模板补全
- `pnpm api:test`：生成 / 联调 vitest 用例
- `pnpm api:configurable`：生成可配置 props JSON

## 7. 提交方式

本地生成的文件须整体以 PR 提交并找人 review。PR 合并后由 GitHub Action 自动向对应组件仓库建分支提交。
