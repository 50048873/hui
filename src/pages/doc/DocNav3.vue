<template>
  <div>
    <p>文档开发中...</p>
    <hui-nav3 :data="data1"></hui-nav3>
    <hui-nav3 :data="data2" position="top" height="34px" :isActiveLine="isActiveLine"></hui-nav3>
  </div>
</template>

<script>
let data1 = [
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
let data2 = [
  {
    title: '消息',
    to: '/home/message'
  },
  {
    title: '智慧水务',
    to: '/home/systemMenu'
  },
  {
    title: '通讯录',
    to: '/home/addressBook'
  },
  {
    title: '我的',
    to: '/home/me'
  }
]
export default {
  data () {
    return {
      data1: data1,
      data2: data2,
      isActiveLine: true
    }
  }
}
</script>
