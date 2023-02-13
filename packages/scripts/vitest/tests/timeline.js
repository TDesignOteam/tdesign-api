module.exports = {
  Timeline: {
    labelAlign_2823: {
      field_name: 'labelAlign',
      id: 2823,
      PC: {
        wrapper: 'getTimelineDefaultMount',
        className: {
          left: 't-timeline-left',
          alternate: 't-timeline-alternate',
          right: 't-timeline-right',
        },
        event: [
          {
            props: { layout: 'horizontal', labelAlign: 'top' },
            description: 'layout=horizontal labelAlign=top works fine',
            wrapper: 'getTimelineDefaultMount',
            expect: [
              { trigger: '', exist: [{ '.t-timeline': { className: ['t-timeline-top'] } }] },
            ],
          },
          {
            props: { layout: 'horizontal', labelAlign: 'bottom' },
            description: 'layout=horizontal labelAlign=bottom works fine',
            expect: [
              { trigger: '', exist: [{ '.t-timeline': { className: ['t-timeline-bottom'] } }] },
            ],
          },
        ],
      },
    },
    layout_2824: {
      field_name: 'layout',
      id: 2824,
      PC: { wrapper: 'getTimelineDefaultMount', className: 't-timeline-${item}' },
    },
    mode_2913: { field_name: 'mode', id: 2913, PC: { className: 't-timeline-label--${item}' } },
    reverse_2826: {
      field_name: 'reverse',
      id: 2826,
      PC: {
        wrapper: 'getTimelineDefaultMount',
        dom: [
          { props: { reverse: true }, dom: [{ '.t-timeline-item__content': { text: 'Event4' } }] },
        ],
      },
    },
    theme_2825: {
      field_name: 'theme',
      id: 2825,
      PC: {
        wrapper: 'getTimelineDefaultMount',
        dom: { dot: { '.t-timeline-item__tail--theme-dot': 4 } },
      },
    },
  },
  TimelineItem: {
    children_2837: { field_name: 'children', id: 2837, PC: { snapshot: true, tnode: true } },
    content_2836: { field_name: 'content', id: 2836, PC: { snapshot: true, tnode: true } },
    dot_2828: { field_name: 'dot', id: 2828, PC: { tnode: true } },
    dotColor_2827: {
      field_name: 'dotColor',
      id: 2827,
      PC: {
        className: {
          primary: 't-timeline-item__dot--primary',
          warning: 't-timeline-item__dot--warning',
          error: 't-timeline-item__dot--error',
          default: 't-timeline-item__dot--default',
        },
        classNameDom: '.t-timeline-item__dot',
        attribute: [
          {
            value: 'yellowgreen',
            expect: [
              { dom: '.t-timeline-item__dot', attribute: { 'style.borderColor': 'yellowgreen' } },
            ],
          },
        ],
      },
    },
    label_2835: { field_name: 'label', id: 2835, PC: { snapshot: true, tnode: true } },
    labelAlign_2830: {
      field_name: 'labelAlign',
      id: 2830,
      PC: {
        wrapper: 'getTimelineItemMount',
        dom: { left: { '.t-timeline-item:first-child.t-timeline-item-left': 1 } },
      },
    },
    loading_2931: {
      field_name: 'loading',
      id: 2931,
      PC: { dom: '.t-timeline-item__dot .t-loading' },
    },
  },
};
