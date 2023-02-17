# 写在前面

此组件的开发受到 GitHub：table-view 组件的启发
此组件完全是基于 Element UI 的 table 组件的风格来写，只有极个别的会有点区别，会列在在面，所以你完全不用担心学习成本，只需要花费一根烟的功夫即可学会~~~

组件在 src->components->table 中

# 版本

vue：2.6.14
element ui：2.15.11

# 区别

下面列出的是和官网不一样的，其余的 table 相关的属性和方法和官方一样，直接查询官网即可

## <m-table>

**Table Attribute**

| 参数        | 说明                                     | 类型   | 默认值 | 可选值                    |
| ----------- | ---------------------------------------- | ------ | ------ | ------------------------- |
| columns     | 表格列名称                               | Array  | any[]  | -                         |
| columnAlign | 表格的对齐方式                           | sting  | "left" | "left"、"right"、"center" |
| value.sync  | 当页数、页码发生变化，会自动获取变化的值 | Object | {}     | -                         |

**Table Events**

| 参数        | 说明                     | 回调     |
| ----------- | ------------------------ | -------- |
| sort-change | currentPage 改变时会触发 | 每页条数 |
| size-change | pageSize 改变时会触发    | 当前页   |

**Table Methods**

| 参数           | 说明                                                    | 参数 |
| -------------- | ------------------------------------------------------- | ---- |
| setPageCurrent | currentPage 改变时候调用此方法，value.sync 的值发生变化 | curr |
| setPageSize    | pageSize 改变时候调用此方法，value.sync 的值发生变化    | size |

# 传入的 columns 的 json 数据格式

- el-table-column 的属性被放在了 `elProps` 对象中
- columns 对象中的 type 当前版本 只允许写 'selection' 和 'index', 比官方少了一种类型

##

```javascript
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
  },
  {
    label: '口号',
    prop: 'slogan',
  },
]
```

# 动态列的使用

如果你遇到了某一列需要自定义的时候，那么你有两种做法，`render` 函数和`插槽`（`render 函数的优先级总是高于插槽`）

## render 函数

```javascript
export const colunms = [
  {
    type: 'selection',
  },
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '地址',
    prop: 'address',
    elProps: {
      width: '200px',
      'show-overflow-tooltip': false,
    },

    render(h, scope) {
      return h(
        'div',
        {
          style: {
            color: 'red',
            'text-align': 'right',
          },
        },
        123
      )
    },
  },
]
```

## 插槽

- 插槽的名称就是你 columns 中每个对象的 prop
- 比如现在需要对 age 这列进行特殊操作,如下所示

```html
<div class="home">
  <m-table ref="mtable" :columns="colunms">
    <template #gae="row">
      <p>{{ row }}</p>
    </template>
  </m-table>
</div>
```

# 使用 json 形式驱动

使用这种方式进行渲染，需要在页面进行一部操作 详情看示例代码，jsonView.vue 文件

render 类型 后续有别的需求自己添加即可，

| 参数    | 说明                             | 是否必填 | 可选值                                         |
| ------- | -------------------------------- | -------- | ---------------------------------------------- |
| label   | 表格标题                         | 是       | -                                              |
| prop    | 表格标题对应的字段               | 是       | -                                              |
| render  | 表格列的类型                     | 否       | textLink \| textTag \| textLight \| textFormat |
| type    | 表格列的类型（element 自带类型） | 否       | selection \| index                             |
| elProps | 表格列属性                       | 否       | 同官网                                         |
|         |                                  |          |                                                |

```javascript
export const tableCol = [
  {
    label: '序号',
    type: 'selection',
  },
  {
    label: '序号',
    type: 'index',
    elProps: {
      width: '50',
    },
  },
  {
    label: '文章名称',
    prop: 'a',
    render: 'textLink',
  },
  {
    label: '文章地址',
    prop: 'b',
    render: 'textTag',
    colorType: 'primary',
  },
  {
    label: '公众号',
    prop: 'c',
    elProps: {
      width: '160px',
    },
    render: 'textFormat',
  },
  {
    label: '发布时间',
    prop: 'd',
    render: 'textLight',
    colorType: 'danger',
  },
  {
    label: '发布时间',
    prop: 'e',
  },
  {
    label: '操作',
    prop: 'config',
  },
]
```
