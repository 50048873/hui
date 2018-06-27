<template>
  <table class="Table">
    <thead>
      <tr>
        <th v-for="(item, index) in attrHead" :key="index">{{item.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in attrs" :key="index">
        <td>{{item.attr}}</td>
        <td>{{item.des}}</td>
        <td>{{item.type}}</td>
        <td>{{item.optional}}</td>
        <td>{{item.default}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import data from '@/assets/data/doc'
export default {
  name: 'TableAttr',
  methods: {
    initSingleDirectionData () {
      this.attrHead = [
        {
          title: '参数'
        },
        {
          title: '说明'
        },
        {
          title: '类型'
        },
        {
          title: '可选值'
        },
        {
          title: '默认值'
        }
      ]
      let res = data.filter((item) => {
        return item.id === this.$route.name.toLowerCase()
      })
      this.attrs = res[0].attrs
    }
  },
  created () {
    this.initSingleDirectionData()
  }
}
</script>
