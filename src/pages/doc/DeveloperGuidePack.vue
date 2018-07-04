<template>
  <div>
    <Title title="开发打包" theme="Title-theme1"></Title>
    <Title title="开发阶段的打包流程"></Title>
    <section class="likePreWrap">
      <h6>1.npm run pack</h6>
      <p>将组件打包到指定目录（lib）</p>
      <h6>2.npm pack</h6>
      <p>将指定目录的内容打包成hui-1.0.0.tgz类型的npm安装包</p>
    </section>
  </div>
</template>

<script>
import {initSingeDirectionData} from '@/assets/js/mixin'
export default {
  mixins: [initSingeDirectionData],
  methods: {
    headerLeftClick (title) {
      console.log(title)
    }
  }
}
</script>
