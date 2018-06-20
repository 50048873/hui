import Vue from 'vue'
import Router from 'vue-router'
import Menu1 from '@/pages/doc/Menu1'
import List1 from '@/pages/doc/List1'
import Nav1 from '@/pages/doc/Nav1'
import Header1 from '@/pages/doc/Header1'

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
    },
    {
      path: '/component/list1',
      name: 'List1',
      component: List1
    },
    {
      path: '/component/nav1',
      name: 'Nav1',
      component: Nav1
    },
    {
      path: '/component/header1',
      name: 'Header1',
      component: Header1
    }
  ]
})
