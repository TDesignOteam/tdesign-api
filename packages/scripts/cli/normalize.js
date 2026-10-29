import { arrayFields, booleanFields, inputFields, optionalStringFields } from './store/constants.js';

function indexByLabel(options = []) {
  const map = new Map();
  options.forEach((item) => map.set(item.label, item.value));
  return map;
}

function labelText(options = []) {
  return options.map((item) => item.label).join('、');
}

function optionText(options = []) {
  return `可选：${labelText(options)}`;
}

function readLabels(values, options, field, errors) {
  const list = Array.isArray(values) ? values : [values];
  const byLabel = indexByLabel(options);
  const seen = new Set();
  const result = [];
  list.forEach((value) => {
    if (typeof value !== 'string' || !value) {
      errors.push(`${field} 不合法。${optionText(options)}`);
      return;
    }
    if (value === 'VueNext(PC)') {
      errors.push(`VueNext(PC) 与 Vue(PC) 共用记录，platform_framework 写 Vue(PC)。${optionText(options)}`);
      return;
    }
    if (seen.has(value)) {
      errors.push(`${field} 重复：${value}`);
      return;
    }
    seen.add(value);
    const semanticValue = byLabel.get(value);
    if (!semanticValue) errors.push(`${field} 的值 ${value} 不合法。${optionText(options)}`);
    else result.push(semanticValue);
  });
  return result;
}

function readFlag(record, key, errors) {
  if (record[key] === undefined) return false;
  if (record[key] === true) return true;
  if (record[key] === false) return false;
  errors.push(`${key} 只能是 true 或 false`);
  return false;
}

function readInputRecord(record, errors) {
  const input = {};
  const present = new Set();
  Object.keys(record).forEach((key) => {
    if (!inputFields.has(key)) {
      errors.push(`字段 ${key} 不可用`);
      return;
    }
    input[key] = record[key];
    present.add(key);
  });
  return { input, present };
}

function parseArrayValue(raw, field, errors) {
  const text = String(raw).trim();
  if (text.startsWith('[')) {
    try {
      const value = JSON.parse(text);
      if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
        errors.push(`${field} 必须是字符串数组`);
        return [];
      }
      return value;
    } catch (error) {
      errors.push(`${field} 不是合法 JSON：${error.message}`);
      return [];
    }
  }
  return text
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function splitFlag(token) {
  const body = token.slice(2);
  const equal = body.indexOf('=');
  if (equal === -1) return { key: body, value: undefined };
  return { key: body.slice(0, equal), value: body.slice(equal + 1) };
}

function assignFlag(record, key, raw, errors) {
  if (arrayFields.includes(key)) {
    record[key] = [...(record[key] || []), ...parseArrayValue(raw, key, errors)];
    return;
  }
  if (key === 'version') {
    try {
      record[key] = JSON.parse(raw);
    } catch (error) {
      errors.push(`version 不是合法 JSON：${error.message}`);
    }
    return;
  }
  if (booleanFields.includes(key)) {
    if (raw === 'true' || raw === 'false') record[key] = raw === 'true';
    else errors.push(`${key} 只能是 true 或 false`);
    return;
  }
  record[key] = raw;
}

export function parseFlags(args) {
  const record = {};
  const errors = [];

  for (let index = 0; index < args.length; index += 1) {
    const token = args[index];
    if (!token.startsWith('--') || token === '--') {
      errors.push(`无法识别的参数：${token}`);
      continue;
    }

    const { key, value } = splitFlag(token);
    if (!inputFields.has(key)) {
      errors.push(`字段 ${key} 不可用`);
      const skipped = args[index + 1];
      if (value === undefined && skipped !== undefined && !skipped.startsWith('--')) index += 1;
      continue;
    }

    if (value !== undefined) {
      assignFlag(record, key, value, errors);
      continue;
    }

    const next = args[index + 1];
    if (booleanFields.includes(key) && (next === undefined || next.startsWith('--'))) {
      record[key] = true;
      continue;
    }
    if (next === undefined || next.startsWith('--')) {
      errors.push(`${key} 缺少值`);
      continue;
    }
    index += 1;
    assignFlag(record, key, next, errors);
  }

  return { record, errors };
}

export function parseRecords(value) {
  if (Array.isArray(value)) return value;
  return [value];
}

