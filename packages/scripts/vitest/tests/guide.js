module.exports = {
  Guide: {
    counter: {
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(100)',
        tnode: {
          dom: ['document.t-guide__counter', 'document.custom-node'],
          params: [{ total: 1, current: 0 }],
        },
      },
      id: 2970,
    },
    current: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        dom: {
          '0': {
            'document.t-guide__counter': { text: '1/3' },
            'document.t-guide__title': 1,
            'document.t-guide__desc': 1,
            'document.t-guide__action .t-guide__skip': 1,
            'document.t-guide__action .t-guide__prev': false,
            'document.t-guide__action .t-guide__next': 1,
            'document.t-guide__action .t-guide__finish': false,
          },
          '1': {
            'document.t-guide__counter': { text: '2/3' },
            'document.t-guide__title': 1,
            'document.t-guide__desc': 1,
            'document.t-guide__action .t-guide__skip': 1,
            'document.t-guide__action .t-guide__prev': 1,
            'document.t-guide__action .t-guide__next': 1,
            'document.t-guide__action .t-guide__finish': false,
          },
          '2': {
            'document.t-guide__counter': { text: '3/3' },
            'document.t-guide__title': 1,
            'document.t-guide__desc': 1,
            'document.t-guide__action .t-guide__skip': false,
            'document.t-guide__action .t-guide__prev': 1,
            'document.t-guide__action .t-guide__next': false,
            'document.t-guide__action .t-guide__finish': 1,
          },
          '-1': { 'document.t-guide__counter': false },
        },
      },
      id: 2971,
    },
    finishButtonProps: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        props: { current: 2 },
        className: [
          {
            value: "{theme: 'warning'}",
            expect: [
              { dom: 'document.t-guide__finish', className: { 't-button--theme-warning': true } },
            ],
          },
        ],
      },
      id: 2972,
    },
    hideCounter: {
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(100)',
        props: { hideCounter: true },
        dom: [{ 'document.t-guide__counter': false }],
      },
      id: 2976,
    },
    hidePrev: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        props: { current: 1, hidePrev: true },
        dom: [{ 'document.t-guide__action .t-guide__prev': false }],
      },
      id: 2977,
    },
    hideSkip: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        props: { current: 1, hideSkip: true },
        dom: [{ 'document.t-guide__action .t-guide__skip': false }],
      },
      id: 2978,
    },
    highlightPadding: {
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(100)',
        attribute: [
          {
            value: 32,
            expect: [
              {
                dom: 'document.t-guide__highlight--mask',
                attribute: {
                  'style.width': '64px',
                  'style.height': '64px',
                  'style.top': '-32px',
                  'style.left': '-32px',
                },
              },
              {
                dom: 'document.t-guide__reference',
                attribute: {
                  'style.width': '64px',
                  'style.height': '64px',
                  'style.top': '-32px',
                  'style.left': '-32px',
                },
              },
            ],
          },
        ],
      },
      id: 2981,
    },
    mode: { id: 2968 },
    nextButtonProps: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        props: { current: 1 },
        className: [
          {
            value: "{theme: 'warning'}",
            expect: [
              { dom: 'document.t-guide__next', className: { 't-button--theme-warning': true } },
            ],
          },
        ],
      },
      id: 2969,
    },
    prevButtonProps: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        props: { current: 2 },
        className: [
          {
            value: "{theme: 'warning'}",
            expect: [
              { dom: 'document.t-guide__prev', className: { 't-button--theme-warning': true } },
            ],
          },
        ],
      },
      id: 2973,
    },
    showOverlay: {
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(100)',
        dom: {
          true: { 'document.t-guide__highlight--mask': 1 },
          false: { 'document.t-guide__highlight--mask': false },
        },
      },
      id: 2979,
    },
    skipButtonProps: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        props: { current: 0 },
        className: [
          {
            value: "{theme: 'warning'}",
            expect: [
              { dom: 'document.t-guide__skip', className: { 't-button--theme-warning': true } },
            ],
          },
        ],
      },
      id: 2974,
    },
    steps: {
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(100)',
        dom: [
          {
            'document.t-guide__counter': { text: '1/1' },
            'document.t-guide__title': 1,
            'document.t-guide__desc': 1,
            'document.t-guide__action .t-guide__skip': false,
            'document.t-guide__action .t-guide__prev': false,
            'document.t-guide__action .t-guide__next': false,
            'document.t-guide__action .t-guide__finish': 1,
          },
        ],
      },
      id: 2975,
    },
    zIndex: {
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(100)',
        attribute: [
          {
            value: '5000',
            expect: [
              { dom: 'document.t-guide__overlay', attribute: { 'style.zIndex': 4998 } },
              { dom: 'document.t-guide__highlight--mask', attribute: { 'style.zIndex': 4999 } },
            ],
          },
        ],
      },
      id: 2980,
    },
    change: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        event: [
          {
            props: { current: 0 },
            expect: [
              {
                trigger: 'click(document.t-guide__next)',
                event: { change: [1, { 'e.type': 'click', total: 3 }] },
              },
            ],
          },
          {
            props: { current: 1 },
            expect: [
              {
                trigger: 'click(document.t-guide__prev)',
                event: { change: [0, { 'e.type': 'click', total: 3 }] },
              },
            ],
          },
        ],
      },
      id: 2948,
    },
    finish: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        event: [
          {
            props: { current: 2 },
            expect: [
              {
                trigger: 'click(document.t-guide__finish)',
                event: { finish: [{ current: 2, 'e.type': 'click', total: 3 }] },
              },
            ],
          },
        ],
      },
      id: 2950,
    },
    nextStepClick: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        event: [
          {
            props: { current: 1 },
            expect: [
              {
                trigger: 'click(document.t-guide__next)',
                event: { nextStepClick: [{ current: 1, next: 2, 'e.type': 'click', total: 3 }] },
              },
            ],
          },
        ],
      },
      id: 2952,
    },
    prevStepClick: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        event: [
          {
            props: { current: 1 },
            expect: [
              {
                trigger: 'click(document.t-guide__prev)',
                event: { prevStepClick: [{ current: 1, prev: 0, 'e.type': 'click', total: 3 }] },
              },
            ],
          },
        ],
      },
      id: 2951,
    },
    skip: {
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(100)',
        event: [
          {
            props: { current: 0 },
            expect: [
              {
                trigger: 'click(document.t-guide__skip)',
                event: { skip: [{ current: 0, 'e.type': 'click', total: 3 }] },
              },
            ],
          },
        ],
      },
      id: 2949,
    },
  },
  GuideStep: {
    body: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
      id: 2955,
    },
    children: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
      id: 2953,
    },
    content: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
      id: 2954,
    },
    element: { PC: {}, id: 2956 },
    highlightContent: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
      id: 2966,
    },
    highlightPadding: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        attribute: [
          {
            value: 32,
            expect: [
              {
                dom: 'document.t-guide__highlight--mask',
                attribute: {
                  'style.width': '64px',
                  'style.height': '64px',
                  'style.top': '-32px',
                  'style.left': '-32px',
                },
              },
              {
                dom: 'document.t-guide__reference',
                attribute: {
                  'style.width': '64px',
                  'style.height': '64px',
                  'style.top': '-32px',
                  'style.left': '-32px',
                },
              },
            ],
          },
        ],
      },
      id: 2965,
    },
    mode: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        dom: ['document.t-popup', 'document.t-guide__dialog'],
        snapshot: true,
      },
      id: 2967,
    },
    nextButtonProps: {
      PC: {
        wrapper: 'getCustomMultipleGuideStepMount',
        trigger: 'delay(100)',
        props: { current: 1 },
        className: [
          {
            value: "{theme: 'warning'}",
            expect: [
              { dom: 'document.t-guide__next', className: { 't-button--theme-warning': true } },
            ],
          },
        ],
      },
      id: 2957,
    },
    offset: { id: 2958 },
    placement: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        attribute: [
          {
            value: 'bottom-left',
            expect: [
              { dom: 'document.t-popup', attribute: { 'data-popper-placement': 'bottom-start' } },
            ],
          },
        ],
        snapshot: true,
      },
      id: 2959,
    },
    popupProps: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        attribute: [
          {
            value: "{placement: 'top-left'}",
            expect: [
              { dom: 'document.t-popup', attribute: { 'data-popper-placement': 'top-start' } },
            ],
          },
        ],
      },
      id: 3307,
    },
    prevButtonProps: {
      PC: {
        wrapper: 'getCustomMultipleGuideStepMount',
        trigger: 'delay(100)',
        props: { current: 2 },
        className: [
          {
            value: "{theme: 'warning'}",
            expect: [
              { dom: 'document.t-guide__prev', className: { 't-button--theme-warning': true } },
            ],
          },
        ],
      },
      id: 2960,
    },
    showOverlay: {
      PC: {
        wrapper: 'getCustomMultipleGuideStepMount',
        trigger: 'delay(100)',
        dom: {
          true: { 'document.t-guide__highlight--mask': 1 },
          false: { 'document.t-guide__highlight--mask': false },
        },
      },
      id: 2964,
    },
    skipButtonProps: {
      PC: {
        wrapper: 'getCustomMultipleGuideStepMount',
        trigger: 'delay(100)',
        props: { current: 1 },
        className: [
          {
            value: "{theme: 'warning'}",
            expect: [
              { dom: 'document.t-guide__skip', className: { 't-button--theme-warning': true } },
            ],
          },
        ],
      },
      id: 2961,
    },
    stepOverlayClass: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        className: [
          {
            value: 't-test-guide-step-overlay',
            expect: [{ dom: 'document.t-popup', className: { 't-test-guide-step-overlay': true } }],
          },
        ],
        snapshot: true,
      },
      id: 2963,
    },
    title: {
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(100)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
      id: 2962,
    },
  },
};
