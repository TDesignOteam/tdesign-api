module.exports = {
  Input: {
    MP_EXCLUDE_PROPS_2670: { field_name: 'MP_EXCLUDE_PROPS', id: 2670 },
    MP_PROPS_2669: { field_name: 'MP_PROPS', id: 2669 },
    align_1738: {
      field_name: 'align',
      id: 1738,
      PC: {
        className: [{ 't-align-left': false }, 't-align-center', 't-align-right'],
        classNameDom: '.t-input',
        snapshot: true,
      },
    },
    allowInputOverMax_2727: {
      field_name: 'allowInputOverMax',
      id: 2727,
      PC: {
        event: [
          {
            props: { value: 'Hello', maxlength: 5 },
            expect: [
              {
                trigger: 'simulateInputChange(\'input\', "Hello TDesign")',
                exist: [{ input: { attribute: { value: 'Hello' } } }],
              },
            ],
          },
        ],
      },
    },
    autoWidth_2320: { field_name: 'autoWidth', id: 2320 },
    autocomplete_2365: {
      field_name: 'autocomplete',
      id: 2365,
      PC: { attribute: { autocomplete: 'https://tdesign.tencent.com/' }, attributeDom: 'input' },
    },
    autofocus_1059: {
      field_name: 'autofocus',
      id: 1059,
      PC: {
        attribute: [
          { value: false, expect: [{ dom: 'input', attribute: { autofocus: false } }] },
          { value: true, expect: [{ dom: 'input', attribute: { autofocus: 'toBeDefined' } }] },
        ],
      },
    },
    borderless_2372: { field_name: 'borderless', id: 2372 },
    clearable_742: {
      field_name: 'clearable',
      id: 742,
      PC: {
        event: [
          {
            props: { value: "'Default Keyword'" },
            description: 'clear icon should exist on input mouseenter',
            expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-input__suffix-clear'] }],
          },
          {
            props: { value: "'Default Keyword'" },
            description: 'click clear icon could clear input value to be empty',
            expect: [
              { trigger: 'mouseenter(.t-input)', exist: ['.t-input__suffix-clear'], delay: 300 },
              {
                trigger: 'click(.t-input__suffix-clear)',
                event: {
                  clear: [{ 'e.stopPropagation': true, 'e.type': 'click' }],
                  change: ['', { 'e.stopPropagation': true, 'e.type': 'click' }],
                },
              },
            ],
          },
          {
            props: { type: 'password', value: "'this is my password'" },
            description: 'type=password, browseIcon and clearableIcon works fine',
            expect: [
              { trigger: '', exist: ['.t-icon-browse-off'] },
              { trigger: 'mouseenter(.t-input)', exist: ['.t-input__suffix-clear'], delay: 300 },
            ],
          },
        ],
      },
    },
    disabled_745: {
      field_name: 'disabled',
      id: 745,
      PC: { className: 't-is-disabled', classNameDom: '.t-input' },
    },
    errorMessage_1710: { field_name: 'errorMessage', id: 1710 },
    externalClasses_1834: { field_name: 'externalClasses', id: 1834 },
    format_2198: {
      field_name: 'format',
      id: 2198,
      PC: {
        event: [
          {
            props: { format: '(val) => `${val} 元`', value: "'100'" },
            description: 'focus and blur states have different value',
            expect: [
              { trigger: 'focus(input)', exist: [{ input: { attribute: { value: '100' } } }] },
              { trigger: 'blur(input)', exist: [{ input: { attribute: { value: '100 元' } } }] },
            ],
          },
        ],
      },
    },
    inputClass_2429: {
      field_name: 'inputClass',
      id: 2429,
      PC: {
        className: [
          {
            value: 'name1 name2',
            expect: [{ dom: '.t-input', className: { name1: true, name2: true } }],
          },
          {
            value: "['name1', 'name2']",
            expect: [{ dom: '.t-input', className: { name1: true, name2: true } }],
          },
          {
            value: '{ name1: true, name2: false }',
            expect: [{ dom: '.t-input', className: { name1: true, name2: false } }],
          },
        ],
      },
    },
    label_2070: {
      field_name: 'label',
      id: 2070,
      PC: { snapshot: true, tnode: { trigger: '', dom: ['.t-input__prefix'] } },
    },
    maxcharacter_1402: {
      field_name: 'maxcharacter',
      id: 1402,
      PC: {
        event: [
          {
            props: { value: '你好 TDesign', maxcharacter: 4 },
            description: 'length of value is over than maxcharacter',
            expect: [{ trigger: '', event: { change: ['你好', { trigger: 'initial' }] } }],
          },
        ],
      },
    },
    maxlength_749: {
      field_name: 'maxlength',
      id: 749,
      PC: {
        props: '{"value":"Hello TDesign"}',
        event: [
          {
            props: { value: 'Hello TDesign', maxlength: 5 },
            description: 'length of value is over than maxlength',
            expect: [{ trigger: '', event: { change: ['Hello', { trigger: 'initial' }] } }],
          },
        ],
      },
    },
    name_750: {
      field_name: 'name',
      id: 750,
      PC: { attribute: { name: 'input-name' }, attributeDom: 'input' },
    },
    placeholder_748: {
      field_name: 'placeholder',
      id: 748,
      PC: { attribute: { placeholder: 'this is input placeholder' }, attributeDom: 'input' },
    },
    prefixIcon_743: {
      field_name: 'prefixIcon',
      id: 743,
      PC: { tnode: { trigger: '', dom: ['.t-input__prefix-icon'] } },
    },
    prefixIcon_2052: { field_name: 'prefixIcon', id: 2052 },
    readonly_746: {
      field_name: 'readonly',
      id: 746,
      PC: { className: 't-is-readonly', classNameDom: '.t-input' },
    },
    showClearIconOnEmpty_2358: {
      field_name: 'showClearIconOnEmpty',
      id: 2358,
      PC: {
        event: [
          { expect: [{ trigger: 'mouseenter(.t-input)', exist: ['.t-input__suffix-clear'] }] },
        ],
      },
    },
    showLimitNumber_2926: {
      field_name: 'showLimitNumber',
      id: 2926,
      PC: {
        props: { showLimitNumber: true, maxlength: 5, value: 'TD' },
        dom: [{ '.t-input__limit-number': { text: '2/5' } }],
      },
    },
    size_741: {
      field_name: 'size',
      id: 741,
      PC: { className: ['t-size-s', { 't-size-m': false }, 't-size-l'], classNameDom: '.t-input' },
    },
    size_1713: { field_name: 'size', id: 1713 },
    status_822: {
      field_name: 'status',
      id: 822,
      PC: {
        snapshot: true,
        className: [{ 't-is-default': false }, 't-is-success', 't-is-warning', 't-is-error'],
        classNameDom: '.t-input',
      },
    },
    style_3067: { field_name: 'style', id: 3067 },
    suffix_2073: {
      field_name: 'suffix',
      id: 2073,
      PC: { snapshot: true, tnode: { dom: ['.t-input__suffix'], trigger: '' } },
    },
    suffixIcon_744: {
      field_name: 'suffixIcon',
      id: 744,
      PC: { snapshot: true, tnode: { dom: ['.t-input__suffix-icon'], trigger: '' } },
    },
    suffixIcon_1711: { field_name: 'suffixIcon', id: 1711 },
    tips_2103: {
      field_name: 'tips',
      id: 2103,
      PC: { dom: { 'this is a tip': { '.t-input__tips': 1 } } },
    },
    type_751: {
      field_name: 'type',
      id: 751,
      PC: {
        attribute: {
          type: ['text', 'number', 'url', 'tel', 'password', 'search', 'submit', 'hidden'],
        },
        attributeDom: 'input',
        dom: { password: { '.t-icon-browse-off': 1 } },
        event: [
          {
            props: { type: 'password' },
            description: 'password could be visible by click browse icon',
            expect: [
              {
                trigger: 'click(.t-icon-browse-off)',
                exist: ['.t-icon-browse', { input: { attribute: { type: 'text' } } }],
              },
              {
                trigger: 'click(.t-icon-browse)',
                exist: ['.t-icon-browse-off', { input: { attribute: { type: 'password' } } }],
              },
            ],
          },
        ],
      },
    },
    value_740: { field_name: 'value', id: 740 },
    blur_756: {
      field_name: 'blur',
      id: 756,
      PC: {
        event: [
          {
            props: { value: 'initial-input-value' },
            expect: [
              {
                trigger: 'focus(input)',
                event: { focus: ['initial-input-value', { 'e.type': 'focus' }] },
              },
              {
                trigger: 'blur(input)',
                event: { blur: ['initial-input-value', { 'e.type': 'blur' }] },
                delay: 300,
              },
            ],
          },
        ],
      },
    },
    blur_2540: { field_name: 'blur', id: 2540 },
    change_754: {
      field_name: 'change',
      id: 754,
      PC: {
        event: [
          {
            description: 'empty value could trigger change event',
            expect: [
              {
                trigger: "simulateInputChange('input', 'initial value')",
                event: { change: ['initial value', { 'e.type': 'input' }] },
              },
            ],
          },
          {
            props: { value: 'TDesign' },
            description: 'controlled value test',
            expect: [
              {
                trigger: " simulateInputChange('input', 'Hello TDesign')",
                event: { change: ['Hello TDesign', { 'e.type': 'input' }] },
                exist: [{ input: { attribute: { value: 'TDesign' } } }],
              },
            ],
          },
          {
            props: { defaultValue: 'Hello' },
            description: 'uncontrolled value test',
            expect: [
              {
                trigger: " simulateInputChange('input', 'Hello TDesign')",
                event: { change: ['Hello TDesign', { 'e.type': 'input' }] },
                exist: [{ input: { attribute: { value: 'Hello TDesign' } } }],
              },
            ],
          },
        ],
      },
    },
    change_1739: { field_name: 'change', id: 1739 },
    clear_821: { field_name: 'clear', id: 821 },
    clear_2541: { field_name: 'clear', id: 2541 },
    click_2322: {
      field_name: 'click',
      id: 2322,
      PC: { event: { 'click(.t-input)': { arguments: [{ 'e.type': 'click' }] } } },
    },
    compositionend_2281: {
      field_name: 'compositionend',
      id: 2281,
      PC: {
        event: [
          {
            props: { value: '输入结束' },
            expect: [
              {
                trigger: 'compositionend(input)',
                event: { compositionend: ['输入结束', { 'e.type': 'compositionend' }] },
              },
            ],
          },
        ],
      },
    },
    compositionstart_2280: {
      field_name: 'compositionstart',
      id: 2280,
      PC: {
        event: [
          {
            props: { value: '输入开始' },
            expect: [
              {
                trigger: 'compositionstart(input)',
                event: { compositionstart: ['输入开始', { 'e.type': 'compositionstart' }] },
              },
            ],
          },
        ],
      },
    },
    enter_753: {
      field_name: 'enter',
      id: 753,
      PC: {
        event: [
          {
            props: { value: 'text' },
            expect: [
              { trigger: 'focus(input)' },
              {
                trigger: 'keydown.enter(input)',
                event: { enter: ['text', { 'e.type': 'keydown' }] },
              },
            ],
          },
        ],
      },
    },
    enter_2542: { field_name: 'enter', id: 2542 },
    focus_755: {
      field_name: 'focus',
      id: 755,
      PC: {
        event: [
          { expect: [{ trigger: 'focus(input)', event: { focus: ['', { 'e.type': 'focus' }] } }] },
        ],
      },
    },
    focus_2543: { field_name: 'focus', id: 2543 },
    keydown_818: {
      field_name: 'keydown',
      id: 818,
      PC: {
        event: [
          {
            props: { value: 'text' },
            expect: [
              { trigger: 'keydown(input)', event: { keydown: ['text', { 'e.type': 'keydown' }] } },
            ],
          },
        ],
      },
    },
    keypress_820: {
      field_name: 'keypress',
      id: 820,
      PC: {
        event: [
          {
            props: { value: 'text' },
            expect: [
              { trigger: 'keydown(input)', event: { keydown: ['text', { 'e.type': 'keydown' }] } },
            ],
          },
        ],
      },
    },
    keyup_819: {
      field_name: 'keyup',
      id: 819,
      PC: {
        event: [
          {
            props: { value: 'text' },
            expect: [
              { trigger: 'keyup(input)', event: { keyup: ['text', { 'e.type': 'keyup' }] } },
            ],
          },
        ],
      },
    },
    mouseenter_2109: {
      field_name: 'mouseenter',
      id: 2109,
      PC: {
        event: [
          {
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
    mouseleave_2110: {
      field_name: 'mouseleave',
      id: 2110,
      PC: {
        event: [
          {
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
    paste_2116: {
      field_name: 'paste',
      id: 2116,
      PC: {
        event: [
          { expect: [{ trigger: 'paste(input)', event: { paste: [{ 'e.type': 'paste' }] } }] },
        ],
      },
    },
    validate_2927: {
      field_name: 'validate',
      id: 2927,
      PC: {
        event: [
          {
            props: { value: 'Hello World', maxlength: 5 },
            expect: [{ trigger: '', event: { validate: [{ error: 'exceed-maximum' }] } }],
          },
        ],
      },
    },
    wheel_2279: {
      field_name: 'wheel',
      id: 2279,
      PC: {
        event: [
          { expect: [{ trigger: 'wheel(input)', event: { wheel: [{ 'e.type': 'wheel' }] } }] },
        ],
      },
    },
  },
  InputGroup: {
    separate_3296: {
      field_name: 'separate',
      id: 3296,
      PC: { wrapper: 'getInputGroupDefaultMount', className: 't-input-group--separate' },
    },
  },
};
