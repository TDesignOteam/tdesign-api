---
name: tdesign-api
description: 用于新增或更新 TDesign 组件 API，校验定义并导出文档与类型。
---

# TDesign 组件 API 管理

## 0. 执行流程

严格按顺序完成，避免查阅仓库和手改数据，不得跳过或调整步骤：

1. 根据任务类型，读取帮助文档。
2. 根据用户提供的信息和命令帮助，执行新增或更新命令。
3. 执行校验命令，确保 API 定义通过。
4. 读取文档导出帮助，按表格逐个执行对应框架的导出命令。

| 框架   | `api:add` / `api:update` `--platform_framework` | `api:docs` `<framework>`（各执行一次）        |
| ------ | ----------------------------------------------- | --------------------------------------------- |
| Web 端 | `Vue(PC),React(PC)`                             | `Vue(PC)`、`VueNext(PC)`、`React(PC)`         |
| 移动端 | `Vue(Mobile),React(Mobile),Miniprogram`         | `Vue(Mobile)`、`React(Mobile)`、`Miniprogram` |
| UniApp | `UniApp`                                        | `UniApp`                                      |

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

## 2. 校验

```bash
pnpm api:lint
```

`api:lint` 会自动修复部分格式问题，并写回数据。

若仍失败时，根据报错信息，使用 `api:update` 修改内容后重新校验。

## 3. 导出文档与类型

```bash
pnpm api:docs -- --help
pnpm api:docs -- <component> '<framework>'
```

- `<component>`：目标组件名称。
- `<framework>`：按第 0 节表格逐个执行，一次一个。
- 用户未指定 flags 时不要加 flags。不要加 `finalProject`、`vitest`、`onlyDocs`、`useDefault`。
