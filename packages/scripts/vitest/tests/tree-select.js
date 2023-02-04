module.exports = {
  TreeSelect: {
    autoWidth_2375: { field_name: 'autoWidth', id: 2375 },
    autofocus_3298: {
      field_name: 'autofocus',
      id: 3298,
      PC: {
        attribute: [
          { value: false, expect: [{ dom: 'input', attribute: { autofocus: false } }] },
          { value: true, expect: [{ dom: 'input', attribute: { autofocus: 'toBeDefined' } }] },
        ],
      },
    },
    borderless_2376: {
      field_name: 'borderless',
      id: 2376,
      PC: { className: 't-select-input--borderless' },
    },
    clearable_1133: {
      field_name: 'clearable',
      id: 1133,
      PC: {
        event: [
          {
            description: 'empty value can not show clear icon',
            expect: [
              { trigger: 'mouseenter(.t-input)', exist: [{ '.t-input__suffix-clear': false }] },
            ],
          },
          {
            props: { value: 1 },
            description: 'show clear icon on mouse enter in single tree select',
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              { trigger: 'mouseenter(.t-input)', delay: 0, exist: ['.t-input__suffix-clear'] },
            ],
          },
          {
            props: { value: [1] },
            description: 'show clear icon on mouse enter in multiple tree select',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-tag-input__suffix-clear'] }],
          },
        ],
      },
    },
    collapsedItems_1822: {
      field_name: 'collapsedItems',
      id: 1822,
      PC: {
        wrapper: 'getTreeSelectMultipleMount',
        props: { minCollapsedNum: 3 },
        tnode: { dom: [], trigger: '', params: [{ count: 5 }] },
      },
    },
    customStyle_3230: { field_name: 'customStyle', id: 3230 },
    data_1149: {
      field_name: 'data',
      id: 1149,
      PC: {
        event: [
          {
            props: { data: [] },
            description: 'empty data with panel content node',
            expect: [{ trigger: 'click(.t-input)', exist: ['document.t-select__empty'] }],
          },
        ],
      },
    },
    disabled_1136: {
      field_name: 'disabled',
      id: 1136,
      PC: {
        className: 't-is-disabled',
        classNameDom: '.t-input',
        event: [
          {
            description: 'disabled TreeSelect can not open popup',
            expect: [{ trigger: 'click(.t-input)', event: { popupVisibleChange: 'not' } }],
          },
          {
            props: { value: 1, disabled: true },
            description: 'cant not show clear icon on mouse enter in single tree select',
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              {
                trigger: 'mouseenter(.t-input)',
                delay: 0,
                exist: [{ '.t-input__suffix-clear': false }],
              },
            ],
          },
          {
            props: { value: [1], disabled: true },
            description: 'cant not show clear icon on mouse enter in multiple tree select',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'mouseenter(.t-input)', exist: [{ '.t-tag-input__suffix-clear': false }] },
            ],
          },
        ],
      },
    },
    empty_1142: {
      field_name: 'empty',
      id: 1142,
      PC: { tnode: { dom: ['document.custom-node'], trigger: 'click(.t-input)' } },
    },
    filter_294: {
      field_name: 'filter',
      id: 294,
      PC: {
        event: [
          {
            props: {
              filter: '(filterWord, node) => !filterWord || node.data.label === filterWord',
            },
            description: '',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)' },
              {
                trigger: "simulateInputChange('input', 'tdesign-react')",
                exist: [
                  {
                    'document.t-tree__item:not(.t-tree__item--hidden)': 1,
                    clearElementAtEnd: '.t-popup',
                  },
                ],
                delay: 100,
              },
            ],
          },
          {
            props: {
              onSearch: '() => {}',
              filter: '(filterWord, option) => !filterWord || option.label === filterWord',
            },
            description:
              'priority of onSearch is higher than props.filter, props.filter is forbidden to work in this scene',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)' },
              {
                trigger: "simulateInputChange('input', 'tdesign-react')",
                exist: [{ clearElementAtEnd: '.t-popup' }],
                delay: 100,
              },
            ],
          },
        ],
      },
    },
    filterable_1138: {
      field_name: 'filterable',
      id: 1138,
      PC: {
        event: [
          {
            props: { inputValue: 'tdesign-vue' },
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              {
                trigger: 'click(.t-input)',
                exist: [
                  {
                    'document.t-tree__item:not(.t-tree__item--hidden)': 1,
                    clearElementAtEnd: '.t-popup',
                  },
                ],
                delay: 100,
              },
            ],
          },
        ],
      },
    },
    height_3224: { field_name: 'height', id: 3224 },
    inputProps_2367: {
      field_name: 'inputProps',
      id: 2367,
      PC: {
        attribute: [
          {
            value: "{name:'tree-select-input-name'}",
            expect: [{ dom: 'input', attribute: { name: 'tree-select-input-name' } }],
          },
        ],
        attributeDom: '',
      },
    },
    inputValue_2368: {
      field_name: 'inputValue',
      id: 2368,
      PC: {
        event: [
          {
            props: { filterable: true },
            description: 'uncontrolled inputValue works fine',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)' },
              {
                trigger: "simulateInputChange('input', 'tdesign')",
                event: { inputChange: ['tdesign', { 'e.type': 'input', trigger: 'input' }] },
                exist: [{ input: { attribute: { value: 'tdesign' } } }],
              },
            ],
          },
          {
            props: { filterable: true, inputValue: 'tdesign', popupVisible: true },
            description: 'controlled inputValue works fine',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              {
                trigger: "simulateInputChange('input', 'Hello TDesign')",
                event: { inputChange: ['Hello TDesign', { 'e.type': 'input', trigger: 'input' }] },
                exist: [
                  { input: { attribute: { value: 'tdesign' } }, clearElementAtEnd: '.t-popup' },
                ],
              },
            ],
          },
        ],
      },
    },
    keys_3228: { field_name: 'keys', id: 3228 },
    loading_1140: { field_name: 'loading', id: 1140, PC: { dom: '.t-loading' } },
    loadingText_1141: {
      field_name: 'loadingText',
      id: 1141,
      PC: {
        props: { loading: true },
        tnode: {
          dom: ['document.custom-node', 'document.t-select__loading-tips'],
          trigger: 'click(.t-input)',
        },
        event: [
          {
            props: { loading: true },
            description: 'loading status show loading text in panel',
            wrapper: '',
            expect: [{ trigger: 'click(.t-input)', exist: ['document.t-select__loading-tips'] }],
          },
        ],
      },
    },
    max_1190: {
      field_name: 'max',
      id: 1190,
      PC: {
        event: [
          {
            props: { max: 2, value: "[1,'4']" },
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)', delay: 300 },
              {
                trigger: 'click(document.t-popup .t-tree__item:last-child .t-checkbox__label)',
                event: { change: 'not' },
                exist: [{ clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
        ],
      },
    },
    minCollapsedNum_1821: {
      field_name: 'minCollapsedNum',
      id: 1821,
      PC: {
        wrapper: 'getTreeSelectMultipleMount',
        props: { minCollapsedNum: 2 },
        dom: [{ '.t-tag': 3, '.t-tag:last-child': { text: '+3' } }],
      },
    },
    multiple_1134: { field_name: 'multiple', id: 1134 },
    multiple_3231: { field_name: 'multiple', id: 3231 },
    options_3229: { field_name: 'options', id: 3229 },
    placeholder_1137: {
      field_name: 'placeholder',
      id: 1137,
      PC: { attribute: { placeholder: 'this is tree select placeholder' }, attributeDom: 'input' },
    },
    popupProps_1144: {
      field_name: 'popupProps',
      id: 1144,
      PC: {
        event: [
          {
            props: { popupProps: "{overlayClassName: 'custom-popup-class-name'}" },
            expect: [
              {
                trigger: 'click(.t-input)',
                exist: [
                  {
                    'document.t-popup': { className: ['custom-popup-class-name'] },
                    clearElementAtEnd: '.t-popup',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    popupVisible_2396: {
      field_name: 'popupVisible',
      id: 2396,
      PC: { className: 't-select-input--popup-visible' },
    },
    prefixIcon_1145: { field_name: 'prefixIcon', id: 1145, PC: { tnode: true } },
    readonly_2387: {
      field_name: 'readonly',
      id: 2387,
      PC: {
        event: [{ expect: [{ trigger: 'click(.t-input)', event: { popupVisibleChange: 'not' } }] }],
      },
    },
    selectInputProps_2330: { field_name: 'selectInputProps', id: 2330 },
    size_1132: {
      field_name: 'size',
      id: 1132,
      PC: { className: ['t-size-s', { 't-size-m': false }, 't-size-l'], classNameDom: '.t-input' },
    },
    status_2916: {
      field_name: 'status',
      id: 2916,
      PC: {
        className: [{ 't-is-default': false }, 't-is-success', 't-is-warning', 't-is-error'],
        classNameDom: '.t-input',
      },
    },
    tagProps_2329: {
      field_name: 'tagProps',
      id: 2329,
      PC: {
        wrapper: 'getTreeSelectMultipleMount',
        dom: { "{ theme: 'warning' }": { '.t-tag--warning': 5 } },
      },
    },
    tips_2917: {
      field_name: 'tips',
      id: 2917,
      PC: { dom: { 'this is a tip': { '.t-input__tips': 1 } } },
    },
    treeProps_1156: { field_name: 'treeProps', id: 1156 },
    value_1131: {
      field_name: 'value',
      id: 1131,
      PC: {
        attribute: [
          { value: 'tdesign-vue', expect: [{ dom: 'input', attribute: { value: 'tdesign-vue' } }] },
        ],
      },
    },
    valueDisplay_1833: {
      field_name: 'valueDisplay',
      id: 1833,
      PC: {
        wrapper: 'getTreeSelectMultipleMount',
        props: { value: 1, data: "[{label: 'tdesign-vue',value: 1}]" },
        tnode: { dom: [], trigger: '', params: [{ value: [{ label: 'tdesign-vue', value: 1 }] }] },
      },
    },
    valueType_1143: {
      field_name: 'valueType',
      id: 1143,
      PC: {
        wrapper: 'getTreeSelectDefaultMount',
        props: { multiple: true, value: "[{ label: 'tdesign-vue', value: 1 }]" },
        dom: { object: { '.t-tag': 1 } },
      },
    },
    blur_1155: {
      field_name: 'blur',
      id: 1155,
      PC: {
        event: [
          {
            props: { filterable: true, value: 1 },
            description: 'single select blur works fine',
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              {
                trigger: 'focus(input)',
                delay: 100,
                event: { focus: [{ 'e.type': 'focus', value: 1 }] },
              },
              {
                trigger: 'blur(input)',
                event: { blur: [{ 'e.type': 'blur', value: 1 }] },
                exist: [{ clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
          {
            props: { filterable: true, value: [1] },
            description: 'multiple select blur works fine',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)', event: { focus: [{ 'e.type': 'focus' }] } },
              {
                trigger: 'blur(input)',
                event: { blur: [{ 'e.type': 'blur', value: [1] }] },
                exist: [{ clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
        ],
      },
    },
    change_1148: {
      field_name: 'change',
      id: 1148,
      PC: {
        event: [
          {
            description: 'Single TreeSelect, click one tree item to trigger value change',
            wrapper: 'getTreeSelectDefaultMount',
            props: { treeProps: { expandAll: true } },
            expect: [
              { trigger: 'click(.t-input)', delay: 200 },
              {
                trigger: 'click(document.t-tree__item:nth-child(3))',
                event: {
                  change: [
                    '2.1',
                    {
                      'e.type': 'click',
                      'node.label': 'tdesign-web-react',
                      data: { label: 'tdesign-web-react', value: '2.1' },
                    },
                  ],
                },
                exist: [{ clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
          {
            description: 'Multiple TreeSelect, click one tree item to trigger value change',
            wrapper: 'getTreeSelectMultipleMount',
            props: { treeProps: { expandAll: true } },
            expect: [
              { trigger: 'click(.t-input)', delay: 200 },
              {
                trigger: 'click(document.t-tree__item:last-child .t-checkbox__label)',
                event: {
                  change: [
                    [1, '2.1', '2.2', 3, '4', '5', '6'],
                    {
                      trigger: 'check',
                      'e.type': 'change',
                      'node.label': 'tdesign-mobile-vue',
                      data: { label: 'tdesign-mobile-vue', value: '6' },
                    },
                  ],
                },
                exist: [{ clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
          {
            description: 'Multiple TreeSelect, click one tree item to delete',
            wrapper: 'getTreeSelectMultipleMount',
            props: { treeProps: { expandAll: true } },
            expect: [
              { trigger: 'click(.t-input)', delay: 200 },
              {
                trigger: 'click(document.t-tree__item:first-child .t-checkbox__label)',
                event: {
                  change: [
                    ['2.1', '2.2', 3, '4', '5'],
                    { trigger: 'uncheck', 'e.type': 'change', 'node.label': 'tdesign-vue' },
                  ],
                },
                exist: [{ clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
        ],
      },
    },
    change_3232: { field_name: 'change', id: 3232 },
    clear_1153: {
      field_name: 'clear',
      id: 1153,
      PC: {
        event: [
          {
            props: { clearable: true },
            description: 'Multiple TreeSelect, clear all value on click clear icon',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'mouseenter(.t-input)' },
              {
                trigger: 'click(.t-tag-input__suffix-clear)',
                event: {
                  clear: [{ 'e.type': 'click' }],
                  change: [[], { trigger: 'clear' }],
                  popupVisibleChange: [false, { trigger: 'trigger-element-click' }],
                },
              },
            ],
          },
          {
            props: { value: 1, clearable: true },
            description: 'Single TreeSelect, clear value on click clear icon',
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              { trigger: 'mouseenter(.t-input)' },
              {
                trigger: 'click(.t-input__suffix-clear)',
                event: {
                  clear: [{ 'e.type': 'click' }],
                  change: ['undefined', { trigger: 'clear' }],
                  popupVisibleChange: [false, { trigger: 'trigger-element-click' }],
                },
              },
            ],
          },
        ],
      },
    },
    enter_3314: { field_name: 'enter', id: 3314 },
    focus_1154: {
      field_name: 'focus',
      id: 1154,
      PC: {
        event: [
          {
            props: { filterable: true, value: [1] },
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'focus(input)', event: { focus: [{ value: [1], 'e.type': 'focus' }] } },
            ],
          },
          {
            props: { filterable: true, value: [{ label: 'tdesign-vue', value: 1 }] },
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              {
                trigger: 'focus(input)',
                event: {
                  focus: [{ value: [{ label: 'tdesign-vue', value: 1 }], 'e.type': 'focus' }],
                },
              },
            ],
          },
        ],
      },
    },
    inputChange_2370: {
      field_name: 'inputChange',
      id: 2370,
      PC: {
        event: [
          {
            props: { inputValue: 'tdesign-vue' },
            description: 'clear filter words on change',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)', delay: 200 },
              {
                trigger: 'click(document.t-tree__item:first-child .t-checkbox__label)',
                event: { inputChange: ['', { trigger: 'change' }] },
              },
            ],
          },
        ],
      },
    },
    popupVisibleChange_2395: {
      field_name: 'popupVisibleChange',
      id: 2395,
      PC: {
        event: [
          {
            props: { inputValue: 'tdesign' },
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)', event: { popupVisibleChange: [true] }, delay: 200 },
            ],
          },
        ],
      },
    },
    remove_1152: {
      field_name: 'remove',
      id: 1152,
      PC: {
        event: [
          {
            description: 'remove first value on click close icon',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              {
                trigger: 'click(.t-tag__icon-close)',
                event: {
                  remove: [
                    {
                      value: 1,
                      index: 0,
                      trigger: 'tag-remove',
                      data: { label: 'tdesign-vue', value: 1 },
                      'e.type': 'click',
                    },
                  ],
                },
              },
            ],
          },
          {
            props: { filterable: true },
            description: 'remove last child on keydown.backspace',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)' },
              {
                trigger: 'keydown.backspace(input)',
                event: {
                  remove: [
                    {
                      value: '5',
                      index: 4,
                      trigger: 'backspace',
                      data: { label: 'tdesign-angular', value: '5' },
                      'e.type': 'keydown',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
    search_1151: {
      field_name: 'search',
      id: 1151,
      PC: {
        event: [
          {
            props: { filterable: true },
            description: 'Single TreeSelect, trigger search event on input text',
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              { trigger: 'click(.t-input)' },
              {
                trigger: "simulateInputChange('input', 'tdesign-vue')",
                event: { search: ['tdesign-vue'] },
              },
            ],
          },
          {
            props: { filterable: true },
            description: 'Single TreeSelect, trigger search event on input enter',
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              { trigger: 'click(.t-input)' },
              { trigger: "simulateInputChange('input', 'tdesign-vue')" },
              {
                trigger: "simulateInputEnter('input')",
                event: { 'search.calls[1]': ['tdesign-vue'] },
              },
            ],
          },
          {
            props: { filterable: true },
            description: 'Multiple TreeSelect, trigger search event on input text',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)' },
              {
                trigger: "simulateInputChange('input', 'tdesign-vue')",
                event: { search: ['tdesign-vue'] },
              },
            ],
          },
          {
            props: { filterable: true },
            description: 'Multiple TreeSelect, trigger search event on input enter',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)' },
              { trigger: "simulateInputChange('input', 'tdesign-vue')" },
              {
                trigger: "simulateInputEnter('input')",
                event: { 'search.calls[1]': ['tdesign-vue'] },
              },
            ],
          },
        ],
      },
    },
    '<DataOption extends TreeOptionData = TreeOptionData, TreeValueType extends TreeSelectValue  = TreeSelectValue>_1150':
      {
        field_name:
          '<DataOption extends TreeOptionData = TreeOptionData, TreeValueType extends TreeSelectValue  = TreeSelectValue>',
        id: 1150,
      },
  },
};
