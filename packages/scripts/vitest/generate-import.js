/**
 * 依赖引入配置
 * hasEvent 是否引入事件 vi
 * importedComponents 引入了哪些组件依赖
 */
const { SIMULATE_FUNCTIONS, GET_VAR_FUNCTIONS } = require('./core');

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
    // simulateEvent...
    importedTestUtils = [],
  } = params;

  const str = tests.join('');
  const reactTestUtils = getReactImports(str);

  const obj = {
    'Vue(PC)': {
      '@vue/test-utils': [],
      'vitest': [],
      '..': [],
      './mount': [],
      '@test/utils': [],
    },
    'VueNext(PC)': {
      '@vue/test-utils': [],
      'vitest': [],
      '..': [],
      './mount': [],
      '@test/utils': [],
    },
    'Vue(Mobile)': {
      '@vue/test-utils': [],
      'vitest': [],
      '..': [],
      './mount': [],
      '@test/utils': [],
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
      obj[framework]['..'].push(...[...new Set(importedComponents)]);
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
  if (importedTestUtils && importedTestUtils.length) {
    const list = [...new Set(importedTestUtils)];
    Object.keys(obj).forEach(framework => {
      obj[framework]['@test/utils'] = obj[framework]['@test/utils'].concat(list);
    });
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

function getSimulateEvents(trigger) {
  const arr = [];
  SIMULATE_FUNCTIONS.forEach((simulateEvent) => {
    if (trigger && trigger.includes(simulateEvent)) {
      arr.push(simulateEvent);
    }
  });
  return arr;
}

function getMoreEventImports(framework, event, wrapper, trigger) {
  const importedTestUtils = [];
  const importedMounts = [];
  if (!Array.isArray(event)) return [];
  event.forEach((oneEventExpect) => {
    if (Array.isArray(oneEventExpect.expect)) {
      oneEventExpect.expect.forEach((oneExpect) => {
        if (typeof oneExpect === 'object'
          && oneExpect.trigger
        ) {
          // 添加模拟事件
          const list = getSimulateEvents(oneExpect.trigger || trigger);
          if (list && list.length) {
            importedTestUtils.push(...list);
          }
          // 添加 Vue2 的 createElementById
          if (framework === 'Vue(PC)' && !wrapper && oneExpect.trigger.includes('focus')) {
            importedTestUtils.push('createElementById');
          }
        }
      });

      if (oneEventExpect.wrapper) {
        importedMounts.push(oneEventExpect.wrapper);
      }
    }
  })
  return { importedTestUtils, importedMounts };
}

// 获取函数变量
function getVariableImports(test) {
  const { variables, tnode } = test;
  const allVariables = variables || [];
  if (Array.isArray(tnode)) {
    tnode.forEach((oneTNode) => {
      if (oneTNode.variables) {
        allVariables.push(...oneTNode.variables);
      }
    });
  }
  const imports = [];
  GET_VAR_FUNCTIONS.forEach((variable) => {
    if (allVariables.find(t => t.includes(variable))) {
      imports.push(variable);
    }
  });
  return imports;
}

module.exports = {
  getImportsConfig,
  getImportsCode,
  getMoreEventImports,
  getSimulateEvents,
  getVariableImports,
};
