<template>
  <div>
    <Title title="开发打包" theme="Title-theme1"></Title>

    <Title title="新增组件开发流程"></Title>
    <section class="likePreWrap">
      <h6>一、新增组件</h6>
      <p>1、在组件目录components/下新增你的组件目录及文件，如：Dialog/Dialog.vue, Dialog/index.js</p>
      <p>2、修改assets/js/useComponents，把上步的组件添加进去</p>
      <h6>二、新增组件文档</h6>
      <p>1、在文档页面目录pages/doc/下新增你的组件文档文件，如：DocDialog.vue</p>
      <p>2、在DocDialog.vue里使用全局注册的组件并传入组件必传参数，如：<hui-dialog></hui-dialog></p>
      <h6>三、新增组件入口</h6>
      <p>1、修改pages/navLeft/HuiNav1.js文件（左侧导航数据文件)，添加刚才的组件</p>
      <p>2、修改src/router/index.js文件（路由配置文件），并配置路由（与HuiNav.js里的要对应）</p>
    </section>

    <Title title="开发完成后的打包流程"></Title>
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
