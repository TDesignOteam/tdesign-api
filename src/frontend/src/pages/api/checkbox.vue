<template>
  <div class="tdesign-checkbox-indeterminate">
    <t-checkbox
      class="site-check-all"
      :checked="checkedAll"
      :indeterminate="indeterminate"
      @change="onCheckedAllChange"
    >全部</t-checkbox>
    <t-checkbox-group
      name="city"
      v-model="checkedList"
      :options="options"
      @change="onChange"
    ></t-checkbox-group>
  </div>
</template>

<script>

import { Checkbox as TCheckbox, CheckboxGroup as TCheckboxGroup } from 'tdesign-vue'

export default {
  name: 'SiteCheckbox',

  components: {
    TCheckbox,
    TCheckboxGroup
  },

  props: {
    options: Array,
    value: {}
  },

  data () {
    return {
      // checkedAll: false,
      indeterminate: false,
      checkedList: []
    }
  },

  computed: {
    checkedStr () {
      return this.checkedList.join()
    },
    checkedAll () {
      const a1 = this.checkedList
      const a2 = this.options ? this.options.map(item => item.value) : []
      return a1.sort().join() === a2.sort().join()
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.checkedList = val
      }
    },
    checkedStr () {
      this.$emit('input', this.checkedList)
    }
  },

  methods: {
    onCheckedAllChange (checked) {
      this.indeterminate = false
      this.checkedList = checked ? this.options.map(e => e.value) : []
    },
    onChange (checkedList) {
      // console.log(checkedList.length, this.options.length);
      this.indeterminate = !!checkedList.length && !this.checkedAll
    }
  }
}
</script>

<style lang="less">
.site-check-all {
  margin-right: 20px;
}
</style>
