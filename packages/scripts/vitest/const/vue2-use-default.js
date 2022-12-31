/** Vue2 里面使用了 useVModel 或者 useDefault Hook 的组件，需要带上命令行参数 useDefault，以便输出正确的 props */
const NEED_USE_DEFAULT_OR_USE_VMODEL = [
  'Table',
  'RangeInput',
  'SelectInput',
  'TagInput',
  'Select',
  'TreeSelect',
  'Cascader',
  'DatePicker',
  'TimePicker',
  'Upload',
  'Menu',
  'AutoComplete',
];

module.exports = {
  NEED_USE_DEFAULT_OR_USE_VMODEL,
};
