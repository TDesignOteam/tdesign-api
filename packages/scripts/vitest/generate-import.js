/**
 * 依赖引入配置
 * hasEvent 是否引入事件 vi
 * importedComponents 引入了哪些组件依赖
 */
function getImportsConfig(params = {}) {
  const {
    hasEvent = false,
    importedComponents = [],
    importedMounts = new Set(),
  } = params;
  const obj = {
    'Vue(PC)': {
      '@vue/test-utils': [],
      'vitest': [],
      '..': [],
      './mount': [],
    },
    'VueNext(PC)': {
      '@vue/test-utils': [],
      'vitest': [],
      '..': [],
      './mount': [],
    },
    'Vue(Mobile)': {
      '@vue/test-utils': [],
      'vitest': [],
      '..': [],
      './mount': [],
    },
    'React(PC)': {
      'react': 'React',
      '@test/utils': [],
      '..': [],
      './mount': [],
    },
    'React(Mobile)': {
      'react': 'React',
      '@test/utils': [],
      '..': [],
      './mount': [],
    },
  };
  if (hasEvent) {
    obj['Vue(PC)']['vitest'].push('vi');
    obj['VueNext(PC)']['vitest'].push('vi');
    obj['React(PC)']['@test/utils'].push('fireEvent', 'vi');
  }
  if (importedComponents.length) {
    Object.keys(obj).forEach(framework => {
      obj[framework]['..'].push(...importedComponents);
    });
  }
  if (importedMounts.size > 0) {
    const list = [...importedMounts];
    Object.keys(obj).forEach(framework => {
      obj[framework]['./mount'] = list;
    });
  } else {
    obj['React(PC)']['@test/utils'].push('render');
    obj['React(Mobile)']['@test/utils'].push('render');
    obj['Vue(PC)']['@vue/test-utils'].push('mount');
    obj['VueNext(PC)']['@vue/test-utils'].push('mount');
    obj['Vue(Mobile)']['@vue/test-utils'].push('mount');
  }
  return obj;
}

function getImportsCode(importsConfig, framework) {
  const config = importsConfig[framework];
  const arr = [];
  Object.entries(config).forEach(([key, item]) => {
    if (!item || !item.length) return;
    if (Array.isArray(item) && item.length > 0) {
      arr.push(`import { ${item.join(', ')} } from '${key}'`);
    } else {
      arr.push(`import ${item} from '${key}'`);
    }
  });
  return arr.join(';\n');
}

module.exports = {
  getImportsConfig,
  getImportsCode,
};
