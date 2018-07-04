<template>
  <div>
    <Title title="快速上手" theme="Title-theme1"></Title>
    <Title title="引入 Hui，并使用" des="目前只能引入整个 Hui，但可以按需使用。在 main.js 中写入以下内容："></Title>
    <section class="preWrap">
      <pre>
        import Vue from 'vue'
        import * as Hui from 'hui' // 引入hui的所有组件
        import 'hui/src/assets/less/hui.css' // 引入hui的公共样式
        import 'hui/src/assets/font-hui/style.css' // 引入hui的字体图标
        import App from './App.vue';

        Vue.use(Hui.all) // 全局注册所有组件（字体组件除外）
        Vue.use(Hui.useIcon) // 全局注册所有svg字体组件

        // 下面为单独使用每个组件
        // Vue.use(Hui.floatBall)
        // Vue.use(Hui.header1)
        // Vue.use(Hui.list1)
        // Vue.use(Hui.menu1)
        // Vue.use(Hui.nav1)
        // Vue.use(Hui.tab1)
        // Vue.use(Hui.table1)
        // Vue.use(Hui.tableColumn)
        // Vue.use(Hui.table2)

        new Vue({
          el: '#app',
          render: h => h(App)
        });
      </pre>
    </section>
  </div>
</template>
