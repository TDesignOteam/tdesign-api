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
            placeholder="触发自定义节点显示的事件，如：focus(.t-input__wrap)"
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
            placeholder="类名规则应用的 HTML 元素"
            @change="() => onFormDataChange('className')"
          ></t-input>
        </t-tooltip>
      </div>
    </template>

    <template v-if="formData.category === 'attribute'">
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light">
          <template #content>
            <p>
              <template v-for="item in getAttributeRecommend()">
                <p>{{ item }}</p>
              </template>
            </p>
          </template>
          <t-textarea
            v-model="formData.attribute"
            placeholder="属性规则"
            @change="() => onFormDataChange('attribute')"
          ></t-textarea>
        </t-tooltip>
      </div>
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="上述属性规则应用在哪个子节点，不填或者填写 'self' 表示组件根节点">
          <t-input
            v-model="formData.attributeDom"
            placeholder="属性规则应用的 HTML 元素"
            @change="() => onFormDataChange('attribute')"
          ></t-input>
        </t-tooltip>
      </div>
    </template>

    <template v-if="formData.category === 'dom'">
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light">
          <template #content>
            <p>
              <template v-for="item in getDomRecommend()">
                <p>{{ item }}</p>
              </template>
            </p>
          </template>
          <t-textarea
            v-model="formData.dom"
            placeholder="检测某个元素是否存在的规则"
            @change="() => onFormDataChange('dom')"
          ></t-textarea>
        </t-tooltip>
      </div>
    </template>

    <template v-if="formData.category === 'event'">
      <div>
        <t-radio-group v-model="eventType" style="margin: 16px 0">
          <t-radio value="object">简单事件参数</t-radio>
          <t-radio value="array">复杂人机交互</t-radio>
        </t-radio-group>
        <t-card v-if="eventType === 'object'" class="t-event-object-card">
          <div v-for="(item, index) in objectEvent" :key="index" class="unit-test-ui__one-object-event">
            <t-tooltip trigger="focus" theme="light" content="事件名，如：click">
              <t-input
                v-model="objectEvent[index].trigger"
                placeholder="事件名"
                style="min-width: 100px; width: 100px"
                @change="onObjectEventChange"
              ></t-input>
            </t-tooltip>
            <t-tooltip trigger="focus" theme="light">
              <template #content>
                示例：[{ "e.type": "click" }, [100, 101]] 。表示第一个参数存在属性 'e.type' 值为 'click'，第二个参数值为 [100, 101]
              </template>
              <t-input
                v-model="objectEvent[index].arguments"
                placeholder="事件参数"
                style="margin-left: 16px;"
                @change="onObjectEventChange"
              ></t-input>
            </t-tooltip>
            <t-button  @click="() => onObjectEventAdd(index)" variant="text" theme="primary" size="small" style="margin-left: 8px">
              <AddCircleIcon />
            </t-button>
            <t-button @click="() => onObjectEventDelete(index)" variant="text" theme="danger" size="small">
              <MinusCircleIcon />
            </t-button>
          </div>
        </t-card>

        <div v-if="eventType === 'array'">
          <t-card v-for="(item, index) in arrayEvent" :key="index" class="test-card-array-event">
            <t-input
              v-model="arrayEvent[index].trigger"
              placeholder="用户操作事件，示例：mouseenter(.t-input)"
              @change="onArrayEventChange"
            ></t-input>

            <t-tooltip theme="light">
              <template #content>JSON 数组。示例：{ "exist": [".t-input__suffix-icon"] }</template>
              <t-tag-input
                v-model="arrayEvent[index].exist"
                placeholder="用户操作事件触发后，期望哪些元素存在，标签输入"
                style="margin-top: 16px"
                @change="onArrayEventChange"
              ></t-tag-input>
            </t-tooltip>

            <t-tooltip theme="light">
              <template #content>JSON 对象。示例：{
                "clear": [{ "stopPropagation": true }],
                "change": ["''", { "stopPropagation": true }]
              }。表示会同时触发 clear 和 change 等 2 个事件。注意，如果事件参数是字符串，需要额外加上单引号包裹。</template>

              <t-textarea
                v-model="arrayEvent[index].event"
                placeholder="用户操作事件触发后，校验组件触发的多个事件及其参数"
                style="margin-top: 16px"
                @change="() => onFormDataChange('event', { arrayEvent })"
              ></t-textarea>
            </t-tooltip>

            <div style="margin-top: 16px">
              <t-button @click="() => onArrayEventAdd(index)" shape="square" theme="primary" size="small">
                <AddCircleIcon />
              </t-button>
              <t-button @click="() => onArrayEventDelete(index)" shape="square" theme="danger" size="small" style="margin-left: 8px">
                <MinusCircleIcon />
              </t-button>
            </div>
          </t-card>
        </div>
      </div>
    </template>

    <slot name="operation"></slot>
  </div>
</template>

<script>
import { INITIAL_CATEGORY, CATEGORY_OPTIONS } from './const'
import { AddCircleIcon, MinusCircleIcon } from 'tdesign-icons-vue'

