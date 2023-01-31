module.exports = {
  Radio: {
    align_1419: { field_name: 'align', id: 1419 },
    allowUncheck_2035: {
      field_name: 'allowUncheck',
      id: 2035,
      PC: {
        event: [
          {
            props: { checked: 'true' },
            expect: [{ trigger: 'click', event: { change: [false, { 'e.type': 'click' }] } }],
          },
        ],
      },
    },
    checked_491: {
      field_name: 'checked',
      id: 491,
      PC: {
        snapshot: true,
        className: 't-is-checked',
        attribute: [{ value: true, expect: [{ dom: 'input', attribute: { checked: true } }] }],
      },
    },
    children_1433: { field_name: 'children', id: 1433, PC: { tnode: true, snapshot: true } },
    color_1861: { field_name: 'color', id: 1861 },
    content_1431: { field_name: 'content', id: 1431, PC: { tnode: true, snapshot: true } },
    contentDisabled_1418: { field_name: 'contentDisabled', id: 1418 },
    default_1430: { field_name: 'default', id: 1430, PC: { tnode: true, snapshot: true } },
    disabled_492: {
      field_name: 'disabled',
      id: 492,
      PC: {
        className: 't-is-disabled',
        content: 'Text',
        snapshot: true,
        event: [{ expect: [{ trigger: 'click', event: { change: 'not' } }] }],
      },
    },
    externalClasses_1417: { field_name: 'externalClasses', id: 1417 },
    icon_1420: { field_name: 'icon', id: 1420 },
    icon_1421: { field_name: 'icon', id: 1421 },
    label_1432: {
      field_name: 'label',
      id: 1432,
      PC: { tnode: { dom: ['.t-radio__label'] }, snapshot: true },
    },
    maxContentRow_1422: { field_name: 'maxContentRow', id: 1422 },
    maxLabelRow_1423: { field_name: 'maxLabelRow', id: 1423 },
    name_493: {
      field_name: 'name',
      id: 493,
      PC: { attribute: { name: 'radio-gender-name' }, attributeDom: 'input' },
    },
    style_3069: { field_name: 'style', id: 3069 },
    value_504: {
      field_name: 'value',
      id: 504,
      PC: {
        attribute: [
          {
            value: "'radio-value'",
            expect: [{ dom: 'input', attribute: { value: 'radio-value' } }],
          },
        ],
      },
    },
    change_494: {
      field_name: 'change',
      id: 494,
      PC: {
        event: [
          {
            description: 'checked default value is false, click radio and trigger change',
            expect: [
              {
                trigger: 'click(.t-radio__label)',
                event: { change: [true, { 'e.type': 'click' }] },
              },
            ],
          },
          {
            description:
              'checked value is true, without allowUncheck, click radio and trigger change',
            props: { checked: true },
            expect: [
              {
                trigger: 'click(.t-radio__label)',
                event: { change: [true, { 'e.type': 'click' }] },
              },
            ],
          },
        ],
      },
    },
    change_1230: { field_name: 'change', id: 1230 },
    change_1424: { field_name: 'change', id: 1424 },
    click_3257: {
      field_name: 'click',
      id: 3257,
      PC: {
        event: [
          { expect: [{ trigger: 'click', event: { click: [{ 'e.stopPropagation': true }] } }] },
        ],
      },
    },
    '<T = RadioValue>【type RadioValue = string | number | boolean】_2918': {
      field_name: '<T = RadioValue>【type RadioValue = string | number | boolean】',
      id: 2918,
    },
  },
  RadioGroup: {
    align_3118: { field_name: 'align', id: 3118 },
    allowUncheck_3254: {
      field_name: 'allowUncheck',
      id: 3254,
      PC: {
        wrapper: 'getRadioGroupDefaultMount',
        copyTestToWrapper: ['getRadioGroupKidsMount'],
        event: [
          {
            props: { value: 1 },
            expect: [
              {
                trigger: 'click(.t-radio)',
                event: { change: ['undefined', { 'e.type': 'click' }] },
              },
            ],
          },
        ],
      },
    },
    disabled_498: {
      field_name: 'disabled',
      id: 498,
      PC: {
        dom: { true: { '.t-radio.t-is-disabled': 4 } },
        event: [
          {
            description: 'disabled radio can not trigger change',
            expect: [{ trigger: 'click(.t-radio)', event: { change: 'not' } }],
          },
        ],
        snapshot: true,
        wrapper: 'getRadioGroupDefaultMount',
        copyTestToWrapper: ['getRadioGroupKidsMount'],
      },
    },
    icon_3119: { field_name: 'icon', id: 3119 },
    name_496: {
      field_name: 'name',
      id: 496,
      PC: {
        snapshot: true,
        wrapper: 'getRadioGroupDefaultMount',
        attribute: [
          {
            value: "'custom-radio-name'",
            expect: [{ dom: 'input', attribute: { name: 'custom-radio-name' } }],
          },
        ],
        copyTestToWrapper: ['getRadioGroupKidsMount'],
      },
    },
    options_500: {
      field_name: 'options',
      id: 500,
      PC: {
        wrapper: 'getRadioGroupDefaultMount',
        dom: [{ '.t-radio': 4 }, '.custom-node', { '.t-radio.t-is-disabled': 1 }],
      },
    },
    options_1425: { field_name: 'options', id: 1425 },
    size_497: { field_name: 'size', id: 497 },
    style_3070: { field_name: 'style', id: 3070 },
    value_495: {
      field_name: 'value',
      id: 495,
      PC: {
        attribute: [
          {
            value: "'2'",
            expect: [{ dom: '.t-radio.t-is-checked input', attribute: { value: '2' } }],
          },
        ],
        wrapper: 'getRadioGroupDefaultMount',
        copyTestToWrapper: ['getRadioGroupKidsMount'],
      },
    },
    variant_1651: {
      field_name: 'variant',
      id: 1651,
      PC: {
        className: [
          't-radio-group__outline',
          't-radio-group--primary-filled',
          't-radio-group--filled',
        ],
      },
    },
    change_501: {
      field_name: 'change',
      id: 501,
      PC: {
        wrapper: 'getRadioGroupDefaultMount',
        copyTestToWrapper: ['getRadioGroupKidsMount'],
        event: [
          {
            props: { value: 2 },
            description: 'default value is 2, trigger change after click',
            expect: [{ trigger: 'click(.t-radio)', event: { change: [1, { 'e.type': 'click' }] } }],
          },
          {
            description: 'default value is empty, trigger change after click',
            expect: [{ trigger: 'click(.t-radio)', event: { change: [1, { 'e.type': 'click' }] } }],
          },
        ],
      },
    },
    change_1231: { field_name: 'change', id: 1231 },
    '<T = RadioValue>_2919': { field_name: '<T = RadioValue>', id: 2919 },
  },
};
