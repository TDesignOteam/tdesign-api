<template>
  <div class="unit-test-design">
    <div class="unit-test-design__input">
      <h3 class="unit-test-tdesign__h3">
        {{ apiInfo?.component }}.{{ apiInfo?.field_name }}
        <template v-if="apiInfo && apiInfo.field_type_text && apiInfo.field_type_text.length">
          {{ '<' + apiInfo.field_type_text.join('/') + '>' }}
        </template>
      </h3>

      <p v-if="apiInfo?.field_enum">
        <template v-if="apiInfo.field_enum">枚举值：{{ apiInfo.field_enum }}</template>
      </p>
      <p>{{ apiInfo?.field_desc_zh  }}</p>

      <!-- <t-divider /> -->

      <UnitTestUI
        ref="unit-test-ui"
        :currentTestJSON="currentTestJSON"
        :apiInfo="apiInfo"
        @test-ui-form-data-change="onTestUIFormDataChange"
      />

      <!-- <t-divider /> -->

      <t-textarea
        v-model="testDescription"
        style="margin-top: 16px"
        @blur="onTestDescriptionBlur"
      ></t-textarea>
      <div v-if="jsonError" class="t-textarea__tips t-textarea__tips--error">
        {{ jsonError }}
      </div>
    </div>
    <t-divider layout="vertical" style="height: 100%"></t-divider>
    <div class="unit-test-design__out">
      <h3 class="unit-test-tdesign__h3">Unit Test Preview</h3>
      <p>
        <t-radio-group variant="default-filled" v-model="unitTestType">
          <t-radio-button value="current">Current API Unit Tests</t-radio-button>
          <t-radio-button value="all">Whole Component Unit Tests</t-radio-button>
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
import { CATEGORY_OPTIONS } from './unit-test/const'
import UnitTestUI from './unit-test/unit-test-ui'
import { cmpApiInstance } from '../../services/api-server'
import { getOneUnitTest, getComponentUnitTests } from '../../../../scripts/vitest'
import { getCombinedComponentsByCurrentName, getCmpTypeCombineMap, parseJSON } from './util'
import prettierConfig from '../../../../scripts/config/prettier'
import prettier from "https://unpkg.com/prettier@2.8.1/esm/standalone.mjs"
import parserBabel from "https://unpkg.com/prettier@2.8.1/esm/parser-babel.mjs"
import Prism from 'prismjs'
import 'prismjs/components/prism-json';
import 'tdesign-site-components/lib/styles/prism-theme.less'

