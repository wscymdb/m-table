export const colunms = [
  {
    type: 'selection',
  },
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '年龄',
    prop: 'age',
    elProps: {
      sortable: 'custom',
    },
  },
  {
    label: '地址',
    prop: 'address',
    elProps: {
      width: '200px',
      'show-overflow-tooltip': false,
    },

    // render(h, scope) {
    //   return h(
    //     'div',
    //     {
    //       style: {
    //         color: 'red',
    //         'text-align': 'right',
    //       },
    //     },
    //     123
    //   )
    // },
  },
  {
    label: '口号',
    prop: 'slogan',
    // width: '120px',
  },
]

export const tableData = [
  {
    name: 'zs',
    age: 19,
    address: '河南省',
    slogan:
      '哎呦 你干嘛 及你太吗 太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美太美',
  },
  {
    name: 'zs',
    age: 12,
    address: '河南省',
    slogan: '哎呦 你干嘛 ',
  },
]
