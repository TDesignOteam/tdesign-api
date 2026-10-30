# tdesign-generate-api

组件 API 数据按组件存放在 `packages/data`，该目录是唯一数据源。服务、CLI 和生成脚本直接读取这些 JSON 文件。

组件清单、插件和 TS 类型登记在 `packages/scripts/map.json`。未登记的数据文件、以及未合并到父组件的独立 TS 类型，**不会**单独输出文档 / `type.ts` / `props.ts` 目录。

默认产物写到本仓库 `packages/products/<框架>`。按组件、按框架按需导出，不要全量刷新 `props.ts` / `md`。

## 常用命令

| 命令                                     | 作用                                     |
| -------------------------------------- | -------------------------------------- |
| `pnpm api:add --help`                  | 给已有组件新增 API                            |
| `pnpm api:update --help`               | 修改已有 API                               |
| `pnpm api:lint`                        | 校验并自动修复部分格式，写回 `packages/data`         |
| `pnpm api:docs -- --help`              | 导出文档、类型、props                          |
| `pnpm api:vscode -- '<framework>'`     | 生成 vscode-tdesign 插件用的属性说明             |
| `pnpm api:completion -- '<framework>'` | 生成 Vetur / Volar 模板补全                  |
| `pnpm api:test`                        | 生成 / 联调 vitest 用例，见 `vitest/README.md` |
| `pnpm api:configurable`                | 生成可配置 props JSON                       |

`api:add` / `api:update` 执行前先看 `--help`。对象类型使用 `--field_type Object`，`--custom_field_type` 写成 `Name【interface Name { key?: Type }】`。

## `pnpm api:docs`

一次只生成**一个组件 + 一个框架**。多个组合分别执行。

```bash
pnpm api:docs -- --help
pnpm api:docs -- <component> '<framework>' [flags]
```

### 框架

| 端      | `api:add` / `api:update` 的 `--platform_framework` | `api:docs`（各执行一次）                           |
| ------ | ------------------------------------------------- | ------------------------------------------- |
| Web    | `Vue(PC),React(PC)`                               | `Vue(PC)`、`VueNext(PC)`、`React(PC)`         |
| 移动端    | `Vue(Mobile),React(Mobile),Miniprogram`           | `Vue(Mobile)`、`React(Mobile)`、`Miniprogram` |
| UniApp | `UniApp`                                          | `UniApp`                                    |

`Vue(PC)` 是 Vue2，`VueNext(PC)` 是 Vue3。未指定 flags 时不要加 flags。

```bash
# 单组件：文档 + type.ts + props / defaultProps
pnpm api:docs -- Dialog 'Vue(PC)'
pnpm api:docs -- Dialog 'VueNext(PC)'
pnpm api:docs -- Dialog 'React(PC)'

# Vue2 里用 useDefault / useVModel 的受控组件，必须带 useDefault
pnpm api:docs -- Select 'Vue(PC)' useDefault

# 直接写到同级组件库仓库
pnpm api:docs -- Button 'VueNext(PC)' finalProject
```

`Vue(PC)` 需要 `useDefault` 的组件：Table、RangeInput、SelectInput、TagInput、Select、TreeSelect、Cascader、DatePicker、TimePicker、Upload、Menu、AutoComplete。`VueNext(PC)`、`Vue(Mobile)` 会自动按 `useDefault` 生成 props。

### 全量文档

全量只允许出文档，且必须带 `onlyDocs`，不要带 `useDefault`。类型和 props 请按组件单独导出。

```bash
pnpm api:docs -- ALL 'Vue(PC)' onlyDocs
pnpm api:docs -- ALL 'VueNext(PC)' onlyDocs
pnpm api:docs -- ALL 'React(PC)' onlyDocs
pnpm api:docs -- ALL 'Vue(Mobile)' onlyDocs
pnpm api:docs -- ALL 'React(Mobile)' onlyDocs
pnpm api:docs -- ALL 'Miniprogram' onlyDocs
pnpm api:docs -- ALL 'UniApp' onlyDocs
```

全量文档只处理 `map.json` 里已登记的名称。中英文各跑一遍，每次中文导出都会把语言重置为 `zh`，避免上一轮英文残留。

### flags

多项用逗号连接，例如 `useDefault,finalProject`。

| name          | description                                 |
| ------------- | ------------------------------------------- |
| finalProject  | 写到同级组件库。默认写本仓库 `packages/products`          |
| onlyDocs      | 只出文档。`ALL` 时必须带上                            |
| useDefault    | 仅 Vue2 需要。`useDefault` / `useVModel` 受控组件必带 |
| vitest        | 同时输出测试用例                                    |
| isUseUnitTest | 同时输出单元测试                                    |

## 产物规则

父子关系统一由 `config/files-combine.js` 决定：

- `COMPONENT_API_MD_MAP`（及 Mobile / Mini 覆盖）：文档合并到父组件目录
- `TYPES_COMBINE_MAP`：`type.ts` 合并到父组件目录
- 仅文档需要、类型已在 `common.ts` 或父组件内联的 TS（如 `TScroll`、`ScrollbarValues`）不要再单独建目录

`map.json` 里 `type: "TS"` 的是类型，`type: "plugin"` 的是插件，二者都不出 `props.ts`。未在 map 登记的名称不出独立目录。

### Vue / UniApp / 小程序 `props.ts`

- 类型导入一律 `import type`
- `from 'vue'` 写在内部 `./type` 前面，import 之间不插空行
- `String` 且无默认值时输出 `default: ''`，避免 `'undefined'`

```ts
import type { PropType } from 'vue';
import type { TdDialogProps } from './type';
export default {
```

### React `type.ts`

- 类型导入一律 `import type`
- `from 'react'` 写在组件 / `common` 前面

```ts
import type { MouseEvent, KeyboardEvent } from 'react';
import type { ButtonProps } from '../button';
import type { TNode, Styles, AttachNode } from '../common';
```

### 文档语言

`generateDocs` 中文不传 `language`，英文传 `language: 'en'`。模块级语言状态用 `language || 'zh'`，同一进程里先英后中不会把中文 md 写成英文。

## `pnpm api:vscode`

生成 vscode-tdesign 插件用的属性说明，不是模板补全。

```bash
pnpm api:vscode -- 'Vue(PC)'
pnpm api:vscode -- 'React(PC)'
```

## `pnpm api:completion`

生成 Vue / UniApp 模板补全：`helper/` 下的 `web-types.json`、`tags.json`、`attributes.json`，以及 `global.d.ts`。

```bash
pnpm api:completion -- 'Vue(PC)'
pnpm api:completion -- 'VueNext(PC)'
pnpm api:completion -- 'Vue(Mobile)'
pnpm api:completion -- 'UniApp'

# 写到同级组件库
pnpm api:completion -- 'VueNext(PC)' 1 finalProject
```
