<template>
  <div>
    <!-- 表格 -->
    <m-table
      :columns="columns"
      :data="data"
      v-bind="$attrs"
      v-on="tableListeners"
    >
      <!-- 是否有插槽 -->
      <template v-for="slotName in columnSlots" #[slotName]="row">
        <slot :name="slotName" v-bind="row"></slot>
      </template>
    </m-table>
    <div class="pagination">
      <el-pagination
        v-on="paginationListeners"
        :current-page="pager.current"
        :page-size="pager.pageSize"
        :page-sizes="pageSizes"
        :layout="layout"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Table from '@/components/table/Table.vue'
export default {
  name: 'MTable',
  props: {
    columns: {
      require: true,
      type: Array,
    },
    data: {
      type: Array,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100, 200],
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    total: {
      type: Number,
      default: 0,
    },
  },

  components: {
    'm-table': Table,
  },
  data() {
    return {
      pager: {
        current: 1,
        pageSize: 10,
      },
    }
  },
  methods: {
    filterListeners(type) {
      const paginationEvents = ['current-change', 'size-change']
      const tableEvents = Object.keys(this.$listeners).filter(
        (item) => !paginationEvents.includes(item)
      )
      const paginationListeners = {}
      const tableListeners = {}

      this.enumListeners(paginationEvents, paginationListeners)
      this.enumListeners(tableEvents, tableListeners)

      return type === 'table' ? tableListeners : paginationListeners
    },
    enumListeners(eventsList, listeners) {
      eventsList.forEach((item) => {
        const event = this.$listeners[item]
        if (event) listeners[item] = event
      })
    },
    // 页码变化
    setPageCurrent(val) {
      this.pager.current = val
    },
    // 条数变化
    setPageSize(val) {
      this.pager.pageSize = val
    },
  },
  computed: {
    allSlots() {
      return { ...this.$slots, ...this.$scopedSlots }
    },
    columnSlots() {
      const columnProps = this.columns.map((item) => item.prop)

      return Object.keys(this.allSlots).filter((item) =>
        columnProps.includes(item)
      )
    },
    tableListeners() {
      return this.filterListeners('table')
    },
    paginationListeners() {
      return this.filterListeners('pagination')
    },
  },
  watch: {
    pager: {
      handler(curr) {
        console.log(curr)
        this.$emit('update:value', curr)
      },
      deep: true,
    },
  },
}
</script>

<style scoped>
.pagination {
  margin-top: 20px;
  text-align: right;
}
</style>
