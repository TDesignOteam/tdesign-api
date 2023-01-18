module.exports = {
  TreeSelect: {
    autoWidth: { id: 2375 },
    autofocus: {
      PC: {
        attribute: [
          { value: false, expect: [{ dom: 'input', attribute: { autofocus: false } }] },
          { value: true, expect: [{ dom: 'input', attribute: { autofocus: 'toBeDefined' } }] },
        ],
      },
      id: 3298,
    },
    borderless: { PC: { className: 't-select-input--borderless' }, id: 2376 },
    clearable: {
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
            expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-input__suffix-clear'] }],
          },
          {
            props: { value: '[1]' },
            description: 'show clear icon on mouse enter in multiple tree select',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-tag-input__suffix-clear'] }],
          },
        ],
      },
      id: 1133,
    },
    collapsedItems: {
      PC: {
        wrapper: 'getTreeSelectMultipleMount',
        props: { minCollapsedNum: 3 },
        tnode: { dom: [], trigger: '', params: [{ count: 5 }] },
      },
      id: 1822,
    },
    data: {
      PC: {
        event: [
          {
            props: { data: [] },
            description: 'empty data with panel content node',
            expect: [{ trigger: 'click(.t-input)', exist: ['document.t-select__empty'] }],
          },
        ],
      },
      id: 1149,
    },
    disabled: { PC: { className: 't-is-disabled', classNameDom: '.t-input' }, id: 1136 },
    empty: {
      PC: { tnode: { dom: ['document.custom-node'], trigger: 'click(.t-input)' } },
      id: 1142,
    },
    filter: {
      PC: {
        event: [
          {
            props: { filter: '(filterWord, option) => !filterWord || option.label === filterWord' },
            description: '',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)' },
              {
                trigger: "simulateInputChange('input', 'tdesign-react')",
                exist: [{ 'document.t-tree__item': 1 }],
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
              { trigger: "simulateInputChange('input', 'tdesign-react')", exist: [], delay: 100 },
            ],
          },
        ],
      },
      id: 294,
    },
    filterable: {
      PC: {
        event: [
          {
            props: { inputValue: 'tdesign-vue' },
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              { trigger: 'click(.t-input)', exist: [{ 'document.t-tree__item': 1 }], delay: 100 },
            ],
          },
        ],
      },
      id: 1138,
    },
    inputProps: {
      PC: {
        attribute: [
          {
            value: "{name:'tree-select-input-name'}",
            expect: [{ dom: 'input', attribute: { name: 'tree-select-input-name' } }],
          },
        ],
        attributeDom: '',
      },
      id: 2367,
    },
    inputValue: {
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
            props: { filterable: true, inputValue: 'tdesign' },
            description: 'controlled inputValue works fine',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              {
                trigger: "simulateInputChange('input', 'Hello TDesign')",
                event: { inputChange: ['Hello TDesign', { 'e.type': 'input', trigger: 'input' }] },
                exist: [{ input: { attribute: { value: 'tdesign' } } }],
              },
            ],
          },
        ],
      },
      id: 2368,
    },
    loading: { PC: { dom: '.t-loading' }, id: 1140 },
    loadingText: {
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
      id: 1141,
    },
    max: {
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
              },
            ],
          },
        ],
      },
      id: 1190,
    },
    minCollapsedNum: {
      PC: {
        wrapper: 'getTreeSelectMultipleMount',
        props: { minCollapsedNum: 2 },
        dom: [{ '.t-tag': 3, '.t-tag:last-child': { text: '+3' } }],
      },
      id: 1821,
    },
    multiple: { id: 1134 },
    placeholder: {
      PC: { attribute: { placeholder: 'this is tree select placeholder' }, attributeDom: 'input' },
      id: 1137,
    },
    popupProps: {
      PC: {
        event: [
          {
            props: { popupProps: "{overlayClassName: 'custom-popup-class-name'}" },
            expect: [
              {
                trigger: 'click(.t-input)',
                exist: [{ 'document.t-popup': { className: ['custom-popup-class-name'] } }],
              },
            ],
          },
        ],
      },
      id: 1144,
    },
    popupVisible: { PC: { className: 't-select-input--popup-visible' }, id: 2396 },
    prefixIcon: { PC: { tnode: true }, id: 1145 },
    readonly: { PC: { className: 't-is-readonly', classNameDom: '.t-input' }, id: 2387 },
    selectInputProps: { id: 2330 },
    size: {
      PC: { className: ['t-size-s', { 't-size-m': false }, 't-size-l'], classNameDom: '.t-input' },
      id: 1132,
    },
    status: {
      PC: {
        className: [{ 't-is-default': false }, 't-is-success', 't-is-warning', 't-is-error'],
        classNameDom: '.t-input',
      },
      id: 2916,
    },
    tagProps: {
      PC: {
        wrapper: 'getTreeSelectMultipleMount',
        dom: { "{ theme: 'warning' }": { '.t-tag--warning': 5 } },
      },
      id: 2329,
    },
    tips: { PC: { dom: { 'this is a tip': { '.t-input__tips': 1 } } }, id: 2917 },
    treeProps: { id: 1156 },
    value: {
      PC: {
        attribute: [
          { value: 'tdesign-vue', expect: [{ dom: 'input', attribute: { value: 'tdesign-vue' } }] },
        ],
      },
      id: 1131,
    },
    valueDisplay: {
      PC: {
        wrapper: 'getTreeSelectMultipleMount',
        props: { value: 1, data: "[{label: 'tdesign-vue',value: 1}]" },
        tnode: { dom: [], trigger: '', params: [{ value: [{ label: 'tdesign-vue', value: 1 }] }] },
      },
      id: 1833,
    },
    valueType: {
      PC: {
        wrapper: 'getTreeSelectDefaultMount',
        props: { multiple: true, value: "[{ label: 'tdesign-vue', value: 1 }]" },
        dom: { object: { '.t-tag': 1 } },
      },
      id: 1143,
    },
    blur: {
      PC: {
        event: [
          {
            props: { filterable: true, value: 1 },
            description: 'single select blur works fine',
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              {
                trigger: 'focus(input)',
                event: {
                  focus: [{ 'e.type': 'focus', value: { label: 'tdesign-vue', value: 1 } }],
                },
                delay: 100,
              },
              {
                trigger: 'blur(input)',
                event: { blur: [{ 'e.type': 'blur', value: { label: 'tdesign-vue', value: 1 } }] },
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
                event: {
                  blur: [{ 'e.type': 'blur', value: [{ label: 'tdesign-vue', value: 1 }] }],
                },
              },
            ],
          },
        ],
      },
      id: 1155,
    },
    change: {
      PC: {
        event: [
          {
            description: 'Single TreeSelect, click one tree item to trigger value change',
            wrapper: 'getTreeSelectDefaultMount',
            expect: [
              { trigger: 'click(.t-input)', delay: 200 },
              {
                trigger: 'click(document.t-tree__item:nth-child(3))',
                event: {
                  change: ['2.1', { 'e.type': 'click', 'node.label': 'tdesign-web-react' }],
                },
              },
            ],
          },
          {
            description: 'Multiple TreeSelect, click one tree item to trigger value change',
            wrapper: 'getTreeSelectMultipleMount',
            expect: [
              { trigger: 'click(.t-input)', delay: 200 },
              {
                trigger: 'click(document.t-tree__item:last-child .t-checkbox__label)',
                event: {
                  change: [
                    [1, '2.1', '2.2', 3, '4', '5', '6'],
                    { trigger: 'check', 'e.type': 'change', 'node.label': 'tdesign-mobile-vue' },
                  ],
                },
              },
            ],
          },
          {
            description: 'Multiple TreeSelect, click one tree item to delete',
            wrapper: 'getTreeSelectMultipleMount',
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
              },
            ],
          },
        ],
      },
      id: 1148,
    },
    clear: {
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
      id: 1153,
    },
    focus: {
      PC: {
        event: [
          {
            props: { filterable: true, value: [1] },
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
      id: 1154,
    },
    inputChange: {
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
                event: { inputChange: ['', { trigger: 'clear' }] },
              },
            ],
          },
        ],
      },
      id: 2370,
    },
    popupVisibleChange: {
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
      id: 2395,
    },
    remove: {
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
      id: 1152,
    },
    search: {
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
      id: 1151,
    },
    '<DataOption extends TreeOptionData = TreeOptionData>': { id: 1150 },
  },
};
