<template>
  <div class="unit-test-ui">
    <t-tabs v-model="framework" :list="frameWorkOptions"></t-tabs>
    <br/>
    <t-card>
      <t-form size="small">
        <t-form-item>

          <OneCategoryTest
            v-for="(item, index) in formData.list"
            :key="item.category + index"
            :apiInfo="apiInfo"
            :data="item"
            :categories="categories"
            :testProps="formData.props"
            @formDataChange="(trigger, params) => onOneCategoryTestChange(trigger, params, index)"
          >
            <template #operation>
              <div>
                <t-button
                  style="margin-top: 16px"
                  size="small"
                  @click="onAddMore"
                >添加其他类别</t-button>
                <t-button
                  theme="danger"
                  style="margin-top: 16px; margin-left: 16px"
                  size="small"
                  v-if="formData.list.length > 1"
                  @click="() => onDelete(index)"
                >移除</t-button>
              </div>
            </template>
          </OneCategoryTest>

        </t-form-item>

        <t-form-item>
          <t-tooltip theme="light" content="示例一：Text，输出 <Button>Text</Button>； 示例二：<span>children</span>， 输出：<Button><span>children</span></Button>">
            <t-input
              v-model="formData.content"
              placeholder="子组件"
              @change="() => onFormDataChange('content')"
            ></t-input>
          </t-tooltip>
        </t-form-item>

        <t-form-item>
          <t-tooltip theme="light">
            <template #content>
              <p>{{ `const wrapper = mount(< RadioGroup ></ RadioGroup >)` }} 默认获取组件实例方法。</p>
              <p>{{ `const wrapper = getRadioGroupDefaultMount(RadioGroup, {})` }} 填写后的获取实例方法，一般用于存在子组件的场景</p>
            </template>
            <t-input
              v-model="formData.wrapper"
              placeholder="获取组件实例的函数名称，类子组件场景，如：getRadioGroupDefaultMount"
              @change="() => onFormDataChange('wrapper')"
            ></t-input>
          </t-tooltip>
        </t-form-item>

        <div class="unit-test-ui__form-item-inner">
          <t-tooltip theme="light">
            <t-input v-model="formData.trigger" placeholder="等待渲染延迟或触发事件后再开始校验"
              @change="() => onFormDataChange('trigger')"></t-input>
            <template #content>
              <p>
                开启校验的前置条件，示例一：focus(.t-input__wrap)。示例二：delay 或者 delay(100)。
                <t-link underline href="https://github.com/vuejs/test-utils/blob/main/src/constants/dom-events.ts#L566"
                  target="_blank">所有事件列表</t-link>
              </p>
            </template>
          </t-tooltip>
        </div>

        <t-form-item style="margin: 16px 0 8px 0">
          <t-checkbox v-model="formData.snapshot" @change="() => onFormDataChange('snapshot')">生成快照（Snapshots）</t-checkbox>
        </t-form-item>

        <t-form-item style="margin: 0px 0 8px 0">
          <t-checkbox v-model="formData.needCopy">复用当前所有测试用例到其他「组件实例」</t-checkbox>
        </t-form-item>
        <t-form-item v-if="formData.needCopy">
          <t-input
            v-model="formData.copyTestToWrapper"
            placeholder="多个实例逗号隔开，示例：getRadioGroupKidsMount"
            @change="() => onFormDataChange('copyTestToWrapper')"
          ></t-input>
        </t-form-item>

        <t-form-item>
          <t-checkbox v-model="formData.skip" @change="() => onFormDataChange('skip')">跳过当前测试用例</t-checkbox>
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>

