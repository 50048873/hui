import Vue from 'vue'
import Router from 'vue-router'
import Menu1 from '@/pages/Content/Menu1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/component/menu1'
    },
    {
      path: '/component',
      redirect: '/component/menu1'
    },
    {
      path: '/component/menu1',
      name: 'Menu1',
      component: Menu1
    }
  ]
})
