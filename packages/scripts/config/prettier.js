/**
 * 生成产物（type.ts、defaultProps、vitest 等）使用的 Prettier 配置。
 * 生成脚本通过 config/format-generated-code.js 统一引用此配置。
 * 根目录 .prettierrc.mjs 与 packages/frontend/.prettierrc.mjs 均引用此文件。
 * 修改后需重新执行 npm run api:docs 才会影响已生成的文件。
 */
export default {
  parser: 'typescript',
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要有逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 换行符使用 lf
  endOfLine: 'lf',
};
