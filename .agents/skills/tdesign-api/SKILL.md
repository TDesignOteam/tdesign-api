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

## 1. 新增或更新

执行前必须先读对应帮助文档，再执行命令，中间避免查阅仓库。

### 新增

用户需求为新增、添加、加一个属性/事件时使用。

```bash
pnpm api:add --help
pnpm api:add --<options>
```

### 更新

用户需求为更新、修改、调整描述/默认值/类型时用。

假如无法匹配已有 API，跟用户确认。

```bash
pnpm api:update --help
pnpm api:update --<options>
```

### 约束

1. 对象类型（用户给出 `{ key?: Type }` 字面量时）：
   - `--field_type Object`
   - `--custom_field_type` 参数参考 `Name【interface Name { ... }】`。其中 `Name` 为用户指定的类型名；未指定则用组件名字和 `field_name` 的 PascalCase，形如 `ComponentFieldName`。

2. 用户只给类型、没有描述时，补全中英文 `field_desc_zh`、`field_desc_en`。其他将传入的必填参数原文不足时，停止流程，向用户确认。

## 2. 校验格式

```bash
pnpm api:lint
```

`api:lint` 会自动修复部分格式问题，并写回数据。

若仍失败时，根据报错信息，使用 `api:update` 修改内容后重新校验。

## 3. 导出文档与类型

```bash
pnpm api:docs -- --help
pnpm api:docs -- <component> '<framework>'
pnpm api:docs -- <component> '<framework>' finalProject
```

- `<component>`：目标组件名称。
- 除非用户明确要求，禁止添加 `vitest`、`onlyDocs`，Vue2 受控组件需要时添加 `useDefault`。

## 4. 验收产物

对照组件库 `git show HEAD:<file>` 与当前导出物。

### 4.1 类型

对刚导出的组件目录进行类型检查。如果报错则修复生成器或 API 数据后重导，禁止把错误类型留在组件库。

### 4.2 额外 API

只验收 `finalProject` 写入的组件库本体。`packages/products` 必须与数据源一致，禁止按组件库现状回删。

对比组件库 `HEAD` 与本次 `finalProject` 导出，列出新出现的 API 名（`md` 表格行、`type.ts` 字段、`props.ts` / `defaultProps.ts`）。

对于组件库未实现的项，在组件库内去除相关数据，并告知用户。

允许留在组件库的只有本轮 `api:add` / `api:update` 的 `field_name`，以及用户明确要求同步到组件库的项。
