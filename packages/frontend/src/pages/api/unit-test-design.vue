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

      <div id="test-json-editor" style="height: 500px"></div>

      <div style="margin-top: 32px; display: flex; width: 100%; justify-content: flex-end;">
        <t-button @click="jsonConfirm">
          <ChevronRightDoubleIcon />
        </t-button>
      </div>

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

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { ChevronRightDoubleIcon } from 'tdesign-icons-vue-next'
import UnitTestUI from './unit-test/unit-test-ui.vue'
import { cmpApiInstance } from '../../services/api-server'
import { getOneUnitTest, getComponentUnitTests } from '../../../../../scripts/vitest'
import { getCombinedComponentsByCurrentName, getCmpTypeCombineMap, parseJSON, loadScript } from './util'
import prettierConfig from '../../../../../scripts/config/prettier'
import prettier from "https://tdesign.gtimg.com/js/prettier%402.8.1-standalone.mjs"
import parserBabel from "https://tdesign.gtimg.com/js/prettier%402.8.1-parser-babel.mjs"
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import 'tdesign-site-components/lib/styles/prism-theme.less'

const props = defineProps({
  map: Object,
  apiInfo: {
    type: Object,
    default: () => ({}),
  },
  visible: Boolean,
})

const unitTestUIRef = ref(null)

const tab = ref('VueNext(PC)')
const tabList = ref([
  { label: 'JSON', value: 'JSON' },
  { label: 'Vue(PC)', value: 'Vue(PC)' },
  { label: 'VueNext(PC)', value: 'VueNext(PC)' },
  { label: 'React(PC)', value: 'React(PC)' },
  { label: 'Vue(Mobile)', value: 'Vue(Mobile)' },
  { label: 'React(Mobile)', value: 'React(Mobile)' },
])
const loading = ref(false)
const componentApiData = ref([])
const testDescription = ref('')
const jsonError = ref('')
const unitTestType = ref('current')
const jsonEditor = ref(null)

const unitTestCode = computed(() => {
  return getInnerUnitTestCode()
})

const currentTestJSON = computed(() => {
  try {
    return testDescription.value ? JSON.parse(testDescription.value) : {}
  } catch(e) {
    return {}
  }
})

const testDescriptionForUI = computed(() => currentTestJSON.value)

watch(() => props.visible, (visible) => {
  if (visible) {
    getCurrentComponentData()
  } else {
    unitTestUIRef.value?.clearFormData()
  }
})

watch(() => props.apiInfo, (apiInfo) => {
  testDescription.value = apiInfo ? apiInfo.test_description : undefined
})

watch(testDescription, (val) => {
  const r = validateJSON(val)
  if (!r || !props.apiInfo || !componentApiData.value.length) return
  const index = componentApiData.value.findIndex(t => t.id === props.apiInfo.id)
  if (index < 0) return
  componentApiData.value[index].test_description = val || undefined
})

watch(testDescription, (val) => {
  nextTick(() => {
    jsonEditor.value?.set(parseJSON(val, {}))
  })
})

onMounted(() => {
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.9.2/jsoneditor.min.js').then(() => {
    initJsEditor()
  })
})

function initJsEditor() {
  const container = document.querySelector('#test-json-editor')
  jsonEditor.value = new window.JSONEditor(container, {
    mode: 'code',
    onEditable: (json, b) => {
      console.log(json, b)
      return true
    },
  })
}

function jsonConfirm() {
  const json = jsonEditor.value.get()
  testDescription.value = JSON.stringify(json)
}

function checkInFramework() {
  const framework = tab.value === 'VueNext(PC)' ? 'Vue(PC)' : tab.value
  return props.apiInfo && props.apiInfo.platform_framework_text?.includes(framework)
}

