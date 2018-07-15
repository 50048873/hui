<template>
  <div>
    <Title :title="docData.title" :des="docData.titleDes" theme="Title-theme1"></Title>
    <section v-for="(item, index) in docData.example" :key="index">
      <Title :title="item.title" :des="item.titleDes"></Title>
      <Example :code="item.code">
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
      if (Math.random() > 0.5) {
        console.log('随机数确认了关闭')
        done()
      } else {
        console.log('随机数取消了关闭')
        return false
      }
    }
  }
}
</script>
