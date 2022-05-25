<template>
  <div class="t-api-tool__multi-operations">
    <t-button theme="primary" @click.native="onCreateApi">新增 API</t-button>
    <t-button theme="base" @click.native="onGenerateDialogShow">生成文件</t-button>
    <a href="https://github.com/Tencent/tdesign/wiki/Component-API-Guide" target="_blank" class="link">
      <t-button variant="text" style="color: #99999;">
        组件 API 设计规范
      </t-button>
    </a>
    <t-dialog
      header="生成"
      width="830"
      :visible.sync="generateFilesVisible"
      @confirm="onGenerateConfirm"
    >
      <div slot="body">
        <import ref="api-form" :map="map" :info="apiInfo"></import>
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
                  v-for="(item, index) in map.components"
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
              <site-checkbox v-model="formData.platform" :options="map.platform_framework" ></site-checkbox>
            </div>
          </div>
          <div class="t-form-item">
            <label>Live demo：</label>
            <div class="t-form-content">
              <t-checkbox
                :checked="checkedAll"
                @change="onCheckedAllChange"
              >全部</t-checkbox>
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
      formData: {
        platform: [],
        component: ''
      }
    }
  },

  computed: {},

  watch: {},

  methods: {
    onCreateApi () {
      this.$emit('create-dialog-show')
    },
    onGenerateDialogShow () {
      this.generateFilesVisible = true
    },
    onGenerateConfirm () {
      const frameworkNames = this.map.platform_framework
        .filter(item => this.formData.platform.includes(item.value))
        .map(item => item.label)
      const params = {
        component: this.formData.component ? this.formData.component : 'All',
        platforms: frameworkNames
      }
      cmpApiInstance({
        method: 'post',
        url: '/cmp/generate-api',
        data: params
      }).then((res) => {
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
