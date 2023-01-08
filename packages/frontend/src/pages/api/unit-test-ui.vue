<template>
  <div class="unit-test-ui">
    <t-tabs v-model="framework" :list="frameWorkOptions"></t-tabs>
    <br/>
    <t-card>
      <t-form>
        <t-form-item label="测试目标">
          <t-radio-group v-model="formData.goal">
            <t-radio-button v-for="item in testCategoryOptions" :value="item.value" :key="item.value">
              <t-tooltip :content="item.tips">
                <span>{{ item.label }}</span>
              </t-tooltip>
            </t-radio-button>
          </t-radio-group>
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>

<script>
const INITIAL_FROM_DATA = {
  goal: 'tnode',
}

export default {
  name: 'UnitTestUI',

  data() {
    return {
      // PC/Mobile
      framework: 'PC',
      formDataPC: {...INITIAL_FROM_DATA},
      formDataMobile: {...INITIAL_FROM_DATA},
      frameWorkOptions: [
        { label: 'PC', value: 'PC' },
        { label: 'Mobile', value: 'Mobile' },
      ],
      testCategoryOptions: [
        { label: 'TNode', value: 'tnode', tips: '用于校验自定义节点' },
        { label: '类名', value: 'className', tips: '用于校验某个元素（或子元素）是否存在某些类名' },
        { label: '属性', value: 'attribute', tips: '用于校验某个元素（或子元素）是否存在某些属性' },
        { label: '元素', value: 'dom', tips: '用于校验满足一定条件后，是否存在某些子元素' },
        { label: '人机交互', value: 'event', tips: '用于校验触发某些事件后，事件函数是否正常触发，以及相关元素本身、类名、属性等是否存在' },
      ],
    }
  },

  computed: {
    formData() {
      return {
        PC: this.formDataPC,
        Mobile: this.formDataMobile,
      }[this.framework]
    },
  },
};
</script>

<style>
.unit-test-ui .t-form__label {
  text-align: left;
}
</style>
