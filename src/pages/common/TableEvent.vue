<template>
  <table class="Table">
    <thead>
      <tr>
        <th v-for="(item, index) in eventHead" :key="index">{{item.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in events" :key="index">
        <td>{{item.attr}}</td>
        <td>{{item.des}}</td>
        <td>{{item.callbackParam}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import data from '@/assets/data/doc'
export default {
  name: 'Table',
  methods: {
    initSingleDirectionData () {
      this.eventHead = [
        {
          title: '事件名称'
        },
        {
          title: '说明'
        },
        {
          title: '回调参数'
        }
      ]
      let res = data.filter((item) => {
        return item.id === this.$route.name.toLowerCase()
      })
      this.events = res[0].events
    }
  },
  created () {
    this.initSingleDirectionData()
  }
}
</script>
