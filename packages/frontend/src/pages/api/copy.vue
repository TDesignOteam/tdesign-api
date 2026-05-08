<template>
  <div class="platform-type">
    <t-radio-group v-model="modelValue">
      <t-radio v-for="(item, index) in platformOptions" :key="index" :value="item.value">{{ item.label }}</t-radio>
    </t-radio-group>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  platformOptions: {}
})

const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
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
