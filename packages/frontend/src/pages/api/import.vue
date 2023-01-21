<template>
  <!-- onsubmit="return false" 用于禁止表单提交 -->
  <form class="t-form api-edit-form" onsubmit="return false">
    <div class="t-form-item">
      <label>设计组件：</label>
      <div class="t-form-content">
        <t-select
          v-model="formData.component"
          placeholder="请选择组件"
          clearable
          filterable
        >
          <t-option
            v-for="(item, index) in components"
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
        <site-checkbox v-model="formData.platform" :options="platformOptions" ></site-checkbox>
      </div>
    </div>
    <div class="t-form-item">
      <label>
        API 类别
        <t-popup
          class="placement-top"
          content="Extends 表示组件/插件会继承当前 API 所有属性。Return 表示插件或函数的返回值。<T> 表示泛型参数"
          placement="top-left"
          visibleArrow
        >
          <t-icon name="help-circle" size="middle"/>
        </t-popup>：
      </label>
      <div class="t-form-content">
        <t-radio-group v-model="formData.apiCategory">
          <t-radio v-for="(item, index) in map.field_category" :key="index" :value="item.value">{{item.label}}</t-radio>
        </t-radio-group>
      </div>
    </div>
    <div class="t-form-item">
      <label>API 名称：</label>
      <div class="t-form-content">
        <t-input v-model="formData.name" :placeholder="currentApiCategory.placeholder.name"></t-input>
        <small v-if="currentApiCategory.desc">示例：`{{currentApiCategory.desc}}'`</small>
      </div>
    </div>

    <div class="t-form-item" v-show="isShowSuger">
      <label>语法糖(Vue)：</label>
      <div class="t-form-content">
        <t-radio-group v-model="formData.syntacticSugar">
          <t-radio value="">无</t-radio>
          <t-radio value="v-model">
            <t-tooltip content="在 Vue3 中表示 v-model:modelValue">v-model</t-tooltip>
          </t-radio>
          <t-radio value="sync">
            <t-tooltip content="在 Vue3 中表示 v-model:xxx">.sync</t-tooltip>
          </t-radio>
        </t-radio-group>
      </div>
    </div>

    <div class="t-form-item">
      <label></label>
      <div class="t-form-content">
        <t-checkbox v-model="formData.supportDefaultValue">是否支持非受控属性</t-checkbox>
      </div>
    </div>

    <!-- Props 开始 -->
    <template v-if="[API_CATEGORY_PROPS, API_CATEGORY_PLUGINS].includes(Number(formData.apiCategory))">
      <div class="t-form-item">
        <label style="vertical-align: top">
          <span>API 类型</span>
          <t-popup
            class="placement-top"
            content="【Tips】TNode 是 TDesign 定义的一种集合数据类型，用于描述多类型 API。TNode = Function + Slot + ReactNode"
            placement="top-left"
            visibleArrow
          >
            <t-icon name="help-circle" size="middle"/>
          </t-popup>：
        </label>
        <div class="t-form-content api-type">
          <t-checkbox-group v-model="formData.fieldType" @change="onFieldTypeChange">
            <t-checkbox v-for="(item) in fieldOptions" :key="item.value" :value="item.value">{{item.label}}</t-checkbox>
          </t-checkbox-group>
        </div>
      </div>
      <div class="t-form-item">
        <label>TS 类型：</label>
        <div class="t-form-content">
          <t-textarea
            v-model="formData.customFieldType"
            placeholder="API 类型不能满足需要时，可在此处输入详细的 TS 类型，例如： ButtonProps。API 类型包含泛型时，该项必填。"
          ></t-textarea>
        </div>
      </div>
      <div class="t-form-item">
        <label>默认值：</label>
        <div class="t-form-content">
          <t-input v-model="formData.defaultValue" placeholder="请输入字段默认值"></t-input>
        </div>
      </div>
      <div class="t-form-item" v-if="isShowEnumField">
        <label>可选值：</label>
        <div class="t-form-content">
          <t-input v-model="formData.fieldEnums" placeholder="多个可选值使用斜杠(/)隔开，如：primary/warning/error"></t-input>
        </div>
      </div>
      <div class="t-form-item">
        <label>属性描述：</label>
        <div class="t-form-content">
          <t-input v-model="formData.descZh" placeholder="请输入属性描述（中文），字段为多类型时，需要描述各个类型的含义"></t-input>
        </div>
      </div>
      <div class="t-form-item">
        <label>英文描述：</label>
        <div class="t-form-content">
          <t-input v-model="formData.descEn" placeholder="type API description in English"></t-input>
        </div>
      </div>
    </template>
    <!-- Props 结束 -->

    <template v-else-if="!isExtendsApi && !isReturnApi && !isT">
      <div class="t-form-item">
        <label>参数：</label>
        <div class="t-form-content">
          <t-input v-model="formData.eventInput" :placeholder="currentApiCategory.placeholder.inputParams">
          </t-input>
        </div>
      </div>
      <div class="t-form-item" v-show="Number(formData.apiCategory) !== API_CATEGORY_EVENTS">
        <label>返回值：</label>
        <div class="t-form-content">
          <t-input v-model="formData.eventOutput" :placeholder="currentApiCategory.placeholder.outputParams"></t-input>
        </div>
      </div>
      <div class="t-form-item">
        <label>描述：</label>
        <div class="t-form-content">
          <t-input v-model="formData.descZh" :placeholder="currentApiCategory.placeholder.descZh"></t-input>
        </div>
      </div>
      <div class="t-form-item">
        <label>Description：</label>
        <div class="t-form-content">
          <t-input v-model="formData.descEn" :placeholder="currentApiCategory.placeholder.descEn"></t-input>
        </div>
      </div>
      <div class="t-form-item">
        <label>
          <span>触发元素(React)</span>
          <t-popup
            class="placement-top"
            content="【Tips】用于描述事件类型的范型约束，仅用于 React"
            placement="top-left"
            visibleArrow
          >
            <t-icon name="help-circle" size="middle"/>
          </t-popup>：
        </label>
        <div class="t-form-content">
          <t-input
            v-model="formData.triggerElements"
            :placeholder="currentApiCategory.placeholder.triggerElements"
          ></t-input>
        </div>
      </div>
    </template>

    <div class="t-form-item">
      <label></label>
      <div class="t-form-content">
        <t-checkbox v-model="formData.required">是否必需</t-checkbox>
      </div>
    </div>

    <div class="t-form-item">
      <label></label>
      <div class="t-form-content">
        <t-checkbox v-model="formData.deprecated">是否废弃</t-checkbox>
      </div>
    </div>

    <!-- <template v-if="[API_CATEGORY_PROPS, API_CATEGORY_PLUGINS].includes(Number(formData.apiCategory))">
      <div class="t-form-item">
        <label></label>
        <div class="t-form-content">
          <t-checkbox v-model="formData.htmlAttribute">是否为 HTML 原生属性</t-checkbox>
        </div>
      </div>
    </template> -->

    <div class="t-form-item">
      <label>
        版本号
        <t-popup
          class="placement-top"
          :content="versionDescription"
          placement="top-left"
          visibleArrow
        >
          <t-icon name="help-circle" size="middle"/>
        </t-popup>
        ：
      </label>
      <div class="t-form-content">
        <t-textarea
          v-model="formData.version"
          :autosize="{ minRows: 3 }"
          placeholder="从哪个版本号开始支持的这个 API（JSON）"
        ></t-textarea>
      </div>
    </div>

    <!-- <div class="t-form-item">
      <label>测试用例描述：</label>
      <div class="t-form-content">
        <t-textarea v-model="formData.testDescription" :autosize="{ minRows: 3 }" placeholder="请输入单测用例描述语言"></t-textarea>
      </div>
    </div> -->

    <!-- <div class="t-form-item">
      <label></label>
      <div class="t-form-content">
        不同框架支持的版本号不同，初步设想格式。{ key: value }，其中 key 为框架，value 为版本号
        <t-input v-model="formData.version">支持版本号</t-input>
      </div>
    </div> -->
  </form>
