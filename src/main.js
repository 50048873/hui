// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/less/base.less'
import '@/assets/less/common.less'
import '@/assets/font/font-awesome-4.7.0/css/font-awesome.min.css'

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
