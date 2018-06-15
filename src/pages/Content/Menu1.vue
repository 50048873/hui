<template>
  <div class="Menu1">
    <Title title="菜单1（Menu1）" des="常用于移动端首屏的菜单"></Title>
    <Hui-Menu1 :data="data"></Hui-Menu1>
    <Doc></Doc>
  </div>
</template>

<script>
import HuiMenu1 from '@/components/HuiMenu1/HuiMenu1'
import data from '@/assets/data/HuiMenu1-data'
import Title from './common/Title'
import Doc from './common/Doc'
export default {
  name: 'Menu1',
  components: {
    HuiMenu1,
    Title,
    Doc
  },
  created () {
    this.data = data
  }
}
</script>

<!-- Add "scoped" Doc to limit CSS to this component only -->
<style scoped lang="less">
  .Menu1 {

  }
</style>
