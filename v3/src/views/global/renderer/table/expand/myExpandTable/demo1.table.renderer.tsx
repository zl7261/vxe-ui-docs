// main.js

import { VxeUI } from 'vxe-pc-ui'
import DemoExpandTable from './DemoExpandTable.vue'

// 创建一个展开表格渲染器
VxeUI.renderer.add('MyExpandTable', {
  // 默认显示模板
  renderTableExpand (h, renderOpts, params) {
    return <DemoExpandTable params={ params } />
  }
})
