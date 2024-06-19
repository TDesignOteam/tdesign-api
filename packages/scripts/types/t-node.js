function formatBaseType(type) {
  return type.map(item => (item !== 'TNode' ? item.toLocaleLowerCase() : item)).join(' | ');
}

function getVueTNodeType(type, customType) {
  return customType || formatBaseType(type);
}

function getMiniprogramTNodeType(type, customType) {
  let t = customType ? customType.split('|') : type;
  if (t.length === 1 && t.join().trim() === 'TNode') return '';
  t = t.filter(v => v.trim() !== 'TNode');
  return customType ? t.join('|') : formatBaseType(t);
}

/**
 * @param {string} type API 类型
 * @param {string} customType API 的 TS 类型，即 API 更细节的定义
 * 1. React 总共有 3 种 TNode 类型：TElement / TNode / TNode<T>
 * 2. TElement 表示 API 只接受传入组件
 * 3. TNode 表示 API 不仅接受传入组件，还接受传入其他的数据类型，如：string
 * 4. TNode<T> 表示 API 会输出参数
 * @returns {string} 最终计算出来的数据类型
 */
function getReactTNodeType(type, customType) {
  // remove import type and export type
  const hasTNode = type.includes('TNode');
  if (!hasTNode) return;
  let r = '';
  // 如果 API 类型只有一个 TNode，没有其他的数据类型，则表示 API 只接受传入组件，转义为 TElement（具体定义见项目 globals.d.ts）
  if (type.length === 1) {
    // 此时，customType 的值只可能是 TNode 或 TNode<T>
    r = (!customType || customType === 'TNode') ? 'TElement' : (customType || 'TNode');
  } else {
    // API 类型不仅仅是 TNode 时，则表示 API 不仅接受传入组件，还接受传入其他的数据类型
    r = 'TNode';
    if (customType) {
      // 1. 数据类型 `string | number | boolean | TNode` 转换为 TNode（有 TNode<T> 则无需转换）
      // 2. Array<string | TNode> | TNode<{ value: SwitchValue }> 等复杂数据类型不作转换
      const hasTNodeFunction = /TNode<.*?>/.test(customType);
      if (hasTNodeFunction) {
        r = customType;
      } else {
        r = customType.replace(
          /(string|Array<.*?>|TNode<.*?>|number|boolean|TNode)/g,
          (val) => {
            if (['string', 'boolean', 'number'].includes(val)) {
              return '';
            }
            return val;
          },
        ).replace(/^ \| /, '');
      }
    }
  }
  return r;
}

// field_type_text 和 custom_field_type 共同决定各框架的 TNode 定义
function formatTNode(framework, type, customType) {
  // remove import type and export type
  const newCustomType = customType ? customType.replace(/【.*】/g, '') : customType;
  switch (framework) {
    case 'Vue(PC)':
      return getVueTNodeType(type, newCustomType);
    case 'VueNext(PC)':
      return getVueTNodeType(type, newCustomType);
    case 'Vue(Mobile)':
      return getVueTNodeType(type, newCustomType);
    case 'React(PC)':
      return getReactTNodeType(type, newCustomType);
    case 'React(Mobile)':
      return getReactTNodeType(type, newCustomType);
    case 'Miniprogram':
      return getMiniprogramTNodeType(type, newCustomType);
    case 'Omi(PC)':
      return getReactTNodeType(type, newCustomType);
  }
}

module.exports = formatTNode;
