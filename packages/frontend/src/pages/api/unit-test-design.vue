<template>
  <div class="unit-test-design">
    <div class="unit-test-design__input">
      <h3 class="unit-test-tdesign__h3">{{ apiInfo?.component }}.{{ apiInfo?.field_name }}</h3>
      <p v-if="apiInfo?.field_type_text">
        数据类型：{{ apiInfo.field_type_text.join('/') }}
        <template v-if="apiInfo.field_enum">可选值：{{ apiInfo.field_enum  }}</template>
      </p>
      <p>{{ apiInfo?.field_desc_zh  }}</p>
      <t-textarea
        v-model="testDescription"
        style="height: 300px"
        :tips="jsonError"
        :status="jsonError ? 'error' : undefined"
      ></t-textarea>
    </div>
    <t-divider layout="vertical" style="height: 100%"></t-divider>
    <div class="unit-test-design__out">
      <h3 class="unit-test-tdesign__h3">测试用例预览</h3>
      <p>
        <t-radio-group variant="default-filled" v-model="unitTestType">
          <t-radio-button value="current">显示当前测试用例片段</t-radio-button>
          <t-radio-button value="all">显示整个组件测试用例</t-radio-button>
        </t-radio-group>
      </p>
      <t-tabs v-model="tab" :list="tabList" style="margin-top: -16px; width: 100%" />
      <div class="unit-test-code">
        <pre><code class="language-javascript" v-html="unitTestCode"></code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import { cmpApiInstance } from '../../services/api-server'
import { getComponentUnitTests } from '../../../../scripts/vitest'
import { getCombinedComponentsByCurrentName, getCmpTypeCombineMap } from './util'
import prettierConfig from '../../../../scripts/config/prettier'
import prettier from "https://unpkg.com/prettier@2.8.1/esm/standalone.mjs"
import parserBabel from "https://unpkg.com/prettier@2.8.1/esm/parser-babel.mjs"
import Prism from 'prismjs'
import 'prismjs/components/prism-json';
import 'tdesign-site-components/lib/styles/prism-theme.less'

export default {
  name: 'UnitTestDesign',

  props: {
    map: Object,
    apiInfo: {
      type: Object,
      default: () => ({}),
    },
    visible: Boolean,
  },

  data() {
    return {
      tab: 'VueNext(PC)',
      tabList: [
        { label: 'JSON', value: 'JSON' },
        { label: 'Vue(PC)', value: 'Vue(PC)' },
        { label: 'VueNext(PC)', value: 'VueNext(PC)' },
        { label: 'React(PC)', value: 'React(PC)' },
        // { label: 'Vue(Mobile)', value: 'Vue(Mobile)' },
        // { label: 'React(Mobile)', value: 'React(Mobile)' },
      ],
      loading: false,
      componentApiData: [],
      testDescription: '',
      jsonError: '',
      unitTestType: 'all',
    }
  },

  computed: {
    unitTestCode() {
      if (!this.apiInfo || !this.componentApiData.length) return
      if (this.tab === 'JSON') {
        if (!this.testDescription) return;
        const testJSON = JSON.stringify(JSON.parse(this.testDescription), '', 2);
        return Prism.highlight(testJSON, Prism.languages.json, 'json')
      }
      if (this.unitTestType === 'current') {
        return Prism.highlight(`console.log('开发中')`, Prism.languages.javascript, 'javascript')
      } else {
        const rootComponentMap = getCmpTypeCombineMap(this.tab)
        const finalComponent = rootComponentMap[this.apiInfo.component] || this.apiInfo.component
        const codeData = getComponentUnitTests(this.tab, finalComponent, this.componentApiData, this.map)
        // 格式化代码
        const code = prettier.format(codeData, {
          ...prettierConfig,
          parser: "babel",
          plugins: [parserBabel],
        })
        return Prism.highlight(code, Prism.languages.javascript, 'javascript')
      }
    },
  },

  watch: {
    visible(visible) {
      if (visible) {
        this.getCurrentComponentData()
      }
    },
    apiInfo(apiInfo) {
      this.testDescription = apiInfo.test_description
    },
    testDescription(val) {
      const r = this.validateJSON(val)
      if (!r || !this.apiInfo || !this.componentApiData.length) return
      const index = this.componentApiData.findIndex(t => t.id === this.apiInfo.id)
      if (index < 0) return
      this.$set(this.componentApiData[index], 'test_description', val || undefined)
    },
  },

  methods: {
    validateJSON(json) {
      try {
        json && JSON.parse(json)
        this.jsonError = '';
        return true
      } catch(e) {
        this.jsonError = 'JSON is not valid';
      }
      return false
    },

    // 获取当前组件全部信息
    getCurrentComponentData() {
      // 如果不存在根组件，则直接返回
      if (!this.apiInfo || !this.apiInfo.component) return
      const siblingsMap = getCombinedComponentsByCurrentName()
      const component = siblingsMap[this.apiInfo.component]
        ? siblingsMap[this.apiInfo.component].join()
        : this.apiInfo.component
      this.loading = true
      cmpApiInstance({
        method: 'get',
        url: '/cmp/api',
        params: {
          component,
          page: 1,
          // 单个组件 API 数量暂时不会超过 300 个
          page_size: 300,
        },
      }).then((res) => {
        this.componentApiData = res.data.data
        this.loading = false
      }, () => {
        this.loading = false
      })
    },
  }
};
</script>

<style>
.unit-test-design {
  display: flex;
  height: 100%;
}
.unit-test-design__input {
  width: 50%;
}
.unit-test-design__out {
  width: 50%;
  max-height: 100%;
}
.unit-test-code {
  height: 100%;
  overflow: auto;
}

.unit-test-design .t-textarea textarea,
.unit-test-design .t-textarea__wrap .t-textarea {
  height: 100%;
  min-height: 100%;
}

.unit-test-code pre {
  margin: 0px;
  padding: 20px 24px;
  max-height: 560px;
  box-sizing: border-box;
  overflow: auto;
  background: var(--bg-color-code);
  color: var(--text-primary);
  border-top: 1px solid var(--component-border);
}

.unit-test-tdesign__h3 {
  margin-top: 0;
}
</style>
