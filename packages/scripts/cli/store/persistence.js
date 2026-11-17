import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { orderRecordFields } from '../../lint/record-order.js';
import { assertRecord, compareRecords, compactRecord, componentFamily } from './record.js';

/**
 * 得到记录的落盘形态。
 */
function formatRecordForDisk(record) {
  return orderRecordFields(compactRecord(record));
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const dataDirectory = path.resolve(__dirname, '../../../data');

function familyFileName(family) {
  if (!/^[A-Za-z0-9_.-]+$/.test(family)) throw new Error(`组件家族名 ${family} 不能安全地用作文件名`);
  return `${family}.json`;
}

/**
 * 读取 packages/data 中的全部 API 记录。
 */
export async function loadRecords() {
  const files = (await fs.promises.readdir(dataDirectory)).filter((file) => file.endsWith('.json')).sort();
  const groups = await Promise.all(
    files.map(async (file) => {
      const content = await fs.promises.readFile(path.join(dataDirectory, file), 'utf8');
      const records = JSON.parse(content);
      if (!Array.isArray(records)) throw new Error(`${file} 必须包含 API 数组`);
      records.forEach(assertRecord);
      return records;
    }),
  );
  return groups.flat().sort(compareRecords);
}

/**
 * 将指定组件家族的记录写回对应 JSON 文件。
 */
export async function writeFamily(family, records) {
  const filePath = path.join(dataDirectory, familyFileName(family));
  const familyRecords = records
    .filter((record) => componentFamily(String(record.component)) === family)
    .map(formatRecordForDisk)
    .sort(compareRecords);
  // 家族内已无记录时删除文件，避免留下空数组。
  if (familyRecords.length === 0) {
    await fs.promises.rm(filePath, { force: true });
    return;
  }
  // 先写临时文件再重命名，避免写入中断留下半截 JSON。
  const temporaryPath = `${filePath}.${process.pid}.tmp`;
  await fs.promises.writeFile(temporaryPath, `${JSON.stringify(familyRecords, null, 2)}\n`);
  await fs.promises.rename(temporaryPath, filePath);
}
