import fs from 'fs';
import path from 'path';
// @ts-ignore
import { orderRecordFields } from '../../scripts/lint/record-order.js';
import { BaseObject, QueryPaginationProps } from '../../types';

type ApiRecord = Record<string, any>;

const dataDirectory = path.resolve('packages/data');
const booleanFields = ['field_required', 'deprecated', 'html_attribute', 'support_default_value'];
const requiredFields = ['id', 'platform_framework', 'component', 'field_category', 'field_name', 'field_type'];
const optionalStringFields = [
  'field_default_value',
  'field_desc_zh',
  'field_desc_en',
  'event_input',
  'event_output',
  'custom_field_type',
  'syntactic_sugar',
  'trigger_elements',
  'test_description',
];
const allowedFields = new Set([
  ...requiredFields,
  ...booleanFields,
  ...optionalStringFields,
  'field_enum',
  'version',
  'order',
]);
const categoryOrder = new Map(
  ['Props', 'Events', 'Functions', 'Extends', 'Return', '<T>', 'External Classes', 'CSS Variables', 'Slots'].map(
    (category, index) => [category, index],
  ),
);

let writeQueue = Promise.resolve();

function compareRecords(a: ApiRecord, b: ApiRecord) {
  return (
    String(a.component).localeCompare(String(b.component)) ||
    (categoryOrder.get(String(a.field_category)) ?? Number.MAX_SAFE_INTEGER) -
      (categoryOrder.get(String(b.field_category)) ?? Number.MAX_SAFE_INTEGER) ||
    String(a.field_name).localeCompare(String(b.field_name)) ||
    Number(a.id) - Number(b.id)
  );
}

function componentFamily(component: string) {
  return component.startsWith('$') ? component.slice(1).split('.')[0] : component;
}

function familyFileName(family: string) {
  if (!/^[A-Za-z0-9_.-]+$/.test(family)) throw new Error(`组件家族名 ${family} 不能安全地用作文件名`);
  return `${family}.json`;
}

function compactRecord(record: ApiRecord) {
  const result = { ...record };
  Object.keys(result).forEach((field) => {
    if (!requiredFields.includes(field) && (result[field] === '' || result[field] === null || result[field] === undefined)) {
      delete result[field];
    }
  });
  booleanFields.forEach((field) => {
    if (result[field] === false) delete result[field];
  });
  return result;
}

function formatRecordForDisk(record: ApiRecord) {
  return orderRecordFields(compactRecord(record));
}

function assertRecord(record: ApiRecord) {
  const unknownFields = Object.keys(record).filter((field) => !allowedFields.has(field));
  if (unknownFields.length) throw new Error(`包含未知字段：${unknownFields.join(', ')}`);
  const missingFields = requiredFields.filter((field) => !(field in record));
  if (missingFields.length) throw new Error(`缺少必填字段：${missingFields.join(', ')}`);
  if (!Number.isInteger(record.id)) throw new Error('id 必须是整数');
  if (!Array.isArray(record.platform_framework) || !record.platform_framework.every((item) => typeof item === 'string')) {
    throw new Error('platform_framework 必须是字符串数组');
  }
  if (!Array.isArray(record.field_type) || !record.field_type.every((item) => typeof item === 'string')) {
    throw new Error('field_type 必须是字符串数组');
  }
  ['component', 'field_category'].forEach((field) => {
    if (typeof record[field] !== 'string' || !record[field]) throw new Error(`${field} 必须是非空字符串`);
  });
  if (typeof record.field_name !== 'string') throw new Error('field_name 必须是字符串');
  optionalStringFields.forEach((field) => {
    if (field in record && typeof record[field] !== 'string') throw new Error(`${field} 必须是字符串`);
  });
  booleanFields.forEach((field) => {
    if (field in record && record[field] !== true) throw new Error(`${field} 只能为 true，false 时请省略`);
  });
  if (
    'field_enum' in record &&
    (!Array.isArray(record.field_enum) ||
      record.field_enum.length === 0 ||
      !record.field_enum.every((item: unknown) => typeof item === 'string' && item.length > 0))
  ) {
    throw new Error('field_enum 必须是非空字符串数组');
  }
  if (String(record.component).startsWith('$') && !Number.isInteger(record.order)) {
    throw new Error('插件 API 必须包含整数 order');
  }
  if (!String(record.component).startsWith('$') && 'order' in record) {
    throw new Error('非插件 API 不能包含 order');
  }
}

async function loadRecords() {
  const files = (await fs.promises.readdir(dataDirectory)).filter((file) => file.endsWith('.json')).sort();
  const groups = await Promise.all(
    files.map(async (file) => {
      const content = await fs.promises.readFile(path.join(dataDirectory, file), 'utf8');
      const records = JSON.parse(content);
      if (!Array.isArray(records)) throw new Error(`${file} 必须包含 API 数组`);
      records.forEach(assertRecord);
      return records as ApiRecord[];
    }),
  );
  return groups.flat().sort(compareRecords);
}

