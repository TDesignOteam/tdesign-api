export const booleanFields = ['field_required', 'deprecated', 'html_attribute', 'support_default_value'];
export const requiredFields = ['id', 'platform_framework', 'component', 'field_category', 'field_name', 'field_type'];
export const optionalStringFields = [
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
export const arrayFields = ['platform_framework', 'field_type', 'field_enum'];
export const allowedFields = new Set([
  ...requiredFields,
  ...booleanFields,
  ...optionalStringFields,
  'field_enum',
  'version',
  'order',
]);
export const inputFields = new Set([...allowedFields].filter((field) => field !== 'id' && field !== 'order'));

export const categoryOrder = new Map(
  ['Props', 'Events', 'Functions', 'Extends', 'Return', '<T>', 'External Classes', 'CSS Variables', 'Slots'].map(
    (category, index) => [category, index],
  ),
);
