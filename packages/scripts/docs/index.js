import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import {
  FRAMEWORK_MAP,
  COMPONENT_API_MD_MAP,
  MOBILE_COMPONENT_API_MD_MAP,
  MINIPROGRAM_COMPONENT_API_MD_MAP,
  MOBILE_FRAMES,
  getChatComponentMap,
} from '../config/index.js';
import { getApiComponentMapByFrameWork, componentsMap, isTypeApi, isPlugin } from '../core/context.js';
import { kebabCaseComponent, getComponentBasePath } from '../core/utils.js';

let currentFramework = '';

// 获取当前框架下 md 文档需要合并输出的父子组件关系
function getComponentApiMdMap() {
  return getApiComponentMapByFrameWork(
    currentFramework === 'Miniprogram' || currentFramework === 'UniApp'
      ? Object.assign(
          {},
          COMPONENT_API_MD_MAP,
          MOBILE_COMPONENT_API_MD_MAP,
          MINIPROGRAM_COMPONENT_API_MD_MAP,
          getChatComponentMap(currentFramework),
        )
      : MOBILE_FRAMES.includes(currentFramework)
        ? Object.assign({}, COMPONENT_API_MD_MAP, MOBILE_COMPONENT_API_MD_MAP, getChatComponentMap(currentFramework))
        : Object.assign({}, COMPONENT_API_MD_MAP, getChatComponentMap(currentFramework)),
    currentFramework,
  );
}

// 组件 Form 的 API 为 Form 和 FormItem 的组合
function combineApi(allApi, component) {
  const r = { ...allApi };
  // 所有技术栈的 md 文档父子组件都合并输出（小程序和 UniApp 仅 type.ts 和 props.ts 独立输出）
  const map = getComponentApiMdMap();
  Object.keys(map).forEach((cmp) => {
    if (!map[cmp]) return;
    const cmpApi = map[cmp]
      .map((item) => r[item])
      .filter((v) => !!v)
      .join('\n\n');
    // component 为父组件或任意子组件时，都需要合并输出
    if (cmpApi && (!component || (component && map[cmp].includes(component)))) {
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
export {
  props,
};
`;
}

const API_DOC_HEADING = '## API';

function findApiDocStart(data) {
  const match = String(data).match(/(^|\n)## API(?:[ \t]*)(?:\r?\n|$)/);
  if (!match) return -1;
  return match.index + (match[1] === '\n' ? 1 : 0);
}

// 只覆盖 ## API 之后。插件函数式调用、{{ plugin }}、FAQ 等手写内容不读不写
function outputComponentMD(file, apiData, isVscode) {
  const data = fs.readFileSync(file, 'utf8');
  const marker = isVscode ? '/** 当前文件为自动生成，请勿手动调整 */' : API_DOC_HEADING;
  let cssVariables = data.split('### CSS 变量')[1];
  if (!cssVariables) {
    cssVariables = data.split('### CSS Variables')[1];
  }
  const APIIndex = isVscode ? data.lastIndexOf(marker) : findApiDocStart(data);
  let result =
    APIIndex !== -1
      ? `${data.slice(0, APIIndex + marker.length)}\n${apiData}`
      : `${data.replace(/\s*$/, '')}\n\n${marker}\n${apiData}`;
  result = result.replace('\n:: BASE_PROPS ::\n', '');
  if (cssVariables) {
    result += `\n### CSS Variables\n\n${cssVariables.trim()}\n`;
  }
  fs.writeFileSync(file, result);
  console.log(chalk.green(`generate docs: ${file} has been created.`));
}

function getDocFileName(cmp, framework) {
  if (['Miniprogram', 'UniApp'].includes(framework)) return 'README';
  return kebabCaseComponent(cmp);
}

// 合并输出的子组件，其独立的 markdown 文档需要删除，避免与父组件文档重复
function removeChildComponentDocs(api, framework, current, isVscode) {
  if (isVscode) return;
  const map = getComponentApiMdMap();
  Object.keys(map).forEach((parentCmp) => {
    if (!map[parentCmp] || !api[parentCmp]) return;
    map[parentCmp].forEach((childCmp) => {
      if (childCmp === parentCmp) return;
      // 插件 / TS 没有独立文档。`$Dialog` kebab 后是 dialog.md，会误删父组件文档开头
      if (isPlugin(childCmp) || isTypeApi(childCmp) || childCmp.startsWith('$')) return;
      const parentFolder = path.resolve(
        getComponentBasePath(parentCmp, current.apiBasePath, framework),
        kebabCaseComponent(parentCmp),
      );
      const childFolder = path.resolve(
        getComponentBasePath(childCmp, current.apiBasePath, framework),
        kebabCaseComponent(childCmp),
      );
      [`${getDocFileName(childCmp, framework)}.md`, `${getDocFileName(childCmp, framework)}.en-US.md`].forEach(
        (fileName) => {
          const file = path.resolve(childFolder, fileName);
          const parentFile = path.resolve(parentFolder, fileName.replace(getDocFileName(childCmp, framework), getDocFileName(parentCmp, framework)));
          if (path.resolve(file) === path.resolve(parentFile)) return;
          if (fs.existsSync(file)) {
            fs.unlink(file, (err) => {
              if (err) return console.error(err);
              console.log(chalk.yellow(`remove useless docs: ${file} has been removed.`));
            });
          }
        },
      );
    });
  });
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
  removeChildComponentDocs(api, framework, current, isVscode);
  Object.keys(api).forEach((cmp) => {
    // 未注册组件、未合并的独立 TS 类型不输出文档目录
    if (!componentsMap[cmp] || isTypeApi(cmp)) return;
    const folder = isVscode
      ? current.vscodePath
      : path.resolve(getComponentBasePath(cmp, current.apiBasePath, framework), kebabCaseComponent(cmp));
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
      const mdfile = isVscode ? path.resolve(folder, `t-${kebabCaseComponent(cmp)}.js`) : apiDocsFilePath;

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

export { generateDocs, getDocsByComponent };
