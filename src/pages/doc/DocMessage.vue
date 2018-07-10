<template>
  <div>
    <p>提示文档开发中...</p>
    <button @click="visible=true">组件打开提示框</button>
    <button @click="message">方法打开提示框</button>
    <hui-message
      :visible.sync="visible"
      @closed="closed"
      content="这是我要显示的内容"
      time="3000"
      :closeOnClickModal="closeOnClickModal"
      >
    </hui-message>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      closeOnClickModal: true
    }
  },
  methods: {
    closed () {
      console.log('closed')
    },
    message () {
      this.$message({
        content: '<p>方法内容</p>',
        time: 0,
        customClass: 'aaa',
        icon: 'hui-success',
        closeOnClickModal: true,
        closed: function () {
          // console.log('closed callback')
        }
      })
    }
  }
}
</script>
