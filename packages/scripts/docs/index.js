const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');
const { FRAMEWORK_MAP, COMPONENT_API_MD_MAP } = require('../config');
const { getApiComponentMapByFrameWork } = require('../common');
const { kebabCaseComponent } = require('../utils');

let currentFramework = '';

// 组件 Form 的 API 为 Form 和 FormItem 的组合
function combineApi(allApi, component) {
  const r = { ...allApi };
  const map = getApiComponentMapByFrameWork(COMPONENT_API_MD_MAP, currentFramework);
  Object.keys(map).forEach((cmp) => {
    if (!map[cmp]) return;
    const cmpApi = map[cmp]
      .map(item => r[item])
      .filter(v => !!v)
      .join('\n\n');
    if (cmpApi && (!component || component && cmp === component)) {
      map[cmp].forEach((item) => {
        delete r[item];
      });
      r[cmp] = cmpApi;
    }
  });
  Object.keys(r).forEach((cmp) => {
    // $ 表示插件，Ts 表示类型文件
    if (cmp[0] === '$' || cmp.substring(-2) === 'Ts' || !r[cmp]) {
      delete r[cmp];
    }
  });
  return r;
}

function getApiData(api) {
  return `
const props = \`
${api.replace(/`/g, '\\`')}\n
\`;
module.exports = {
  props,
};
`;
}

// 输出 API 到组件 markdown 文档中，从 ## API 后（小程序和 mobile-vue 此处的逻辑相同）
function outputComponentMD(file, apiData, isVscode) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    // 自动生成的 API 文档会自动替换 SIGNATURE 之后的内容
    // 如果 SIGNATURE 不存在，则会自动在文末补充
    const SIGNATURE = isVscode ? '/** 当前文件为自动生成，请勿手动调整 */' : `## API${os.EOL}`;
    let cssVariables = data.split('### CSS 变量')[1];
    if (!cssVariables) {
      cssVariables = data.split('### CSS Variables')[1];
    }
    const APIIndex = data.lastIndexOf(SIGNATURE);
    let result = APIIndex !== -1
      ? `${data.slice(0, APIIndex + 7)}${apiData}`
      : `${data}\n${SIGNATURE}\n${apiData}`;
    result = result.replace('\n:: BASE_PROPS ::\n', '');
    if (cssVariables) {
      result += `\n### CSS Variables\n\n${cssVariables.trim()}`;
    }
    fs.writeFile(file, result, 'utf8', (err) => {
      if (err) return console.error(err);
      console.log(chalk.green(`generate docs: ${file} has been created.`));
    });
  });
}

function getDocFileName(cmp, framework) {
  if (framework === 'Miniprogram') return 'README';
  return kebabCaseComponent(cmp);
}

// 根据组件获取 API 类型数据
function getDocsByComponent(baseData, framework, component) {
  const current = FRAMEWORK_MAP[framework];
  let api = current.getDocs(baseData, current, framework);
  api = combineApi(api, component);
  return api[component];
}

// 输出内容到文件 extra.isVscode, extra.language
function generateDocs(baseData, framework, extra) {
  currentFramework = framework;
  const { isVscode, globalConfigData } = extra || {};
  const current = FRAMEWORK_MAP[framework];
  const options = Object.keys(FRAMEWORK_MAP);
  if (!options.includes(framework)) {
    console.error(`framework must be follow values: ${options}`);
    return;
  }
  let api = current.getDocs(baseData, current, framework, globalConfigData, extra && extra.language);
  api = combineApi(api, extra.component);
  Object.keys(api).forEach((cmp) => {
    const folder = isVscode
      ? current.vscodePath
      : path.resolve(current.apiBasePath, cmp==='QRCode'?'qrcode':kebabCaseComponent(cmp));
    fs.mkdir(folder, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      // vscode 插件文档
      let apiData = `${isVscode ? getApiData(api[cmp]) : api[cmp]}\n`;
      if (isVscode) {
        apiData = apiData.replace(/\${/g, '\\${');
      }
      // 输出到组件文件中
      const langMap = { zh: '', en: '.en-US' };
      const language = extra && extra.language && langMap[extra.language];
      // const basePath = `${folder}/${getDocFileName(cmp, framework)}`;
      const apiDocsFilePath = `${folder}/${getDocFileName(cmp, framework)}${language || ''}.md`;
      const mdfile = isVscode
        ? path.resolve(folder, `t-${kebabCaseComponent(cmp)}.js`)
        : apiDocsFilePath;

      if (isVscode) {
        fs.writeFile(mdfile, apiData, 'utf8', (err) => {
          if (err) return console.error(err);
          console.log(chalk.green(`generate docs: ${mdfile} has been created.`));
        });
      } else {
        if (fs.existsSync(mdfile)) {
          outputComponentMD(mdfile, apiData, isVscode);
        } else {
          const text = isVscode ? '' : ':: BASE_DOC ::\n';
          fs.writeFile(mdfile, text, 'utf8', (err) => {
            if (err) return console.error(err);
            outputComponentMD(mdfile, apiData, isVscode);
          });
        }
      }
      // :: BASE_DOC ::
      // 如果旧文件 api.md 存在，就删除
      const oldApiFile = `${folder}/api.md`;
      if (fs.existsSync(oldApiFile)) {
        fs.unlink(oldApiFile, (err) => {
          if (err) {
            return console.error(err);
          }
          const msg = `remove useless docs: ${oldApiFile} has been removed. see docs in ${apiDocsFilePath}`;
          console.log(chalk.yellow(msg));
        });
      }
    });
  });
}

module.exports = {
  generateDocs,
  getDocsByComponent,
};
