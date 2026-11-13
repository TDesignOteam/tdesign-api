import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDirectory = path.resolve(__dirname, '../../data');
const categoryOrder = new Map(
  ['Props', 'Events', 'Functions', 'Extends', 'Return', '<T>', 'External Classes', 'CSS Variables', 'Slots'].map(
    (category, index) => [category, index],
  ),
);

function compareRecords(a, b) {
  return (
    String(a.component).localeCompare(String(b.component)) ||
    (categoryOrder.get(a.field_category) ?? Number.MAX_SAFE_INTEGER) -
      (categoryOrder.get(b.field_category) ?? Number.MAX_SAFE_INTEGER) ||
    String(a.field_name).localeCompare(String(b.field_name)) ||
    Number(a.id) - Number(b.id)
  );
}

export function loadData() {
  return fs
    .readdirSync(dataDirectory)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .flatMap((file) => {
      const records = JSON.parse(fs.readFileSync(path.join(dataDirectory, file), 'utf8'));
      if (!Array.isArray(records)) throw new Error(`${file} 必须包含 API 数组`);
      return records;
    })
    .sort(compareRecords);
}

export default {
  code: 0,
  msg: 'success',
  data: loadData(),
};
