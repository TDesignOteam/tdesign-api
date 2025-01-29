const getVueApiDocs = require('../docs/vue');
const {
    BASE_PATH_URL,
    VUE_TITLE_MAP,
    TNode,
    TYPES_COMBINE_MAP,
    MOBILE_TYPES_COMBINE_MAP,
    COMPONENT_API_MD_MAP,
    MOBILE_COMPONENT_API_MD_MAP,
    MINIPROGRAM_COMPONENT_API_MD_MAP,
    MINIPROGRAM_TYPES_COMBINE_MAP,
    MOBILE_FRAMES,
} = require('./const');
const path = require('path');

/**
 * apiBasePath 表示 API 文档的输出路径
 * apiEnglishBasePath: '',
 * apiEnglishBasePath 表示 API 英文文档输出路径
 * tsBasePath 表示 API 的 TS 类型定义文件输出路径
 * propsBasePath 表示 props 文件的输出路径
 * tsBaseFileName 值为 USE_FILE_NAME 表示文件命名为 TdButtonProps.ts，USE_TYPE_NAME 表示文件命名为 type.ts，否则表示文件命名为 index.ts
 * globalPath 表示各框架全局变量文件输出路径
 * globalTplPath 表示各框架特有全局变量定义文件
 * unitBasePath 表示单元测试文件输出路径
 * getDocs 表示框架获取 API 文档的方法
 * titleMap 表示 API 文档的表头和内容字段
 * commonTypePath 用于 API 文档，全局通用的 TS 类型定义位置，不同框架路径不同，用于文档描述
 * componentPath 用于 API 文档，组件路径地址，不同的框架组件类型定义路径不同
 * commonRelativePath 用于 API 类型定义文件中。type 文件位置相对于 通用类型文件位置(common/global) 的路径
 * componentRelativiePath 用于 API 类型定义文件中。types 文件位置相对于组件文件位置的路径（某些组件的 API 类型包含另一个组件的 TS 类型）
 * helperPath 代码提示文件地址
 * volarPath volar代码提示文件地址
 * docsPath 文档地址
 * vscodePath 输出 API 文档，用于 vscode 提示插件（项目：vscode-tdesign）
 */
