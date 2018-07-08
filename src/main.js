// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/less/base.less'
import '../static/font-hui/style.css'

import useComponent from '@/assets/js/useComponent'
import usePagesCommon from '@/assets/js/usePagesCommon'
useComponent()
usePagesCommon()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
