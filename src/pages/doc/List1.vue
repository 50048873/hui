<template>
  <div class="List1">
    <Title :title="docData.title" :des="docData.titleDes" theme="Title-theme1"></Title>
    <section v-for="(item, index) in docData.example" :key="index">
      <Title :title="item.title" :des="item.titleDes"></Title>
      <Example :code="item.code">
        <template v-if="index === 0">
          <HuiList1 :data="item.data"></HuiList1>
        </template>
        <template v-if="index === 1">
          <HuiList1 :data="item.data" theme="HuiList1-theme2"></HuiList1>
        </template>
      </Example>
    </section>
    <DocApi></DocApi>
  </div>
</template>

<script>
import Title from '@/pages/common/Title'
import DocApi from '@/pages/common/DocApi'
import Example from '@/pages/common/Example'
import docData from '@/assets/data/doc'
export default {
  name: 'List1',
  components: {
    Title,
    DocApi,
    Example
  },
  methods: {
    initSingeDirectionData () {
      let res = docData.filter((item) => {
        return item.id === this.$route.name.toLowerCase()
      })
      this.docData = res[0]
    }
  },
  created () {
    this.initSingeDirectionData()
  }
}
</script>

<!-- Add "scoped" DocApi to limit CSS to this component only -->
<style scoped lang="less">
  .List1 {
  }
</style>
