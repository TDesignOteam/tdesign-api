<template>
  <div class="platform-type">
    <t-radio-group v-model:value="platform">
      <t-radio
        v-for="(item, index) in platformOptions"
        :key="index"
        :value="item.value"
      >{{item.label}}</t-radio>
    </t-radio-group>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  platformOptions: {}
})

const emit = defineEmits(['update:modelValue'])

const platform = ref('')

watch(() => props.modelValue, (val) => {
  platform.value = val
}, { immediate: true })

watch(platform, (val) => {
  emit('update:modelValue', val)
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
