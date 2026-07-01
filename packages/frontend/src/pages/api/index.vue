<template>
  <div class="tdesign-page-doc">
    <div class="page-api">
      <h2 class="page-api__title">TDesign Components Standards</h2>

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
          <t-select
            v-model="query.fieldCategory"
            placeholder="API 分类"
            clearable
            filterable
            @change="onComponentChange"
          >
            <t-option
              v-for="(item, index) in map.field_category"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></t-option>
          </t-select>
        </div>
        <div class="query-item">
          <t-input v-model="query.fieldName" placeholder="输入 API 名称查询，如：theme" @enter="onEnter" />
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

          <t-pagination :total="total" :page-size="pageSize" :current="page" show-sizer @change="onPageChange" />
        </t-loading>
      </div>
      <t-drawer
        :header="mode === 'create' ? '新增' : '编辑'"
        width="830"
        v-model:visible="createApiVisible"
        size="60%"
        class="api-edit"
        closeOnConfirm
        @confirm="onApiConfirm"
      >
        <template #body>
          <import ref="apiFormRef" :map="map" :info="apiInfo" :mode="mode"></import>
        </template>
      </t-drawer>

      <t-dialog
        width="830"
        top="calc(100% - 730px)"
        v-model:visible="codePreviewVisible"
        :cancelBtn="null"
        confirmBtn="关闭"
      >
        <template #header>
          <t-tabs v-model="previewType">
            <t-tab-panel v-for="(item, index) in previewTabs" :key="index" :value="item.label" :label="item.label" />
          </t-tabs>
        </template>
        <template #body>
          <Codemirror :value="code" :options="cmOptions" />
        </template>
      </t-dialog>

      <t-drawer
        header="测试用例设计"
        v-model:visible="unitTestVisible"
        size="85%"
        closeOnConfirm
        @confirm="onUnitTestEditConfirm"
        @cancel="onUnitTestEditCancel"
      >
        <unit-test-design ref="unitTestRef" :map="map" :apiInfo="apiInfo" :visible="unitTestVisible" />
      </t-drawer>
    </div>
  </div>
</template>

<script setup>
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import {
  Select as TSelect,
  Option as TOption,
  Input as TInput,
  Pagination as TPagination,
  Dialog as TDialog,
  Loading as TLoading,
  Drawer as TDrawer,
  TabPanel as TTabPanel,
  Tabs as TTabs,
  MessagePlugin,
} from 'tdesign-vue-next';
import { ref, reactive, computed, onMounted } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { cmpApiInstance } from '../../services/api-server';
import Import from './import.vue';
import ApiList from './list.vue';
import ApiOperation from './operation.vue';
import UnitTestDesign from './unit-test-design.vue';

const TYPE_MAP = {
  plugin: '插件',
  TS: '接口定义',
};

const CODE_PREVIEW_TABS = [
  { label: 'Types' },
  { label: 'Props', include: ['Vue(PC)', 'Vue(Mobile)', 'Miniprogram'] },
  { label: 'Docs' },
];

const props = defineProps({
  preview: Boolean,
});

const apiFormRef = ref(null);
const unitTestRef = ref(null);

const loading = ref(false);
const dataBase = ref(null);
const createApiVisible = ref(false);
const unitTestVisible = ref(false);
const list = ref([]);
const map = ref({});
const platformOptions = ref([]);
const query = reactive({
  platform: '',
  component: '',
  fieldName: '',
  fieldCategory: '',
});
const apiInfo = ref(null);
const mode = ref('create');
const total = ref(0);
const page = ref(1);

const pageSize = ref(20);
const codePreviewVisible = ref(false);
const codeData = reactive({
  framework: '',
  data: {},
});
const code = ref('');
const cmOptions = {
  tabSize: 4,
  extensions: [javascript({ jsx: true, typescript: true }), oneDark],
  lineNumbers: true,
  line: true,
  viewportMargin: 20,
};
const previewType = ref('Types');

const previewTabs = computed(() => {
  return CODE_PREVIEW_TABS.filter((item) => {
    if (item.include) {
      return item.include.includes(codeData.framework);
    }
    return true;
  });
});

onMounted(() => {
  getMap();
  getApiList();
});

function onPageChange(pageInfo) {
  page.value = pageInfo.current;
  pageSize.value = pageInfo.pageSize;
  getApiList();
}

function onEnter() {
  search();
}

function onComponentChange() {
  search();
}

function onPlatformChange() {
  search();
}

function search() {
  page.value = 1;
  getApiList();
}

function getMap() {
  cmpApiInstance({
    method: 'get',
    url: '/cmp/map',
  }).then((res) => {
    const mapData = res.data.data;
    platformOptions.value = mapData.platform_framework;
    map.value = mapData;
  });
}

function getApiList() {
  const queryParams = Object.assign({}, query);
  const params = {
    platform_framework: queryParams.platform,
    component: queryParams.component,
    field_category: queryParams.fieldCategory,
    field_name: queryParams.fieldName,
    page: page.value,
    page_size: pageSize.value,
  };
  loading.value = true;
  cmpApiInstance({
    method: 'get',
    url: '/cmp/api',
    params,
  }).then(
    (res) => {
      list.value = res.data.data;
      total.value = res.data.total;
      loading.value = false;
    },
    () => {
      loading.value = false;
    },
  );
}

function onDeleteSuccess() {
  getApiList();
}

function showDialog() {
  createApiVisible.value = true;
}

function onEditClick(data) {
  apiInfo.value = data.row;
  mode.value = 'edit';
  showDialog();
}

function onTestEditClick(data) {
  apiInfo.value = data.row;
  unitTestVisible.value = true;
}

function onUnitTestEditCancel() {
  apiInfo.value = null;
}

function onCreateDialogShow() {
  apiInfo.value = null;
  mode.value = 'create';
  showDialog();
}

function onApiConfirm() {
  const data = apiFormRef.value?.formData;
  if (!data) return;

  if (data.version) {
    try {
      JSON.parse(data.version);
    } catch (e) {
      MessagePlugin.error('版本号格式必须为合法 JSON');
      return;
    }
  }

  const params = {
    id: apiInfo.value ? apiInfo.value.id : undefined,
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
    trigger_elements: data.triggerElements,
  };

  cmpApiInstance({
    method: mode.value === 'create' ? 'post' : 'put',
    url: '/cmp/api',
    data: params,
  }).then(() => {
    getApiList();
    createApiVisible.value = false;
  });
}

function onUnitTestEditConfirm() {
  const testDescription = unitTestRef.value?.testDescription;
  try {
    testDescription && JSON.parse(testDescription);
  } catch (e) {
    MessagePlugin.error('测试用例不是合法 JSON');
    return;
  }

  cmpApiInstance({
    method: 'put',
    url: '/cmp/api',
    data: {
      id: apiInfo.value ? apiInfo.value.id : undefined,
      test_description: testDescription,
    },
  }).then(() => {
    getApiList();
    unitTestVisible.value = false;
  });
}

function onCodePreview(data, framework) {
  codeData.framework = framework;
  codeData.data = data;
  codePreviewVisible.value = true;
  code.value = JSON.stringify(data, undefined, 2);
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