function getInnerUnitTestCode() {
  if (!props.apiInfo || !componentApiData.value.length) return
  if (tab.value === 'JSON') {
    const testJSONString = JSON.stringify(currentTestJSON.value, '', 2)
    return Prism.highlight(testJSONString, Prism.languages.json, 'json')
  }

  let codeData = ''
  try {
    const rootComponentMap = getCmpTypeCombineMap(tab.value)
    const finalComponent = rootComponentMap[props.apiInfo.component] || props.apiInfo.component
    if (unitTestType.value === 'current') {
      if (Object.keys(currentTestJSON.value).length !== 0 && checkInFramework()) {
        const testData = tab.value.indexOf('PC') !== -1 ? currentTestJSON.value.PC : currentTestJSON.value.Mobile
        const { oneUnitTests } = getOneUnitTest(tab.value, props.apiInfo.component, props.apiInfo, testData)
        codeData = oneUnitTests.join('')
      } else {
        codeData = 'console.log(\'current unit test is empty\')'
      }
    } else if (unitTestType.value === 'all') {
      codeData = getComponentUnitTests(tab.value, finalComponent, componentApiData.value, props.map)
    } else {
      return
    }
  } catch(e) {
    console.warn(e)
    const error = 'Unit test generated fail, check the core code first.'
    codeData = `console.log('${error}')`
    return Prism.highlight(codeData, Prism.languages.javascript, 'javascript')
  }

  try {
    const code = prettier.format(codeData, {
      ...prettierConfig,
      parser: "babel",
      plugins: [parserBabel],
    })
    return Prism.highlight(code, Prism.languages.javascript, 'javascript')
  } catch(e) {
    console.warn(e)
    const error = 'unit test code has syntax error. check test code please.'
    const code = `console.log('${error}')`
    return Prism.highlight(code, Prism.languages.javascript, 'javascript')
  }
}

function validateJSON(json) {
  try {
    json && JSON.parse(json)
    jsonError.value = ''
    return true
  } catch(e) {
    jsonError.value = 'Not a validate JSON'
  }
  return false
}

function onTestUIFormDataChange({ framework, formData, trigger, params }) {
  const testJSON = {}
  if (framework === 'PC') {
    testJSON.PC = updateTestDescription(formData, trigger, params)
  } else if (framework === 'Mobile') {
    testJSON.Mobile = updateTestDescription(formData, trigger, params)
  }
  testDescription.value = JSON.stringify(testJSON)
}

function updateTestDescription(formData, trigger, params) {
  console.log('ui change', formData, trigger, params)
  const tmpJSON = {}
  ;['wrapper', 'snapshot', 'trigger', 'skip', 'copyTestToWrapper', 'props'].forEach((field) => {
    if (formData[field]) {
      tmpJSON[field] = formData[field]
    }
  })
  if (formData.copyTestToWrapper?.trim()) {
    tmpJSON.copyTestToWrapper = formData.copyTestToWrapper.trim().split(',')
  }

  let listProps = undefined
  if (formData.list?.length) {
    formData.list.map((item) => {
      tmpJSON[item.category] = item[item.category]
      if (item.category === 'tnode' && typeof item.tnode !== true) {
        const { tnode } = item
        if ((!tnode.dom || !tnode.dom.length) && !tnode.trigger && !tnode.params) {
          tmpJSON.tnode = true
        }
      }
      if (trigger === 'tnode' && item.tnode?.params) {
        tmpJSON.tnode.params = parseJSON(item.tnode.params)
      }
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

  tmpJSON.props = listProps || tmpJSON.props
  return tmpJSON
}

function getCurrentComponentData() {
  if (!props.apiInfo || !props.apiInfo.component) return
  const siblingsMap = getCombinedComponentsByCurrentName()
  const component = siblingsMap[props.apiInfo.component]
    ? siblingsMap[props.apiInfo.component].join()
    : props.apiInfo.component
  loading.value = true
  cmpApiInstance({
    method: 'get',
    url: '/cmp/api',
    params: {
      component,
      page: 1,
      page_size: 300,
    },
  }).then((res) => {
    componentApiData.value = res.data.data
    unitTestUIRef.value?.updateDataByJSON()
    loading.value = false
  }, () => {
    loading.value = false
  })
}

function onTestDescriptionBlur() {
  unitTestUIRef.value?.updateDataByJSON()
}

defineExpose({
  testDescription,
  clearFormData: () => unitTestUIRef.value?.clearFormData()
})
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
  height: fit-content;
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