</template>

<script>

import SiteCheckbox from './checkbox.vue'
import {
  Icon as TIcon,
  Input as TInput,
  Select as TSelect,
  Option as TOption,
  Popup as TPopup,
  Checkbox as TCheckbox,
  CheckboxGroup as TCheckboxGroup,
  Radio as TRadio,
  RadioGroup as TRadioGroup
} from 'tdesign-vue'
import {
  API_CATEGORY_MAP,
  API_CATEGORY_EVENTS,
  API_CATEGORY_PROPS,
  API_CATEGORY_PLUGINS,
  STRING,
  NUMBER,
  P_VUE_PC,
  P_VUE_MOBILE,
  API_CATEGORY_EXTENDS,
  API_CATEGORY_RETURN,
  API_CATEGORY_T
} from './const'

import { cmpApiInstance } from '../../services/api-server'
import { getComponentUnitTests } from '../../../../scripts/vitest'
import { getCombinedComponentsByCurrentName, getCmpTypeCombineMap } from './util'
// import prettierConfig from '../../../../scripts/config/prettier'
// import prettier from "https://unpkg.com/prettier@2.8.1/esm/standalone.mjs";
// import parserBabel from "https://unpkg.com/prettier@2.8.1/esm/parser-babel.mjs";

const versionDescription = [
  '从哪个版本号开始支持的这个 API，不同的框架有不同的版本号。',
  `示例：${JSON.stringify({
    'Vue(PC)': '0.50.1',
    'VueNext(PC)': '0.24.9',
    'React(PC)': '0.43.1',
    'Miniprogram': '0.27.0',
    'Vue(Mobile)': '0.14.1',
  }, undefined, 2)}`,
].join('\n');

