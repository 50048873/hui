<template>
  <div>
    <p>对话框文档开发中...</p>
    <button @click="visible=true">打开对话框</button>
    <hui-dialog
      :visible.sync="visible"
      title="自定标题"
      width="300px"
      :before-close="beforeClose"
      @open="open"
      @close="close"
      @closed="closed">
      <p>这是我要显示的内容</p>
      <p>这是我要显示的内容</p>
      <p>这是我要显示的内容</p>
      <p>这是我要显示的内容</p>
      <p>这是我要显示的内容</p>
    </hui-dialog>
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
    open () {
      console.log('open')
    },
    close () {
      console.log('close')
    },
    closed () {
      console.log('closed')
    },
    beforeClose (done) {
      done()
      if (Math.random() > 0.5) {
        console.log('这里测试随机关闭')
      } else {
        console.log('取消了关闭')
        return false
      }
    }
  }
}
</script>
