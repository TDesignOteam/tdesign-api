<template>
  <t-dialog
    :visible="visible"
    :header="eventExpectMode === 'edit' ? '创建人机交互' : '新增人机交互'"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <t-tooltip theme="light">
      <template #content>
        <p>
          一般事件：
          <t-link
            href="https://github.com/vuejs/test-utils/blob/main/src/constants/dom-events.ts#L566"
            target="_blank"
            theme="primary"
          >所有交互操作(事件)</t-link>
        </p>

        <p>Document 模拟事件：simulateKeydownEvent(document, 'ArrowDown')</p>
        <p>Document 模拟事件：simulateKeydownEvent(document, 'Enter')</p>
        <p>输入框文本输入模拟事件：simulateInputChange('input', 'Input Text')</p>
        <p>文件选择模拟事件：simulateFileChange('input', 'file', 1)，第二个和第三个参数可选</p>
      </template>
      <t-input v-model="eventData.trigger" placeholder="选填，交互操作，示例：mouseenter(.t-input)"></t-input>
    </t-tooltip>

    <t-tooltip theme="light">
      <template #content>
        <p>
          <p>格式：JSON。</p>
          <p>[".t-image"] 期望元素 .t-image 存在</p>
          <p>[{ ".t-image": false }] 期望元素 .t-image 不存在</p>
          <p>[{ ".t-image": 3 }] 期望元素 .t-image 存在 3 个</p>
          <p>[{ ".t-image": { "text": "+1" } }] 期望元素 .t-image 存在文本 +1</p>
          <p>[{ ".t-input": { "attribute": { "value": "input value" } } }] 期望元素 .t-image 的属性 value 值为 "input value" </p>
        </p>
      </template>
      <t-input v-model="eventData.exist" placeholder="选填，校验元素" style="margin-top: 16px"></t-input>
    </t-tooltip>

    <t-tooltip theme="light">
      <template #content>
        <p>
          <p>格式：JSON。</p>
          <p>示例：{
        "clear": [{ "stopPropagation": true }],
        "change": ["''", { "stopPropagation": true }]
        }。表示会同时触发 clear 和 change 等 2 个事件。注意，如果事件参数是字符串，需要额外加上单引号包裹。</p>
        <p>【注意】事件名为不带 on 的小驼峰</p>
        </p>
      </template>

      <t-textarea v-model="eventData.event" placeholder="选填，组件触发事件及其参数" style="margin-top: 16px"></t-textarea>
    </t-tooltip>

    <t-tooltip theme="light" content="时间延迟多少毫秒触发。示例值：300/400/500...低于 300 毫秒可不填" placement="top-left">
      <t-input
        v-model="eventData.delay"
        placeholder="选填，延迟时间"
        suffix="毫秒"
        style="margin-top: 16px"
      ></t-input>
    </t-tooltip>
  </t-dialog>
</template>

<script>
export default {
  name: 'UnitTestExpect',

  props: {
    visible: Boolean,
    eventExpect: Object,
    eventExpectMode: String,
  },

  data() {
    return {
      eventData: {}
    }
  },

  watch: {
    eventExpect: {
      immediate: true,
      handler(eventExpect) {
        this.eventData = { ...eventExpect }
        this.eventData.exist = this.eventData.exist || ''
      }
    }
  },

  methods: {
    onConfirm() {
      this.$emit('confirm', this.eventData)
      this.$emit('update:visible', false)
    },
    onCancel() {
      this.$emit('update:visible', false)
    },
  },
};
</script>


<style lang='less'>

</style>
