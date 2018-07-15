<template>
  <div>
    <Title :title="docData.title" :des="docData.titleDes" theme="Title-theme1"></Title>
    <section v-for="(item, index) in docData.example" :key="index">
      <Title :title="item.title" :des="item.titleDes"></Title>
      <Example :code="item.code">
        <div v-if="index === 0">
          <button @click="visible=true">组件打开提示框</button>
          <p>问题：组件上注册的closed方法为什么会执行2次？</p>
        </div>
        <button @click="message" v-if="index === 1">方法打开提示框</button>
        <hui-message
          :visible.sync="visible"
          @closed="closed"
          content="这是我要显示的内容"
          >
        </hui-message>
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
    closed () {
      alert('closed')
    },
    message () {
      this.$message({
        content: '<p>方法内容</p>',
        time: 0,
        customClass: 'aaa',
        icon: 'hui-icon-success',
        closeOnClickModal: true,
        closed: function () {
          alert('closed callback')
        }
      })
    }
  }
}
</script>
