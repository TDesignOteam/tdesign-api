module.exports = {
  Avatar: {
    alt_1466: {
      field_name: 'alt',
      id: 1466,
      PC: {
        attribute: { alt: 'Avatar' },
        attributeDom: 'img',
        props: { image: 'https://tdesign.gtimg.com/site/avatar.jpg' },
      },
    },
    badgeProps_1493: { field_name: 'badgeProps', id: 1493 },
    bordered_3265: { field_name: 'bordered', id: 3265 },
    children_3295: { field_name: 'children', id: 3295, PC: { snapshot: true, tnode: true } },
    content_3293: { field_name: 'content', id: 3293, PC: { snapshot: true, tnode: true } },
    customStyle_3078: { field_name: 'customStyle', id: 3078 },
    default_3294: { field_name: 'default', id: 3294, PC: { snapshot: true, tnode: true } },
    externalClasses_1657: { field_name: 'externalClasses', id: 1657 },
    hideOnLoadFailed_1683: {
      field_name: 'hideOnLoadFailed',
      id: 1683,
      PC: {
        event: [
          {
            props: { image: 'https://this.is.an.error.path.jpg' },
            expect: [
              {
                trigger: "simulateImageEvent('img', 'error')",
                exist: [{ '.t-image': false }],
                delay: 300,
              },
            ],
          },
        ],
      },
    },
    icon_1469: {
      field_name: 'icon',
      id: 1469,
      PC: { tnode: { dom: ['.t-avatar__icon'], trigger: '' } },
    },
    icon_1499: { field_name: 'icon', id: 1499 },
    image_1468: {
      field_name: 'image',
      id: 1468,
      PC: {
        attribute: [
          {
            value: 'https://tdesign.tencent.com/',
            expect: [{ dom: 'img', attribute: { src: 'https://tdesign.tencent.com/' } }],
          },
        ],
      },
    },
    imageProps_3021: { field_name: 'imageProps', id: 3021 },
    shape_1465: {
      field_name: 'shape',
      id: 1465,
      PC: { snapshot: true, className: 't-avatar--${item}' },
    },
    size_1461: {
      field_name: 'size',
      id: 1461,
      PC: {
        className: { small: 't-size-s', medium: 't-size-m', large: 't-size-l' },
        attribute: [
          {
            value: '120px',
            expect: [
              {
                dom: 'self',
                attribute: {
                  'style.width': '120px',
                  'style.height': '120px',
                  'style.fontSize': '60px',
                },
              },
            ],
          },
        ],
      },
    },
    error_1467: {
      field_name: 'error',
      id: 1467,
      PC: {
        event: [
          {
            props: { image: 'https://this.is.an.error.path.jpg' },
            expect: [
              {
                trigger: "simulateImageEvent('img', 'error')",
                event: { error: [{ 'e.type': 'error' }] },
                exist: [],
                delay: 300,
              },
            ],
          },
        ],
      },
    },
  },
  AvatarGroup: {
    cascading_1600: {
      field_name: 'cascading',
      id: 1600,
      PC: { snapshot: true, className: ['t-avatar--offset-left', 't-avatar--offset-right'] },
    },
    collapseAvatar_1643: {
      field_name: 'collapseAvatar',
      id: 1643,
      PC: {
        wrapper: 'getAvatarGroupDefaultMount',
        snapshot: true,
        props: { max: 3 },
        tnode: { dom: [], trigger: '' },
      },
    },
    customStyle_3079: { field_name: 'customStyle', id: 3079 },
    externalClasses_1660: { field_name: 'externalClasses', id: 1660 },
    max_1597: {
      field_name: 'max',
      id: 1597,
      PC: {
        wrapper: 'getAvatarGroupDefaultMount',
        props: { max: 3 },
        dom: [
          {
            '.t-avatar': 4,
            '.t-avatar__collapse': 1,
            '.t-avatar__collapse > span': { text: '+2' },
          },
        ],
      },
    },
    popupProps_1598: { field_name: 'popupProps', id: 1598 },
    size_1655: {
      field_name: 'size',
      id: 1655,
      PC: {
        wrapper: 'getAvatarGroupDefaultMount',
        className: [
          {
            value: 'small',
            expect: [
              { dom: '.t-avatar', className: { 't-size-s': true } },
              { dom: '.t-avatar:nth-child(5)', className: { 't-size-l': true } },
            ],
          },
          {
            value: 'large',
            expect: [
              { dom: '.t-avatar', className: { 't-size-l': true } },
              { dom: '.t-avatar:nth-child(4)', className: { 't-size-s': true } },
            ],
          },
        ],
        attribute: [
          {
            value: '120px',
            expect: [
              {
                dom: '.t-avatar',
                attribute: {
                  'style.width': '120px',
                  'style.height': '120px',
                  'style.fontSize': '60px',
                },
              },
            ],
          },
        ],
      },
    },
  },
};
