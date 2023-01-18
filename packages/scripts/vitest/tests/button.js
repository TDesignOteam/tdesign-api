module.exports = {
  Button: {
    block: { PC: { className: 't-size-full-width', content: 'Text', snapshot: true } },
    children: { PC: { tnode: true, snapshot: true } },
    content: { PC: { tnode: true, snapshot: true } },
    disabled: { PC: { className: 't-is-disabled', content: 'Text', snapshot: true } },
    ghost: { PC: { className: 't-button--ghost', content: 'Text', snapshot: true } },
    href: {
      PC: { attribute: { href: 'https://tdesign.tencent.com/' }, content: 'Text', snapshot: true },
    },
    icon: { PC: { tnode: true, content: 'Text' } },
    loading: {
      PC: { className: 't-is-loading', dom: '.t-loading', content: 'Text', snapshot: true },
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
    },
    size: {
      PC: {
        className: ['t-size-s', { 't-size-m': false }, 't-size-l'],
        content: 'Text',
        snapshot: true,
      },
    },
    suffix: { PC: { tnode: true, content: 'Text' } },
    tag: { PC: { dom: ['button', 'a', 'div'], content: 'Text', snapshot: true } },
    theme: { PC: { className: 't-button--theme-${item}', content: 'Text', snapshot: true } },
    type: {
      PC: { attribute: { type: ['submit', 'reset', 'button'], content: 'Text', snapshot: true } },
    },
    variant: { PC: { className: 't-button--variant-${item}', content: 'Text', snapshot: true } },
    click: { PC: { event: { click: { arguments: [{ stopPropagation: true, type: 'click' }] } } } },
  },
};
