<template>
  <div>
    <vxe-modal v-model="showPopup" title="标题" :width="600" :height="400" show-footer show-zoom>
      <template #title="{ minimized }">
        <div v-if="minimized" style="background: turquoise">窗口最小化</div>
        <div v-else style="background: turquoise">标题</div>
      </template>
      <template #corner>
        <div style="background: darkkhaki">标题右侧</div>
      </template>
      <template #aside>
        <div style="height:1400px;background: darkorchid">侧边栏</div>
      </template>
      <template #default>
        <div style="height:1400px;background: burlywood">内容区</div>
      </template>
      <template #left>
        <div style="height:1600px;background: khaki">左侧区</div>
      </template>
      <template #right>
        <div style="height:1000px;background: darkcyan">右侧区</div>
      </template>
      <!-- <template #footer>
        <div style="background: red">底部区，覆盖 leftfoot 和 rightfoot</div>
      </template> -->
      <template #leftfoot>
        <div style="background: hotpink">自定义底部左侧</div>
      </template>
      <template #rightfoot>
        <div style="background: orange">自定义底部右侧</div>
      </template>
    </vxe-modal>
    <vxe-button content="自定义插槽模板" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    openEvent () {
      this.showPopup = true
    }
  }
})
</script>
