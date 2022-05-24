<template>
  <div class="t-api-tool__multi-operations">
    <t-button theme="primary" @click.native="onCreateApi">新增 API</t-button>
    <a href="https://km.woa.com/group/47631/articles/show/478392" target="_blank" class="link">
      <t-button variant="text" style="color: #99999;">
        组件 API 设计规范
      </t-button>
    </a>
    <!-- <t-popconfirm trigger="click">
      <t-button theme="primary" size="small">Copy Code</t-button>
      <div slot="content">
        <api-copy v-model="codeType" :platformOptions="map.platform_framework"></api-copy>
      </div>
    </t-popconfirm>
    <t-popconfirm trigger="click">
      <t-button theme="primary" size="small">Copy Markdown</t-button>
      <div slot="content">
        <api-copy v-model="codeType" :platformOptions="map.platform_framework"></api-copy>
      </div>
    </t-popconfirm>
    <t-button theme="primary" size="small">Copy Excel</t-button> -->

  </div>
</template>

<script>
import { Button as TButton } from 'tdesign-vue'

export default {
  name: 'ApiToolOperation',

  components: { TButton },

  props: {
    map: Object
  },

  data () {
    return {
      codeType: ''
    }
  },

  computed: {},

  watch: {},

  methods: {
    onCreateApi () {
      this.$emit('create-dialog-show')
    }
  }
}
</script>

<style lang="less">
.t-api-tool__multi-operations {
  display: flex;
  margin-bottom: 16px;
  .t-button {
    margin-right: 10px;
  }
  .link {
    text-decoration: none;
  }
  .link:hover {
    text-decoration: underline;
  }
}
</style>
