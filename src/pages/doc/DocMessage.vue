<template>
  <div>
    <p>提示文档开发中...</p>
    <button @click="visible=true">打开对话框</button>
    <hui-message
      :visible.sync="visible"
      @closed="closed"
      content="这是我要显示的内容"
      time="2000"
      >
    </hui-message>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    closed () {
      console.log('closed')
    }
  },
  created () {
    this.$message({content: '方法内容', visible: true, time: 1000})
  }
}
</script>
