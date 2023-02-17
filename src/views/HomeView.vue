<template>
  <div class="home">
    <m-table
      ref="mtable"
      :value.sync="pager"
      :columns="colunms"
      columnAlign="right"
      :stripe="true"
      tooltip-effect="light"
      :data="tableData"
      :total="120"
      @cell-click="cellClick"
      @sort-change="sortChagne"
      @size-change="handleSizeChange"
    >
      <template #name="row">
        <p>{{ row }}</p>
      </template>
      <template #config>
        <el-button size="mini" type="primary">你干嘛</el-button>
        <el-button size="mini" type="success">及你太美</el-button>
      </template>
    </m-table>
  </div>
</template>

<script>
import MTable from '@/components/table'
// import MTable from "./Table.vue";
import { colunms, tableData } from './schema/tableColumn'
export default {
  name: 'HomeView',
  components: {
    'm-table': MTable,
  },

  data() {
    return {
      colunms,
      tableData,
      pager: {},
    }
  },

  methods: {
    cellClick(row) {
      console.log(row)
    },
    sortChagne(arg) {
      console.log(arg)
    },
    handleSizeChange(val) {
      this.$refs.mtable.setPageSize(val)
      console.log(val)
    },
  },
}
</script>

<style scoped></style>
