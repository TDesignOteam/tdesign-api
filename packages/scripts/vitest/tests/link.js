module.exports = {
  Link: {
    children_2892: { field_name: 'children', id: 2892, PC: { tnode: true, snapshot: true } },
    content_2891: { field_name: 'content', id: 2891, PC: { tnode: true, snapshot: true } },
    default_2922: { field_name: 'default', id: 2922, PC: { tnode: true, snapshot: true } },
    disabled_2895: {
      field_name: 'disabled',
      id: 2895,
      PC: { className: 't-is-disabled', content: 'Text', snapshot: true },
    },
    hover_2900: {
      field_name: 'hover',
      id: 2900,
      PC: { className: 't-link--hover-${item}', content: 'Text', snapshot: true },
    },
    href_2894: {
      field_name: 'href',
      id: 2894,
      PC: { attribute: { href: 'https://tdesign.tencent.com/' }, content: 'Text', snapshot: true },
    },
    prefixIcon_2897: { field_name: 'prefixIcon', id: 2897, PC: { tnode: true } },
    size_2923: {
      field_name: 'size',
      id: 2923,
      PC: {
        className: ['t-size-s', { 't-size-m': false }, 't-size-l'],
        content: 'Text',
        snapshot: true,
      },
    },
    suffixIcon_2898: { field_name: 'suffixIcon', id: 2898, PC: { tnode: true } },
    target_2899: {
      field_name: 'target',
      id: 2899,
      PC: { attribute: { target: '_blank' }, content: 'Text', snapshot: true },
    },
    theme_2896: {
      field_name: 'theme',
      id: 2896,
      PC: { className: 't-link--theme-${item}', content: 'Text', snapshot: true },
    },
    underline_2893: {
      field_name: 'underline',
      id: 2893,
      PC: { className: 't-is-underline', content: 'Text' },
    },
    click_2924: {
      field_name: 'click',
      id: 2924,
      PC: { event: { click: { arguments: [{ stopPropagation: true, type: 'click' }] } } },
    },
  },
};
