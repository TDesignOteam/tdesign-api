function getImportsConfig(component, extra = {}) {
  const { hasEvent } = extra;
  const obj = {
    'Vue(PC)': {
      '@vue/test-utils': ['mount'],
      'vitest': [],
      '..': component,
    },
    'VueNext(PC)': {
      '@vue/test-utils': ['mount'],
      'vitest': [],
      '..': component,
    },
    'React(PC)': {
      'react': 'React',
      '@test/utils': ['render'],
      '..': component,
    },
  };
  if (hasEvent) {
    obj['Vue(PC)']['vitest'].push('vi');
    obj['VueNext(PC)']['vitest'].push('vi');
    obj['React(PC)']['@test/utils'].push('fireEvent', 'vi');
  }
  return obj;
}

function getImportsCode(importsConfig, framework) {
  const config = importsConfig[framework];
  const arr = [];
  Object.entries(config).forEach(([key, item]) => {
    if (!item || !item.length) return;
    if (Array.isArray(item)) {
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
