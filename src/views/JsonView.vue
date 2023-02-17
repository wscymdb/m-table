<template>
  <div class="home">
    <m-table :data="data" :columns="columns">
      <template #config>
        <el-button>操作</el-button>
      </template>
    </m-table>
  </div>
</template>

<script>
import MTable from '@/components/table'
// import MTable from "./Table.vue";
import { tableColJson } from './schema/tableColumn'
import type from '@/components/table/type'
export default {
  name: 'HomeView',
  components: {
    'm-table': MTable,
  },

  data() {
    return {
      columns: [],

      pager: {},
      data: [
        {
          a: '忍者无敌忍者无敌忍者无敌忍者无敌忍者无敌忍者无敌',
          b: '民生',
          c: new Date(),
          d: '异常',
          e: '技术的饭卡塑料袋放进扩大飞机开JFK时间覅二骄傲覅欸哦就发哦i附件欸i减肥急急急',
        },
      ],
    }
  },

  created() {
    this.columns = this.disposeTableColumn(tableColJson)
  },
  methods: {
    disposeTableColumn(list) {
      if (!list instanceof Array) return
      return list.map((item) => {
        if (item.render) {
          item.render = type[item.render]
        }
        return item
      })
    },
  },
}
</script>

<style scoped></style>
