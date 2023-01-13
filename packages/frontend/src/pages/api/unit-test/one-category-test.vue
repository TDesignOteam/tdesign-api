<template>
  <div class="unit-test-ui__one-unit-test">
    <t-radio-group :value="formData.category" @change="onCategoryChange">
      <t-radio-button v-for="item in testCategoryOptions" :value="item.value" :key="item.value">
        <t-tooltip :content="item.tips">
          <span>{{ item?.label }}</span>
        </t-tooltip>
      </t-radio-button>
    </t-radio-group>

    <template v-if="formData.category === 'tnode' && formData.tnode">
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light"
          content="格式：DomSelector。标签输入。如果元素都挂载在 document.body 上，请加上 document 前缀，示例：document.class-name。如果是自定义节点，则是 document.custom-node">
          <t-tag-input v-model="formData.tnode.dom" placeholder="除自定义节点，还期望哪些元素同时存在，标签输入，示例：.t-radio__label"
            @change="() => onFormDataChange('tnode')"></t-tag-input>
        </t-tooltip>
      </div>

      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light">
          <t-input v-model="formData.tnode.trigger" placeholder="触发自定义节点显示的前置事件，如：focus(.t-input__wrap)"
            @change="() => onFormDataChange('tnode')"></t-input>
          <template #content>
            <p>
              格式：EventName(DomSelector)。focus(.t-input__wrap) 表示当元素 .t-input__wrap 聚焦后才会出现前面期望的元素。
              <t-link underline href="https://github.com/vuejs/test-utils/blob/main/src/constants/dom-events.ts#L566"
                target="_blank">所有事件列表</t-link>
            </p>
          </template>
        </t-tooltip>
      </div>

      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="还需要添加哪些属性到组件">
          <t-input v-model="formData.props" placeholder="添加额外的组件属性，格式：JSON"
            @blur="() => onFormDataChange('tnode')"></t-input>
        </t-tooltip>
      </div>
    </template>

    <template v-if="formData.category === 'className'">
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light">
          <template #content>
            <p v-if="apiInfo && apiInfo.field_type_text.join() === 'Boolean'">
              {{
                formData.className
                  ? `类名规则：当前值类型为 Boolean，当值为 true 时，期望存在类名 ${formData.className}`
                  : '类名规则：当前值类型为 Boolean，推荐规则形如：.t-size-full-width。表示值为 true 时，期望类名 t-size-full-width 存在'
              }}
            </p>
            <p v-if="apiInfo && apiInfo.field_type_text.join() === 'String'">
              类名规则：
              <!-- <template v-if="formData.className">
                {{ getClassNameRecommend() }}
              </template>
              <template v-else> -->
              <p v-for="(item, index) in getClassNameRecommend()" :key="index">{{ item }}</p>
              <!-- </template> -->
            </p>
          </template>
          <t-textarea v-model="formData.className" placeholder="类名规则"
            @blur="() => onFormDataChange('className')"></t-textarea>
        </t-tooltip>
      </div>

      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="上述类名规则应用在哪个子节点，不填或者填写 'self' 表示组件根节点">
          <t-input v-model="formData.classNameDom" placeholder="类名规则应用的 HTML 元素"
            @change="() => onFormDataChange('className')"></t-input>
        </t-tooltip>
      </div>

      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="还需要添加哪些属性到组件，如果 API 数据类型为 boolean 可以不添加">
          <t-input v-model="formData.props" placeholder="添加额外的组件属性，格式：JSON"
            @blur="() => onFormDataChange('className')"></t-input>
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
          <t-textarea v-model="formData.attribute" placeholder="属性规则"
            @blur="() => onFormDataChange('attribute')"></t-textarea>
        </t-tooltip>
      </div>
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="上述属性规则应用在哪个子节点，不填或者填写 'self' 表示组件根节点">
          <t-input v-model="formData.attributeDom" placeholder="属性规则应用的 HTML 元素"
            @change="() => onFormDataChange('attribute')"></t-input>
        </t-tooltip>
      </div>
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="还需要添加哪些属性到组件，如果 API 数据类型为 boolean 可以不添加">
          <t-input v-model="formData.props" placeholder="添加额外的组件属性，格式：JSON"
            @blur="() => onFormDataChange('attribute')"></t-input>
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
          <t-textarea v-model="formData.dom" placeholder="检测某个元素是否存在的规则"
            @blur="() => onFormDataChange('dom')">
          </t-textarea>
        </t-tooltip>

        <t-tooltip theme="light" trigger="click" placement="bottom-left">
          <t-button variant="text" theme="primary" size="small">点击查看规则细节</t-button>
          <template #content>
            <p>
              <template v-for="item in getDomMoreTips()">
                <p>{{ item }}</p>
              </template>
            </p>
          </template>
        </t-tooltip>
      </div>
      <div class="unit-test-ui__form-item-inner">
        <t-tooltip theme="light" content="还需要添加哪些属性到组件，如果 API 数据类型为 boolean 可以不添加">
          <t-input v-model="formData.props" placeholder="添加额外的组件属性，格式：JSON"
            @blur="() => onFormDataChange('dom')"></t-input>
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
            <t-tooltip trigger="focus" theme="light" content="事件名，如：click 或者 click(.t-input)">
              <t-input v-model="objectEvent[index].trigger" placeholder="事件名" style="min-width: 130px; width: 130px"
                @change="onObjectEventChange"></t-input>
            </t-tooltip>
            <t-tooltip trigger="focus" theme="light">
              <template #content>
                示例：[{ "e.type": "click" }, [100, 101]] 。表示第一个参数存在属性 'e.type' 值为 'click'，第二个参数值为 [100, 101]
              </template>
              <t-input v-model="objectEvent[index].arguments" placeholder="事件参数" style="margin-left: 16px;"
                @change="onObjectEventChange"></t-input>
            </t-tooltip>
            <t-button @click="() => onObjectEventAdd(index)" variant="text" theme="primary" size="small"
              style="margin-left: 8px">
              <AddCircleIcon />
            </t-button>
            <t-button @click="() => onObjectEventDelete(index)" variant="text" theme="danger" size="small">
              <MinusCircleIcon />
            </t-button>
          </div>
        </t-card>

        <div v-if="eventType === 'array'">
          <t-card v-for="(item, index) in arrayEvent" :key="index" class="test-card-array-event">
            <h4 style="margin-top: 0">第{{ ['一', '二', '三', '四', '五'][index] }}个交互测试用例</h4>
            
            <!-- <p class="t-input__tips t-input__tips--default" style="position: relative">
              总述：一个测试用例可能只包含一个事件触发，也可能包含多个事件触发
            </p> -->

            <div style="display: flex; align-items: center; margin-bottom: 16px">
              <label style="width: 100px">用例描述：</label>
              <t-input
                v-model="arrayEvent[index].description"
                placeholder="选填，当前测试用例文本描述，默认为 xxx works fine"
                @blur="onEventPropsChange"
              ></t-input>
            </div>

            <div style="display: flex; align-items: center; margin-bottom: 16px">
              <label style="width: 100px">组件属性：</label>
              <t-input
                v-model="arrayEvent[index].props"
                placeholder="选填，当前测试用例所需的必要属性，格式：JSON"
                @blur="onEventPropsChange"
              ></t-input>
            </div>

            <div
              v-for="(expect, expectIndex) in arrayEvent[index].expect"
            >
             <div style="display: flex; align-items: center">
               第{{ ['一', '二', '三', '四', '五'][expectIndex] }}个事件：
               <t-button
                 theme="primary"
                 variant="text"
                 size="small"
                 @click="() => onEventExpectEdit(expect, expectIndex, index, 'edit')"
               ><EditIcon /></t-button>
               <t-button
                 theme="primary"
                 variant="text"
                 size="small"
                 @click="() => onEventExpectAdd(expect, expectIndex, index, 'add')"
               ><AddCircleIcon /></t-button>
               <t-button
                 theme="danger"
                 variant="text"
                 size="small"
                 @click="() => onEventExpectDelete(expectIndex, index, 'delete')"
               ><MinusCircleIcon /></t-button>
             </div>
             <p v-if="expect.trigger || expect.event || expect.exist" class="t-input__tips t-input__tips--default" style="position: relative">
                {{getEventDescription(expect)}}
              </p>
            </div>

            <!-- {{ arrayEvent[index] }} -->
            <div style="margin-top: 16px; text-align: right;">
              <t-button @click="() => onArrayEventAdd(index)" size="small">
                继续
                <!-- <AddCircleIcon /> -->
              </t-button>
              <t-button
                @click="() => onArrayEventDelete(index)"
                theme="danger"
                size="small"
                style="margin-left: 8px"
                v-if="arrayEvent.length > 1"
              >
                移除
                <!-- <MinusCircleIcon /> -->
              </t-button>
            </div>
          </t-card>
        </div>
      </div>
    </template>

    <slot name="operation"></slot>

    <EventExpect
      :visible.sync="eventExpectVisible"
      :eventExpect="currentExpectData.expectData"
      :eventExpectMode="eventExpectMode"
      @confirm="onEventExpectChange"
    ></EventExpect>

  </div>
