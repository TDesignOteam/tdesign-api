/**
 * 同步本地 JSON 文件到 DB，用于解决 DB 冲突问题（JSON 的冲突非常容易解决，DB 冲突难以解决）
 *
 * 注意：原版本通过 HTTP 请求 server 同步（需要 server 运行），现改为直接通过 @tdesign/api-model 操作本地 DB 文件
 */
import { exportAPI, apiCreate, apiUpdate, apiDelete } from '@tdesign/api-model';
import chalk from 'chalk';
import apiJSON from './api.json' with { type: 'json' };
import type { BaseObject } from '@tdesign/api-model';

interface ApiRecord {
  id: number;
  component: string;
  field_name: string;
  platform_framework_text?: unknown;
  field_type_text?: unknown;
  field_category_text?: unknown;
  [key: string]: unknown;
}

/**
 * 将 ApiRecord 安全转换为 BaseObject，过滤掉值类型不在 BaseObject 联合范围内的字段
 */
function toBaseObject(record: ApiRecord): BaseObject {
  const result: BaseObject = {};
  for (const [key, value] of Object.entries(record)) {
    if (value === null || value === undefined) continue;
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      (typeof value === 'object' && value !== null)
    ) {
      result[key] = value as BaseObject[string];
    }
  }
  return result;
}

async function syncCreate(record: ApiRecord) {
  console.log(
    `syncCreate ${chalk.blue(record.id)} Component: ${chalk.blue(record.component)} Field: ${chalk.blue(record.field_name)}`,
  );
  return apiCreate(toBaseObject(record));
}

async function syncUpdate(record: ApiRecord) {
  console.log(
    `syncUpdate ${chalk.blue(record.id)} Component: ${chalk.blue(record.component)} Field: ${chalk.blue(record.field_name)}`,
  );
  return apiUpdate(toBaseObject(record));
}

async function syncDelete(record: ApiRecord) {
  console.log(
    `syncDelete ${chalk.blue(record.id)} Component: ${chalk.blue(record.component)} Field: ${chalk.blue(record.field_name)}`,
  );
  return apiDelete({ id: record.id } as BaseObject);
}

async function uploadApiToDB() {
  try {
    const dbResult = await exportAPI();

    const jsonRecordIds: number[] = [];
    const jsonRecords = new Map<number, ApiRecord>();
    const dbRecordIds: number[] = [];
    const updateIds: number[] = [];
    const dbRecords = new Map<number, ApiRecord>();

    // api.json
    (apiJSON.data as ApiRecord[]).forEach((record) => {
      if (jsonRecordIds.includes(record.id)) {
        throw new Error('Duplicate ID ' + record.id);
      }
      jsonRecordIds.push(record.id);
      delete record.platform_framework_text;
      delete record.field_type_text;
      delete record.field_category_text;
      jsonRecords.set(record.id, record);
    });

    // TDesign.db
    (dbResult.data as ApiRecord[]).forEach((record) => {
      dbRecordIds.push(record.id);
      delete record.platform_framework_text;
      delete record.field_type_text;
      delete record.field_category_text;
      dbRecords.set(record.id, record);
      const jsonRecord = jsonRecords.get(record.id);
      if (jsonRecord && JSON.stringify(record) !== JSON.stringify(jsonRecord)) {
        updateIds.push(record.id);
      }
    });

    const deleteIds = dbRecordIds.filter((t) => !jsonRecordIds.includes(t));
    const createIds = jsonRecordIds.filter((t) => !dbRecordIds.includes(t));

    if ([].concat(createIds, deleteIds, updateIds).length === 0) {
      console.log(chalk.green('No difference. api.json === TDesign.db\n'));
      return;
    }

    // sync
    const createPromises = createIds.map((id) => syncCreate(jsonRecords.get(id)!));
    const updatePromises = updateIds.map((id) => syncUpdate(jsonRecords.get(id)!));
    const deletePromises = deleteIds.map((id) => syncDelete(dbRecords.get(id)!));

    await Promise.all([...createPromises, ...updatePromises, ...deletePromises]);
    console.log(chalk.green('Upload API to DB successfully!\n'));
  } catch (error) {
    console.log(chalk.red('Upload API to DB failed!\n', error));
  }
}

console.log('----- Upload API to DB Start -----\n');
uploadApiToDB();
