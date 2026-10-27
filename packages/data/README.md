# API data

该目录是 TDesign 组件 API 的唯一数据源。每个 JSON 文件保存一个组件家族的 API 数组，文件名使用家族名。例如 `Dialog.json` 同时包含 `Dialog`、`$Dialog`、`$Dialog.alert` 和 `$Dialog.confirm`；各条记录仍通过 `component` 字段区分。

类别、平台和类型直接保存可读名称，例如 `"field_category": "Props"`、`"platform_framework": ["Vue(PC)", "React(PC)"]`、`"field_type": ["Object"]`。HTTP、管理页、CLI 和生成脚本都直接使用这套结构。

源记录采用稀疏结构：

- `id` 用于稳定更新记录及关联测试数据，必须保留。
- `field_required`、`deprecated`、`html_attribute`、`support_default_value` 是布尔字段；仅值为 `true` 时写入，省略表示 `false`。
- `field_enum` 使用字符串数组；`version` 保存解析后的 JSON 值。
- 空字符串、`null`、恒定的 `readonly` 以及可由 Git 追踪的创建/更新时间不写入源数据。
- `$Message.info` 等插件方法需要稳定的参数顺序，因此仅这些记录保存显式 `order`，不再借用创建时间排序。

- 使用 `pnpm api:add -- <file.json>` 新增 API。
- 使用 `pnpm api:update -- <file.json>` 修改 API。
- 使用 `pnpm api:check` 校验全部数据。
- 文档、类型、管理页面和 CLI 都直接读取这里的数据，不再依赖 SQLite 或聚合的 `api.json`。

提交 API 变更时，只提交实际发生变化的组件文件以及对应生成产物。
