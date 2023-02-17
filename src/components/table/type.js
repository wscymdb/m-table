import { typeMap, PRIMARY_COLOR, formateTime } from './utils.js'

const types = {
  textLink: function (h, { val, props }) {
    const type = props.colorType ?? PRIMARY_COLOR
    return h(
      'span',
      {
        props: {},
        class: {
          'is-underline': true,
          'el-link': true
        },
        style: {
          color: type,
          display: 'inline'
        }
      },
      val
    )
  },
  textTag: function (h, { val, props }) {
    const type = props.colorType ?? 'primary'
    return h(
      'el-tag',
      {
        props: {
          type,
          plain: true,
          size: 'small'
        },
        style: {}
      },
      val
    )
  },
  textLight: function (h, { val, props }) {
    const type = typeMap[props.colorType] ?? PRIMARY_COLOR
    return h(
      'div',
      {
        style: {
          display: 'flex',
          'align-items': 'center',
          color: type
        }
      },
      [
        h('div', {
          style: {
            width: '4px',
            height: '4px',
            'margin-right': '5px',
            'border-radius': '50%',
            'background-color': type
          }
        }),
        val
      ]
    )
  },
  textFormat: function (h, { val, props }) {
    return h('span', formateTime(val))
  }
}

export default types
