/**
 * 依赖引入配置
 * hasEvent 是否引入事件 vi
 * importedComponents 引入了哪些组件依赖
 */

// fireEvent, vi, render 等已经单独处理
const REACT_KEYWORDS = ['mockDelay', 'mockTimeout'];

function getReactImports(str) {
  return REACT_KEYWORDS.filter((keyword) => {
    const regExp = new RegExp(keyword);
    return regExp.test(str);
  });
}

function getImportsConfig(params = {}, tests) {
  const {
    hasEvent = false,
    importedComponents = [],
    importedMounts = new Set(),
    needDefaultRender = false,
  } = params;

  const str = tests.join('');
  const reactTestUtils = getReactImports(str);

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
  }
  if (needDefaultRender) {
    obj['React(PC)']['@test/utils'].push('render');
    obj['React(Mobile)']['@test/utils'].push('render');
    obj['Vue(PC)']['@vue/test-utils'].push('mount');
    obj['VueNext(PC)']['@vue/test-utils'].push('mount');
    obj['Vue(Mobile)']['@vue/test-utils'].push('mount');
  }
  if (reactTestUtils) {
    obj['React(PC)']['@test/utils'].push(...reactTestUtils);
    obj['React(Mobile)']['@test/utils'].push(...reactTestUtils);
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
