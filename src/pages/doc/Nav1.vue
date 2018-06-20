<template>
  <div class="Nav1">
    <Title :title="docData.title" :des="docData.titleDes" theme="Title-theme1"></Title>
    <section v-for="(item, index) in docData.example" :key="index">
      <Title :title="item.title" :des="item.titleDes"></Title>
      <Example :code="item.code">
        <HuiNav1 :data="item.data"></HuiNav1>
      </Example>
    </section>
    <DocApi></DocApi>
  </div>
</template>

<script>
import Title from '@/pages/common/Title'
import DocApi from '@/pages/common/DocApi'
import HuiNav1 from '@/components/HuiNav1/HuiNav1'
import Example from '@/pages/common/Example'
import docData from '@/assets/data/doc'
export default {
  name: 'Nav1',
  components: {
    HuiNav1,
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
  .Nav1 {
  }
</style>
