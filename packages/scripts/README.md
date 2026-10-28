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

## 生成结果

| 框架            | 本地目录                                 |
| --------------- | ---------------------------------------- |
| `Vue(PC)`       | `packages/products/tdesign-vue`          |
| `VueNext(PC)`   | `packages/products/tdesign-vue-next`     |
| `React(PC)`     | `packages/products/tdesign-react`        |
| `Vue(Mobile)`   | `packages/products/tdesign-mobile-vue`   |
| `React(Mobile)` | `packages/products/tdesign-mobile-react` |
| `Miniprogram`   | `packages/products/tdesign-miniprogram`  |

## 脚本模块

| 路径                  | 职责                       |
| --------------------- | -------------------------- |
| `data.js`             | 加载 `packages/data`       |
| `lint.js`             | 校验记录结构               |
| `cli/`                | 通过本地服务写入数据       |
| `index.js`            | 生成文档、类型和 props     |
| `docs/`、`types/`     | 文档与类型生成             |
| `vscode/`、`helper/`  | 编辑器提示与代码提示       |
| `configurable-props/` | 可配置属性                 |
| `vitest/`             | 测试用例                   |
| `map.json`            | 平台、类别、类型和组件映射 |
