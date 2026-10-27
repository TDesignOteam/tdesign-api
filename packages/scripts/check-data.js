import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mapJson from './map.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDirectory = path.resolve(__dirname, '../data');
const derivedFields = ['field_category_text', 'platform_framework_text', 'field_type_text'];
const requiredFields = ['id', 'platform_framework', 'component', 'field_category', 'field_name', 'field_type'];
const removedFields = [...derivedFields, 'readonly', 'create_time', 'update_time'];
const BOOLEAN_FIELDS = ['field_required', 'deprecated', 'html_attribute', 'support_default_value'];
const optionalFields = [
  'field_default_value',
  'field_enum',
  'field_desc_zh',
  'field_desc_en',
  'event_input',
  'event_output',
  'custom_field_type',
  'syntactic_sugar',
  'trigger_elements',
  'version',
  'test_description',
  'order',
];
const allowedFields = new Set([
  ...requiredFields,
  ...BOOLEAN_FIELDS,
  ...optionalFields,
]);
const optionalStringFields = optionalFields.filter(
  (field) => !['field_enum', 'version', 'order'].includes(field),
);
const files = fs
  .readdirSync(dataDirectory)
  .filter((file) => file.endsWith('.json'))
  .sort();
const ids = new Map();
const errors = [];
const categoryLabels = new Set(mapJson.data.field_category.map((item) => item.label));
const platformLabels = new Set(mapJson.data.platform_framework.map((item) => item.label));
const typeLabels = new Set(mapJson.data.field_type.map((item) => item.label));
let recordCount = 0;

function componentFamily(component) {
  return component.startsWith('$') ? component.slice(1).split('.')[0] : component;
}

for (const file of files) {
  let records;
  try {
    records = JSON.parse(fs.readFileSync(path.join(dataDirectory, file), 'utf8'));
  } catch (error) {
    errors.push(`${file}: JSON 解析失败：${error.message}`);
    continue;
  }
  if (!Array.isArray(records) || records.length === 0) {
    errors.push(`${file}: 必须包含非空 API 数组`);
    continue;
  }
  const family = file.slice(0, -'.json'.length);
  if (!/^[A-Za-z0-9_.-]+$/.test(family)) errors.push(`${file}: 文件名不是合法的组件家族名`);
  for (const record of records) {
    recordCount += 1;
    const component = String(record.component);
    if (!component) errors.push(`${file}: id ${record.id} 的组件名为空`);
    if (componentFamily(component) !== family) {
      errors.push(`${file}: 组件 ${component} 应存放在 ${componentFamily(component)}.json`);
    }
    requiredFields
      .filter((field) => !(field in record))
      .forEach((field) => errors.push(`${file}: id ${record.id} 缺少字段 ${field}`));
    Object.keys(record)
      .filter((field) => !allowedFields.has(field))
      .forEach((field) => errors.push(`${file}: id ${record.id} 包含未知或已移除字段 ${field}`));
    if (!Number.isInteger(Number(record.id))) errors.push(`${file}: ${record.field_name} 的 id 无效`);
    if (ids.has(record.id)) errors.push(`${file}: id ${record.id} 与 ${ids.get(record.id)} 重复`);
    else ids.set(record.id, `${component}.${record.field_name}`);
    if (!Array.isArray(record.platform_framework)) {
      errors.push(`${file}: id ${record.id} 的 platform_framework 必须是数组`);
    } else {
      record.platform_framework
        .filter((value) => !platformLabels.has(value))
        .forEach((value) => errors.push(`${file}: id ${record.id} 的平台 ${value} 无效`));
    }
    if (!Array.isArray(record.field_type)) {
      errors.push(`${file}: id ${record.id} 的 field_type 必须是数组`);
    } else {
      record.field_type
        .filter((value) => !typeLabels.has(value))
        .forEach((value) => errors.push(`${file}: id ${record.id} 的类型 ${value} 无效`));
    }
    if (!categoryLabels.has(record.field_category)) {
      errors.push(`${file}: id ${record.id} 的类别 ${record.field_category} 无效`);
    }
    if ('field_enum' in record && (!Array.isArray(record.field_enum) || record.field_enum.length === 0)) {
      errors.push(`${file}: id ${record.id} 的 field_enum 必须是非空数组`);
    }
    if ('version' in record && record.version === null) {
      errors.push(`${file}: id ${record.id} 的 version 不能为空`);
    }
    optionalStringFields.forEach((field) => {
      if (field in record && typeof record[field] !== 'string') {
        errors.push(`${file}: id ${record.id} 的 ${field} 必须是字符串`);
      }
    });
    if (component.startsWith('$') && !Number.isInteger(record.order)) {
      errors.push(`${file}: 插件 API id ${record.id} 缺少整数 order`);
    }
    if (!component.startsWith('$') && 'order' in record) {
      errors.push(`${file}: 非插件 API id ${record.id} 不应保存 order`);
    }
    BOOLEAN_FIELDS.forEach((field) => {
      if (field in record && record[field] !== true) {
        errors.push(`${file}: id ${record.id} 的 ${field} 只在值为 true 时保存`);
      }
    });
    optionalFields.forEach((field) => {
      if (!(field in record)) return;
      if (record[field] === '' || record[field] === null) {
        errors.push(`${file}: id ${record.id} 的空字段 ${field} 应省略`);
      }
    });
    for (const field of removedFields) {
      if (field in record) errors.push(`${file}: id ${record.id} 不应保存字段 ${field}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.info(`API data valid: ${recordCount} records in ${files.length} component files`);
