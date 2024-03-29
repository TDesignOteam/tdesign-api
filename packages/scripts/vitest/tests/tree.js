module.exports = {
  Tree: {
    activable_536: { field_name: 'activable', id: 536 },
    activeMultiple_537: {
      field_name: 'activeMultiple',
      id: 537,
      PC: {
        wrapper: 'getTreeDefaultMount',
        event: [
          {
            props: { activable: true, defaultActived: [1], activeMultiple: true },
            trigger: 'delay(300)',
            expect: [
              { trigger: 'delay(300)', delay: true, exist: { '.t-tree__item': 2 } },
              {
                trigger: 'click(.t-tree__item:nth-child(2))',
                delay: 300,
                exist: { '.t-tree__item.t-is-active': 2 },
                event: { active: [[1, 2]] },
              },
            ],
          },
        ],
      },
    },
    actived_538: {
      field_name: 'actived',
      id: 538,
      PC: {
        wrapper: 'getTreeDefaultMount',
        event: [
          {
            props: { activable: true, actived: [1] },
            trigger: 'delay(300)',
            expect: [
              { trigger: 'delay(300)', delay: true, exist: { '.t-tree__item': 2 } },
              {
                trigger: 'click(.t-tree__item:nth-child(2))',
                delay: 300,
                exist: { '.t-tree__item.t-is-active': 1 },
                event: { active: [[2]] },
              },
            ],
          },
        ],
      },
    },
    allowFoldNodeOnFilter_2444: { field_name: 'allowFoldNodeOnFilter', id: 2444 },
    checkProps_526: { field_name: 'checkProps', id: 526 },
    checkStrictly_527: { field_name: 'checkStrictly', id: 527 },
    checkable_525: { field_name: 'checkable', id: 525 },
    data_519: { field_name: 'data', id: 519 },
    disableCheck_1859: {
      field_name: 'disableCheck',
      id: 1859,
      PC: {
        wrapper: 'getTreeDefaultMount',
        event: [
          {
            props: { checkable: true, disableCheck: true },
            trigger: 'delay(300)',
            expect: [
              { trigger: 'delay(300)', delay: true, exist: { '.t-checkbox__input': 2 } },
              {
                trigger: 'click(.t-checkbox__input)',
                delay: 300,
                exist: { '.t-is-checked': 0 },
                event: { change: 'not' },
              },
            ],
          },
        ],
      },
    },
    disabled_539: { field_name: 'disabled', id: 539 },
    draggable_2808: {
      field_name: 'draggable',
      id: 2808,
      PC: {
        wrapper: 'getTreeDefaultMount',
        event: [
          {
            props: { checkable: true, disableCheck: true, draggable: true },
            expect: [
              { trigger: 'delay(300)', delay: true },
              { trigger: 'dragover(.t-tree__item)', delay: true, event: { dragOver: [] } },
              { trigger: 'dragend(.t-tree__item)', delay: true, event: { dragEnd: [] } },
              { trigger: 'dragstart(.t-tree__item)', delay: true, event: { dragStart: [] } },
              { trigger: 'dragleave(.t-tree__item)', delay: true, event: { dragLeave: [] } },
            ],
          },
          {
            props: { draggable: true },
            expect: [
              { trigger: 'delay(300)', delay: true },
              {
                trigger: 'dragend(.t-tree__item:nth-child(2))',
                delay: true,
                event: { dragEnd: [] },
              },
              { trigger: 'drop(.t-tree__item)', delay: true, event: { drop: [] } },
            ],
          },
        ],
      },
    },
    empty_521: { field_name: 'empty', id: 521 },
    expandAll_531: { field_name: 'expandAll', id: 531 },
    expandLevel_533: { field_name: 'expandLevel', id: 533 },
    expandMutex_534: { field_name: 'expandMutex', id: 534 },
    expandOnClickNode_547: { field_name: 'expandOnClickNode', id: 547 },
    expandParent_530: { field_name: 'expandParent', id: 530 },
    expanded_532: { field_name: 'expanded', id: 532 },
    filter_545: { field_name: 'filter', id: 545 },
    hover_540: { field_name: 'hover', id: 540 },
    icon_541: {
      field_name: 'icon',
      id: 541,
      PC: {
        wrapper: 'getTreeDefaultMount',
        event: [
          {
            props: { icon: false },
            expect: [{ trigger: 'delay(300)', delay: true, exist: { '.t-tree__icon': 2 } }],
          },
        ],
      },
    },
    keys_520: { field_name: 'keys', id: 520 },
    label_529: { field_name: 'label', id: 529 },
    lazy_544: { field_name: 'lazy', id: 544 },
    line_542: {
      field_name: 'line',
      id: 542,
      PC: {
        wrapper: 'getTreeDefaultMount',
        event: [
          {
            props: { expandAll: true, line: true },
            expect: [{ trigger: 'delay(300)', delay: true, exist: { '.t-tree__line': 2 } }],
          },
        ],
      },
    },
    load_543: { field_name: 'load', id: 543 },
    operations_546: { field_name: 'operations', id: 546 },
    transition_535: { field_name: 'transition', id: 535 },
    value_524: { field_name: 'value', id: 524 },
    valueMode_528: { field_name: 'valueMode', id: 528 },
    active_549: { field_name: 'active', id: 549 },
    change_550: { field_name: 'change', id: 550 },
    click_551: { field_name: 'click', id: 551 },
    dragEnd_3181: { field_name: 'dragEnd', id: 3181 },
    dragLeave_3183: { field_name: 'dragLeave', id: 3183 },
    dragOver_3182: { field_name: 'dragOver', id: 3182 },
    dragStart_3180: { field_name: 'dragStart', id: 3180 },
    drop_3184: { field_name: 'drop', id: 3184 },
    expand_553: { field_name: 'expand', id: 553 },
    load_552: { field_name: 'load', id: 552 },
    appendTo_566: { field_name: 'appendTo', id: 566 },
    getIndex_570: { field_name: 'getIndex', id: 570 },
    getItem_565: { field_name: 'getItem', id: 565 },
    getItems_998: { field_name: 'getItems', id: 998 },
    getParent_571: { field_name: 'getParent', id: 571 },
    getParents_572: { field_name: 'getParents', id: 572 },
    getPath_717: { field_name: 'getPath', id: 717 },
    insertAfter_568: { field_name: 'insertAfter', id: 568 },
    insertBefore_567: { field_name: 'insertBefore', id: 567 },
    remove_569: { field_name: 'remove', id: 569 },
    setItem_562: { field_name: 'setItem', id: 562 },
    '<T extends TreeOptionData = TreeOptionData>_548': {
      field_name: '<T extends TreeOptionData = TreeOptionData>',
      id: 548,
    },
  },
  TreeNodeState: {
    activable_511: { field_name: 'activable', id: 511 },
    actived_510: { field_name: 'actived', id: 510 },
    checkable_513: { field_name: 'checkable', id: 513 },
    checked_514: { field_name: 'checked', id: 514 },
    disabled_516: {
      field_name: 'disabled',
      id: 516,
      PC: {
        wrapper: 'getTreeDefaultMount',
        event: [
          {
            description: 'TreeNode is not disabled && Tree is not disabled',
            props: {
              checkable: true,
              data: [{ value: 1, label: 1, disabled: false }],
              disabled: false,
            },
            trigger: 'delay(300)',
            expect: [
              { trigger: 'delay(300)', delay: true, exist: { '.t-checkbox__input': 1 } },
              {
                trigger: 'click(.t-checkbox__input)',
                delay: 300,
                exist: { '.t-is-checked': 1 },
                event: [{ change: [[1]] }, { click: [] }],
              },
            ],
          },
          {
            description: 'TreeNode is not disabled && Tree is disabled',
            props: {
              checkable: true,
              data: [{ value: 1, label: 1, disabled: false }],
              disabled: true,
            },
            trigger: 'delay(300)',
            expect: [
              { trigger: 'delay(300)', delay: true, exist: { '.t-checkbox__input': 1 } },
              {
                trigger: 'click(.t-checkbox__input)',
                delay: 300,
                exist: { '.t-is-checked': 0 },
                event: [{ change: 'not' }, { click: [] }],
              },
            ],
          },
          {
            description: 'TreeNode is disabled && Tree is disabled',
            props: {
              checkable: true,
              data: [{ value: 1, label: 1, disabled: true }],
              disabled: true,
            },
            trigger: 'delay(300)',
            expect: [
              { trigger: 'delay(300)', delay: true, exist: { '.t-checkbox__input': 1 } },
              {
                trigger: 'click(.t-checkbox__input)',
                delay: 300,
                exist: { '.t-is-checked': 0 },
                event: [{ change: 'not' }, { click: [] }],
              },
            ],
          },
          {
            description: 'TreeNode is disabled && Tree is not disabled',
            props: {
              checkable: true,
              data: [{ value: 1, label: 1, disabled: true }],
              disabled: false,
            },
            trigger: 'delay(300)',
            expect: [
              { trigger: 'delay(300)', delay: true, exist: { '.t-checkbox__input': 1 } },
              {
                trigger: 'click(.t-checkbox__input)',
                delay: 300,
                exist: { '.t-is-checked': 0 },
                event: [{ change: 'not' }, { click: [] }],
              },
            ],
          },
        ],
      },
    },
    expandMutex_509: { field_name: 'expandMutex', id: 509 },
    expanded_508: { field_name: 'expanded', id: 508 },
    indeterminate_515: { field_name: 'indeterminate', id: 515 },
    label_506: { field_name: 'label', id: 506 },
    loading_518: { field_name: 'loading', id: 518 },
    value_505: { field_name: 'value', id: 505 },
    visible_517: { field_name: 'visible', id: 517 },
  },
  TreeNodeModel: {
    actived_716: { field_name: 'actived', id: 716 },
    checked_719: { field_name: 'checked', id: 719 },
    data_564: { field_name: 'data', id: 564 },
    expanded_718: { field_name: 'expanded', id: 718 },
    indeterminate_720: { field_name: 'indeterminate', id: 720 },
    loading_721: { field_name: 'loading', id: 721 },
    appendData_557: { field_name: 'appendData', id: 557 },
    getChildren_1063: { field_name: 'getChildren', id: 1063 },
    getIndex_558: { field_name: 'getIndex', id: 558 },
    getLevel_559: { field_name: 'getLevel', id: 559 },
    getParent_560: { field_name: 'getParent', id: 560 },
    getParents_561: { field_name: 'getParents', id: 561 },
    getPath_555: { field_name: 'getPath', id: 555 },
    getRoot_573: { field_name: 'getRoot', id: 573 },
    getSiblings_574: { field_name: 'getSiblings', id: 574 },
    insertAfter_576: { field_name: 'insertAfter', id: 576 },
    insertBefore_575: { field_name: 'insertBefore', id: 575 },
    isFirst_578: { field_name: 'isFirst', id: 578 },
    isLast_579: { field_name: 'isLast', id: 579 },
    isLeaf_580: { field_name: 'isLeaf', id: 580 },
    remove_2021: { field_name: 'remove', id: 2021 },
    setData_2022: { field_name: 'setData', id: 2022 },
    TreeNodeState_554: { field_name: 'TreeNodeState', id: 554 },
    '<T extends TreeOptionData = TreeOptionData>_556': {
      field_name: '<T extends TreeOptionData = TreeOptionData>',
      id: 556,
    },
  },
};