export function validateRequest(record, map) {
  const errors = [];
  const warnings = [];

  if (!record || typeof record !== 'object' || Array.isArray(record)) {
    return { errors: ['每条记录必须是对象'], warnings, payload: null, changes: {} };
  }

  const { input, present } = readInputRecord(record, errors);
  const componentNames = (map.components || []).map((item) => item.value);
  if (!input.component) errors.push(`缺少 component。可选：${componentNames.join('、')}`);
  else if (!componentNames.includes(input.component)) {
    errors.push(`组件 ${input.component} 不在列表中，禁止写入。可选：${componentNames.join('、')}`);
  }

  if (!input.field_name || !String(input.field_name).trim()) errors.push('缺少 field_name');

  const categoryMap = indexByLabel(map.field_category);
  const categoryValue = categoryMap.get(input.field_category);
  if (!input.field_category) errors.push(`缺少 field_category。${optionText(map.field_category)}`);
  else if (typeof input.field_category !== 'string' || !categoryValue) {
    errors.push(`field_category 不合法。${optionText(map.field_category)}`);
  }

  let platformValues = [];
  if (!Array.isArray(input.platform_framework) || input.platform_framework.length === 0) {
    errors.push(`platform_framework 必须是数组，例如 Vue(PC) React(PC)。${optionText(map.platform_framework)}`);
  } else {
    platformValues = readLabels(input.platform_framework, map.platform_framework, 'platform_framework', errors);
  }

  let typeValues = [];
  if (input.field_type !== undefined) {
    if (!Array.isArray(input.field_type)) {
      errors.push(`field_type 必须是字符串数组，例如 String。${optionText(map.field_type)}`);
    } else {
      typeValues = readLabels(input.field_type, map.field_type, 'field_type', errors);
    }
  }

  if (input.field_category === 'Events' && /^on[A-Z]/.test(String(input.field_name || ''))) {
    errors.push('事件名使用小驼峰且不带 on，例如 visibleChange');
  }

  const sugar = input.syntactic_sugar ?? '';
  if (typeof sugar !== 'string') errors.push('syntactic_sugar 必须是字符串');
  else if (sugar && !['v-model', 'sync'].includes(sugar)) {
    errors.push('syntactic_sugar 不合法。可选：v-model、sync');
  } else if (sugar) {
    const vueLabels = new Set(['Vue(PC)', 'Vue(Mobile)', 'UniApp']);
    const platforms = Array.isArray(input.platform_framework) ? input.platform_framework : [];
    if (!platforms.some((name) => vueLabels.has(name))) {
      errors.push('syntactic_sugar 仅在 platform_framework 包含 Vue(PC)、Vue(Mobile) 或 UniApp 时可用');
    }
  }

  const allowsEnum = typeValues.includes('String') || typeValues.includes('Number');
  if (input.field_enum !== undefined && !Array.isArray(input.field_enum)) {
    errors.push('field_enum 必须是字符串数组');
  } else if (input.field_enum?.some((value) => typeof value !== 'string' || !value)) {
    errors.push('field_enum 每一项必须是非空字符串');
  } else if (input.field_enum?.length && !allowsEnum) {
    errors.push('field_enum 仅在 field_type 包含 String 或 Number 时可用');
  }

  optionalStringFields.forEach((key) => {
    if (input[key] !== undefined && typeof input[key] !== 'string') {
      errors.push(`${key} 必须是字符串`);
    }
  });

  if (
    input.version !== undefined &&
    (!input.version || typeof input.version !== 'object' || Array.isArray(input.version))
  ) {
    errors.push('version 必须是 JSON 对象');
  }

  if (input.field_category === 'Props' && typeValues.length === 0) {
    warnings.push(`${input.component || ''}.${input.field_name || ''} 是 Props，但未填 field_type`);
  }
  if (!input.field_desc_zh) warnings.push(`${input.component || ''}.${input.field_name || ''} 未填 field_desc_zh`);

  const payload = {
    component: input.component,
    field_name: input.field_name,
    field_category: categoryValue,
    platform_framework: platformValues,
    field_type: typeValues,
  };
  optionalStringFields.forEach((key) => {
    if (input[key] !== undefined) payload[key] = input[key];
  });
  if (input.field_enum !== undefined) payload.field_enum = input.field_enum;
  if (input.version !== undefined) payload.version = input.version;
  booleanFields.forEach((key) => {
    if (input[key] !== undefined) payload[key] = readFlag(input, key, errors);
  });

  const changes = {};
  present.forEach((key) => {
    changes[key] = payload[key];
  });

  return { errors, warnings, payload, changes };
}
