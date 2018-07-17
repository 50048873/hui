<template>
  <div>
    <p>文档开发中...</p>
    <hui-nav3 :data="data"></hui-nav3>
  </div>
</template>

<script>
let data = [
  {
    title: '消息',
    icon: 'hui-icon-bell',
    to: '/home/message',
    new: true
  },
  {
    title: '智慧水务',
    icon: 'hui-icon-bell',
    to: '/home/systemMenu'
  },
  {
    title: '通讯录',
    icon: 'hui-icon-bell',
    to: '/home/addressBook'
  },
  {
    title: '我的',
    icon: 'hui-icon-bell',
    to: '/home/me'
  }
]
export default {
  data () {
    return {
      data: data
    }
  }
}
</script>
