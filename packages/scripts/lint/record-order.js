// 落盘与校验共用的字段键顺序。
export const RECORD_FIELD_ORDER = [
  'id',
  'platform_framework',
  'component',
  'field_category',
  'field_name',
  'field_type',
  'field_default_value',
  'field_enum',
  'field_desc_zh',
  'field_desc_en',
  'custom_field_type',
  'event_input',
  'event_output',
  'syntactic_sugar',
  'trigger_elements',
  'version',
  'test_description',
  'field_required',
  'deprecated',
  'html_attribute',
  'support_default_value',
  'order',
];

/**
 * 按约定顺序重排记录字段。
 */
export function orderRecordFields(record) {
  const ordered = {};
  RECORD_FIELD_ORDER.forEach((field) => {
    if (field in record) ordered[field] = record[field];
  });
  // 未列入顺序表的字段追加在末尾，避免丢失未知键。
  Object.keys(record).forEach((field) => {
    if (!(field in ordered)) ordered[field] = record[field];
  });
  return ordered;
}

/**
 * 判断记录字段键顺序是否符合约定。
 */
export function recordKeysInOrder(record) {
  const actual = Object.keys(record);
  const expected = Object.keys(orderRecordFields(record));
  return actual.every((key, index) => key === expected[index]);
}
