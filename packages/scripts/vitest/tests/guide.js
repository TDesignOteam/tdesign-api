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
        wrapper: 'getGuideStepsMount',
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
        wrapper: 'getGuideStepsMount',
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
        wrapper: 'getGuideStepsMount',
        trigger: 'delay(100)',
        props: { current: 1, hidePrev: true },
        dom: [{ 'document.t-guide__action .t-guide__prev': false }],
      },
      id: 2977,
    },
    hideSkip: {
      PC: {
        wrapper: 'getGuideStepsMount',
        trigger: 'delay(100)',
        props: { current: 1, hideSkip: true },
        dom: [{ 'document.t-guide__action .t-guide__skip': false }],
      },
      id: 2978,
    },
    highlightPadding: { id: 2981 },
    mode: { id: 2968 },
    nextButtonProps: { id: 2969 },
    prevButtonProps: { id: 2973 },
    showOverlay: { id: 2979 },
    skipButtonProps: { id: 2974 },
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
    zIndex: { id: 2980 },
    change: { id: 2948 },
    finish: { id: 2950 },
    nextStepClick: { id: 2952 },
    prevStepClick: { id: 2951 },
    skip: { id: 2949 },
  },
  GuideStep: {
    body: { id: 2955 },
    children: { id: 2953 },
    content: { id: 2954 },
    element: { id: 2956 },
    highlightContent: { id: 2966 },
    highlightPadding: { id: 2965 },
    mode: { id: 2967 },
    nextButtonProps: { id: 2957 },
    offset: { id: 2958 },
    placement: { id: 2959 },
    prevButtonProps: { id: 2960 },
    showOverlay: { id: 2964 },
    skipButtonProps: { id: 2961 },
    stepOverlayClass: { id: 2963 },
    title: { id: 2962 },
  },
};
