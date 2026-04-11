<template>
  <div class="tdesign-checkbox-indeterminate">
    <t-checkbox
      class="site-check-all"
      :checked="checkedAll"
      :indeterminate="indeterminate"
      @change="onCheckedAllChange"
    >全部</t-checkbox>
    <t-checkbox-group
      v-model="checkedList"
      :options="options"
      @change="onChange"
    ></t-checkbox-group>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Checkbox as TCheckbox, CheckboxGroup as TCheckboxGroup } from 'tdesign-vue-next'

const props = defineProps({
  options: Array,
  modelValue: {}
})

const emit = defineEmits(['update:modelValue'])

const indeterminate = ref(false)
const checkedList = ref([])

const checkedStr = computed(() => {
  return checkedList.value.join()
})

const checkedAll = computed(() => {
  const a1 = checkedList.value
  const a2 = props.options ? props.options.map(item => item.value) : []
  return a1.sort().join() === a2.sort().join()
})

watch(() => props.modelValue, (val) => {
  checkedList.value = val
}, { immediate: true })

watch(checkedStr, () => {
  emit('update:modelValue', checkedList.value)
})

function onCheckedAllChange(checked) {
  indeterminate.value = false
  checkedList.value = checked ? props.options.map(e => e.value) : []
}

function onChange(checkedListVal) {
  indeterminate.value = !!checkedListVal.length && !checkedAll.value
}
</script>

<style lang="less">
.site-check-all {
  margin-right: 20px;
}
</style>
