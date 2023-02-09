module.exports = {
  Guide: {
    counter_2970: {
      field_name: 'counter',
      id: 2970,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(60)',
        tnode: {
          dom: ['document.custom-node', 'document.t-guide__counter'],
          params: [{ total: 1, current: 0 }],
        },
        global: {
          afterEach: [
            "document.querySelector('.t-guide__overlay')?.remove()",
            "document.querySelector('.t-guide__highlight--popup')?.remove()",
            "document.querySelector('.t-guide__reference')?.remove()",
            "document.querySelector('.t-guide__highlight--mask')?.remove()",
            "document.querySelector('.t-popup')?.remove()",
          ],
        },
      },
    },
    current_2971: {
      field_name: 'current',
      id: 2971,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
        dom: [
          {
            props: { current: 0 },
            dom: [
              {
                'document.t-guide__counter': { text: '1/3' },
                'document.t-guide__title': 1,
                'document.t-guide__desc': 1,
                'document.t-guide__action .t-guide__skip': 1,
                'document.t-guide__action .t-guide__prev': false,
                'document.t-guide__action .t-guide__next': 1,
                'document.t-guide__action .t-guide__finish': false,
              },
            ],
          },
          {
            props: { current: 1 },
            dom: [
              {
                'document.t-guide__counter': { text: '2/3' },
                'document.t-guide__title': 1,
                'document.t-guide__desc': 1,
                'document.t-guide__action .t-guide__skip': 1,
                'document.t-guide__action .t-guide__prev': 1,
                'document.t-guide__action .t-guide__next': 1,
                'document.t-guide__action .t-guide__finish': false,
              },
            ],
          },
          {
            props: { current: 2 },
            dom: [
              {
                'document.t-guide__counter': { text: '3/3' },
                'document.t-guide__title': 1,
                'document.t-guide__desc': 1,
                'document.t-guide__action .t-guide__skip': false,
                'document.t-guide__action .t-guide__prev': 1,
                'document.t-guide__action .t-guide__next': false,
                'document.t-guide__action .t-guide__finish': 1,
              },
            ],
          },
          { props: { current: -1 }, dom: [{ 'document.t-guide__counter': false }] },
        ],
      },
    },
    finishButtonProps_2972: {
      field_name: 'finishButtonProps',
      id: 2972,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
    hideCounter_2976: {
      field_name: 'hideCounter',
      id: 2976,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(60)',
        props: { hideCounter: true },
        dom: [{ 'document.t-guide__counter': false }],
      },
    },
    hidePrev_2977: {
      field_name: 'hidePrev',
      id: 2977,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
        props: { current: 1, hidePrev: true },
        dom: [{ 'document.t-guide__action .t-guide__prev': false }],
      },
    },
    hideSkip_2978: {
      field_name: 'hideSkip',
      id: 2978,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
        props: { current: 1, hideSkip: true },
        dom: [{ 'document.t-guide__action .t-guide__skip': false }],
      },
    },
    highlightPadding_2981: {
      field_name: 'highlightPadding',
      id: 2981,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(60)',
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
    },
    mode_2968: { field_name: 'mode', id: 2968 },
    nextButtonProps_2969: {
      field_name: 'nextButtonProps',
      id: 2969,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
    prevButtonProps_2973: {
      field_name: 'prevButtonProps',
      id: 2973,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
    showOverlay_2979: {
      field_name: 'showOverlay',
      id: 2979,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(60)',
        dom: [
          { props: { showOverlay: true }, dom: [{ 'document.t-guide__highlight--mask': 1 }] },
          { props: { showOverlay: false }, dom: [{ 'document.t-guide__highlight--mask': false }] },
        ],
      },
    },
    skipButtonProps_2974: {
      field_name: 'skipButtonProps',
      id: 2974,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
    steps_2975: {
      field_name: 'steps',
      id: 2975,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(60)',
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
    },
    zIndex_2980: {
      field_name: 'zIndex',
      id: 2980,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(60)',
        attribute: [
          {
            value: 5000,
            expect: [
              { dom: 'document.t-guide__overlay', attribute: { 'style.zIndex': 4998 } },
              { dom: 'document.t-guide__highlight--mask', attribute: { 'style.zIndex': 4999 } },
            ],
          },
        ],
      },
    },
    change_2948: {
      field_name: 'change',
      id: 2948,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
    finish_2950: {
      field_name: 'finish',
      id: 2950,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
    nextStepClick_2952: {
      field_name: 'nextStepClick',
      id: 2952,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
    prevStepClick_2951: {
      field_name: 'prevStepClick',
      id: 2951,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
    skip_2949: {
      field_name: 'skip',
      id: 2949,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(60)',
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
    },
  },
  GuideStep: {
    body_2955: {
      field_name: 'body',
      id: 2955,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
        global: {
          afterEach: [
            "document.querySelector('.t-guide__overlay')?.remove()",
            "document.querySelector('.t-guide__highlight--popup')?.remove()",
            "document.querySelector('.t-guide__reference')?.remove()",
            "document.querySelector('.t-guide__highlight--mask')?.remove()",
            "document.querySelector('.t-popup')?.remove()",
          ],
        },
      },
    },
    children_2953: {
      field_name: 'children',
      id: 2953,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
    },
    content_2954: {
      field_name: 'content',
      id: 2954,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
    },
    element_2956: { field_name: 'element', id: 2956, PC: {} },
    highlightContent_2966: {
      field_name: 'highlightContent',
      id: 2966,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
    },
    highlightPadding_2965: {
      field_name: 'highlightPadding',
      id: 2965,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
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
    },
    mode_2967: {
      field_name: 'mode',
      id: 2967,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
        dom: ['document.t-popup', 'document.t-guide__dialog'],
        snapshot: true,
      },
    },
    nextButtonProps_2957: {
      field_name: 'nextButtonProps',
      id: 2957,
      PC: {
        wrapper: 'getCustomMultipleGuideStepMount',
        trigger: 'delay(60)',
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
    },
    offset_2958: { field_name: 'offset', id: 2958 },
    placement_2959: {
      field_name: 'placement',
      id: 2959,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
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
    },
    popupProps_3307: {
      field_name: 'popupProps',
      id: 3307,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
        attribute: [
          {
            value: "{placement: 'top-left'}",
            expect: [
              { dom: 'document.t-popup', attribute: { 'data-popper-placement': 'top-start' } },
            ],
          },
        ],
      },
    },
    prevButtonProps_2960: {
      field_name: 'prevButtonProps',
      id: 2960,
      PC: {
        wrapper: 'getCustomMultipleGuideStepMount',
        trigger: 'delay(60)',
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
    },
    showOverlay_2964: {
      field_name: 'showOverlay',
      id: 2964,
      PC: {
        wrapper: 'getCustomMultipleGuideStepMount',
        trigger: 'delay(60)',
        dom: [
          {
            description: '.t-guide__highlight--mask should exit if showOverlay=true',
            props: { showOverlay: true },
            dom: [{ 'document.t-guide__highlight--mask': 1 }],
          },
          {
            description: '.t-guide__highlight--mask should not exit if showOverlay=false',
            props: { showOverlay: false },
            dom: [{ 'document.t-guide__highlight--mask': false }],
          },
        ],
      },
    },
    skipButtonProps_2961: {
      field_name: 'skipButtonProps',
      id: 2961,
      PC: {
        wrapper: 'getCustomMultipleGuideStepMount',
        trigger: 'delay(60)',
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
    },
    stepOverlayClass_2963: {
      field_name: 'stepOverlayClass',
      id: 2963,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
        className: [
          {
            value: 't-test-guide-step-overlay',
            expect: [{ dom: 'document.t-popup', className: { 't-test-guide-step-overlay': true } }],
          },
        ],
        snapshot: true,
      },
    },
    title_2962: {
      field_name: 'title',
      id: 2962,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(60)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
    },
  },
};
