export const INITIAL_CATEGORY = {
  category: 'tnode',
  tnode: {
    dom: [],
    trigger: '',
  },
}

export const INITIAL_FROM_DATA = {
  wrapper: '',
  copyTestToWrapper: '',
  needCopy: false,
  snapshot: false,
  list: [{ ...INITIAL_CATEGORY }],
}

export const CATEGORY_OPTIONS = [
  { label: 'TNode', value: 'tnode', tips: '用于校验自定义节点' },
  { label: 'ClassName', value: 'className', tips: '用于校验某个元素（或子元素）是否存在某些类名' },
  { label: 'Attribute', value: 'attribute', tips: '用于校验某个元素（或子元素）是否存在某些属性' },
  { label: 'Element', value: 'dom', tips: '用于校验满足一定条件后，是否存在某些子元素' },
  { label: 'Interactive', value: 'event', tips: '用于校验触发某些事件后，事件函数是否正常触发，以及相关元素本身、类名、属性等是否存在' },
]
