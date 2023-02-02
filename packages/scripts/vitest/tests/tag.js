module.exports = {
  Tag: {
    closable_24: { field_name: 'closable', id: 24, PC: { dom: '.t-tag__icon-close' } },
    content_733: { field_name: 'content', id: 733, PC: { tnode: true } },
    customStyle_3093: { field_name: 'customStyle', id: 3093 },
    default_29: { field_name: 'default', id: 29, PC: { tnode: true } },
    disabled_1125: {
      field_name: 'disabled',
      id: 1125,
      PC: {
        event: [
          {
            props: { disabled: true, closable: true },
            description: 'hide closeIcon if tag is disabled, and not trigger click event',
            expect: [
              {
                trigger: 'click',
                event: { click: 'not' },
                exist: [{ '.t-tag__icon-close': false }],
              },
            ],
          },
        ],
      },
    },
    externalClasses_2390: { field_name: 'externalClasses', id: 2390 },
    icon_25: { field_name: 'icon', id: 25, PC: { tnode: true } },
    icon_1667: { field_name: 'icon', id: 1667 },
    maxWidth_27: {
      field_name: 'maxWidth',
      id: 27,
      PC: {
        props: { content: 'This is a long long long long long tag' },
        attribute: [
          {
            value: '150px',
            expect: [
              { dom: 'self', attribute: { 'style.maxWidth': '150px' } },
              {
                dom: '.t-tag--text',
                attribute: { title: 'This is a long long long long long tag' },
              },
            ],
          },
        ],
      },
    },
    shape_26: {
      field_name: 'shape',
      id: 26,
      PC: { className: [{ 't-tag--square': false }, 't-tag--round', 't-tag--mark'] },
    },
    size_23: {
      field_name: 'size',
      id: 23,
      PC: { className: ['t-size-s', 't-size-m', 't-size-l'] },
    },
    size_3240: { field_name: 'size', id: 3240, PC: { className: 't-tag--${item}' } },
    theme_4: { field_name: 'theme', id: 4, PC: { className: 't-tag--${item}' } },
    variant_2255: { field_name: 'variant', id: 2255, PC: { className: 't-tag--${item}' } },
    click_625: {
      field_name: 'click',
      id: 625,
      PC: { event: { click: { arguments: [{ 'e.type': 'click' }] } } },
    },
    close_626: {
      field_name: 'close',
      id: 626,
      PC: {
        event: [
          {
            props: { closable: true },
            expect: [
              { trigger: 'click(.t-tag__icon-close)', event: { close: [{ 'e.type': 'click' }] } },
            ],
          },
        ],
      },
    },
  },
  CheckTag: {
    checked_418: { field_name: 'checked', id: 418 },
    closable_1124: { field_name: 'closable', id: 1124 },
    content_957: { field_name: 'content', id: 957 },
    customStyle_3094: { field_name: 'customStyle', id: 3094 },
    default_959: { field_name: 'default', id: 959 },
    disabled_419: { field_name: 'disabled', id: 419 },
    externalClasses_3237: { field_name: 'externalClasses', id: 3237 },
    icon_1122: { field_name: 'icon', id: 1122 },
    icon_3132: { field_name: 'icon', id: 3132 },
    shape_1490: { field_name: 'shape', id: 1490 },
    size_1487: { field_name: 'size', id: 1487 },
    variant_3239: { field_name: 'variant', id: 3239 },
    change_960: { field_name: 'change', id: 960 },
    click_420: { field_name: 'click', id: 420 },
  },
};
