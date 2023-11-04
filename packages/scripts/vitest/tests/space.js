module.exports = {
  Space: {
    align_2772: {
      field_name: 'align',
      id: 2772,
      PC: { className: 't-space-align-${item}', wrapper: 'getSpaceDefaultMount' },
    },
    breakLine_2775: {
      field_name: 'breakLine',
      id: 2775,
      PC: { className: 't-space--break-line', wrapper: 'getSpaceDefaultMount' },
    },
    direction_2773: {
      field_name: 'direction',
      id: 2773,
      PC: { className: 't-space-${item}', wrapper: 'getSpaceDefaultMount' },
    },
    separator_2776: {
      field_name: 'separator',
      id: 2776,
      PC: { tnode: true, wrapper: 'getSpaceDefaultMount' },
    },
    size_2774: {
      field_name: 'size',
      id: 2774,
      PC: {
        attribute: [
          { value: "'small'", expect: [{ dom: 'self', attribute: { 'style.gap': '8px' } }] },
          { value: "'large'", expect: [{ dom: 'self', attribute: { 'style.gap': '24px' } }] },
          { value: "'38px'", expect: [{ dom: 'self', attribute: { 'style.gap': '38px' } }] },
          {
            value: "['20px', '80px']",
            expect: [{ dom: 'self', attribute: { 'style.gap': '20px 80px' } }],
          },
        ],
        wrapper: 'getSpaceDefaultMount',
      },
    },
  },
};
