<template>
  <div>
    <p>tabs文档开发中...</p>
    <input type="text" v-model="testTabs" style="border:1px solid #ddd;">
    <hui-tabs :current.sync="current">
      <hui-tab label="标签1" index="1">
        <span slot="label">查抄标签</span>
        <div ref="content2">内容1{{testTabs}}</div>
      </hui-tab>
      <hui-tab label="标签2" index="2">
        <div>内容2{{testTabs}}</div>
      </hui-tab>
    </hui-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: '1',
      testTabs: ''
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.current = '2'
    // }, 2000)
  }
}
</script>
