module.exports = {
  Image: {
    MP_EXCLUDE_PROPS_2419: { field_name: 'MP_EXCLUDE_PROPS', id: 2419 },
    MP_PROPS_1451: { field_name: 'MP_PROPS', id: 1451 },
    alt_2208: {
      field_name: 'alt',
      id: 2208,
      PC: {
        props: { src: 'https://www.error.img.com' },
        attribute: { alt: 'text image load failed' },
        attributeDom: 'img',
      },
    },
    disabled_2871: {
      field_name: 'disabled',
      id: 2871,
      PC: { event: { click: { arguments: 'not' } } },
    },
    error_2216: {
      field_name: 'error',
      id: 2216,
      PC: {
        props: { src: 'https://this.is.an.error.img.com' },
        tnode: { trigger: "simulateImageEvent('img', 'error')", dom: [] },
      },
    },
    error_2421: { field_name: 'error', id: 2421 },
    externalClasses_1454: { field_name: 'externalClasses', id: 1454 },
    fit_2209: {
      field_name: 'fit',
      id: 2209,
      PC: { snapshot: true, className: 't-image--fit-${item}', classNameDom: '.t-image' },
    },
    gallery_2869: {
      field_name: 'gallery',
      id: 2869,
      PC: {
        className: 't-image__wrapper--gallery',
        dom: [{ props: { gallery: true }, dom: ['.t-image__gallery-shadow'] }],
      },
    },
    lazy_2211: { field_name: 'lazy', id: 2211 },
    loading_2215: {
      field_name: 'loading',
      id: 2215,
      PC: { snapshot: true, tnode: { dom: [], trigger: '' } },
    },
    loading_2420: { field_name: 'loading', id: 2420 },
    overlayContent_2872: {
      field_name: 'overlayContent',
      id: 2872,
      PC: { snapshot: true, tnode: { dom: ['.t-image__overlay-content'], trigger: '' } },
    },
    overlayTrigger_2873: {
      field_name: 'overlayTrigger',
      id: 2873,
      PC: {
        event: [
          {
            props: {
              overlayTrigger: 'hover',
              src: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
            },
            description: 'show overlay content on hover',
            wrapper: 'getOverlayImageMount',
            expect: [
              {
                trigger: 'mouseenter(.t-image__wrapper)',
                exist: [
                  '.t-image__overlay-content',
                  { '.t-image__overlay-content--hidden': false },
                ],
              },
              {
                trigger: 'mouseleave(.t-image__wrapper)',
                exist: ['.t-image__overlay-content--hidden'],
              },
            ],
          },
        ],
      },
    },
    placeholder_2870: { field_name: 'placeholder', id: 2870, PC: { snapshot: true, tnode: true } },
    position_2212: {
      field_name: 'position',
      id: 2212,
      PC: {
        className: {
          top: 't-image--position-top',
          bottom: 't-image--position-bottom',
          left: 't-image--position-left',
          right: 't-image--position-right',
          center: 't-image--position-center',
        },
        classNameDom: '.t-image',
      },
    },
    shape_2210: {
      field_name: 'shape',
      id: 2210,
      PC: { className: 't-image__wrapper--shape-${item}', classNameDom: '.t-image__wrapper' },
    },
    showMenuByLongpress_3124: { field_name: 'showMenuByLongpress', id: 3124 },
    src_2207: {
      field_name: 'src',
      id: 2207,
      PC: {
        attribute: { href: 'https://tdesign.gtimg.com/demo/demo-image-1.png' },
        attributeDom: 'img',
      },
    },
    style_3086: { field_name: 'style', id: 3086 },
    error_3290: {
      field_name: 'error',
      id: 3290,
      PC: {
        event: [
          {
            props: { src: 'https://load-failed-img.png' },
            expect: [
              {
                trigger: "simulateImageEvent('img', 'error')",
                event: { error: [{ 'e.type': 'error' }] },
                exist: ['.t-image__error', '.t-icon-image-error'],
              },
            ],
          },
        ],
      },
    },
    load_2213: {
      field_name: 'load',
      id: 2213,
      PC: {
        event: [
          {
            props: { src: 'https://tdesign.gtimg.com/demo/demo-image-1.png' },
            expect: [
              { trigger: '' },
              {
                trigger: "simulateImageEvent('img', 'load')",
                event: { load: [{ 'e.type': 'load' }] },
              },
            ],
          },
        ],
      },
    },
  },
};
