<template>
  <div class="unit-test-ui__one-unit-test">
    <t-radio-group v-model="formData.category" @change="onCategoryChange">
      <t-radio-button v-for="item in testCategoryOptions" :value="item.value" :key="item.value">
        <t-tooltip :content="item.tips">
          <span>{{ item.label }}</span>
        </t-tooltip>
      </t-radio-button>
    </t-radio-group>

    <template v-if="formData.category === 'tnode' && formData.tnode">
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="格式：DomSelector。如果元素都挂载在 document.body 上，请加上 document 前缀，示例：document.class-name。如果是自定义节点，则是 document.custom-node">
          <t-tag-input
            v-model="formData.tnode.dom"
            placeholder="除自定义节点，还期望哪些元素同时存在，标签输入，示例：.t-radio__label"
            @change="() => onFormDataChange('tnode')"
          ></t-tag-input>
        </t-tooltip>
      </div>
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light">
          <t-input
            v-model="formData.tnode.trigger"
            placeholder="自定义节点显示的触发事件，如：focus(.t-input__wrap)"
            @change="() => onFormDataChange('tnode')"
          ></t-input>
          <template #content>
            <p>
              格式：EventName(DomSelector)。focus(.t-input__wrap) 表示当元素 .t-input__wrap 聚焦后才会出现前面期望的元素。
              <t-link
                underline
                href="https://github.com/vuejs/test-utils/blob/main/src/constants/dom-events.ts#L566"
                target="_blank"
              >所有事件列表</t-link>
            </p>
          </template>
        </t-tooltip>
      </div>
    </template>

    <template v-if="formData.category === 'className'">
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light">
          <template #content>
            <p v-if="apiInfo.field_type_text.join() === 'Boolean'">
              {{ formData.className
                ? `类名规则：当前值类型为 Boolean，当值为 true 时，期望存在类名 ${formData.className}`
                : '类名规则：当前值类型为 Boolean，推荐规则形如：“.t-size-full-width”。表示值为 true 时，期望类名 t-size-full-width 存在'
              }}
            </p>
            <p v-if="apiInfo.field_type_text.join() === 'String'">
              类名规则：
              <template v-if="formData.className">
                {{ getClassNameIntroduction() }}
              </template>
              <template v-else>
                <p v-for="(item, index) in getClassNameRecommend()" :key="index">{{ item }}</p>
              </template>
            </p>
          </template>
          <t-textarea
            v-model="formData.className"
            placeholder="类名规则"
            @change="() => onFormDataChange('className')"
          ></t-textarea>
        </t-tooltip>
      </div>

      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="上述类名规则应用在哪个子节点，不填或者填写 'self' 表示组件根节点">
          <t-input
            v-model="formData.classNameDom"
            placeholder="类名规则应用的节点"
            @change="() => onFormDataChange('classNameDom')"
          ></t-input>
        </t-tooltip>
      </div>
    </template>

    <slot name="operation"></slot>
  </div>
</template>

<script>
import { INITIAL_CATEGORY, CATEGORY_OPTIONS } from './const'

export default {
  name: 'OneCategoryTest',

  props: {
    formData: {
      type: Object,
      default: () => ({}),
    },
    onFormDataChange: Function,
    apiInfo: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      testCategoryOptions: CATEGORY_OPTIONS,
    }
  },

  methods: {
    onCategoryChange(val) {
      const value = INITIAL_CATEGORY[val]
      if (Array.isArray(value)) {
        this.formData[val] = [...value]
      } else if (typeof value === 'object') {
        this.formData[val] = {...value}
      } else {
        this.formData[val] = value
      }
      CATEGORY_OPTIONS.filter(t => t.value !== val).map((item) => {
        delete this.formData[item.key]
      })
      this.onFormDataChange('category');
    },

    // 类名说明
    getClassNameIntroduction() {
      const { apiInfo } = this
      const { className } = this.formData
      if (typeof className === 'string') {
        return `${apiInfo.component}.${apiInfo.field_name} 的值是类名的一部分，其中 \${item} 表示替换类名的值`
      } else if (Array.isArray(className)) {
        if (typeof className[0] === 'object' && className[0].value) {
          return `不同的值，期望不同的根元素（或子元素）对应不同的类名`
        } else {
          return `当值分别为 ${apiInfo.field_enum} 时，期望类名分别为 ${className.join('/')}`
        }
      }
    },

    // 类名规则推荐（TODO: 带完善文档）
    getClassNameRecommend() {
      return [
        `不同的值，期望不同的根元素（或子元素）对应不同的类名。`,
        `推荐规则一：\`t-button--variant-\${item}\`。存在枚举值，值为类名的一部分`,
        `推荐规则二：\`["t-size-s", "t-size-m", "t-size-s"]\`。存在枚举值。如果期望 t-size-m 不存在，请设置 \`[{ "t-size-m": false }]\``,
        `推荐规则三：\`{ "underline": "t-link--hover-underline" }\`。不存在枚举值。`,
        // ，点击下方高级设置
        `推荐规则四：不同的值对应多个不同的元素和类名。\`[{ "value": "'tdesign-class'", "expect": [{"dom": "tbody > tr", "className": { "tdesign-class": true }}] }]\``,
      ];
    },
  },
};
</script>

<style>
.unit-test-ui__one-unit-test {
  background-color: #efefef;
  padding: 16px;
}

.unit-test-ui__one-unit-test + .unit-test-ui__one-unit-test {
  margin-top: 16px;
}

.unit-test-ui .t-radio-group.t-radio-group__outline {
  background-color: white;
}
</style>
