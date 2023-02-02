module.exports = {
  TagInput: {
    autoWidth_2321: { field_name: 'autoWidth', id: 2321 },
    clearable_2099: {
      field_name: 'clearable',
      id: 2099,
      PC: {
        event: [
          {
            description: 'empty TagInput does not need clearIcon',
            expect: [
              { trigger: 'mouseenter(.t-input)', exist: [{ '.t-tag-input__suffix-clear': false }] },
            ],
          },
          {
            description: 'show clearIcon on mouse enter',
            wrapper: 'getTagInputValueMount',
            expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-tag-input__suffix-clear'] }],
          },
          {
            description: 'clear all tags on click clearIcon',
            wrapper: 'getTagInputValueMount',
            expect: [
              { trigger: 'mouseenter(.t-input)' },
              {
                trigger: 'click(.t-tag-input__suffix-clear)',
                event: {
                  clear: [{ 'e.type': 'click' }],
                  change: [[], { trigger: 'clear', 'e.type': 'click' }],
                },
              },
            ],
          },
          {
            props: { disabled: true },
            description: 'disabled TagInput can not show clear icon',
            wrapper: 'getTagInputValueMount',
            expect: [
              { trigger: 'mouseenter(.t-input)', exist: [{ '.t-input__suffix-clear': false }] },
            ],
          },
          {
            props: { readonly: true },
            description: 'readonly TagInput can not show clear icon',
            wrapper: 'getTagInputValueMount',
            expect: [
              { trigger: 'mouseenter(.t-input)', exist: [{ '.t-input__suffix-clear': false }] },
            ],
          },
        ],
      },
    },
    collapsedItems_2105: {
      field_name: 'collapsedItems',
      id: 2105,
      PC: {
        wrapper: 'getTagInputValueMount',
        props: { minCollapsedNum: 3 },
        tnode: { trigger: '', dom: [] },
      },
    },
    disabled_2114: {
      field_name: 'disabled',
      id: 2114,
      PC: {
        className: 't-is-disabled',
        classNameDom: '.t-input',
        event: [
          {
            description: 'disabled TagInput does not need clearIcon',
            wrapper: 'getTagInputValueMount',
            expect: [
              { trigger: 'mouseenter(.t-input)', exist: [{ '.t-tag-input__suffix-clear': false }] },
            ],
          },
          {
            description: 'disabled TagInput can not trigger focus event',
            expect: [{ trigger: 'click(.t-input)', event: { focus: 'not' } }],
          },
        ],
      },
    },
    dragSort_2131: { field_name: 'dragSort', id: 2131 },
    excessTagsDisplayType_2115: {
      field_name: 'excessTagsDisplayType',
      id: 2115,
      PC: {
        wrapper: 'getTagInputValueMount',
        className: [{ 't-tag-input--break-line': false }, 't-tag-input--break-line'],
        attribute: '',
      },
    },
    inputProps_2092: {
      field_name: 'inputProps',
      id: 2092,
      PC: {
        className: [
          {
            value: "{size: 'small'}",
            expect: [{ dom: '.t-input', className: { 't-size-s': true } }],
          },
        ],
      },
    },
    inputValue_2355: {
      field_name: 'inputValue',
      id: 2355,
      PC: {
        attribute: [
          {
            value: 'input value text',
            expect: [{ dom: 'input', attribute: { value: 'input value text' } }],
          },
        ],
      },
    },
    label_2097: { field_name: 'label', id: 2097, PC: { tnode: true } },
    max_2101: {
      field_name: 'max',
      id: 2101,
      PC: {
        event: [
          {
            props: { max: 1 },
            description: 'could type only three tags',
            wrapper: 'getTagInputDefaultMount',
            expect: [
              { trigger: 'focus(input)' },
              { trigger: "simulateInputChange('input', 'Tag3')" },
              { trigger: "simulateInputEnter('input')", exist: [{ '.t-tag': 1 }] },
              { trigger: " simulateInputChange('input', 'Tag5')" },
              { trigger: "simulateInputEnter('input')", exist: [{ '.t-tag': 1 }] },
            ],
          },
        ],
      },
    },
    minCollapsedNum_2104: {
      field_name: 'minCollapsedNum',
      id: 2104,
      PC: { wrapper: 'getTagInputValueMount', dom: { '3': { '.t-tag': 4 } } },
    },
    placeholder_2094: {
      field_name: 'placeholder',
      id: 2094,
      PC: { attribute: { placeholder: 'This is TagInput placeholder' }, attributeDom: 'input' },
    },
    readonly_2095: {
      field_name: 'readonly',
      id: 2095,
      PC: {
        className: 't-is-readonly',
        classNameDom: '.t-input',
        event: [
          {
            description: 'readonly TagInput does not need clearIcon',
            wrapper: 'getTagInputValueMount',
            expect: [
              { trigger: 'mouseenter(.t-input)', event: [{ '.t-tag-input__suffix-clear': false }] },
            ],
          },
          {
            description: 'readonly TagInput can not trigger focus event',
            expect: [{ trigger: 'click(.t-input)', event: { focus: 'not' } }],
          },
        ],
      },
    },
    size_2194: {
      field_name: 'size',
      id: 2194,
      PC: { className: ['t-size-s', { 't-size-m': false }, 't-size-l'], classNameDom: '.t-input' },
    },
    status_2098: {
      field_name: 'status',
      id: 2098,
      PC: {
        className: [{ 't-is-default': false }, 't-is-success', 't-is-warning', 't-is-error'],
        classNameDom: '.t-input',
      },
    },
    suffix_2130: { field_name: 'suffix', id: 2130, PC: { tnode: true } },
    suffixIcon_2129: { field_name: 'suffixIcon', id: 2129, PC: { tnode: true } },
    tag_2107: {
      field_name: 'tag',
      id: 2107,
      PC: {
        wrapper: 'getTagInputValueMount',
        tnode: { dom: [], trigger: '', params: [{ value: 'tdesign-vue' }] },
      },
    },
    tagProps_2096: {
      field_name: 'tagProps',
      id: 2096,
      PC: {
        wrapper: 'getTagInputValueMount',
        props: { multiple: true },
        dom: { "{ theme: 'warning' }": { '.t-tag--warning': 5 } },
      },
    },
    tips_2171: {
      field_name: 'tips',
      id: 2171,
      PC: { dom: { 'this is a tip': { '.t-input__tips': 1 } } },
    },
    value_2090: {
      field_name: 'value',
      id: 2090,
      PC: {
        wrapper: 'getTagInputDefaultMount',
        event: [
          {
            props: { value: '[]' },
            description: 'controlled value test: only props can change count of tags',
            wrapper: '',
            expect: [
              { trigger: 'focus(input)' },
              { trigger: "simulateInputChange('input', 'Tag1')" },
              { trigger: "simulateInputEnter('input')", exist: [{ '.t-tag': false }] },
            ],
          },
          {
            description: 'uncontrolled value test: count of tags can be changed inner TagInput',
            expect: [
              { trigger: 'focus(input)' },
              { trigger: "simulateInputChange('input', 'Tag2')" },
              { trigger: "simulateInputEnter('input')", exist: [{ '.t-tag': 1 }] },
            ],
          },
        ],
      },
    },
    valueDisplay_2102: {
      field_name: 'valueDisplay',
      id: 2102,
      PC: {
        wrapper: 'getTagInputValueMount',
        tnode: {
          dom: [],
          trigger: '',
          params: [
            {
              value: [
                'tdesign-vue',
                'tdesign-react',
                'tdesign-miniprogram',
                'tdesign-mobile-vue',
                'tdesign-mobile-react',
              ],
            },
          ],
        },
      },
    },
    blur_2127: {
      field_name: 'blur',
      id: 2127,
      PC: {
        event: [
          {
            description: 'trigger blur event and clear inputValue on blur',
            expect: [
              { trigger: 'focus(input)' },
              { trigger: "simulateInputChange('input', 'tag1')" },
              {
                trigger: 'blur(input)',
                event: {
                  blur: [[], { 'e.type': 'blur', inputValue: '' }],
                  'inputChange.calls[1]': ['', { 'e.type': 'blur', trigger: 'blur' }],
                },
                exist: [{ input: { attribute: { value: '' } } }],
              },
            ],
          },
        ],
      },
    },
    change_2091: { field_name: 'change', id: 2091 },
    clear_2100: {
      field_name: 'clear',
      id: 2100,
      PC: {
        event: [
          {
            props: { clearable: true },
            description: 'click clear icon, then clear all tags',
            wrapper: 'getTagInputValueMount',
            expect: [
              { trigger: 'mouseenter(.t-input)' },
              {
                trigger: 'click(.t-tag-input__suffix-clear)',
                event: { clear: [{ 'e.type': 'click' }], change: [[], { trigger: 'clear' }] },
              },
            ],
          },
        ],
      },
    },
    click_2323: {
      field_name: 'click',
      id: 2323,
      PC: { event: { 'click(.t-input)': { arguments: [{ 'e.type': 'click' }] } } },
    },
    dragSort_2350: { field_name: 'dragSort', id: 2350 },
    enter_2093: {
      field_name: 'enter',
      id: 2093,
      PC: {
        event: [
          {
            props: { value: "['tag']" },
            wrapper: 'getTagInputDefaultMount',
            expect: [
              {
                trigger: "simulateInputEnter('input')",
                event: { enter: [['tag'], { 'e.type': 'keydown', inputValue: '' }] },
              },
            ],
          },
          {
            expect: [
              { trigger: 'focus(input)' },
              { trigger: "simulateInputChange('input', 'Tag')" },
              { trigger: "simulateInputEnter('input')", exist: [{ '.t-tag': 1 }] },
            ],
          },
        ],
      },
    },
    focus_2128: {
      field_name: 'focus',
      id: 2128,
      PC: {
        event: [
          {
            description: '',
            wrapper: 'getTagInputDefaultMount',
            expect: [
              {
                trigger: 'focus(input)',
                event: { focus: [[], { 'e.type': 'focus', inputValue: '' }] },
              },
            ],
          },
          {
            props: { inputValue: 'tag' },
            description: 'expect focus not change inputValue',
            wrapper: 'getTagInputDefaultMount',
            expect: [
              {
                trigger: 'focus(input)',
                event: { focus: [[], { 'e.type': 'focus', inputValue: 'tag' }] },
              },
            ],
          },
        ],
      },
    },
    inputChange_2335: { field_name: 'inputChange', id: 2335 },
    mouseenter_2111: {
      field_name: 'mouseenter',
      id: 2111,
      PC: {
        event: [
          {
            description: '',
            expect: [
              {
                trigger: 'mouseenter(.t-input)',
                event: { mouseenter: [{ 'e.type': 'mouseenter' }] },
              },
            ],
          },
        ],
      },
    },
    mouseleave_2112: {
      field_name: 'mouseleave',
      id: 2112,
      PC: {
        event: [
          {
            description: '',
            expect: [
              {
                trigger: 'mouseleave(.t-input)',
                event: { mouseleave: [{ 'e.type': 'mouseleave' }] },
              },
            ],
          },
        ],
      },
    },
    paste_2117: {
      field_name: 'paste',
      id: 2117,
      PC: {
        event: [
          { expect: [{ trigger: 'paste(input)', event: { paste: [{ 'e.type': 'paste' }] } }] },
        ],
      },
    },
    remove_2113: {
      field_name: 'remove',
      id: 2113,
      PC: {
        event: [
          {
            description: 'remove last tag on keydown Backspace',
            wrapper: 'getTagInputValueMount',
            expect: [
              {
                trigger: 'keydown.backspace(input)',
                event: {
                  remove: [
                    {
                      value: [
                        'tdesign-vue',
                        'tdesign-react',
                        'tdesign-miniprogram',
                        'tdesign-mobile-vue',
                      ],
                      index: 4,
                      trigger: 'backspace',
                      item: 'tdesign-mobile-react',
                      'e.type': 'keydown',
                    },
                  ],
                },
              },
            ],
          },
          {
            description: 'remove any tag on click tag close icon',
            wrapper: 'getTagInputValueMount',
            expect: [
              {
                trigger: 'click(.t-tag__icon-close)',
                event: {
                  remove: [
                    {
                      value: [
                        'tdesign-react',
                        'tdesign-miniprogram',
                        'tdesign-mobile-vue',
                        'tdesign-mobile-react',
                      ],
                      index: 0,
                      trigger: 'tag-remove',
                      item: 'tdesign-vue',
                      'e.type': 'click',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  },
};