export default {
  name: 'OneCategoryTest',

  components: { AddCircleIcon, MinusCircleIcon },

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    apiInfo: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      formData: {
        category: '',
        attribute: '',
        attributeDom: '',
        className: '',
        classNameDom: '',
      },
      testCategoryOptions: CATEGORY_OPTIONS,
      eventType: 'object',
      objectEvent: [
        { trigger: '', arguments: '' },
      ],
      arrayEvent: [
        { trigger: '', event: '', exist: [] }
      ],
    }
  },

  watch: {
    data: {
      immediate: true,
      handler(formData) {
        if (formData.event) {
          this.eventType = Array.isArray(formData.event) ? 'array' : 'object'
          if (this.eventType === 'object' && Object.keys(formData.event).length) {
            const objectEvents = []
            Object.entries(formData.event).forEach(([eventName, eventInfo]) => {
              objectEvents.push({ trigger: eventName, arguments: JSON.stringify(eventInfo) })
            })
            this.objectEvent = objectEvents
          }
          if (this.eventType === 'array' && this.arrayEvent.length) {
            this.arrayEvent = formData.event.map(item => ({
              trigger: item.trigger,
              event: JSON.stringify(item.event),
              exist: Array.isArray(item.exist) ? item.exist : [item.exist],
            }))
          }
        }
        const newFormData = { ...formData }
        if (formData.attribute) {
          newFormData.attribute = JSON.stringify(formData.attribute)
        }
        if (formData.dom) {
          newFormData.dom = JSON.stringify(formData.dom)
        }
        if (formData.className && typeof formData.className === 'object') {
          newFormData.className = JSON.stringify(formData.className)
        }
        this.formData = newFormData
      }
    },
    eventType() {
      this.objectEvent = [
        { trigger: '', arguments: '' },
      ]
      this.arrayEvent = [
        { trigger: '', event: '', exist: [] }
      ]
    },
  },

  methods: {
    onFormDataChange(trigger, params) {
      this.$emit('formDataChange', trigger, { ...params, formData: this.formData })
    },

    onCategoryChange(val) {
      CATEGORY_OPTIONS.map((item) => {
        delete this.formData[item.value]
      })
      const value = INITIAL_CATEGORY[val]
      if (Array.isArray(value)) {
        this.formData[val] = [...value]
      } else if (typeof value === 'object') {
        this.formData[val] = {...value}
      } else {
        this.formData[val] = value
      }
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
        `不同的值，期望不同的根元素（或子元素）存在不同的类名。`,
        `推荐规则一：t-button--variant-\${item}。存在枚举值，值为类名的一部分`,
        `推荐规则二：["t-size-s", "t-size-m", "t-size-s"]。存在枚举值。如果期望 t-size-m 不存在，请设置 [{ "t-size-m": false }]`,
        `推荐规则三：{ "underline": "t-link--hover-underline" }。不存在枚举值。`,
        // ，点击下方高级设置
        `推荐规则四：不同的值对应多个不同的元素和类名。[{ "value": "'tdesign-class'", "expect": [{"dom": "tbody > tr", "className": { "tdesign-class": true }}] }]`,
      ]
    },

    // 属性规则推荐
    getAttributeRecommend() {
      return [
        '属性规则：',
        '不同的值，期望不同的根元素（或子元素）存在不同的属性。元素的 style/value/checked 等也属于属性测试。',
        '推荐规则一：{"attribute": { "type": ["submit", "reset", "button"] }}',
        '推荐规则二：{"attribute": { "href": "https://tdesign.tencent.com/" }}',
        '推荐规则三：[{ "value": "{ \'data-level\': \'level-1\' }", "expect": [{ "dom": "tbody > tr", "attribute": { "data-level": "level-1" }}] }]。其中，value 表示 API 的值，可以是函数或数组字符串',
        '如果是 style，直接使用 "style.flexWrap": "wrap" 即可'
      ]
    },

    // Element/Dom 元素检测规则
    getDomRecommend() {
      return [
        '元素校验规则：',
        '不同的值，期望存在不同的 DOM 元素。',
        '推荐规则一：["button", "a", "div"]。存在枚举值，依次验证这几个元素是否存在。如：Button.tag',
        '推荐规则二：["tfoot.t-table__footer", { "tfoot > tr": 2 }]。直接校验组件实例是否存在这些元素，数字表示存在几个',
        '推荐规则三：{ "[3, 1]": { ".t-table__row--fixed-top": 3 } }。表示值为 [3, 1] 时，校验 .t-table__row--fixed-top 是否存在 3 个',
      ]
    },

    onObjectEventAdd(index) {
      if (!this.objectEvent[index].trigger) {
        this.$message.warning('请把当前内容填写完整后再添加')
        return;
      }
      this.objectEvent.splice(index + 1, 0, { trigger: '', arguments: '' })
    },

    onObjectEventDelete(index) {
      if (this.objectEvent.length < 2) return;
      this.objectEvent.splice(index, 1)
    },

    onArrayEventAdd(index) {
      this.arrayEvent.splice(index + 1, 0, { trigger: '', event: '', exist: [] })
    },

    onArrayEventDelete(index) {
      if (this.arrayEvent.length < 2) return;
      this.arrayEvent.splice(index, 1)
    },

    onArrayEventChange() {
      for (let i = 0, len = this.arrayEvent.length; i < len; i++) {
        const item = this.arrayEvent[i]
        try {
          item.event && JSON.parse(item.event)
        } catch(e) {
          return
        }
      }
      this.onFormDataChange('event', { arrayEvent: this.arrayEvent })
    },

    onObjectEventChange() {
      for (let i = 0, len = this.objectEvent.length; i < len; i++) {
        const item = this.objectEvent[i]
        try {
          item.arguments && JSON.parse(item.arguments)
        } catch(e) {
          return
        }
      }
      this.onFormDataChange('event', { objectEvent: this.objectEvent })
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

.unit-test-ui__one-unit-test .t-event-object-card .t-card__body {
 padding: 16px;
}

.unit-test-ui__one-object-event {
  display: flex;
  align-items: center;
}

.unit-test-ui__one-object-event + .unit-test-ui__one-object-event {
  margin-top: 8px;
}

.test-card-array-event + .test-card-array-event {
  margin-top: 8px;
}
</style>
