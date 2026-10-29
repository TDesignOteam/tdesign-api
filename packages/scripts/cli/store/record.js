import { allowedFields, booleanFields, categoryOrder, optionalStringFields, requiredFields } from './constants.js';

export function compareRecords(a, b) {
  return (
    String(a.component).localeCompare(String(b.component)) ||
    (categoryOrder.get(String(a.field_category)) ?? Number.MAX_SAFE_INTEGER) -
      (categoryOrder.get(String(b.field_category)) ?? Number.MAX_SAFE_INTEGER) ||
    String(a.field_name).localeCompare(String(b.field_name)) ||
    Number(a.id) - Number(b.id)
  );
}

export function componentFamily(component) {
  return component.startsWith('$') ? component.slice(1).split('.')[0] : component;
}

export function compactRecord(record) {
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

export function assertRecord(record) {
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
      !record.field_enum.every((item) => typeof item === 'string' && item.length > 0))
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

export function nextPluginOrder(records, component, category) {
  const orders = records
    .filter((record) => record.component === component && record.field_category === category)
    .map((record) => Number(record.order))
    .filter(Number.isInteger);
  return orders.length === 0 ? 0 : Math.max(...orders) + 1;
}
