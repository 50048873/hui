<template>
  <div class="Menu1">
    <Title title="列表1（lsit1）" des="常用于移动端列表数据展示" theme="Title-theme1"></Title>
    <Title title="基础用法" des="基础的、简洁的列表"></Title>
    <HuiList1 :data="data" title1="水位：" unit1="m" title2="预警水位：" unit2="m"></HuiList1>
    <DocApi></DocApi>
  </div>
</template>

<script>
import HuiList1 from '@/components/HuiList1/HuiList1'
import data from '@/assets/data/HuiList1-data'
import Title from '@/pages/common/Title'
import DocApi from '@/pages/common/DocApi'
export default {
  name: 'Menu1',
  components: {
    HuiList1,
    Title,
    DocApi
  },
  methods: {
    initSingeDirectionData () {
      this.data = data
    }
  },
  created () {
    this.initSingeDirectionData()
  }
}
</script>

<!-- Add "scoped" DocApi to limit CSS to this component only -->
<style scoped lang="less">
  .Menu1 {
  }
</style>
