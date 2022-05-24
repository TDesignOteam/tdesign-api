<template>
  <div class="platform-type">
    <t-radio-group v-model="platform">
      <t-radio
        v-for="(item, index) in platformOptions"
        :key="index"
        :value="item.value"
      >{{item.label}}</t-radio>
    </t-radio-group>
  </div>
</template>

<script>
export default {
  name: 'ApiCopy',

  components: {},

  props: {
    value: String,
    platformOptions: {}
  },

  data () {
    return {
      platform: ''
    }
  },

  computed: {},

  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.platform = val
      }
    },
    platform (val) {
      this.$emit('input', val)
    }
  },

  methods: {}
}
</script>

<style lang="less">
.platform-type {
  padding: 8px;
  .t-radio {
    display: block;
    margin-bottom: 8px;
  }
}
</style>
