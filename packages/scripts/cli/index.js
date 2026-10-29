import { scriptArgs } from '../core/utils.js';
import mapJson from '../map.json' with { type: 'json' };
import { parseFlags, parseRecords, validateRequest } from './normalize.js';
import { openStore } from './store/index.js';
import { findConflicts, findMatches } from './validate.js';

function optionList(options = []) {
  return options.map((item) => item.label).join(' | ');
}

function formatFields(rows, width) {
  const column = width ?? Math.max(...rows.map(([name]) => name.length));
  return rows.map(([name, desc]) => `  ${name.padEnd(column)}  ${desc}`).join('\n');
}

function printHelp(command, map) {
  const bin = command === 'update' ? 'pnpm api:update' : 'pnpm api:add';
  const requiredRows = [
    ['--component', '组件名'],
    ['--field_name', 'API 名称'],
    ['--field_category', optionList(map.field_category)],
    ['--platform_framework', optionList(map.platform_framework)],
  ];
  const optionalRows = [
    ['--field_type', optionList(map.field_type)],
    ['--custom_field_type', '自定义 TS 类型'],
    ['--field_default_value', '默认值'],
    ['--field_enum', '可选值'],
    ['--field_desc_zh', '中文描述'],
    ['--field_desc_en', '英文描述'],
    ['--event_input', '事件参数'],
    ['--event_output', '事件返回值'],
    ['--trigger_elements', '事件触发元素'],
    ['--syntactic_sugar', 'v-model | sync'],
    ['--version', 'JSON 对象'],
    ['--test_description', '测试描述'],
    ['--field_required', 'true | false'],
    ['--deprecated', 'true | false'],
    ['--support_default_value', 'true | false'],
    ['--html_attribute', 'true | false'],
    ['--stdin', '标准输入 JSON'],
    ['-h, --help', '显示帮助'],
  ];
  const width = Math.max(...requiredRows.concat(optionalRows).map(([name]) => name.length));

  console.info(`用法:
  ${bin} --<options>

必填:
${formatFields(requiredRows, width)}

选填:
${formatFields(optionalRows, width)}
`);
}

async function readStdin() {
  process.stdin.setEncoding('utf8');
  let text = '';
  for await (const chunk of process.stdin) text += chunk;
  return text;
}

function printIssues(title, items) {
  if (items.length === 0) return;
  console.error(title);
  items.forEach((item) => console.error(`  - ${item}`));
}

function describe(map, payload) {
  const category = map.field_category.find((item) => String(item.value) === String(payload.field_category));
  const platforms = (payload.platform_framework || [])
    .map((value) => map.platform_framework.find((item) => String(item.value) === String(value))?.label || value)
    .join('、');
  const types = (payload.field_type || [])
    .map((value) => map.field_type.find((item) => String(item.value) === String(value))?.label || value)
    .join('、');
  return `${payload.component}.${payload.field_name}（${category?.label || payload.field_category}，${platforms}${
    types ? `，${types}` : ''
  }）`;
}

function parseJsonRecords(text, source) {
  try {
    return parseRecords(JSON.parse(text.replace(/^\uFEFF/, '')));
  } catch (error) {
    throw new Error(`${source} 不是合法 JSON：${error.message}`);
  }
}

async function readDocuments(args) {
  const useStdin = args.includes('--stdin');
  const flags = args.filter((arg) => arg !== '--stdin' && arg !== '-h' && arg !== '--help');
  if (useStdin && flags.length) throw new Error('不要同时传记录字段和 --stdin');
  if (useStdin) return { documents: parseJsonRecords(await readStdin(), '标准输入'), parseErrors: [] };
  if (flags.length === 0) return { documents: null, parseErrors: [] };
  const { record, errors } = parseFlags(flags);
  return { documents: [record], parseErrors: errors };
}

async function main() {
  const args = scriptArgs();
  const command = args[0] === 'update' ? 'update' : 'add';
  if (args.includes('-h') || args.includes('--help')) {
    printHelp(command, mapJson.data);
    process.exit(0);
  }
  if (command === 'update') args.shift();

  const { documents, parseErrors } = await readDocuments(args);
  if (!documents) {
    printHelp(command, mapJson.data);
    process.exit(1);
  }
  if (parseErrors.length > 0) {
    printIssues('校验未通过，未写入：', parseErrors);
    process.exitCode = 1;
    return;
  }

  const map = mapJson.data;
  const store = await openStore();
  const normalized = documents.map((document) => validateRequest(document, map));
  const fieldErrors = normalized.flatMap((item, index) => item.errors.map((error) => `第 ${index + 1} 条：${error}`));
  const warnings = normalized.flatMap((item) => item.warnings);
  if (fieldErrors.length > 0) {
    printIssues('校验未通过，未写入：', fieldErrors);
    printIssues('提示：', warnings);
    process.exitCode = 1;
    return;
  }

  const payloads = normalized.map((item) => item.payload);
  printIssues('提示：', warnings);

  if (command === 'add') {
    const conflicts = findConflicts(payloads, store.records);
    printIssues('提示：', conflicts.warnings);
    if (conflicts.errors.length > 0) {
      printIssues('查重未通过，未写入：', conflicts.errors);
      process.exitCode = 1;
      return;
    }
    const rows = payloads.map((payload) => store.create(payload));
    await store.commit();
    rows.forEach((row) => console.info(`已新增 ${describe(map, row)} id ${row.id}`));
    console.info('已写入 packages/data');
    return;
  }

  const updates = normalized.map((item, index) => {
    const matches = findMatches(item.payload, store.records);
    return { index, item, matches };
  });
  const updateErrors = [];
  updates.forEach(({ index, item, matches }) => {
    if (matches.length === 1) return;
    if (matches.length === 0) {
      updateErrors.push(`第 ${index + 1} 条 ${item.payload.component}.${item.payload.field_name} 没有可修改的记录`);
      return;
    }
    updateErrors.push(
      `第 ${index + 1} 条匹配到多条记录：${matches.map((row) => row.id).join('、')}。请收窄 platform_framework`,
    );
  });
  if (updateErrors.length > 0) {
    printIssues('未修改：', updateErrors);
    process.exitCode = 1;
    return;
  }
  for (const { item, matches } of updates) {
    const row = store.update(item.changes, matches[0].id);
    console.info(`已修改 ${describe(map, row)} id ${matches[0].id}`);
  }
  await store.commit();
  console.info('已写入 packages/data');
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