<script>
import OneCategoryTest from './one-category-test'
import { INITIAL_CATEGORY, INITIAL_FROM_DATA, CATEGORY_OPTIONS } from './const'
import { parseJSON } from '../util'
import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'UnitTestUI',

  components: { OneCategoryTest },

  props: {
    currentTestJSON: Object,
    apiInfo: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      // PC/Mobile
      framework: 'PC',
      formDataPC: cloneDeep(INITIAL_FROM_DATA),
      formDataMobile: cloneDeep(INITIAL_FROM_DATA),
      frameWorkOptions: [
        { label: 'PC', value: 'PC' },
        { label: 'Mobile', value: 'Mobile' },
      ],
      CATEGORY_OPTIONS,
    }
  },

  computed: {
    formData() {
      return {
        PC: this.formDataPC,
        Mobile: this.formDataMobile,
      }[this.framework]
    },
    categories() {
      return this.formData.list.map(t => t.category)
    },
  },

  methods: {
    updateDataByJSON() {
      const { currentTestJSON } = this
      if (currentTestJSON.PC) {
        this.formDataPC = this.updateFormData(this.formDataPC, currentTestJSON.PC)
      } else {
        this.formDataPC = cloneDeep(INITIAL_FROM_DATA)
      }
      if (currentTestJSON.Mobile) {
        this.formDataMobile = this.updateFormData(this.formDataMobile, currentTestJSON.Mobile)
      } else {
        this.formDataMobile = cloneDeep(INITIAL_FROM_DATA)
      }
    },
    
    updateFormData(formData, testJSON) {
      const newFormData = {
        ...formData,
        dom: testJSON.dom,
        classNameDom: testJSON.classNameDom,
        attributeDom: testJSON.attributeDom,
        props: testJSON.props,
        content: testJSON.content,
        wrapper: testJSON.wrapper,
        trigger: testJSON.trigger,
        copyTestToWrapper: testJSON.copyTestToWrapper?.join(),
        needCopy: Boolean(testJSON.copyTestToWrapper && testJSON.copyTestToWrapper.length),
        snapshot: testJSON.snapshot,
        skip: testJSON.skip,
        list: [],
      };
      CATEGORY_OPTIONS.forEach((item) => {
        const key = item.value
        if (testJSON[key]) {
          const obj = {
            category: key,
            [key]: this.formatCategoryData(key, testJSON[key]),
          }
          if (key === 'className') {
            obj.classNameDom = testJSON.classNameDom
          } else if (key === 'attribute') {
            obj.attributeDom = testJSON.attributeDom
          }
          if (['tnode', 'className', 'attribute', 'dom'].includes('key')) {
            obj.props = testJSON.props
          }
          newFormData.list.push(obj)
        }
      })
      for (let i = newFormData.list.length; i < this.formData.list.length; i++) {
        newFormData.list.push({ category: this.formData.list[i].category })
      }
      return newFormData;
    },

    formatCategoryData(category, data) {
      if (category === 'tnode') {
        if (data === true) {
          return { dom: [], trigger: '' }
        }
      }
      return data
    },

    onFormDataChange(trigger, params) {
      this.$emit('test-ui-form-data-change', {
        framework: this.framework,
        formData: this.formData,
        trigger,
        params,
      })
    },

    onOneCategoryTestChange(trigger, params, index) {
      let oneData = this[`formData${this.framework}`].list[index]
      // 子组件内部有单独的变量维护 Event 事件
      if (trigger === 'event') {
        const newEventData = this.getEventJSONData(params)
        oneData = {
          ...params.formData,
          event: newEventData,
        }
      } else {
        oneData = params.formData
      }
      this.$set(this[`formData${this.framework}`].list, index, oneData)
      this.$set(this[`formData${this.framework}`], 'props', oneData.props)
      this.onFormDataChange(trigger, {
        ...params,
        formData: this.formData
      })
    },

    getEventJSONData(eventData) {
      if (eventData.objectEvent) {
        const obj = {}
        eventData.objectEvent.forEach((item) => {
          obj[item.trigger] = {
            arguments: item.arguments ? JSON.parse(item.arguments) : undefined
          }
        })
        return obj
      }
      if (eventData.arrayEvent) {
        return eventData.arrayEvent.map((item) => ({
          props: item.props ? parseJSON(item.props) : undefined,
          description: item.description,
          wrapper: item.wrapper,
          expect: item.expect.map((ep) => ({
            trigger: ep.trigger,
            event: ep.event ? parseJSON(ep.event) : undefined,
            exist: ep.exist ? parseJSON(ep.exist, []) : undefined,
            delay: ep.delay === 'true' ? true : (ep.delay ? Number(ep.delay) : undefined )
          }))
        }))
      }
    },

    clearFormData() {
      this.formDataPC = cloneDeep(INITIAL_FROM_DATA)
      this.formDataMobile = cloneDeep(INITIAL_FROM_DATA)
    },

    onAddMore() {
      this[`formData${this.framework}`].list.push({ ...INITIAL_CATEGORY })
    },

    onDelete(index) {
      if (this[`formData${this.framework}`].list.length <= 1) {
        this.$message.warning('至少保留一个')
        return;
      }
      this[`formData${this.framework}`].list.splice(index, 1)
    },
  },
};
</script>

<style>
.unit-test-ui .t-form__label {
  text-align: left;
}
.t-form__controls-content {
  display: initial;
}
.unit-test-ui__form-item-inner {
  margin-top: 16px;
}
</style>
