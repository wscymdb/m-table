<script>
export default {
  name: 'YTable',
  props: {
    columns: {
      type: Array,
      require: true,
      validator(column) {
        const types = ['selection', 'index']
        return column.every((col) => {
          if (col.type && types.includes(col.type)) return true
          return col.label && col.prop
        })
      },
    },
    data: {
      type: Array,
      default: () => [],
    },
    columnAlign: {
      type: String,
      default: 'left',
    },
  },
  methods: {
    getTableInstance() {
      return this.$refs['mTableRef']
    },
  },
  render(h) {
    const allSlots = { ...this.$slots, ...this.$scopedSlots }

    const columns = this.columns.map((column, idx) => {
      const columnSlot = allSlots[column.prop]

      return h('el-table-column', {
        // key 在新旧nodes对比时候辨识VNodes ，提升页面渲染性能
        key: column.prop,
        props: {
          type: column.type,
          label: column.label,
          prop: column.prop,
          align: this.columnAlign,
          'show-overflow-tooltip': true,
          ...(column.elProps || {}),
        },
        // 插槽
        scopedSlots:
          column.render || columnSlot
            ? {
                default: (props) => {
                  const scope = {
                    row: props.row,
                    column: props.column,
                    rowIdx: props.$index, // 行序号
                    // 上面三个属性 是element官网插槽给的
                    colIdx: idx, // 列序号
                    val: props.row[column.prop],
                    props: column,
                  }

                  return column.render
                    ? column.render(h, scope)
                    : columnSlot(scope)
                },
              }
            : {},
      })
    })
    const table = h(
      'el-table',
      {
        ref: 'mTableRef',
        props: {
          data: this.data,
          border: true,
          ...this.$attrs,
        },

        // 事件监听
        on: {
          ...this.$listeners,
        },
      },
      columns
    )

    return table
  },
}
</script>
