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
            :formData="item"
            :onFormDataChange="onFormDataChange"
          >
            <template #operation v-if="item.category">
              <t-button
                style="margin-top: 16px"
                size="small"
                @click="onAddMore"
              >添加</t-button>
              <t-button
                theme="danger"
                style="margin-top: 16px; margin-left: 16px"
                size="small"
                v-if="formData.list.length > 1"
                @click="() => onDelete(index)"
              >删除</t-button>
            </template>
          </OneCategoryTest>

        </t-form-item>

        <t-form-item>
          <t-tooltip theme="light" content="示例一：Text；示例二：<span>children</span>">
            <t-input
              v-model="formData.content"
              placeholder="子组件"
              @change="() => onFormDataChange('content')"
            ></t-input>
          </t-tooltip>
        </t-form-item>

        <t-form-item style="margin: 16px 0 8px 0">
          <t-checkbox v-model="formData.snapshot" @change="() => onFormDataChange('snapshot')">生成快照</t-checkbox>
        </t-form-item>

        <t-form-item>
          <t-input
            v-model="formData.wrapper"
            placeholder="获取组件实例的函数名称，如：getRadioGroupDefaultMount"
            @change="() => onFormDataChange('wrapper')"
          ></t-input>
        </t-form-item>
        <t-form-item style="margin: -12px 0 8px 0">
          <t-checkbox v-model="formData.needCopy">复用当前所有测试用例到其他「组件实例」</t-checkbox>
        </t-form-item>
        <t-form-item v-if="formData.needCopy">
          <t-input
            v-model="formData.copyTestToWrapper"
            placeholder="多个实例逗号隔开，示例：getRadioGroupKidsMount"
            @change="() => onFormDataChange('copyTestToWrapper')"
          ></t-input>
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>

<script>
import OneCategoryTest from './one-category-test'
import { INITIAL_CATEGORY, INITIAL_FROM_DATA, CATEGORY_OPTIONS } from './const'

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
      formDataPC: {...INITIAL_FROM_DATA},
      formDataMobile: {...INITIAL_FROM_DATA},
      frameWorkOptions: [
        { label: 'PC', value: 'PC' },
        { label: 'Mobile', value: 'Mobile' },
      ],
    }
  },

  computed: {
    formData() {
      return {
        PC: this.formDataPC,
        Mobile: this.formDataMobile,
      }[this.framework]
    },
  },

  watch: {
    currentTestJSON: {
      handler(currentTestJSON) {
        if (currentTestJSON.PC) {
          this.formDataPC = this.updateFormData(this.formDataPC, currentTestJSON.PC)
        }
        if (currentTestJSON.Mobile) {
          this.formDataMobile = this.updateFormData(this.formDataMobile, currentTestJSON.Mobile)
        }
      },
      immediate: true,
    },
  },

  methods: {
    updateFormData(formData, testJSON) {
      const newFormData = {
        ...formData,
        content: testJSON.content,
        wrapper: testJSON.wrapper,
        copyTestToWrapper: testJSON.copyTestToWrapper?.join(),
        needCopy: Boolean(testJSON.copyTestToWrapper && testJSON.copyTestToWrapper.length),
        snapshot: testJSON.snapshot,
        list: [],
        // tnode: {
        //   trigger: testJSON.tnode?.trigger,
        //   dom: testJSON.tnode?.dom || [],
        // },
      };
      CATEGORY_OPTIONS.forEach((item) => {
        const key = item.value
        if (testJSON[key]) {
          newFormData.list.push({
            category: key,
            [key]: this.formatCategoryData(key, testJSON[key]),
          })
        }
      })
      return newFormData;
    },

    formatCategoryData(category, data) {
      if (category === 'tnode') {
        if (data === true) {
          return { dom: [], trigger: '' }
        }
        return data
      }
      return data
    },

    onFormDataChange(trigger) {
      // this.$emit('test-ui-form-data-change', {
      //   framework: this.framework,
      //   formData: this.formData,
      //   trigger,
      // })
    },

    clearFormData() {
      this.formDataPC = {...INITIAL_FROM_DATA}
      this.formDataMobile = {...INITIAL_FROM_DATA}
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
