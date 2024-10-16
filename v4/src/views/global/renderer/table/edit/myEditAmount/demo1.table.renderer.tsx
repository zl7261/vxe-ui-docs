// main.js

import { VxeUI } from 'vxe-table'
import DemoEditAmount from './DemoEditAmount.vue'

// 创建一个金额输入渲染器
VxeUI.renderer.add('MyTableEditAmount', {
  // 如果是输入框类型，可以设置为激活自动聚焦 class
  tableAutoFocus: 'input',
  // 可编辑激活模板
  renderTableEdit (renderOpts, params) {
    return <DemoEditAmount params={ params } />
  },
  // 可编辑显示模板
  renderTableCell (renderOpts, params) {
    const { row, column } = params
    return <span>￥{ row[column.field] }</span>
  }
})