async function writeFamily(family: string, records: ApiRecord[]) {
  const filePath = path.join(dataDirectory, familyFileName(family));
  const familyRecords = records
    .filter((record) => componentFamily(String(record.component)) === family)
    .map(formatRecordForDisk)
    .sort(compareRecords);
  if (familyRecords.length === 0) {
    await fs.promises.rm(filePath, { force: true });
    return;
  }
  const temporaryPath = `${filePath}.${process.pid}.tmp`;
  await fs.promises.writeFile(temporaryPath, `${JSON.stringify(familyRecords, null, 2)}\n`);
  await fs.promises.rename(temporaryPath, filePath);
}

function mutateRecords<T>(mutation: (records: ApiRecord[]) => Promise<T>) {
  const operation = writeQueue.then(async () => mutation(await loadRecords()));
  writeQueue = operation.then(
    () => undefined,
    () => undefined,
  );
  return operation;
}

function includesPlatform(record: ApiRecord, expected: unknown) {
  const required = Array.isArray(expected) ? expected.map(String) : [String(expected)];
  const actual = Array.isArray(record.platform_framework) ? record.platform_framework.map(String) : [];
  return required.every((value) => actual.includes(value));
}

function nextPluginOrder(records: ApiRecord[], component: string, category: string) {
  const orders = records
    .filter((record) => record.component === component && record.field_category === category)
    .map((record) => Number(record.order))
    .filter(Number.isInteger);
  return orders.length === 0 ? 0 : Math.max(...orders) + 1;
}

function matches(record: ApiRecord, params: BaseObject) {
  return Object.entries(params).every(([key, value]) => {
    if (key === 'field_name') return String(record.field_name).includes(String(value));
    if (key === 'platform_framework') return includesPlatform(record, value);
    if (key === 'component') return String(value).split(',').includes(String(record.component));
    return String(record[key]) === String(value);
  });
}

class TAPI {
  /**
   * 查询API记录
   * @param params 查询条件, [key: string]: value
   * @param limitObj 分页参数，{size, offset}，size为分页大小，offset为起点
   * @param columns 自定义列，默认为全部
   */
  public static async query(params?: BaseObject, limitObj?: QueryPaginationProps, columns?: string[]) {
    const records = await loadRecords();
    let result = params && Object.keys(params).length ? records.filter((record) => matches(record, params)) : records;
    const total = result.length;
    if (limitObj) result = result.slice(limitObj.offset || 0, (limitObj.offset || 0) + limitObj.size);
    if (columns) {
      result = result.map((record) =>
        Object.fromEntries(columns.filter((column) => column in record).map((column) => [column, record[column]])),
      );
    }
    return [result.map((record) => ({ ...record })), total];
  }

  public static async create(params: BaseObject) {
    return mutateRecords(async (records) => {
      const payload = compactRecord({ ...params });
      const explicitId = payload.id;
      let newID = explicitId ? Number(explicitId) : Math.floor(Date.now() / 1000);
      const used = new Set(records.map((record) => Number(record.id)));
      if (explicitId && used.has(newID)) throw new Error(`API id ${newID} 已存在`);
      while (used.has(newID)) newID += 1;
      if (String(payload.component).startsWith('$') && !Number.isInteger(payload.order)) {
        payload.order = nextPluginOrder(records, String(payload.component), String(payload.field_category));
      }
      const record: ApiRecord = compactRecord({ ...payload, id: newID });
      assertRecord(record);
      records.push(record);
      records.sort(compareRecords);
      await writeFamily(componentFamily(String(record.component)), records);
      return record;
    });
  }

  public static async update(params: BaseObject, id: number) {
    return mutateRecords(async (records) => {
      const index = records.findIndex((record) => Number(record.id) === id);
      if (index === -1) throw new Error(`API id ${id} 不存在`);
      const previousFamily = componentFamily(String(records[index].component));
      const updated: ApiRecord = {
        ...records[index],
        ...params,
        id,
      };
      if (String(updated.component).startsWith('$') && !Number.isInteger(updated.order)) {
        updated.order = nextPluginOrder(records, String(updated.component), String(updated.field_category));
      } else if (!String(updated.component).startsWith('$')) {
        delete updated.order;
      }
      records[index] = compactRecord(updated);
      assertRecord(records[index]);
      const nextFamily = componentFamily(String(records[index].component));
      records.sort(compareRecords);
      await writeFamily(previousFamily, records);
      if (nextFamily !== previousFamily) await writeFamily(nextFamily, records);
      return records[index];
    });
  }

  public static async delete(id: number) {
    return mutateRecords(async (records) => {
      const index = records.findIndex((record) => Number(record.id) === id);
      if (index === -1) throw new Error(`API id ${id} 不存在`);
      const [deleted] = records.splice(index, 1);
      await writeFamily(componentFamily(String(deleted.component)), records);
      return deleted;
    });
  }
}

export default TAPI;
