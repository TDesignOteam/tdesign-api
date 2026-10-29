# 仓库架构

`packages/data` 是唯一数据源。管理页、HTTP 服务和生成脚本使用同一份语义化 JSON。生成结果默认写入 `packages/products`，也可以写入同级组件库。

## 目录

| 目录                | 职责                                         |
| ------------------- | -------------------------------------------- |
| `packages/data`     | 唯一数据源。每个 JSON 文件是一个组件家族     |
| `packages/server`   | HTTP 服务，直接读写 `packages/data`          |
| `packages/frontend` | 管理页，通过 HTTP 维护数据                   |
| `packages/scripts`  | 读取数据，生成文档、类型、props 和编辑器提示 |
| `packages/products` | 各框架生成结果的本地副本                     |

## `packages/scripts` 结构

```text
scripts/
├── map.json
├── core/             # 数据加载与共享工具
├── cli/              # pnpm api:add / api:update
├── lint/             # pnpm api:lint
├── generate/         # pnpm api:docs
├── docs/、types/     # 文档与类型实现
├── config/
├── vscode/           # pnpm api:vscode
├── completion/       # pnpm api:completion
├── configurable/     # pnpm api:configurable
├── unit/、vitest/    # pnpm:api:test
```

## 生成结果

| 框架            | 本地目录                                 |
| --------------- | ---------------------------------------- |
| `Vue(PC)`       | `packages/products/tdesign-vue`          |
| `VueNext(PC)`   | `packages/products/tdesign-vue-next`     |
| `React(PC)`     | `packages/products/tdesign-react`        |
| `Vue(Mobile)`   | `packages/products/tdesign-mobile-vue`   |
| `React(Mobile)` | `packages/products/tdesign-mobile-react` |
| `Miniprogram`   | `packages/products/tdesign-miniprogram`  |
