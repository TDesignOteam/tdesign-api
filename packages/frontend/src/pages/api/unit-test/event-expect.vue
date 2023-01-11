<template>
  <t-dialog
    :visible="visible"
    :header="eventExpectMode === 'edit' ? '创建人机交互' : '新增人机交互'"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <t-input v-model="eventData.trigger" placeholder="用户操作事件，示例：mouseenter(.t-input)"></t-input>

    <t-tooltip theme="light">
      <template #content>JSON 数组。示例：{ "exist": [".t-input__suffix-icon"] }</template>
      <t-tag-input v-model="eventData.exist" placeholder="选填，用户操作事件触发后，期望哪些元素存在，标签输入" style="margin-top: 16px"></t-tag-input>
    </t-tooltip>

    <t-tooltip theme="light">
      <template #content>
        <p>
          <p>格式：JSON。类型：{ string: Array }。示例：{
        "clear": [{ "stopPropagation": true }],
        "change": ["''", { "stopPropagation": true }]
        }。表示会同时触发 clear 和 change 等 2 个事件。注意，如果事件参数是字符串，需要额外加上单引号包裹。</p>
        <p>【注意】事件名为不带 on 的小驼峰</p>
        </p>
      </template>

      <t-textarea v-model="eventData.event" placeholder="选填，用户操作事件触发后，校验组件触发的多个事件及其参数" style="margin-top: 16px"></t-textarea>
    </t-tooltip>

    <t-tooltip theme="light" content="时间延迟多少毫秒触发。示例值：300/400/500..." placement="top-left">
      <t-input v-model="eventData.delay" placeholder="时间延迟多少毫秒触发，低于 300 毫秒可不填" style="margin-top: 16px"></t-input>
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
        this.eventData.exist = this.eventData.exist || []
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
