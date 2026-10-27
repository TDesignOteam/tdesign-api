const ALLOWED = new Set([
  'component',
  'field_name',
  'field_category',
  'platform_framework',
  'field_type',
  'custom_field_type',
  'field_default_value',
  'field_enum',
  'field_desc_zh',
  'field_desc_en',
  'test_description',
  'version',
  'support_default_value',
  'field_required',
  'deprecated',
  'html_attribute',
  'event_input',
  'event_output',
  'syntactic_sugar',
  'trigger_elements',
]);

const FLAGS = ['support_default_value', 'field_required', 'deprecated', 'html_attribute'];

const STRINGS = [
  'custom_field_type',
  'field_default_value',
  'field_desc_zh',
  'field_desc_en',
  'test_description',
  'event_input',
  'event_output',
  'syntactic_sugar',
  'trigger_elements',
];

function camelToSnake(key) {
  return key.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`);
}

function snakeToCamel(key) {
  return key.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

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

function allowedFieldText() {
  return [...ALLOWED].map(snakeToCamel).join('、');
}

function readLabels(values, options, fieldName, errors) {
  const list = Array.isArray(values) ? values : [values];
  const byLabel = indexByLabel(options);
  const seen = new Set();
  const result = [];
  list.forEach((value) => {
    if (typeof value !== 'string' || !value) {
      errors.push(`${fieldName} 不合法。${optionText(options)}`);
      return;
    }
    if (value === 'VueNext(PC)') {
      errors.push(`VueNext(PC) 与 Vue(PC) 共用记录，platformFramework 写 Vue(PC)。${optionText(options)}`);
      return;
    }
    if (seen.has(value)) {
      errors.push(`${fieldName} 重复：${value}`);
      return;
    }
    seen.add(value);
    const semanticValue = byLabel.get(value);
    if (!semanticValue) errors.push(`${fieldName} 的值 ${value} 不合法。${optionText(options)}`);
    else result.push(semanticValue);
  });
  return result;
}

function readFlag(record, key, errors) {
  const name = snakeToCamel(key);
  if (record[key] === undefined) return false;
  if (record[key] === true) return true;
  if (record[key] === false) return false;
  errors.push(`${name} 只能是 true 或 false`);
  return false;
}

function toSnakeRecord(record, errors) {
  const input = {};
  const present = new Set();
  Object.keys(record).forEach((key) => {
    if (key.includes('_')) {
      errors.push(`字段 ${key} 不可用。可选：${allowedFieldText()}`);
      return;
    }
    const name = camelToSnake(key);
    if (!ALLOWED.has(name)) {
      errors.push(`字段 ${key} 不可用。可选：${allowedFieldText()}`);
      return;
    }
    input[name] = record[key];
    present.add(name);
  });
  return { input, present };
}

export function validateRequest(record, map) {
  const errors = [];
  const warnings = [];

  if (!record || typeof record !== 'object' || Array.isArray(record)) {
    return { errors: ['每条记录必须是对象'], warnings, payload: null, changes: {} };
  }

  const { input, present } = toSnakeRecord(record, errors);
  const componentNames = (map.components || []).map((item) => item.value);
  if (!input.component) errors.push(`缺少 component。可选：${componentNames.join('、')}`);
  else if (!componentNames.includes(input.component)) {
    errors.push(`组件 ${input.component} 不在列表中，禁止写入。可选：${componentNames.join('、')}`);
  }

  if (!input.field_name || !String(input.field_name).trim()) errors.push('缺少 fieldName');

  const categoryMap = indexByLabel(map.field_category);
  const categoryValue = categoryMap.get(input.field_category);
  if (!input.field_category) errors.push(`缺少 fieldCategory。${optionText(map.field_category)}`);
  else if (typeof input.field_category !== 'string' || !categoryValue) {
    errors.push(`fieldCategory 不合法。${optionText(map.field_category)}`);
  }

  let platformValues = [];
  if (!Array.isArray(input.platform_framework) || input.platform_framework.length === 0) {
    errors.push(
      `platformFramework 必须是数组，例如 ["Vue(PC)", "React(PC)"]。${optionText(map.platform_framework)}`,
    );
  } else {
    platformValues = readLabels(input.platform_framework, map.platform_framework, 'platformFramework', errors);
  }

  let typeValues = [];
  if (input.field_type !== undefined) {
    if (!Array.isArray(input.field_type)) {
      errors.push(`fieldType 必须是字符串数组，例如 ["String"]。${optionText(map.field_type)}`);
    } else {
      typeValues = readLabels(input.field_type, map.field_type, 'fieldType', errors);
    }
  }

  if (input.field_category === 'Events' && /^on[A-Z]/.test(String(input.field_name || ''))) {
    errors.push('事件名使用小驼峰且不带 on，例如 visibleChange');
  }

  const sugar = input.syntactic_sugar ?? '';
  if (typeof sugar !== 'string') errors.push('syntacticSugar 必须是字符串');
  else if (sugar && !['v-model', 'sync'].includes(sugar)) {
    errors.push('syntacticSugar 不合法。可选：v-model、sync');
  } else if (sugar) {
    const vueLabels = new Set(['Vue(PC)', 'Vue(Mobile)', 'UniApp']);
    const platforms = Array.isArray(input.platform_framework) ? input.platform_framework : [];
    if (!platforms.some((name) => vueLabels.has(name))) {
      errors.push('syntacticSugar 仅在 platformFramework 包含 Vue(PC)、Vue(Mobile) 或 UniApp 时可用');
    }
  }

  const allowsEnum = typeValues.includes('String') || typeValues.includes('Number');
  if (input.field_enum !== undefined && !Array.isArray(input.field_enum)) {
    errors.push('fieldEnum 必须是字符串数组');
  } else if (input.field_enum?.some((value) => typeof value !== 'string' || !value)) {
    errors.push('fieldEnum 每一项必须是非空字符串');
  } else if (input.field_enum?.length && !allowsEnum) {
    errors.push('fieldEnum 仅在 fieldType 包含 String 或 Number 时可用');
  }

  STRINGS.forEach((key) => {
    if (input[key] !== undefined && typeof input[key] !== 'string') {
      errors.push(`${snakeToCamel(key)} 必须是字符串`);
    }
  });

  if (
    input.version !== undefined &&
    (!input.version || typeof input.version !== 'object' || Array.isArray(input.version))
  ) {
    errors.push('version 必须是 JSON 对象');
  }

  if (input.field_category === 'Props' && typeValues.length === 0) {
    warnings.push(`${input.component || ''}.${input.field_name || ''} 是 Props，但未填 fieldType`);
  }
  if (!input.field_desc_zh) warnings.push(`${input.component || ''}.${input.field_name || ''} 未填 fieldDescZh`);

  const payload = {
    component: input.component,
    field_name: input.field_name,
    field_category: categoryValue,
    platform_framework: platformValues,
    field_type: typeValues,
  };
  STRINGS.forEach((key) => {
    if (input[key] !== undefined) payload[key] = input[key];
  });
  if (input.field_enum !== undefined) payload.field_enum = input.field_enum;
  if (input.version !== undefined) payload.version = input.version;
  FLAGS.forEach((key) => {
    if (input[key] !== undefined) payload[key] = readFlag(input, key, errors);
  });

  const changes = {};
  present.forEach((key) => {
    changes[key] = payload[key];
  });

  return { errors, warnings, payload, changes };
}

export function parseDraftDocument(value) {
  if (Array.isArray(value)) return value;
  return [value];
}
