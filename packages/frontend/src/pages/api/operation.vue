<template>
  <div class="t-api-tool__multi-operations">
    <t-button theme="primary" @click="onCreateApi">New API</t-button>
    <t-button theme="primary" @click="onGenerateDialogShow">Generate API Files</t-button>
    <a href="https://github.com/Tencent/tdesign/wiki/Component-API-Guide" target="_blank" class="link">
      <t-button variant="text" style="color: #99999"> API Design </t-button>
    </a>
    <t-dialog header="生成" :width="830" v-model:visible="generateFilesVisible" @confirm="onGenerateConfirm">
      <template #body>
        <form class="t-form api-edit-form" onsubmit="return false">
          <div class="t-form-item">
            <label>组件：</label>
            <div class="t-form-content">
              <t-select
                v-model="formData.component"
                placeholder="请选择组件"
                clearable
                filterable
                :tips="formData.component === 'ALL' ? tips : ''"
              >
                <t-option
                  v-for="(item, index) in componentList"
                  :key="index"
                  :label="`${item.value} ${item.label}`"
                  :value="item.value"
                ></t-option>
              </t-select>
            </div>
          </div>
          <div class="t-form-item">
            <label style="vertical-align: top">框架平台：</label>
            <div class="t-form-content platform">
              <site-checkbox v-model="formData.platform" :options="frameworkOptions"></site-checkbox>
            </div>
          </div>
          <div class="t-form-item">
            <label style="vertical-align: top">参数：</label>
            <div class="t-form-content">
              <t-checkbox v-model="formData.finalProject">输出文件到各框架仓库</t-checkbox>
              <t-tooltip :content="paramsTips[0]">
                <div class="help-icon">?</div>
              </t-tooltip>
              <t-checkbox v-model="formData.onlyDocs">仅输出 md文件</t-checkbox>
              <t-checkbox v-model="formData.useDefault" style="margin-right: 20px"
                >输出 useDefault/useVModel 文件(Vue2)</t-checkbox
              >
              <t-checkbox v-model="formData.vitest">输出单测用例</t-checkbox>
            </div>
          </div>
          <div class="t-form-item" v-if="commandLine && commandLine.length">
            <label>最终命令行：</label>
            <div class="t-form-content" style="vertical-align: top">
              <code v-for="item in commandLine" :key="item">{{ item }}<br /></code>
            </div>
          </div>
        </form>
      </template>
    </t-dialog>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { Button as TButton, Select as TSelect, Option as TOption } from 'tdesign-vue-next'
import SiteCheckbox from './checkbox.vue'
import { cmpApiInstance } from '../../services/api-server'

const props = defineProps({
  map: Object,
})

const emit = defineEmits(['create-dialog-show'])

const generateFilesVisible = ref(false)
const tips = '全量输出时限制为只能输出文档，如需输出其他文件请选择对应组件'
const formData = reactive({
  platform: [],
  component: 'ALL',
  finalProject: false,
  onlyDocs: false,
  useDefault: false,
  vitest: false,
  isUseUnitTest: false,
})
const paramsTips = [
  '包括： props.ts、type.ts、md文件 ，默认各端框架与当前项目在同一目录，路径调整请在本地修改 BASE_PATH_URL',
]

const frameworkOptions = computed(() => {
  if (!props.map.platform_framework) return []
  return [{ label: 'VueNext(PC)', value: 1000 }].concat(props.map.platform_framework)
})

const componentList = computed(() => {
  return [{ label: '全部', value: 'ALL' }]
    .concat(props.map.components)
    .filter((v) => (v && !v.type) || ['Table'].includes(v?.value))
})

const commandLine = computed(() => {
  if (!props.map || !props.map.platform_framework) return
  const component = formData.component
  const params = {
    finalProject: formData.finalProject,
    onlyDocs: formData.onlyDocs,
    useDefault: formData.useDefault,
    vitest: formData.vitest,
    isUseUnitTest: formData.isUseUnitTest,
  }
  // 组件全选的情况下，只能输出全部 API 文档
  if (component.toLocaleLowerCase() === 'all') {
    params.onlyDocs = true
  }
  const commandParams = Object.keys(params)
    .filter((key) => params[key])
    .join()
  const frameworks = frameworkOptions.value.filter((t) => formData.platform.includes(t.value))
  return frameworks.map((framework) => `npm run api:docs ${component} "${framework.label}" ${commandParams}`)
})

function onCreateApi() {
  emit('create-dialog-show')
}

function onGenerateDialogShow() {
  generateFilesVisible.value = true
}

function onGenerateConfirm() {
  cmpApiInstance({
    method: 'post',
    url: '/cmp/generate-api',
    data: {
      commandLines: commandLine.value.map((command) => command.replace('npm run api:docs', '')),
    },
  }).then(() => {
    generateFilesVisible.value = false
  })
}
</script>

<style lang="less">
.t-api-tool__multi-operations {
  display: flex;
  margin-bottom: 16px;
  .t-button {
    margin-right: 10px;
  }
  .link {
    text-decoration: none;
  }
  .link:hover {
    text-decoration: underline;
  }
}
.help-icon {
  width: 14px;
  height: 14px;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  vertical-align: text-top;
  margin-left: 2px;
  margin-right: 20px;
}
</style>
