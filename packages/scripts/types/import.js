/**
 * 将 import 语句统一为 type-only。已是 import type 则原样返回。
 */
function toTypeImport(statement) {
  if (!statement) return statement;
  if (/^\s*import\s+type\b/.test(statement)) return statement;
  return statement.replace(/^(\s*)import\s+/, '$1import type ');
}

/**
 * 生成 type-only named import。
 * formatTypeImport('PropType', 'vue') => import type { PropType } from 'vue';
 */
function formatTypeImport(names, from) {
  const list = Array.isArray(names) ? names.filter(Boolean).join(', ') : names;
  return `import type { ${list} } from '${from}';`;
}

export { toTypeImport, formatTypeImport };
