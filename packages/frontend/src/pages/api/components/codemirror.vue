<template>
  <div ref="editorContainer"></div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import CodeMirror from 'codemirror'

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  options: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

const editorContainer = ref(null)
let editor = null

watch(() => props.value, (newVal) => {
  if (editor && editor.getValue() !== newVal) {
    editor.setValue(newVal)
  }
})

onMounted(() => {
  initEditor()
})

onBeforeUnmount(() => {
  if (editor) {
    editor.toTextArea()
  }
})

function initEditor() {
  const defaultOptions = {
    tabSize: 4,
    mode: 'text/javascript',
    theme: 'base16-dark',
    lineNumbers: true,
    line: true,
    viewportMargin: 20
  }

  editor = CodeMirror(editorContainer.value, {
    ...defaultOptions,
    ...props.options,
    value: props.value || ''
  })

  editor.on('change', (cm) => {
    emit('update:modelValue', cm.getValue())
  })
}
</script>

<style>
.CodeMirror {
  height: auto;
}
</style>
