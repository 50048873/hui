<template>
  <div>
    <p>tabs文档开发中...</p>
    <hui-tabs :value="value">
      <hui-tab label="标签1" index="1">
        <span slot="label">查抄标签</span>
        <div>内容1</div>
      </hui-tab>
      <hui-tab label="标签2" index="2">
        <div>内容2</div>
      </hui-tab>
    </hui-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '1'
    }
  },
  mounted () {
    setTimeout(() => {
      this.value = '2'
    }, 2000)
  }
}
</script>
