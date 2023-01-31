module.exports = {
  AutoComplete: {
    autofocus_3152: {
      field_name: 'autofocus',
      id: 3152,
      PC: {
        attribute: [
          { value: false, expect: [{ dom: 'input', attribute: { autofocus: false } }] },
          { value: true, expect: [{ dom: 'input', attribute: { autofocus: 'toBeDefined' } }] },
        ],
      },
    },
    children_3175: { field_name: 'children', id: 3175, PC: { tnode: true } },
    clearable_3151: {
      field_name: 'clearable',
      id: 3151,
      PC: {
        wrapper: 'getNormalAutoCompleteMount',
        event: [
          {
            description: 'show clear icon on mouse enter',
            expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-input__suffix-clear'] }],
            props: { value: "'Default Keyword'" },
          },
          {
            description: 'expect trigger clear and change events after clear icon has been clicked',
            expect: [
              { trigger: 'mouseenter(.t-input)', delay: true, exist: ['.t-input__suffix-clear'] },
              {
                trigger: 'click(.t-input__suffix-clear)',
                event: {
                  clear: [{ 'e.stopPropagation': true, 'e.type': 'click' }],
                  change: ['', { 'e.stopPropagation': true, 'e.type': 'click' }],
                },
              },
            ],
            props: { value: "'Default Keyword'" },
          },
        ],
      },
    },
    default_3176: { field_name: 'default', id: 3176, PC: { tnode: true } },
    disabled_3153: {
      field_name: 'disabled',
      id: 3153,
      PC: { className: 't-is-disabled', classNameDom: '.t-input' },
    },
    filter_3158: {
      field_name: 'filter',
      id: 3158,
      PC: {
        event: [
          {
            props: { filter: "(filterWords, option) => option.text.includes('Second')" },
            expect: [
              {
                trigger: 'focus(input)',
                exist: [{ 'document.t-select-option': 1, clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
        ],
        wrapper: 'getNormalAutoCompleteMount',
      },
    },
    filterable_3157: {
      field_name: 'filterable',
      id: 3157,
      PC: {
        event: [
          {
            props: { value: "'First'" },
            expect: [
              {
                trigger: 'focus(input)',
                exist: [{ 'document.t-select-option': 1, clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
        ],
        wrapper: 'getNormalAutoCompleteMount',
      },
    },
    highlightKeyword_3165: {
      field_name: 'highlightKeyword',
      id: 3165,
      PC: {
        event: [
          {
            props: { value: "'Second'" },
            expect: [
              {
                trigger: 'focus(input)',
                exist: [{ 'document.t-select-option': 1, clearElementAtEnd: '.t-popup' }],
              },
            ],
          },
        ],
        wrapper: 'getNormalAutoCompleteMount',
      },
    },
    inputProps_3155: { field_name: 'inputProps', id: 3155 },
    options_3163: {
      field_name: 'options',
      id: 3163,
      PC: {
        event: [
          {
            description: 'option.label could be defined to any element',
            wrapper: 'getNormalAutoCompleteMount',
            expect: [
              {
                trigger: 'focus(input)',
                exist: ['document.custom-node', { clearElementAtEnd: '.t-select-option' }],
              },
            ],
          },
          {
            description: '5 options should exist',
            wrapper: 'getNormalAutoCompleteMount',
            expect: [{ trigger: 'focus(input)', exist: [{ 'document.t-select-option': 5 }] }],
          },
          {
            props: { popupProps: "{ overlayClassName: 'empty-options-class-name' }" },
            description: 'expect empty options with no panel',
            wrapper: '',
            expect: [
              {
                trigger: 'focus(input)',
                exist: [{ 'document.empty-options-class-name .t-autocomplete__panel': 0 }],
              },
            ],
          },
          {
            props: { popupProps: "{ overlayClassName: 'option-slot-class-name' }" },
            description: 'define one option',
            wrapper: 'getOptionSlotAutoCompleteMount',
            expect: [
              {
                trigger: 'focus(input)',
                exist: [
                  {
                    'document.option-slot-class-name .custom-slot-option': {
                      text: 'First Keyword',
                    },
                  },
                  { clearElementAtEnd: '.t-select-option' },
                ],
              },
            ],
          },
        ],
      },
    },
    panelBottomContent_3191: {
      field_name: 'panelBottomContent',
      id: 3191,
      PC: {
        tnode: {
          trigger: 'focus(input)',
          dom: ['document.custom-node', 'document.t-popup'],
          wrapper: 'getNormalAutoCompleteMount',
        },
      },
    },
    panelTopContent_3190: {
      field_name: 'panelTopContent',
      id: 3190,
      PC: {
        tnode: {
          trigger: 'focus(input)',
          dom: ['document.custom-node', 'document.t-popup'],
          wrapper: 'getNormalAutoCompleteMount',
        },
      },
    },
    placeholder_3160: {
      field_name: 'placeholder',
      id: 3160,
      PC: {
        attribute: [
          {
            value: "'type keyword to search'",
            expect: [{ dom: 'input', attribute: { placeholder: 'type keyword to search' } }],
          },
        ],
      },
    },
    popupProps_3154: {
      field_name: 'popupProps',
      id: 3154,
      PC: {
        wrapper: 'getNormalAutoCompleteMount',
        event: [
          {
            props: { popupProps: "{overlayClassName: 'custom-class-name'}" },
            expect: [{ trigger: 'focus(input)', exist: ['document.custom-class-name'] }],
          },
          {
            props: { popupProps: "{overlayInnerClassName: 'custom-class-name'}" },
            expect: [{ trigger: 'focus(input)', exist: ['document.custom-class-name'] }],
          },
        ],
      },
    },
    readonly_3188: {
      field_name: 'readonly',
      id: 3188,
      PC: {
        wrapper: 'getNormalAutoCompleteMount',
        classNameDom: '.t-input',
        className: 't-is-readonly',
      },
    },
    size_3177: {
      field_name: 'size',
      id: 3177,
      PC: {
        className: ['t-size-s', { 't-size-m': false }, 't-size-l'],
        classNameDom: '.t-input',
        wrapper: 'getNormalAutoCompleteMount',
      },
    },
    status_3161: {
      field_name: 'status',
      id: 3161,
      PC: {
        wrapper: 'getNormalAutoCompleteMount',
        className: [{ 't-is-default': false }, 't-is-success', 't-is-warning', 't-is-error'],
        classNameDom: '.t-input',
      },
    },
    textareaProps_3156: { field_name: 'textareaProps', id: 3156 },
    tips_3162: {
      field_name: 'tips',
      id: 3162,
      PC: { dom: { "'this is a tip'": '.t-input__tips' } },
    },
    triggerElement_3174: { field_name: 'triggerElement', id: 3174, PC: { tnode: true } },
    value_3164: {
      field_name: 'value',
      id: 3164,
      PC: {
        attribute: [
          {
            value: "'DefaultKeyword'",
            expect: [{ dom: 'input', attribute: { value: 'DefaultKeyword' } }],
          },
        ],
      },
    },
    blur_3166: {
      field_name: 'blur',
      id: 3166,
      PC: {
        wrapper: 'getNormalAutoCompleteMount',
        event: [
          {
            expect: [
              { trigger: 'focus(input)', event: { focus: [{ 'e.type': 'focus' }] } },
              { trigger: 'blur(input)', delay: 300, event: { blur: [{ 'e.type': 'blur' }] } },
            ],
          },
        ],
      },
    },
    change_3167: { field_name: 'change', id: 3167 },
    clear_3169: { field_name: 'clear', id: 3169 },
    compositionend_3172: {
      field_name: 'compositionend',
      id: 3172,
      PC: {
        event: [
          {
            description: '',
            expect: [
              {
                trigger: 'compositionend(input)',
                event: { compositionend: [{ 'e.type': 'compositionend' }] },
              },
            ],
          },
        ],
      },
    },
    compositionstart_3171: {
      field_name: 'compositionstart',
      id: 3171,
      PC: {
        event: [
          {
            expect: [
              {
                trigger: 'compositionstart(input)',
                event: { compositionstart: [{ 'e.type': 'compositionstart' }] },
              },
            ],
          },
        ],
      },
    },
    enter_3168: {
      field_name: 'enter',
      id: 3168,
      PC: {
        wrapper: 'getNormalAutoCompleteMount',
        event: [
          {
            expect: [
              { trigger: 'focus(input)' },
              {
                trigger: 'keydown.enter(input)',
                event: { enter: [{ 'e.type': 'keydown', 'e.key': '/Enter/i' }] },
              },
            ],
          },
        ],
      },
    },
    focus_3170: {
      field_name: 'focus',
      id: 3170,
      PC: {
        wrapper: 'getNormalAutoCompleteMount',
        event: [
          {
            expect: [
              {
                trigger: 'focus(input)',
                exist: ['.t-is-focused'],
                event: { focus: [{ 'e.type': 'focus' }] },
              },
            ],
          },
        ],
      },
    },
    select_3173: {
      field_name: 'select',
      id: 3173,
      PC: {
        wrapper: 'getNormalAutoCompleteMount',
        event: [
          {
            props: { popupProps: "{overlayClassName:'select-event-class-name'}" },
            expect: [
              { trigger: 'focus(input)' },
              {
                trigger: 'click(document.select-event-class-name .t-select-option)',
                event: { select: ['FirstKeyword', { 'e.type': 'click' }] },
                exist: [{ clearElementAtEnd: '.t-select-option' }],
              },
            ],
          },
          {
            description: 'keyboard operations: ArrowDown & ArrowUp & Enter',
            wrapper: 'getNormalAutoCompleteMount',
            expect: [
              { trigger: 'focus(input)' },
              {
                trigger: "simulateKeydownEvent(document, 'ArrowDown')",
                exist: [
                  {
                    'document.t-select-option:first-child': {
                      className: ['t-select-option--hover'],
                    },
                  },
                ],
                delay: 10,
              },
              {
                trigger: "simulateKeydownEvent(document, 'ArrowDown')",
                exist: [
                  {
                    'document.t-select-option:nth-child(2)': {
                      className: ['t-select-option--hover'],
                    },
                  },
                ],
                delay: 10,
              },
              {
                trigger: "simulateKeydownEvent(document, 'ArrowUp')",
                exist: [
                  {
                    'document.t-select-option:first-child': {
                      className: ['t-select-option--hover'],
                    },
                  },
                ],
                delay: 10,
              },
              {
                trigger: "simulateKeydownEvent(document, 'ArrowUp')",
                exist: [
                  {
                    'document.t-select-option:nth-child(5)': {
                      className: ['t-select-option--hover'],
                    },
                  },
                ],
                delay: 10,
              },
              {
                trigger: "simulateKeydownEvent(document, 'ArrowDown')",
                exist: [
                  {
                    'document.t-select-option:first-child': {
                      className: ['t-select-option--hover'],
                    },
                  },
                ],
                delay: 10,
              },
              {
                trigger: "simulateKeydownEvent(document, 'Enter')",
                event: { select: ['FirstKeyword', { 'e.type': 'keydown' }] },
                exist: [{ clearElementAtEnd: '.t-select-option' }],
              },
            ],
          },
        ],
      },
    },
    '<T extends AutoCompleteOption = AutoCompleteOption>【type AutoCompleteOption = string | AutoCompleteOptionObj】【interface AutoCompleteOptionObj { label?: string | TNode; text?: string; [key: string]: any }】_3159':
      {
        field_name:
          '<T extends AutoCompleteOption = AutoCompleteOption>【type AutoCompleteOption = string | AutoCompleteOptionObj】【interface AutoCompleteOptionObj { label?: string | TNode; text?: string; [key: string]: any }】',
        id: 3159,
      },
  },
};
