module.exports = {
  Guide: {
    backButtonProps_1708481239: { field_name: 'backButtonProps', id: 1708481239 },
    counter_2970: {
      field_name: 'counter',
      id: 2970,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(200)',
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
    counter_1736410690: { field_name: 'counter', id: 1736410690 },
    current_2971: {
      field_name: 'current',
      id: 2971,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
    hideBack_1735205360: { field_name: 'hideBack', id: 1735205360 },
    hideCounter_2976: {
      field_name: 'hideCounter',
      id: 2976,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(200)',
        props: { hideCounter: true },
        dom: [{ 'document.t-guide__counter': false }],
      },
    },
    hidePrev_2977: {
      field_name: 'hidePrev',
      id: 2977,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(200)',
        props: { current: 1, hidePrev: true },
        dom: [{ 'document.t-guide__action .t-guide__prev': false }],
      },
    },
    hideSkip_2978: {
      field_name: 'hideSkip',
      id: 2978,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(200)',
        props: { current: 1, hideSkip: true },
        dom: [{ 'document.t-guide__action .t-guide__skip': false }],
      },
    },
    highlightPadding_2981: {
      field_name: 'highlightPadding',
      id: 2981,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(200)',
        attribute: [
          {
            value: 32,
            expect: [
              {
                dom: 'document.t-guide__highlight--popup',
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
    highlightPadding_1721620852: { field_name: 'highlightPadding', id: 1721620852 },
    mode_2968: { field_name: 'mode', id: 2968 },
    mode_1709177566: { field_name: 'mode', id: 1709177566 },
    nextButtonProps_2969: {
      field_name: 'nextButtonProps',
      id: 2969,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
    usingCustomNavbar_1721621026: { field_name: 'usingCustomNavbar', id: 1721621026 },
    zIndex_2980: {
      field_name: 'zIndex',
      id: 2980,
      PC: {
        wrapper: 'getGuideDefaultMount',
        trigger: 'delay(200)',
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
    back_1708481171: { field_name: 'back', id: 1708481171 },
    change_2948: {
      field_name: 'change',
      id: 2948,
      PC: {
        wrapper: 'getGuideMultipleStepsMount',
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
    't-class_1721621122': { field_name: 't-class', id: 1721621122 },
    't-class-back_1721621135': { field_name: 't-class-back', id: 1721621135 },
    't-class-body_1721621146': { field_name: 't-class-body', id: 1721621146 },
    't-class-finish_1721621157': { field_name: 't-class-finish', id: 1721621157 },
    't-class-footer_1721621166': { field_name: 't-class-footer', id: 1721621166 },
    't-class-next_1721621177': { field_name: 't-class-next', id: 1721621177 },
    't-class-popover_1721621188': { field_name: 't-class-popover', id: 1721621188 },
    't-class-reference_1721621198': { field_name: 't-class-reference', id: 1721621198 },
    't-class-skip_1721621210': { field_name: 't-class-skip', id: 1721621210 },
    't-class-title_1721621223': { field_name: 't-class-title', id: 1721621223 },
    't-class-tooltip_1721621241': { field_name: 't-class-tooltip', id: 1721621241 },
  },
  GuideStep: {
    backButtonProps_1708481323: { field_name: 'backButtonProps', id: 1708481323 },
    body_2955: {
      field_name: 'body',
      id: 2955,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(200)',
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
    body_1721621362: { field_name: 'body', id: 1721621362 },
    children_2953: {
      field_name: 'children',
      id: 2953,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(200)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
    },
    content_2954: {
      field_name: 'content',
      id: 2954,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(200)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
    },
    element_2956: { field_name: 'element', id: 2956, PC: {} },
    element_1721621525: { field_name: 'element', id: 1721621525 },
    finishButtonProps_1721621588: { field_name: 'finishButtonProps', id: 1721621588 },
    highlightContent_2966: {
      field_name: 'highlightContent',
      id: 2966,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(200)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
    },
    highlightContent_1709178118: { field_name: 'highlightContent', id: 1709178118 },
    highlightPadding_2965: {
      field_name: 'highlightPadding',
      id: 2965,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(200)',
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
    highlightPadding_1721621705: { field_name: 'highlightPadding', id: 1721621705 },
    mode_2967: {
      field_name: 'mode',
      id: 2967,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(200)',
        dom: ['document.t-popup', 'document.t-guide__dialog'],
        snapshot: true,
      },
    },
    mode_1709178151: { field_name: 'mode', id: 1709178151 },
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
    offset_1721621784: { field_name: 'offset', id: 1721621784 },
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
    placement_1709197181: { field_name: 'placement', id: 1709197181 },
    popoverProps_1709178092: { field_name: 'popoverProps', id: 1709178092 },
    popupProps_3307: {
      field_name: 'popupProps',
      id: 3307,
      PC: {
        wrapper: 'getCustomGuideStepMount',
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
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
        trigger: 'delay(200)',
        tnode: { dom: ['document.custom-node'] },
        snapshot: true,
      },
    },
    title_1721621896: { field_name: 'title', id: 1721621896 },
  },
};
