module.exports = {
  Button: {
    block: { PC: { className: 't-size-full-width1', content: 'Text', snapshot: true }, id: 33 },
    children: { PC: { tnode: true, snapshot: true }, id: 1234 },
    content: { PC: { tnode: true, snapshot: true }, id: 730 },
    disabled: { PC: { className: 't-is-disabled', content: 'Text', snapshot: true }, id: 39 },
    ghost: { PC: { className: 't-button--ghost', content: 'Text', snapshot: true }, id: 489 },
    href: {
      PC: { attribute: { href: 'https://tdesign.tencent.com/' }, content: 'Text', snapshot: true },
      id: 2833,
    },
    icon: { PC: { tnode: true, content: 'Text' }, id: 34 },
    loading: {
      PC: { className: 't-is-loading', dom: '.t-loading', content: 'Text', snapshot: true },
      id: 36,
    },
    shape: {
      PC: {
        className: [
          { 't-button--shape-rectangle': false },
          't-button--shape-square',
          't-button--shape-round',
          't-button--shape-circle',
        ],
        content: 'Text',
        snapshot: true,
      },
      id: 35,
    },
    size: {
      PC: {
        className: ['t-size-s', { 't-size-m': false }, 't-size-l'],
        content: 'Text',
        snapshot: true,
      },
      id: 30,
    },
    suffix: { PC: { tnode: true, content: 'Text' }, id: 2831 },
    tag: { PC: { dom: ['button', 'a', 'div'], content: 'Text', snapshot: true }, id: 2832 },
    theme: { PC: { className: 't-button--theme-${item}', content: 'Text', snapshot: true }, id: 6 },
    type: {
      PC: { attribute: { type: ['submit', 'reset', 'button'], content: 'Text', snapshot: true } },
      id: 739,
    },
    variant: {
      PC: { className: 't-button--variant-${item}', content: 'Text', snapshot: true },
      id: 38,
    },
    click: {
      PC: { event: { click: { arguments: [{ stopPropagation: true, type: 'click' }] } } },
      id: 1990,
    },
  },
};
