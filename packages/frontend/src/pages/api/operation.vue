<template>
  <div class="t-api-tool__multi-operations">
    <t-button theme="primary" @click.native="onCreateApi">New API</t-button>
    <t-button theme="primary" @click.native="onGenerateDialogShow">Generate API Files</t-button>
    <a href="https://github.com/Tencent/tdesign/wiki/Component-API-Guide" target="_blank" class="link">
      <t-button variant="text" style="color: #99999;">
        API Design
      </t-button>
    </a>
    <t-dialog
      header="生成"
      width="830"
      :visible.sync="generateFilesVisible"
      @confirm="onGenerateConfirm"
    >
      <div slot="body">
        <!-- <import ref="api-form" :map="map" :info="apiInfo"></import> -->
        <form class="t-form api-edit-form" onsubmit="return false">
          <div class="t-form-item">
            <label>组件：</label>
            <div class="t-form-content">
              <t-select
                v-model="formData.component"
                placeholder="请选择组件"
                clearable
                filterable
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
            <label style='vertical-align: top;'>框架平台：</label>
            <div class="t-form-content platform">
              <site-checkbox v-model="formData.platform" :options="frameworkOptions" ></site-checkbox>
            </div>
          </div>
          <div class="t-form-item">
            <label style='vertical-align: top;'>参数：</label>
            <div class="t-form-content">
              <t-checkbox v-model="formData.finalProject">输出文件到各框架仓库</t-checkbox>&nbsp;&nbsp;
              <t-checkbox v-model="formData.onlyDocs">仅输出 API 文档</t-checkbox>&nbsp;&nbsp;
              <t-checkbox v-model="formData.useDefault">输出 useDefault/useVModel 文件(Vue2)</t-checkbox>&nbsp;&nbsp;
              <t-checkbox v-model="formData.vitest">输出单测用例</t-checkbox>
            </div>
          </div>
          <!-- 暂时没有用上，需要的时候再恢复 -->
          <!-- <div class="t-form-item">
            <label>Live demo：</label>
            <div class="t-form-content">
              <t-checkbox v-model="checkedAll">全部</t-checkbox>
            </div>
          </div> -->
          <div class="t-form-item" v-if="commandLine && commandLine.length">
            <label>最终命令行：</label>
            <div class="t-form-content" style="vertical-align: top;">
              <code v-for="item in commandLine" :key="item">{{ item }}<br/></code>
            </div>
          </div>
        </form>
      </div>
    </t-dialog>
  </div>
</template>

<script>
import {
  Button as TButton,
  Select as TSelect,
  Option as TOption
} from 'tdesign-vue'
import SiteCheckbox from './checkbox.vue'
import { cmpApiInstance } from '../../services/api-server'

export default {
  name: 'ApiToolOperation',

  components: {
    TButton,
    TSelect,
    TOption,
    SiteCheckbox
  },

  props: {
    map: Object
  },

  data () {
    return {
      codeType: '',
      generateFilesVisible: false,
      checkedAll: false,
      formData: {
        platform: [],
        component: '',
        finalProject: false,
      }
    }
  },

  computed: {
    frameworkOptions () {
      if (!this.map.platform_framework) return []
      return [{ label: 'VueNext(PC)', value: 1000 }].concat(this.map.platform_framework)
    },
    componentList () {
      return [{ label: '全部', value: 'ALL' }].concat(this.map.components)
        .filter(v => (v && !v.type) || ['Table'].includes(v?.value))
    },
    commandLine () {
      if (!this.map || !this.map.platform_framework) return
      const component = this.formData.component
      const params = {
        finalProject: this.formData.finalProject,
        onlyDocs: this.formData.onlyDocs,
        useDefault: this.formData.useDefault,
        vitest: this.formData.vitest,
        isUseUnitTest: this.formData.isUseUnitTest
      }
      // 组件全选的情况下，只能输出全部 API 文档
      if (component.toLocaleLowerCase() === 'all') {
        params.onlyDocs = true
      }
      const commandParams = Object.keys(params).filter(key => params[key]).join()
      const frameworks = this.frameworkOptions.filter(t => this.formData.platform.includes(t.value))
      return frameworks.map(framework => `npm run api:docs ${component} '${framework.label}' ${commandParams}`)
    }
  },

  methods: {
    onCreateApi () {
      this.$emit('create-dialog-show')
    },
    onGenerateDialogShow () {
      this.generateFilesVisible = true
    },
    onGenerateConfirm () {
      cmpApiInstance({
        method: 'post',
        url: '/cmp/generate-api',
        data: {
          commandLines: this.commandLine.map(command => command.replace('npm run api:docs', '').replaceAll('\'', ''))
        }
      }).then(() => {
        this.generateFilesVisible = false
      })
    }
  }
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
</style>
