<template>
  <div class="tdesign-page-doc">
    <div class="page-api">
      <h2 class="page-api__title">API & Tests Design</h2>

      <div class="page-api__search">
        <div class="query-item">
          <t-select v-model="query.platform" placeholder="平台框架" clearable filterable @change="onPlatformChange">
            <t-option
              v-for="(item, index) in map.platform_framework"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></t-option>
          </t-select>
        </div>
        <div class="query-item">
          <t-select v-model="query.component" placeholder="组件名称" clearable filterable @change="onComponentChange">
            <t-option
              v-for="(item, index) in map.components"
              :key="index"
              :label="`${item.value} ${item.label} (${TYPE_MAP[item.type] || '组件'})`"
              :value="item.value"
            ></t-option>
          </t-select>
        </div>
        <div class="query-item">
          <t-select v-model="query.fieldCategory" placeholder="API 分类" clearable filterable @change="onComponentChange">
            <t-option
              v-for="(item, index) in map.field_category"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></t-option>
          </t-select>
        </div>
        <div class="query-item">
          <t-input
            v-model="query.fieldName"
            placeholder="输入 API 名称查询，如：theme"
            @enter="onEnter"
          />
        </div>
      </div>

      <api-operation :map="map" @create-dialog-show="onCreateDialogShow" v-if="!preview"></api-operation>

      <div class="t-demo-api-list">
        <t-loading :loading="loading">
          <api-list
            :list="list"
            :platformOptions="platformOptions"
            :preview="preview"
            @delete-api-success="onDeleteSuccess"
            @click-edit-btn="onEditClick"
            @click-test-edit-btn="onTestEditClick"
            @code-preview="onCodePreview"
          ></api-list>

          <t-pagination
            :total="total"
            :page-size="pageSize"
            :current="page"
            show-sizer
            @change="onPageChange"
          />
        </t-loading>
      </div>
      <t-drawer
        :header="mode === 'create' ? '新增' : '编辑'"
        width="830"
        :visible.sync="createApiVisible"
        size="60%"
        class="api-edit"
        @confirm="onApiConfirm"
      >
        <div slot="body">
          <import ref="api-form" :map="map" :info="apiInfo" :mode="mode"></import>
        </div>
      </t-drawer>

      <t-dialog
        width="830"
        top="calc(100% - 730px)"
        :visible.sync="codePreviewVisible"
        :cancelBtn="null"
        confirmBtn="关闭"
      >
        <div slot="header">
          <t-tabs v-model="previewType">
            <t-tab-panel v-for="(item, index) in previewTabs" :key="index" :value="item.label" :label="item.label" />
          </t-tabs>
        </div>
        <codemirror slot="body" :value="code" :options="cmOptions"/>
      </t-dialog>

      <t-drawer
        header="测试用例设计"
        :visible.sync="unitTestVisible"
        size="85%"
        @confirm="onUnitTestEditConfirm"
        @cancel="onUnitTestEditCancel"
      >
        <unit-test-design ref="unit-test" :map="map" :apiInfo="apiInfo" :visible="unitTestVisible" />
      </t-drawer>
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'
import ApiList from './list.vue'
import ApiOperation from './operation'
import Import from './import'
import UnitTestDesign from './unit-test-design'
import { cmpApiInstance } from '../../services/api-server'
import {
  Select as TSelect,
  Option as TOption,
  Input as TInput,
  Pagination as TPagination,
  Dialog as TDialog
} from 'tdesign-vue'

const TYPE_MAP = {
  plugin: '插件',
  TS: '接口定义'
}

// 代码预览选项卡
const CODE_PREVIEW_TABS = [
  { label: 'Types' },
  { label: 'Props', include: ['Vue(PC)', 'Vue(Mobile)', 'Miniprogram'] },
  { label: 'Docs' }
]

