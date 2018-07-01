<template>
  <div class="nav-left">
    <HuiNav1 :data="data"></HuiNav1>
  </div>
</template>

<script>
import data from './HuiNav1'

export default {
  name: 'navLeft',
  created () {
    this.data = data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .nav-left {

  }
</style>
