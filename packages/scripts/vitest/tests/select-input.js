module.exports = {
  SelectInput: {
    allowInput_2293: {
      field_name: 'allowInput',
      id: 2293,
      PC: {
        className: [
          { value: true, expect: [{ dom: '.t-input', className: { 't-is-readonly': false } }] },
        ],
        classNameDom: '',
      },
    },
    autoWidth_2324: { field_name: 'autoWidth', id: 2324 },
    autofocus_3297: { field_name: 'autofocus', id: 3297 },
    borderless_2218: {
      field_name: 'borderless',
      id: 2218,
      PC: { className: 't-select-input--borderless' },
    },
    clearable_2132: {
      field_name: 'clearable',
      id: 2132,
      PC: {
        event: [
          {
            description: 'empty value can not show clear icon',
            wrapper: '',
            expect: [
              { trigger: 'mouseenter(.t-input)', exist: [{ '.t-input__suffix-clear': false }] },
            ],
          },
          {
            props: { value: 'tdesign' },
            description: 'show clear icon on mouse enter in single select input',
            expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-input__suffix-clear'] }],
          },
          {
            props: { value: ['tdesign'], multiple: true },
            description: 'show clear icon on mouse enter in multiple select input',
            expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-tag-input__suffix-clear'] }],
          },
        ],
      },
    },
    collapsedItems_2133: {
      field_name: 'collapsedItems',
      id: 2133,
      PC: {
        wrapper: 'getSelectInputMultipleMount',
        props: { minCollapsedNum: 3 },
        tnode: { dom: [], trigger: '', params: [{ count: 5 }] },
      },
    },
    disabled_2134: {
      field_name: 'disabled',
      id: 2134,
      PC: { className: 't-is-disabled', classNameDom: '.t-input' },
    },
    inputProps_2135: { field_name: 'inputProps', id: 2135 },
    inputValue_2356: { field_name: 'inputValue', id: 2356 },
    keys_2290: { field_name: 'keys', id: 2290 },
    label_2136: { field_name: 'label', id: 2136, PC: { tnode: true } },
    loading_2359: {
      field_name: 'loading',
      id: 2359,
      PC: { props: { loading: true }, dom: ['.t-loading'] },
    },
    minCollapsedNum_2139: { field_name: 'minCollapsedNum', id: 2139 },
    multiple_2295: { field_name: 'multiple', id: 2295, PC: { dom: '.t-tag-input' } },
    panel_2300: {
      field_name: 'panel',
      id: 2300,
      PC: { tnode: { dom: ['document.custom-node'], trigger: 'click(.t-input)' } },
    },
    placeholder_2146: {
      field_name: 'placeholder',
      id: 2146,
      PC: { attribute: { placeholder: 'This is SelectInput placeholder' }, attributeDom: 'input' },
    },
    popupProps_2166: { field_name: 'popupProps', id: 2166 },
    popupVisible_2164: { field_name: 'popupVisible', id: 2164 },
    readonly_2147: { field_name: 'readonly', id: 2147 },
    status_2148: {
      field_name: 'status',
      id: 2148,
      PC: {
        className: [{ 't-is-default': false }, 't-is-success', 't-is-warning', 't-is-error'],
        classNameDom: '.t-input',
      },
    },
    suffix_2149: { field_name: 'suffix', id: 2149, PC: { tnode: true } },
    suffixIcon_2150: { field_name: 'suffixIcon', id: 2150, PC: { tnode: true } },
    tag_2302: {
      field_name: 'tag',
      id: 2302,
      PC: {
        props: { multiple: true, value: ['tdesign-vue'] },
        tnode: { dom: [], trigger: '', params: [{ value: 'tdesign-vue' }] },
      },
    },
    tagInputProps_2141: { field_name: 'tagInputProps', id: 2141 },
    tagProps_2163: { field_name: 'tagProps', id: 2163 },
    tips_2288: {
      field_name: 'tips',
      id: 2288,
      PC: { dom: { 'this is a tip': { '.t-input__tips': 1 } } },
    },
    value_2160: { field_name: 'value', id: 2160 },
    valueDisplay_2144: { field_name: 'valueDisplay', id: 2144 },
    blur_2151: { field_name: 'blur', id: 2151 },
    clear_2145: { field_name: 'clear', id: 2145 },
    enter_2154: { field_name: 'enter', id: 2154 },
    focus_2155: { field_name: 'focus', id: 2155 },
    inputChange_2357: { field_name: 'inputChange', id: 2357 },
    mouseenter_2156: { field_name: 'mouseenter', id: 2156 },
    mouseleave_2157: { field_name: 'mouseleave', id: 2157 },
    paste_2158: { field_name: 'paste', id: 2158 },
    popupVisibleChange_2165: { field_name: 'popupVisibleChange', id: 2165 },
    tagChange_2298: { field_name: 'tagChange', id: 2298 },
  },
};