export default {
  name: 'APIDesignImport',

  components: { SiteCheckbox, TIcon, TInput, TSelect, TOption, TPopup, TCheckbox, TCheckboxGroup, TRadio, TRadioGroup },

  props: {
    dataBase: {},
    map: Object,
    info: Object,
    mode: String,
  },

  data () {
    return {
      API_CATEGORY_EVENTS,
      API_CATEGORY_PROPS,
      API_CATEGORY_PLUGINS,
      STRING,
      list: [],
      versionDescription,
      componentApiData: [],
      formData: {
        platform: [],
        component: '',
        apiCategory: '1',
        fieldType: [],
        customFieldType: '',
        defaultValue: '',
        required: false,
        deprecated: false,
        fieldEnums: '',
        descZh: '',
        descEn: '',
        testDescription: '',
        version: '',
        supportDefaultValue: false,
        name: '',
        eventInput: '',
        eventOutput: '',
        syntacticSugar: '',
        html_attribute: false,
        triggerElements: ''
      }
    }
  },

  computed: {
    components () {
      return this.map && this.map.components
    },
    fieldOptions () {
      return this.map && this.map.field_type
    },
    platformOptions () {
      return this.map && this.map.platform_framework
    },
    currentApiCategory () {
      return API_CATEGORY_MAP[this.formData.apiCategory] || { placeholder: {} }
    },
    isShowSuger () {
      const intersection = this.formData.platform.filter(item => [P_VUE_PC, P_VUE_MOBILE].includes(Number(item)))
      const platformAllow = !!intersection.length
      const categoryAllow = [
        API_CATEGORY_EVENTS,
        API_CATEGORY_PROPS,
        API_CATEGORY_PLUGINS
      ].includes(Number(this.formData.apiCategory))
      return platformAllow && categoryAllow
    },
    isExtendsApi () {
      return String(this.formData.apiCategory) === String(API_CATEGORY_EXTENDS)
    },
    isReturnApi () {
      return String(this.formData.apiCategory) === String(API_CATEGORY_RETURN)
    },
    isT () {
      return String(this.formData.apiCategory) === String(API_CATEGORY_T)
    },
    isShowEnumField () {
      return this.formData.fieldType.includes(String(STRING)) ||
        this.formData.fieldType.includes(String(NUMBER))
    }
  },

  watch: {
    platformOptions (val) {
      if (!val) return
      this.formData.platform = []
    },
    info (val) {
      this.formData = {
        ...this.formData,
        testDescription: '',
      };
      if (!val) return
      this.formData = {
        platform: val.platform_framework,
        component: val.component,
        apiCategory: val.field_category ? String(val.field_category) : '1',
        fieldType: val.field_type,
        customFieldType: val.custom_field_type,
        defaultValue: val.field_default_value,
        required: !!val.field_required,
        deprecated: !!val.deprecated,
        fieldEnums: val.field_enum,
        descZh: val.field_desc_zh,
        descEn: val.field_desc_en,
        testDescription: val.test_description,
        version: val.version,
        supportDefaultValue: Boolean(val.support_default_value),
        htmlAttribute: Boolean(val.html_attribute),
        name: val.field_name,
        eventInput: val.event_input,
        eventOutput: val.event_output,
        syntacticSugar: val.syntactic_sugar,
        triggerElements: val.trigger_elements
      }

      if (this.mode === 'create') {
        this.formData.testDescription = '';
      }

      this.getCurrentComponentData()
    }
  },

  methods: {
    onFieldTypeChange (val) {
      // 如果没有 String 没有，则需要清空可选值
      if (!val.includes(String(STRING))) {
        this.formData.fieldEnums = ''
      }
    },

    // 获取当前组件全部信息
    getCurrentComponentData() {
      // 如果不存在根组件，则直接返回
      if (!this.info.component) return;
      const siblingsMap = getCombinedComponentsByCurrentName();
      const component = siblingsMap[this.info.component]
        ? siblingsMap[this.info.component].join()
        : this.info.component;
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
        // const rootComponentMap = getCmpTypeCombineMap('Vue(PC)');
        // const finalComponent = rootComponentMap[this.info.component] || component;
        // const codeData = getComponentUnitTests('Vue(PC)', finalComponent, this.componentApiData, this.map)
        // // 格式化代码
        // const code = prettier.format(codeData, {
        //   ...prettierConfig,
        //   parser: "babel",
        //   plugins: [parserBabel],
        // });
        this.loading = false
      }, () => {
        this.loading = false
      })
    },
  }
}
</script>

<style lang="less">
.api-edit-form {
  .t-form {
    margin-bottom: 60px;
  }
  .t-form-content {
    width: 590px;
  }
  .t-form-item + .t-form-item {
    margin-top: 20px;
  }
  .t-form-item > label {
    width: 135px;
    text-align: right;
    margin-right: 8px;
    line-height: 32px;
  }
  .t-form-item .t-button + .t-button {
    margin-left: 16px;
  }

  .t-form-content,
  .t-form-item > label {
    display: inline-block;
    vertical-align: top;
  }

  .t-form-content.platform,
  .t-form-content.api-type {
    label.t-checkbox {
      width: 150px;
      display: inline-block;
      margin-top: 5px;
    }
  }
  // fix tdesign ui
  .placement-top {
    position: initial !important;
  }
  .t-checkbox + .t-checkbox {
    margin-left: 0;
  }
}
</style>