export default {
  name: 'APIDesign',

  components: {
    codemirror,
    ApiList,
    ApiOperation,
    Import,
    TSelect,
    TOption,
    TInput,
    TPagination,
    TDialog,
    UnitTestDesign,
  },

  props: {
    preview: Boolean
  },

  data () {
    return {
      TYPE_MAP,
      loading: false,
      dataBase: null,
      createApiVisible: false,
      unitTestVisible: false,
      list: [],
      map: {},
      platformOptions: [],
      query: {
        platform: '',
        component: '',
        fieldName: '',
        fieldCategory: ''
      },
      apiInfo: null,
      mode: 'create',
      total: 0,
      page: 1,
      pageSize: 20,
      codePreviewVisible: false,
      codeData: {
        framework: '',
        data: {}
      },
      code: '',
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        viewportMargin: 20
      },
      previewType: 'Types'
    }
  },

  computed: {
    previewTabs () {
      return CODE_PREVIEW_TABS.filter((item) => {
        if (item.include) {
          return item.include.includes(this.codeData.framework)
        }
        return true
      })
    }
  },

  created () {
    this.getMap()
    this.getApiList()
  },

  methods: {
    onPageChange (pageInfo) {
      this.page = pageInfo.current
      this.pageSize = pageInfo.pageSize
      this.getApiList()
    },
    onEnter () {
      this.search()
    },
    onComponentChange () {
      this.search()
    },
    onPlatformChange () {
      this.search()
    },
    search () {
      this.page = 1
      this.getApiList()
    },
    getMap () {
      cmpApiInstance({
        method: 'get',
        url: '/cmp/map'
      }).then((res) => {
        const map = res.data.data
        this.platformOptions = map.platform_framework
        this.map = map
      })
    },
    getApiList () {
      const query = Object.assign({}, this.query)
      const params = {
        platform_framework: query.platform,
        component: query.component,
        field_category: query.fieldCategory,
        field_name: query.fieldName,
        page: this.page,
        page_size: this.pageSize
      }
      this.loading = true
      cmpApiInstance({
        method: 'get',
        url: '/cmp/api',
        params
      }).then((res) => {
        this.list = res.data.data
        this.total = res.data.total
        this.loading = false
      }, () => {
        this.loading = false
      })
    },
    onDeleteSuccess () {
      this.getApiList()
    },
    showDialog () {
      this.createApiVisible = true
    },
    onEditClick (data) {
      this.apiInfo = data.row
      this.mode = 'edit'
      this.showDialog()
    },

    onTestEditClick(data) {
      this.apiInfo = data.row
      this.unitTestVisible = true
    },

    onUnitTestEditCancel() {
      this.apiInfo = null
    },
    
    onCreateDialogShow () {
      this.apiInfo = null
      this.mode = 'create'
      this.showDialog()
    },
    onApiConfirm () {
      const data = this.$refs['api-form'].formData
      if (data.version) {
        try {
          JSON.parse(data.version);
        } catch(e) {
          this.$message.error('版本号格式必须为合法 JSON');
          return;
        }
      }
      const params = {
        id: this.apiInfo ? this.apiInfo.id : undefined,
        platform_framework: data.platform,
        component: data.component,
        field_category: data.apiCategory,
        field_name: data.name,
        field_type: data.fieldType,
        custom_field_type: data.customFieldType,
        field_default_value: data.defaultValue,
        field_enum: data.fieldEnums,
        field_desc_zh: data.descZh,
        field_desc_en: data.descEn,
        test_description: data.testDescription,
        version: data.version,
        support_default_value: Number(data.supportDefaultValue),
        field_required: data.required,
        deprecated: Number(data.deprecated),
        html_attribute: data.htmlAttribute,
        event_input: data.eventInput,
        event_output: data.eventOutput,
        syntactic_sugar: data.syntacticSugar,
        trigger_elements: data.triggerElements
      }
      // 保存成功后关闭弹窗
      cmpApiInstance({
        method: this.mode === 'create' ? 'post' : 'put',
        url: '/cmp/api',
        data: params
      }).then(() => {
        this.getApiList()
        this.createApiVisible = false
      })
    },

    onUnitTestEditConfirm() {
      const testDescription = this.$refs['unit-test'].testDescription
      try {
        JSON.parse(testDescription)
      } catch(e) {
        this.$message.error('测试用例不是合法 JSON');
        return;
      }
      // 保存成功后关闭弹窗
      cmpApiInstance({
        method: 'put',
        url: '/cmp/api',
        data: {
          id: this.apiInfo ? this.apiInfo.id : undefined,
          test_description: testDescription
        },
      }).then(() => {
        this.getApiList()
        this.unitTestVisible = false
      })
    },

    onCodePreview (data, framework) {
      this.codeData = { data, framework }
      this.codePreviewVisible = true
      this.code = JSON.stringify(data, undefined, 2)
    }
  }
}
</script>

<style lang="less">
.page-api {
  padding: 40px;
}
div.t-popup {
  z-index: 5500;
}
.page-api__title {
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 40px;
}
.page-api__search {
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 16px;
  .query-item {
    width: 260px;
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 16px;
  }
}
.t-demo-api-list {
  background-color: #ffffff;
  padding-bottom: 32px;
  .t-pagination {
    margin-right: 16px;
  }
}

.CodeMirror {
  height: 550px;
}

.api-edit .t-checkbox-group {
  gap: 0;
}
</style>
