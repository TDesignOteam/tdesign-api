<template>
  <div ref="editorContainer"></div>
</template>

<script>
import CodeMirror from 'codemirror'

export default {
  name: 'CodemirrorWrapper',
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      editor: null
    }
  },

  watch: {
    value(newVal) {
      if (this.editor && this.editor.getValue() !== newVal) {
        this.editor.setValue(newVal)
      }
    }
  },

  mounted() {
    this.initEditor()
  },

  beforeUnmount() {
    if (this.editor) {
      this.editor.toTextArea()
    }
  },

  methods: {
    initEditor() {
      const defaultOptions = {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        viewportMargin: 20
      }

      this.editor = CodeMirror(this.$refs.editorContainer, {
        ...defaultOptions,
        ...this.options,
        value: this.value || ''
      })

      this.editor.on('change', (cm) => {
        this.$emit('update:modelValue', cm.getValue())
      })
    }
  }
}
</script>

<style>
.CodeMirror {
  height: auto;
}
</style>
