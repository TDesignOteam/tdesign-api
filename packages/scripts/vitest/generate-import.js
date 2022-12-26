function getImportsConfig(component) {
  return {
    'Vue(PC)': {
      '@vue/test-utils': ['mount'],
      'vitest': ['vi'],
      '..': component,
    },
    'VueNext(PC)': {
      '@vue/test-utils': ['mount'],
      'vitest': ['vi'],
      '..': component,
    },
    'React(PC)': {
      'react': 'React',
      '@test/utils': ['render', 'fireEvent', 'vi'],
      '..': component,
    },
  };
}

function getImportsCode(importsConfig, framework) {
  const config = importsConfig[framework];
  const arr = [];
  Object.entries(config).forEach(([key, item]) => {
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
