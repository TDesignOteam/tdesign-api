<template>
  <div class="API-Preview tdesign-document">
    <t-table :data="list" :columns="columns" rowKey='id' tableLayout="auto" hover>
      <template #component="{ row = {} }">
        <div>
          <div>
            <span style="padding-right: 8px;">{{ row.component }}</span>
            <t-tag
              v-if="row.field_category_text"
              size="small"
              :theme="{
                Props: 'primary',
                Events: 'success',
                Functions: 'warning',
                Return: 'default',
                Extends: 'default',
                '<T>': 'default',
              }[row.field_category_text] || 'primary'"
              variant="light"
            >
              {{ row.field_category_text }}
            </t-tag>
          </div>
        </div>
      </template>
      <!-- 字段描述 -->
      <template #field_desc_zh="{ row = {} }">
        <div>
          <p>
            <template v-if="row.deprecated">已废弃。</template>
            <template v-if="row.html_attribute">HTML 原生属性。</template>
            <template v-if="row.field_required">必需。</template>
            {{row.field_desc_zh}}
          </p>
          <template v-if="row.field_enum"><p>可选值：{{row.field_enum}}。</p></template>
          <template v-if="row.custom_field_type"><p>TS 类型定义：{{row.custom_field_type}}。</p></template>
          <template v-if="row.event_input"><p>
            参数：{{row.event_input}}
          </p></template>
          <template v-if="row.event_output"><p>
            返回值：{{row.event_output}}
          </p></template>
          <p>
            <template v-if="row.syntactic_sugar">
              支持 Vue 语法糖：{{row.syntactic_sugar}}。
            </template>
            <template v-if="row.support_default_value">支持非受控属性。</template>
          </p>

          <p style="font-size: 12px; color: #a6a6a6;">
            {{ row.platform_framework_text.join(', ') }}
          </p>
          <p v-if="row.version" style="font-size: 12px; color: #a6a6a6;">
            版本号：{{ row.version }}
          </p>
        </div>
      </template>
      <template #field_type_text="{ row }">
        {{ row.field_type_text && row.field_type_text.join('/') }}
      </template>

      <!-- 平台 -->
      <!-- 总共 7 个平台框架 -->
      <!-- <template #platform_framework="{ row = {} }">
        <div class="t-demo-platforms" v-if="row" style="font-size: 12px">
          <span v-if="row.platform_framework_text.length === 7">全部</span>
          <template v-else>
            <span v-for="(item, index) in row.platform_framework_text" :key="index">
              {{item}}&nbsp;&nbsp;
            </span>
          </template>
        </div>
      </template> -->
      <!-- 操作列 -->
      <template #operation="data">
        <div>
          <div class="t-demo-table-btns">
            <!-- <t-popup showArrow placement='top'>
              <t-button variant="text" @click="() => onCodePreivew(data, 'Vue(PC)')">代码</t-button>
              <div slot="content">
                <t-button variant="text" @click="() => onCodePreivew(data, 'Vue(PC)')">Vue(PC)</t-button>
                <t-button variant="text" @click="() => onCodePreivew(data, 'React(PC)')">React(PC)</t-button>
                <t-button variant="text" @click="() => onCodePreivew(data, 'Miniprogram')">Miniprogram</t-button>
                <t-button variant="text" @click="() => onCodePreivew(data, 'Vue(Mobile)')">Vue(Mobile)</t-button>
              </div>
            </t-popup> -->
            <t-button variant="text" theme="primary" @click="() => onEditClick(data)">Edit</t-button>
            <t-button variant="text" theme="primary" @click="() => onTestsEditClick(data)">Tests</t-button>
            <t-popconfirm theme="danger" content="确定删除吗？" trigger="click" @confirm="() => onDeleteConfirm(data)">
              <t-button variant="text" theme="danger" style="margin-left: 8px">Delete</t-button>
            </t-popconfirm>
          </div>

          <div style="font-size: 12px; color: #a6a6a6;">
            {{ data.row.update_time }}
          </div>
        </div>
      </template>
    </t-table>

  </div>
</template>

<script>
import { cmpApiInstance } from '../../services/api-server'
import {
  BaseTable as TTable,
  Button as TButton,
  Popconfirm as TPopconfirm
} from 'tdesign-vue'

export default {
  name: 'ApiList',

  components: {
    TTable,
    TButton,
    TPopconfirm
  },

  props: {
    list: Array,
    platformOptions: Array,
    preview: Boolean
  },

  computed: {
    columns () {
      return this.getCols()
    }
  },

  watch: {},

  methods: {
    getCols () {
      const columns = [
        {
          title: '组件/插件',
          colKey: 'component',
          fixed: 'left',
          width: 200,
        },
        // {
        //   title: '分类',
        //   colKey: 'field_category_text',
        // },
        // {
        //   title: '平台框架',
        //   colKey: 'platform_framework',
        // },
        {
          title: '名称',
          colKey: 'field_name',
        },
        {
          title: '描述',
          colKey: 'field_desc_zh',
        },
        {
          title: '类型',
          colKey: 'field_type_text',
        },
        {
          title: '默认值',
          colKey: 'field_default_value',
          width: 90,
        },
        // {
        //   title: '更新时间',
        //   colKey: 'update_time',
        //   width: 136,
        // }
      ]
      if (!this.preview) {
        columns.push({
          title: '操作',
          colKey: 'operation',
          fixed: 'right',
        })
      }
      return columns
    },
    onCreate () {
      this.$emit('create-api')
    },
    onDeleteConfirm (data) {
      // console.log(data);
      cmpApiInstance({
        url: '/cmp/api',
        method: 'delete',
        data: {
          id: data.row.id
        }
      }).then(() => {
        this.$message.info('删除成功！')
        this.$emit('delete-api-success')
      })
    },
    onEditClick (data) {
      this.$emit('click-edit-btn', data)
    },
    onTestsEditClick (data) {
      this.$emit('click-test-edit-btn', data)
    },
    onCodePreivew (data, framework) {
      this.$emit('code-preview', data, framework)
    }
  }
}
</script>

<style lang="less">
div.tdesign-document.API-Preview  {
  padding: 32px 16px;
  background-color: #ffffff;
  width: 100%;
  max-width: 2000px;
  .t-table .t-table-content {
    overflow: auto;
  }
  .t-demo-table-btns {
    display: flex;
    justify-content: space-between;
    width: 138px;
    .t-button {
      padding: 0;
    }
  }
  .t-table-content + b {
    width: 100%;
    padding: 50px;
    display: block;
    font-weight: normal;
    text-align: center;
  }

  p {
    margin: 8px 0;
  }
}
.t-demo-platforms {
  padding: 16px;
  p {
    margin: 4px 0;
  }
}
</style>
