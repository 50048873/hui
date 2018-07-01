<template>
  <div class="docTable2">
    <Title :title="docData.title" :des="docData.titleDes" theme="Title-theme1"></Title>
    <section v-for="(item, index) in docData.example" :key="index">
      <Title :title="item.title" :des="item.titleDes"></Title>
      <Example :code="item.code">
        <form class="search">
          <span>搜索：</span>
          <input name="query" v-model="searchQuery" placeholder="请输入查询字符串">
        </form>
        <HuiTable2
          :data="item.data.gridData"
          :columns="item.data.gridColumns"
          :filter-key="searchQuery">
        </HuiTable2>
      </Example>
    </section>
    <DocApi></DocApi>
  </div>
</template>

<script>
import {initSingeDirectionData} from '@/assets/js/mixin'
export default {
  mixins: [initSingeDirectionData],
  data () {
    return {
      searchQuery: ''
    }
  }
}
</script>

<!-- Add "scoped" DocApi to limit CSS to this component only -->
<style scoped lang="less">
  .docTable2 {
    .search {
      margin-bottom: 10px;
      input {
        border: 1px solid #dfdfdf;
        padding: 5px 1em;
      }
    }
  }
</style>
