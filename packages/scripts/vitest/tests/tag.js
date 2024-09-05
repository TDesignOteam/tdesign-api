module.exports = {
  Tag: {
    children_3310: { field_name: 'children', id: 3310, PC: { tnode: true } },
    closable_24: { field_name: 'closable', id: 24, PC: { dom: '.t-tag__icon-close' } },
    closable_1712653002: { field_name: 'closable', id: 1712653002 },
    color_1710397655: {
      field_name: 'color',
      id: 1710397655,
      PC: {
        attribute: [
          {
            value: '#ff0000',
            expect: [{ dom: 'self', attribute: { 'style.backgroundColor': 'rgb(255, 0, 0)' } }],
          },
          {
            value: '#ff0000',
            props: { variant: 'dark', theme: 'primary' },
            description: "expect variant='dark'",
            expect: [
              {
                dom: 'self',
                attribute: { 'style.backgroundColor': 'rgb(255, 0, 0)', 'style.color': 'white' },
              },
            ],
          },
          {
            value: '#ff0000',
            props: { variant: 'light' },
            description: "expect variant='light'",
            expect: [
              {
                dom: 'self',
                attribute: {
                  'style.color': 'rgb(255, 0, 0)',
                  'style.backgroundColor': 'rgba(255, 0, 0, 0.1)',
                },
              },
            ],
          },
          {
            value: '#ff0000',
            props: { variant: 'outline' },
            description: "expect variant='outline'",
            expect: [
              {
                dom: 'self',
                attribute: { 'style.borderColor': '#ff0000', 'style.color': 'rgb(255, 0, 0)' },
              },
            ],
          },
          {
            value: '#ff0000',
            props: { variant: 'light-outline' },
            description: "expect variant='light-outline'",
            expect: [
              {
                dom: 'self',
                attribute: { 'style.borderColor': '#ff0000', 'style.color': 'rgb(255, 0, 0)' },
              },
            ],
          },
        ],
      },
    },
    content_733: { field_name: 'content', id: 733, PC: { tnode: true } },
    customStyle_3093: { field_name: 'customStyle', id: 3093 },
    default_3311: { field_name: 'default', id: 3311, PC: { tnode: true } },
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
      PC: { className: ['t-size-s', { 't-size-m': false }, 't-size-l'] },
    },
    size_3240: { field_name: 'size', id: 3240, PC: { className: 't-tag--${item}' } },
    theme_4: { field_name: 'theme', id: 4, PC: { className: 't-tag--${item}' } },
    title_1724231877: {
      field_name: 'title',
      id: 1724231877,
      PC: {
        props: { content: 'This is a long long long long long tag', maxWidth: '150px' },
        attribute: [
          {
            value: 'This is a long tag',
            expect: [
              { dom: 'self', attribute: { 'style.maxWidth': '150px' } },
              { dom: '.t-tag--text', attribute: { title: 'This is a long tag' } },
            ],
          },
          {
            value: '',
            expect: [
              { dom: 'self', attribute: { 'style.maxWidth': '150px' } },
              { dom: '.t-tag--text', attribute: { title: 'toBeUndefined' } },
            ],
          },
          {
            expect: [
              { dom: 'self', attribute: { 'style.maxWidth': '150px' } },
              { dom: '.t-tag--text', attribute: { title: 'toBeUndefined' } },
            ],
          },
        ],
      },
    },
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
    't-class_1712054110': { field_name: 't-class', id: 1712054110 },
  },
  CheckTag: {
    checked_418: { field_name: 'checked', id: 418 },
    checkedProps_1695545685: { field_name: 'checkedProps', id: 1695545685 },
    children_3313: { field_name: 'children', id: 3313, PC: { tnode: true } },
    closable_1124: { field_name: 'closable', id: 1124 },
    content_957: { field_name: 'content', id: 957, PC: { tnode: true } },
    content_1712653187: { field_name: 'content', id: 1712653187 },
    default_3312: { field_name: 'default', id: 3312, PC: { tnode: true } },
    disabled_419: { field_name: 'disabled', id: 419 },
    icon_1122: { field_name: 'icon', id: 1122 },
    icon_3132: { field_name: 'icon', id: 3132 },
    shape_1490: { field_name: 'shape', id: 1490 },
    size_1487: { field_name: 'size', id: 1487 },
    uncheckedProps_1695545724: { field_name: 'uncheckedProps', id: 1695545724 },
    value_1695615361: { field_name: 'value', id: 1695615361 },
    variant_3239: { field_name: 'variant', id: 3239 },
    change_960: { field_name: 'change', id: 960 },
    change_1712912084: { field_name: 'change', id: 1712912084 },
    click_420: { field_name: 'click', id: 420 },
    close_1712054335: { field_name: 'close', id: 1712054335 },
    close_1713345042: { field_name: 'close', id: 1713345042 },
    't-class_1712054145': { field_name: 't-class', id: 1712054145 },
  },
  CheckTagGroup: {
    checkedProps_1695565419: { field_name: 'checkedProps', id: 1695565419 },
    multiple_1695554166: { field_name: 'multiple', id: 1695554166 },
    options_1695564598: { field_name: 'options', id: 1695564598 },
    uncheckedProps_1695564897: { field_name: 'uncheckedProps', id: 1695564897 },
    value_1695554043: { field_name: 'value', id: 1695554043 },
    change_1695564191: { field_name: 'change', id: 1695564191 },
  },
};
