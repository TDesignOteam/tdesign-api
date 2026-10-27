import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { API_ORIGIN } from '../common.js';
import { parseDraftDocument, validateRequest } from './normalize.js';
import { findConflicts, findMatches } from './validate.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
let temporaryServer = null;

const IDENTITY_FIELDS = `  component            组件名
  fieldName            API 名称
  fieldCategory        Props | Events | Functions | Extends | Return | <T> | External Classes | CSS Variables | Slots
  platformFramework    数组。Vue(PC) | React(PC) | Vue(Mobile) | React(Mobile) | Miniprogram | UniApp`;

const VALUE_FIELDS = `  fieldType            类型数组。String | Number | Boolean | Object | Array | Function | TNode | Date | File | any | BigInt
  customFieldType      自定义 TS 类型。对象或联合类型写：类型名【interface 类型名 { ... }】
  fieldDefaultValue    默认值
  fieldEnum            可选值数组。仅 fieldType 含 String 或 Number 时可用
  fieldDescZh          中文描述
  fieldDescEn          英文描述
  eventInput           参数。事件名使用小驼峰且不带 on
  eventOutput          返回值
  triggerElements      事件触发元素，仅 React
  syntacticSugar       v-model | sync。平台需含 Vue(PC)、Vue(Mobile) 或 UniApp
  version              JSON 对象
  testDescription      测试描述`;

function printHelp(command) {
  const usage = command === 'update' ? 'pnpm api:update -- <file.json>' : 'pnpm api:add -- <file.json>';
  console.info(`用法:
  ${usage}

记录是 JSON 对象，多条时使用数组。
字段用驼峰。类别、平台、类型写下面列出的可选值。
校验失败时跳过写入。

必填:
${IDENTITY_FIELDS}

可选:
${VALUE_FIELDS}
  fieldRequired        true | false
  deprecated           true | false
  supportDefaultValue  true | false
  htmlAttribute        true | false
`);
}

function formatRequestError(error) {
  if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
    return `无法连接 ${API_ORIGIN}`;
  }
  if (error.response?.data) return JSON.stringify(error.response.data);
  return error.message;
}

async function readInput(file) {
  if (file === '-') {
    process.stdin.setEncoding('utf8');
    let text = '';
    for await (const chunk of process.stdin) text += chunk;
    return text;
  }
  return fs.promises.readFile(path.resolve(file), 'utf8');
}

function printIssues(title, items) {
  if (items.length === 0) return;
  console.error(title);
  items.forEach((item) => console.error(`  - ${item}`));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function serverReady() {
  try {
    await axios.get(`${API_ORIGIN}/cmp/map`, { timeout: 1000 });
    return true;
  } catch {
    return false;
  }
}

async function ensureServer() {
  if (await serverReady()) return { started: false, child: null };
  console.info('服务未运行，正在启动');
  const child = spawn('pnpm', ['dev'], {
    cwd: repoRoot,
    detached: true,
    stdio: 'ignore',
  });
  child.unref();
  const deadline = Date.now() + 40000;
  while (Date.now() < deadline) {
    if (await serverReady()) {
      temporaryServer = child;
      return { started: true, child };
    }
    await sleep(400);
  }
  await stopServer(child);
  throw new Error('启动服务超时');
}

async function stopServer(child) {
  if (!child?.pid) return;
  const killGroup = (signal) => {
    try {
      process.kill(-child.pid, signal);
    } catch {
      try {
        child.kill(signal);
      } catch {
        // 进程已经退出
      }
    }
  };
  killGroup('SIGTERM');
  await sleep(300);
  try {
    process.kill(-child.pid, 0);
    killGroup('SIGKILL');
  } catch {
    // 进程已经退出
  }
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

async function loadContext(client) {
  const [mapRes, dataRes] = await Promise.all([client.get('/cmp/map'), client.get('/cmp/export-data')]);
  if (mapRes.data?.code !== 0 || dataRes.data?.code !== 0) throw new Error('读取类别表或已有 API 失败');
  return { map: mapRes.data.data, existing: dataRes.data.data || [] };
}

function createdRows(before, after, payloads) {
  const beforeIds = new Set(before.map((row) => row.id));
  return after.filter(
    (row) =>
      !beforeIds.has(row.id) &&
      payloads.some(
        (payload) =>
          row.component === payload.component &&
          row.field_name === payload.field_name &&
          row.field_category === payload.field_category,
      ),
  );
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] === 'update' ? 'update' : 'add';
  if (args.includes('-h') || args.includes('--help')) {
    printHelp(command);
    process.exit(0);
  }
  if (command === 'update') args.shift();
  const file = args.find((arg) => !arg.startsWith('--'));
  if (!file) {
    printHelp(command);
    process.exit(1);
  }

  const text = await readInput(file);
  let document;
  try {
    document = JSON.parse(text.replace(/^\uFEFF/, ''));
  } catch (error) {
    throw new Error(`新增记录不是合法 JSON：${error.message}`);
  }

  await ensureServer();

  const client = axios.create({ baseURL: API_ORIGIN, timeout: 30000 });
  const drafts = parseDraftDocument(document);
  const { map, existing } = await loadContext(client);
  const normalized = drafts.map((draft) => validateRequest(draft, map));
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
    const conflicts = findConflicts(payloads, existing);
    printIssues('提示：', conflicts.warnings);
    if (conflicts.errors.length > 0) {
      printIssues('查重未通过，未写入：', conflicts.errors);
      process.exitCode = 1;
      return;
    }
    for (const payload of payloads) {
      const res = await client.post('/cmp/api', payload);
      if (res.data?.code !== 0) throw new Error(JSON.stringify(res.data));
    }
    const { existing: synced } = await loadContext(client);
    const rows = createdRows(existing, synced, payloads);
    rows.forEach((row) => console.info(`已新增 ${describe(map, row)} id ${row.id}`));
    if (rows.length !== payloads.length) console.info('已写入，但未能从同步结果里匹配全部 id');
    console.info('已写入 packages/data');
    return;
  }

  const updates = normalized.map((item, index) => {
    const matches = findMatches(item.payload, existing);
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
      `第 ${index + 1} 条匹配到多条记录：${matches.map((row) => row.id).join('、')}。请收窄 platformFramework`,
    );
  });
  if (updateErrors.length > 0) {
    printIssues('未修改：', updateErrors);
    process.exitCode = 1;
    return;
  }
  for (const { item, matches } of updates) {
    const res = await client.put('/cmp/api', { id: matches[0].id, ...item.changes });
    if (res.data?.code !== 0) throw new Error(JSON.stringify(res.data));
    console.info(`已修改 ${describe(map, item.payload)} id ${matches[0].id}`);
  }
  console.info('已写入 packages/data');
}

main()
  .catch((error) => {
    console.error(formatRequestError(error));
    process.exitCode = 1;
  })
  .finally(() => stopServer(temporaryServer));
