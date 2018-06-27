<template>
  <div class="nav-left">
    <HuiNav1 :data="data"></HuiNav1>
  </div>
</template>

<script>
import HuiNav1 from '@/components/HuiNav1/HuiNav1'
import data from './HuiNav1'

export default {
  name: 'navLeft',
  components: {
    HuiNav1
  },
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
