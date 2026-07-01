import chalk from 'chalk';
import prettier from 'prettier';
import prettierConfig from './prettier.js';

/**
 * 对生成产物统一应用 Prettier 规则；格式化失败时回退为原始内容，避免中断生成流程。
 * @param {string} code 待格式化的代码
 * @param {import('prettier').Options} [options] 可选覆盖项，如 parser
 */
async function formatGeneratedCode(code, options = {}) {
  try {
    return await prettier.format(code, { ...prettierConfig, ...options });
  } catch (e) {
    console.log(chalk.red('格式化失败，请检查生成的文件是否存在语法错误\n'));
    console.warn(e);
    return code;
  }
}

export { formatGeneratedCode };