export default {
  name: 'UnitTestDesign',

  components: { UnitTestUI },

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
        { label: 'Vue(Mobile)', value: 'Vue(Mobile)' },
        { label: 'React(Mobile)', value: 'React(Mobile)' },
      ],
      loading: false,
      componentApiData: [],
      // 测试用例 JSON 字符串
      testDescription: '',
      jsonError: '',
      unitTestType: 'current',
    }
  },

  computed: {
    unitTestCode() {
      return this.getInnerUnitTestCode()
    },
    // 测试用例 JSON，用于最终输出测试用例
    currentTestJSON() {
      try {
        return this.testDescription ? JSON.parse(this.testDescription) : {}
      } catch(e) {
        return {}
      }
    },
  },

  watch: {
    visible(visible) {
      if (visible) {
        this.getCurrentComponentData()
      } else {
        this.$refs['unit-test-ui'].clearFormData();
      }
    },
    apiInfo(apiInfo) {
      this.testDescription = apiInfo ? apiInfo.test_description : undefined
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
    checkInFramework() {
      const framework = this.tab === 'VueNext(PC)' ? 'Vue(PC)' : this.tab;
      return this.apiInfo && this.apiInfo.platform_framework_text.includes(framework);
    },

    getInnerUnitTestCode() {
      if (!this.apiInfo || !this.componentApiData.length) return
      if (this.tab === 'JSON') {
        const testJSONString = JSON.stringify(this.currentTestJSON, '', 2)
        return Prism.highlight(testJSONString, Prism.languages.json, 'json')
      }

      let codeData = ''
      try {
        const rootComponentMap = getCmpTypeCombineMap(this.tab)
        const finalComponent = rootComponentMap[this.apiInfo.component] || this.apiInfo.component
        if (this.unitTestType === 'current') {
          if (Object.keys(this.currentTestJSON).length !== 0 && this.checkInFramework()) {
            const { oneUnitTests } = getOneUnitTest(this.tab, this.apiInfo.component, this.apiInfo, this.currentTestJSON);
            codeData = oneUnitTests.join('')
          } else {
            codeData = 'console.log(\'current unit test is empty\')'
          }
        } else if (this.unitTestType === 'all') {
          codeData = getComponentUnitTests(this.tab, finalComponent, this.componentApiData, this.map)
        } else {
          return
        }
      } catch(e) {
        console.warn(e)
        const error = 'Unit test generated fail, check the core code first.'
        codeData = `console.log('${error}')`
        // this.$message.error(error)
        return Prism.highlight(codeData, Prism.languages.javascript, 'javascript')
      }

      try {
        // 格式化代码
        const code = prettier.format(codeData, {
          ...prettierConfig,
          parser: "babel",
          plugins: [parserBabel],
        })
        return Prism.highlight(code, Prism.languages.javascript, 'javascript')
      } catch(e) {
        const error = 'unit test code has syntax error. check test code please.'
        // this.$message.error(error)
        const code = `console.log('${error}')`
        return Prism.highlight(code, Prism.languages.javascript, 'javascript')
      }
    },

    validateJSON(json) {
      try {
        json && JSON.parse(json)
        this.jsonError = '';
        return true
      } catch(e) {
        this.jsonError = 'Not a validate JSON';
      }
      return false
    },

    onTestUIFormDataChange({ framework, formData, trigger, params }) {
      const testJSON = {}
      if (framework === 'PC') {
        testJSON.PC = this.updateTestDescription(formData, trigger, params)
      } else if (framework === 'Mobile') {
        testJSON.Mobile = this.updateTestDescription(formData, trigger, params)
      }
      this.testDescription = JSON.stringify(testJSON)
    },

    updateTestDescription(formData, trigger, params) {
      console.log('ui change', formData, trigger, params)
      const tmpJSON = {};
      ['wrapper', 'snapshot', 'skip', 'copyTestToWrapper', 'props'].forEach((field) => {
        if (formData[field]) {
          tmpJSON[field] = formData[field]
        }
      })
      if (formData.copyTestToWrapper?.trim()) {
        tmpJSON.copyTestToWrapper = formData.copyTestToWrapper.trim().split(',')
      }

      if (trigger === 'category' && formData.list.length) {
        const tnodeInfo = formData.list.find(t => t.category === 'tnode')
        if (tnodeInfo) {
          const { tnode } = tnodeInfo
          if ((!tnode.dom || !tnode.dom.length) && !tnode.trigger) {
            tnodeInfo.tnode = true
          }
        }
      }

      let listProps = undefined
      //  && CATEGORY_OPTIONS.find(t => t.value === trigger)
      if (formData.list?.length) {
        formData.list.map((item) => {
          tmpJSON[item.category] = item[item.category]
          if (item.className) {
            tmpJSON.className = parseJSON(item.className, item.className)
          }
          if (trigger === 'className' && item.category === 'className') {
            tmpJSON.classNameDom = item.classNameDom
          }
          if (item.attribute) {
            tmpJSON.attribute = parseJSON(item.attribute)
          }
          if (trigger === 'attribute' && item.category === 'attribute') {
            tmpJSON.attributeDom = item.attributeDom
          }
          const tmpList = ['tnode', 'className', 'attribute', 'dom']
          if (tmpList.includes(trigger) && tmpList.includes(item.category)) {
            listProps = parseJSON(item.props)
          }
          if (item.dom) {
            tmpJSON.dom = parseJSON(item.dom)
          }
        })
      }

      tmpJSON.props = listProps || tmpJSON.props;
      return tmpJSON;
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
        // 更新表单数据
        this.$refs['unit-test-ui'].updateDataByJSON()
        this.loading = false
      }, () => {
        this.loading = false
      })
    },

    onTestDescriptionBlur() {
      this.$refs['unit-test-ui'].updateDataByJSON()
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
  /* max-height: 100%; */
  height: fit-content;
}
/* .unit-test-code {
  height: 100%;
  overflow: auto;
} */

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