</template>

<script>
import { INITIAL_CATEGORY, CATEGORY_OPTIONS } from './const'
import { AddCircleIcon, MinusCircleIcon, EditIcon } from 'tdesign-icons-vue'
import EventExpect from './event-expect'
import { parseJSON, getEventName } from '../util'
import { formatToOneCategoryTest, getEventTestData } from './formatData'

const INITIAL_OBJECT_EVENT = [
  { trigger: '', arguments: '' },
]

const INITIAL_ARRAY_EVENT = [
  {
    expect: [{ trigger: '', event: '', exist: '' }],
    props: '',
  }
]
export default {
  name: 'OneCategoryTest',

  components: { AddCircleIcon, MinusCircleIcon, EventExpect, EditIcon },

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    apiInfo: {
      type: Object,
      default: () => ({}),
    },
    categories: Array,
    // 被测试组件的额外属性
    testProps: {
      type: [Object, String],
      default: () => ({}),
    },
  },

  data() {
    return {
      formData: {
        category: '',
        attribute: '',
        attributeDom: '',
        props: '',
        className: '',
        classNameDom: '',
        dom: '',
      },
      testCategoryOptions: CATEGORY_OPTIONS,
      eventType: 'object',
      objectEvent: [...INITIAL_OBJECT_EVENT],
      arrayEvent: [...INITIAL_ARRAY_EVENT],
      eventExpectVisible: false,
      currentExpectData: {
        expectData: {...INITIAL_ARRAY_EVENT[0].expect},
        expectIndex: -1,
        eventIndex: -1,
      },
      // edit/add
      eventExpectMode: 'edit',
    }
  },

  watch: {
    // TODO，不同的测试用例支持不同的 props
    testProps: {
      immediate: true,
      handler(props) {
        if (!this.formData) return;
        this.$nextTick(() => {
          const tmpProps = typeof props === 'string' ? parseJSON(props) : props;
          const oldProps = this.formData.props ? JSON.parse (this.formData.props) : {};
          const finalProps = { ...oldProps, ...tmpProps };
          this.$set(this.formData, 'props', Object.keys(finalProps).length ? JSON.stringify(finalProps) : '');
        });
      }
    },
    data: {
      immediate: true,
      handler(formData) {
        this.formData = formatToOneCategoryTest(formData)
        if (formData.event) {
          this.eventType = Array.isArray(formData.event) ? 'array' : 'object'
          const { objectEvent, arrayEvent } = getEventTestData(this.eventType, formData)
          if (objectEvent.length) {
            this.objectEvent = objectEvent
          }
          if (arrayEvent.length) {
            this.arrayEvent = arrayEvent
          }
        }
      }
    },
    eventType() {
      this.objectEvent = [...INITIAL_OBJECT_EVENT]
      this.arrayEvent = [...INITIAL_ARRAY_EVENT]
    },
  },

  methods: {
    onFormDataChange(trigger, params) {
      this.$emit('formDataChange', trigger, {
        ...params,
        formData: this.formData,
      })
    },

    onCategoryChange(val) {
      if (this.categories.includes(val)) {
        const current = CATEGORY_OPTIONS.find(t => t.value === val)
        this.$message.warning(`${current.label} already exist`)
        return
      }
      CATEGORY_OPTIONS.map((item) => {
        delete this.formData[item.value]
      })
      const value = INITIAL_CATEGORY[val]
      if (Array.isArray(value)) {
        this.formData[val] = [...value]
      } else if (typeof value === 'object') {
        this.formData[val] = { ...value }
      } else {
        this.formData[val] = value
      }
      this.formData.category = val

      if (val === 'event') {
        this.objectEvent = [...INITIAL_OBJECT_EVENT];
        this.arrayEvent = [...INITIAL_ARRAY_EVENT];
      }
      this.onFormDataChange('category');
    },

    // // 类名说明
    // getClassNameIntroduction() {
    //   const { apiInfo } = this
    //   const { className } = this.formData
    //   if (typeof className === 'string') {
    //     return `${apiInfo.component}.${apiInfo.field_name} 的值是类名的一部分，其中 \${item} 表示替换类名的值`
    //   } else if (Array.isArray(className)) {
    //     if (typeof className[0] === 'object' && className[0].value) {
    //       return `不同的值，期望不同的根元素（或子元素）对应不同的类名`
    //     } else {
    //       return `当值分别为 ${apiInfo.field_enum} 时，期望类名分别为 ${className.join('/')}`
    //     }
    //   }
    // },

    // 类名规则推荐（TODO: 待完善文档）
    getClassNameRecommend() {
      return [
        `不同的值，期望不同的根元素（或子元素）存在不同的类名。`,
        `推荐规则一：t-button--variant-\${item}。存在枚举值，值为类名的一部分`,
        `推荐规则二：["t-size-s", "t-size-m", "t-size-l"]。存在枚举值。如果期望 t-size-m 不存在，请设置 [{ "t-size-m": false }]`,
        `推荐规则三：{ "underline": "t-link--hover-underline" }。不存在枚举值。`,
        // ，点击下方高级设置
        `推荐规则四：[{ "value": "'tdesign-class'", "expect": [{"dom": "tbody > tr", "className": { "tdesign-class": true }}] }]。不同的值对应多个不同的元素和类名。【注意】这个规则，不需要填写下方的 「类名规则应用的 HTML 元素」`,
      ]
    },

    // 属性规则推荐
    getAttributeRecommend() {
      return [
        '属性规则：',
        '不同的值，期望不同的根元素（或子元素）存在不同的属性。元素的 style/value/checked 等也属于属性测试。',
        '推荐规则一：{ "type": ["submit", "reset", "button"] }',
        '推荐规则二：{ "href": "https://tdesign.tencent.com/" }',
        '推荐规则三：[{ "value": "{ \'data-level\': \'level-1\' }", "expect": [{ "dom": "tbody > tr", "attribute": { "data-level": "level-1" }}] }]。其中，value 表示 API 的值，可以是函数或数组字符串。【注意】这个规则不需要下方的「属性规则应用的 HTML 元素」',
        '如果是 style，直接使用 "style.flexWrap": "wrap" 即可'
      ]
    },

    // Element/Dom 元素检测规则
    getDomRecommend() {
      return [
        '元素校验规则：',
        '推荐规则一：["button", "a", "div"]。存在枚举值，依次验证这几个元素是否存在。如：Button.tag',
        '推荐规则二：["tfoot.t-table__footer", { "tfoot > tr": 2 }]。直接校验组件实例是否存在这些元素，数字表示存在几个',
        '推荐规则三：{ "[3, 1]": { ".t-table__row--fixed-top": 3 } }。表示值为 [3, 1] 时，校验 .t-table__row--fixed-top 是否存在 3 个',
        '注意：如果元素不在组件内部，只能通过 document 查询，可以设置 "document.t-popup"',
      ]
    },

    getDomMoreTips() {
      return [
        '[".t-image"] 期望元素 .t-image 存在',
        '[{ ".t-image": false }] 期望元素 .t-image 不存在',
        '[{ ".t-image": 3 }] 期望元素 .t-image 存在 3 个',
        '[{ ".t-image": { "text": "+1" } }] 期望元素 .t-image 存在文本 +1',
        '[{ ".t-input": { "attribute": { "value": "input value" } } }] 期望元素 .t-image 的属性 value 值为 "input value"',
      ];
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
      this.arrayEvent.splice(index + 1, 0, { props: '', expect: [{ trigger: '', event: '', exist: '' }] })
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
        } catch (e) {
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
        } catch (e) {
          return
        }
      }
      this.onFormDataChange('event', { objectEvent: this.objectEvent })
    },

    onEventExpectAdd(expectData, expectIndex, eventIndex) {
      this.eventExpectMode = 'add'
      this.showEventExpectDialog({...INITIAL_ARRAY_EVENT[0].expect}, expectIndex, eventIndex)
    },

    onEventExpectEdit(expectData, expectIndex, eventIndex) {
      this.eventExpectMode = 'edit'
      this.showEventExpectDialog(expectData, expectIndex, eventIndex)
    },

    onEventExpectDelete(expectIndex, eventIndex) {
      this.arrayEvent[eventIndex].expect.splice(expectIndex, 1)
    },

    showEventExpectDialog(expectData, expectIndex, eventIndex) {
      this.currentExpectData = {
        expectData: { ...expectData },
        expectIndex,
        eventIndex,
      }
      this.eventExpectVisible = true
    },

    onEventExpectChange(eventData) {
      const { expectIndex, eventIndex } = this.currentExpectData
      if (this.eventExpectMode === 'edit') {
        this.$set(this.arrayEvent[eventIndex].expect, expectIndex, eventData)
      } else if (this.eventExpectMode === 'add') {
        // this.$set(this.arrayEvent[eventIndex].expect, expectIndex + 1, eventData)
        this.arrayEvent[eventIndex].expect.push(eventData)
      }
      this.onFormDataChange('event', { arrayEvent: this.arrayEvent })
    },

    onEventPropsChange() {
      this.onFormDataChange('event', { arrayEvent: this.arrayEvent })
    },

    getEventName(event) {
      if (typeof event === 'string') {
        const eventJSON = parseJSON(event, {})
        return Object.keys(eventJSON).map(name => getEventName(name)).join('、')
      }
      return event
    },

    getEventDescription(expect) {
      const expectDesc = this.getExpectDesc(expect.exist)
      return [
        expect.trigger && `触发 ${expect.trigger}`,
        expect.delay && `延迟 ${expect.delay === 'true' ? 300 : expect.delay} 毫秒之后`,
        expectDesc,
        expect.event && `期望 ${this.getEventName(expect.event)} 等事件处理函数被执行，以及相关参数正确`
      ].filter(v => v).join('，') + '。';
    },

    getExpectDesc(expectExistStr) {
      const exist = parseJSON(expectExistStr, [])
      const expectExist = []
      const expectNotExist = []
      const attributeExist = []
      exist?.forEach((item) => {
        if (!item) return;
        if (typeof item === 'string') {
          expectExist.push(item)
        } else if (typeof item === 'object') {
          const keys = Object.keys(item)
          console.log(keys);
          if (item[keys[0]] === false) {
            expectNotExist.push(keys[0])
          } else if (item[keys[0]].attribute) {
            const list = [];
            keys.forEach((dom) => {
              Object.keys(item[dom].attribute).forEach((attributeName) => {
                list.push({
                  dom,
                  attributeName: attributeName,
                  attributeValue: item[dom].attribute[attributeName],
                });
              })
            })
            attributeExist.push(...list);
          } else [
            expectExist.push(keys[0])
          ]
        }
      })
      return [
        expectExist.length && `期望 ${expectExist.join('、')} 等元素存在`,
        expectNotExist.length && `期望 ${expectNotExist.join('、')} 等元素不存在`,
        attributeExist.length && attributeExist.map((item) => (
          `期望元素 ${item.dom} 的属性 ${item.attributeName} 值为 ${item.attributeValue}`
        )).join('，'),
      ].filter(v => v).join('，');
    },
  },
};
</script>

<style>
.unit-test-ui__one-unit-test {
  background-color: #efefef;
  padding: 16px;
}

.unit-test-ui__one-unit-test+.unit-test-ui__one-unit-test {
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

.unit-test-ui__one-object-event+.unit-test-ui__one-object-event {
  margin-top: 8px;
}

.test-card-array-event+.test-card-array-event {
  margin-top: 8px;
}
</style>