const FRAMEWORK_MAP = {
    'Vue(PC)': {
        iconPath: 'tdesign-icons-vue',
        apiBasePath: `${BASE_PATH_URL}/tdesign-vue/src`,
        apiEnglishBasePath: `${BASE_PATH_URL}/tdesign-vue/src`,
        usageDemoBasePath: `${BASE_PATH_URL}/tdesign-vue/src/$compName/_usage`,
        tsBasePath: `${BASE_PATH_URL}/tdesign-vue/src`,
        propsBasePath: `${BASE_PATH_URL}/tdesign-vue/src`,
        tsBaseFileName: 'USE_TYPE_NAME',
        globalPath: `${BASE_PATH_URL}/tdesign-vue/src/common.ts`,
        globalTplPath: path.resolve(__dirname, '../types/global/vue.tpl'),
        unitBasePath: '',
        commonTypePath:
            'https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts',
        componentPath:
            'https://github.com/Tencent/tdesign-vue/tree/develop/src/',
        commonRelativePath: '../common',
        componentRelativiePath: '../',
        getDocs: getVueApiDocs,
        titleMap: VUE_TITLE_MAP,
        vscodePath: `${BASE_PATH_URL}/vscode-tdesign/document/vue2`,
        helperPath: `${BASE_PATH_URL}/tdesign-vue/helper`,
        volarPath: `${BASE_PATH_URL}/tdesign-vue/global.d.ts`,
        docsPath: 'https://tdesign.tencent.com/vue/components/',
        name: 'tdesign-vue',
        TNode,
    },
    'VueNext(PC)': {
        iconPath: 'tdesign-icons-vue-next',
        apiBasePath: `${BASE_PATH_URL}/tdesign-vue-next/packages/components`,
        apiEnglishBasePath: `${BASE_PATH_URL}/tdesign-vue-next/packages/components`,
        usageDemoBasePath: `${BASE_PATH_URL}/tdesign-vue-next/packages/components/$compName/_usage`,
        tsBasePath: `${BASE_PATH_URL}/tdesign-vue-next/packages/components`,
        propsBasePath: `${BASE_PATH_URL}/tdesign-vue-next/packages/components`,
        tsBaseFileName: 'USE_TYPE_NAME',
        globalPath: `${BASE_PATH_URL}/tdesign-vue-next/packages/components/common.ts`,
        globalTplPath: path.resolve(__dirname, '../types/global/vue3.tpl'),
        unitBasePath: '',
        commonTypePath:
            'https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts',
        componentPath:
            'https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/',
        commonRelativePath: '../common',
        componentRelativiePath: '../',
        getDocs: getVueApiDocs,
        titleMap: VUE_TITLE_MAP,
        vscodePath: `${BASE_PATH_URL}/vscode-tdesign/document/vue3`,
        helperPath: `${BASE_PATH_URL}/tdesign-vue-next/helper`,
        volarPath: `${BASE_PATH_URL}/tdesign-vue-next/global.d.ts`,
        docsPath: 'https://tdesign.tencent.com/vue-next/components/',
        name: 'tdesign-vue-next',
        TNode,
    },
    'React(PC)': {
        iconPath: 'tdesign-icons-react',
        apiBasePath: `${BASE_PATH_URL}//tdesign-react/packages/components`,
        apiEnglishBasePath: '',
        usageDemoBasePath: `${BASE_PATH_URL}//tdesign-react/packages/components/$compName/_usage`,
        tsBasePath: `${BASE_PATH_URL}//tdesign-react/packages/components`,
        propsBasePath: `${BASE_PATH_URL}//tdesign-react/packages/components`,
        tsBaseFileName: 'USE_TYPE_NAME',
        globalPath: `${BASE_PATH_URL}//tdesign-react/packages/components/common.ts`,
        globalTplPath: path.resolve(__dirname, '../types/global/react.tpl'),
        unitBasePath: '',
        getDocs: getVueApiDocs,
        titleMap: VUE_TITLE_MAP,
        commonTypePath:
            'https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts',
        componentPath:
            'https://github.com/Tencent/tdesign-react/blob/develop/packages/components/',
        commonRelativePath: '../common',
        componentRelativiePath: '../',
        vscodePath: `${BASE_PATH_URL}/vscode-tdesign/document/react`,
        TNode,
    },
    'Angular(PC)': {
        apiBasePath: '',
        apiEnglishBasePath: '',
        tsBasePath: '',
        unitBasePath: '',
    },
    'Vue(Mobile)': {
        iconPath: 'tdesign-icons-vue-next',
        apiBasePath: `${BASE_PATH_URL}/tdesign-mobile-vue/src`,
        apiEnglishBasePath: '',
        tsBasePath: `${BASE_PATH_URL}/tdesign-mobile-vue/src`,
        propsBasePath: `${BASE_PATH_URL}/tdesign-mobile-vue/src`,
        // tsBaseFileName 值为 USE_FILE_NAME 表示文件命名为 TdButtonProps.ts，值为空表示文件命名为 index.ts
        tsBaseFileName: 'USE_TYPE_NAME',
        globalPath: `${BASE_PATH_URL}/tdesign-mobile-vue/src/common.ts`,
        globalTplPath: path.resolve(__dirname, '../types/global/vue3.tpl'),
        unitBasePath: '',
        commonTypePath:
            'https://github.com/Tencent/tdesign-mobile-vue/blob/develop/src/common.ts',
        componentPath:
            'https://github.com/Tencent/tdesign-mobile-vue/tree/develop/src/',
        commonRelativePath: '../common',
        componentRelativiePath: '../',
        getDocs: getVueApiDocs,
        titleMap: VUE_TITLE_MAP,
        vscodePath: `${BASE_PATH_URL}/vscode-tdesign/document/vue_mobile`,
        helperPath: `${BASE_PATH_URL}/tdesign-mobile-vue/helper`,
        volarPath: `${BASE_PATH_URL}/tdesign-mobile-vue/global.d.ts`,
        docsPath: 'https://tdesign.tencent.com/mobile-vue/components/',
        name: 'tdesign-mobile-vue',
        TNode,
    },
    'React(Mobile)': {
        iconPath: 'tdesign-icons-react',
        apiBasePath: `${BASE_PATH_URL}/tdesign-mobile-react/src`,
        apiEnglishBasePath: '',
        tsBasePath: `${BASE_PATH_URL}/tdesign-mobile-react/src`,
        propsBasePath: `${BASE_PATH_URL}/tdesign-mobile-react/src`,
        tsBaseFileName: 'USE_TYPE_NAME',
        globalPath: `${BASE_PATH_URL}/tdesign-mobile-react/src/common.ts`,
        globalTplPath: path.resolve(__dirname, '../types/global/react.tpl'),
        unitBasePath: '',
        commonTypePath:
            'https://github.com/Tencent/tdesign-mobile-react/blob/develop/src/common.ts',
        componentPath:
            'https://github.com/Tencent/tdesign-mobile-react/tree/develop/src/',
        commonRelativePath: '../common',
        componentRelativiePath: '../',
        getDocs: getVueApiDocs,
        titleMap: VUE_TITLE_MAP,
        vscodePath: `${BASE_PATH_URL}/vscode-tdesign/document/react_mobile`,
        TNode,
    },
    'Angular(Mobile)': {
        apiBasePath: '',
        apiEnglishBasePath: '',
        tsBasePath: '',
        unitBasePath: '',
    },
    Miniprogram: {
        iconPath: 'tdesign-icons-miniprogram',
        apiBasePath: `${BASE_PATH_URL}/tdesign-miniprogram/src`,
        apiEnglishBasePath: '',
        tsBasePath: `${BASE_PATH_URL}/tdesign-miniprogram/src`,
        propsBasePath: `${BASE_PATH_URL}/tdesign-miniprogram/src`,
        tsBaseFileName: 'USE_TYPE_NAME',
        globalPath: `${BASE_PATH_URL}/tdesign-miniprogram/src/common/common.ts`,
        globalTplPath: path.resolve(
            __dirname,
            '../types/global/miniprogram.tpl'
        ),
        unitBasePath: '',
        commonTypePath:
            'https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts',
        componentPath:
            'https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/',
        commonRelativePath: '../common/common',
        componentRelativiePath: '../',
        vscodePath: `${BASE_PATH_URL}/vscode-tdesign/document/miniprogram`,
        getDocs: getVueApiDocs,
        titleMap: VUE_TITLE_MAP,
    },
};

module.exports = {
    FRAMEWORK_MAP,
    COMPONENT_API_MD_MAP,
    MOBILE_COMPONENT_API_MD_MAP,
    TYPES_COMBINE_MAP,
    MOBILE_TYPES_COMBINE_MAP,
    MINIPROGRAM_COMPONENT_API_MD_MAP,
    MINIPROGRAM_TYPES_COMBINE_MAP,
    MOBILE_FRAMES,
};
