module.exports = {
  Radio: {
    allowUncheck: {
      PC: {
        event: [
          {
            props: { checked: 'true' },
            expect: [{ trigger: 'click', event: { change: [false, { 'e.type': 'click' }] } }],
          },
        ],
      },
      id: 2035,
    },
    checked: {
      PC: {
        snapshot: true,
        className: 't-is-checked',
        attribute: [{ value: true, expect: [{ dom: 'input', attribute: { checked: true } }] }],
      },
      id: 491,
    },
    children: { PC: { tnode: true, snapshot: true }, id: 1433 },
    disabled: {
      PC: {
        className: 't-is-disabled',
        content: 'Text',
        snapshot: true,
        event: [{ expect: [{ trigger: 'click', event: { change: 'not' } }] }],
      },
      id: 492,
    },
    label: { PC: { tnode: { dom: ['.t-radio__label'] }, snapshot: true }, id: 1432 },
    name: { PC: { attribute: { name: 'radio-gender-name' }, attributeDom: 'input' }, id: 493 },
    value: {
      PC: {
        attribute: [
          {
            value: "'radio-value'",
            expect: [{ dom: 'input', attribute: { value: 'radio-value' } }],
          },
        ],
      },
      id: 504,
    },
    change: { id: 1230 },
    click: {
      PC: {
        event: [
          { expect: [{ trigger: 'click', event: { click: [{ 'e.stopPropagation': true }] } }] },
        ],
      },
      id: 3257,
    },
    '<T = RadioValue>【type RadioValue = string | number | boolean】': { id: 2918 },
  },
  RadioGroup: {
    allowUncheck: {
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
      id: 3254,
    },
    disabled: {
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
      id: 498,
    },
    name: {
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
      id: 496,
    },
    options: {
      PC: {
        wrapper: 'getRadioGroupDefaultMount',
        dom: [{ '.t-radio': 4 }, '.custom-node', { '.t-radio.t-is-disabled': 1 }],
      },
      id: 500,
    },
    size: { id: 497 },
    value: {
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
      id: 495,
    },
    variant: {
      PC: {
        className: [
          't-radio-group__outline',
          't-radio-group--primary-filled',
          't-radio-group--filled',
        ],
      },
      id: 1651,
    },
    change: { id: 1231 },
    '<T = RadioValue>': { id: 2919 },
  },
};
