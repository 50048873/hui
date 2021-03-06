import Vue from 'vue'
import Router from 'vue-router'
// 开发指南
import DeveloperGuidePack from '@/pages/doc/DeveloperGuidePack'
import DeveloperGuideChangelog from '@/pages/doc/DeveloperGuideChangelog'
import DeveloperGuideInstall from '@/pages/doc/DeveloperGuideInstall'
import DeveloperGuideQuickstart from '@/pages/doc/DeveloperGuideQuickstart'
import DeveloperGuideCustomTheme from '@/pages/doc/DeveloperGuideCustomTheme'
// 组件
import DocDialog from '@/pages/doc/DocDialog'
import DocFloatBall from '@/pages/doc/DocFloatBall'
import DocHeader1 from '@/pages/doc/DocHeader1'
import DocIcon from '@/pages/doc/DocIcon'
import DocList1 from '@/pages/doc/DocList1'
import DocList2 from '@/pages/doc/DocList2'
import DocMenu1 from '@/pages/doc/DocMenu1'
import DocMessage from '@/pages/doc/DocMessage'
import DocNav1 from '@/pages/doc/DocNav1'
import DocNav2 from '@/pages/doc/DocNav2'
import DocNav3 from '@/pages/doc/DocNav3'
import DocNodata from '@/pages/doc/DocNodata'
import DocRouterviewSlide from '@/pages/doc/DocRouterviewSlide'
import DocSearch from '@/pages/doc/DocSearch'
import DocTab1 from '@/pages/doc/DocTab1'
import DocTable1 from '@/pages/doc/DocTable1'
import DocTable2 from '@/pages/doc/DocTable2'
import DocTabs from '@/pages/doc/DocTabs'
import DocUploader from '@/pages/doc/DocUploader'
// 方法
import DocUtilUniversal from '@/pages/doc/DocUtilUniversal'
import DocUtilDate from '@/pages/doc/DocUtilDate'
import DocUtilNumber from '@/pages/doc/DocUtilNumber'
import DocUtilData from '@/pages/doc/DocUtilData'
import DocUtilHtml from '@/pages/doc/DocUtilHtml'
import DocUtilOther from '@/pages/doc/DocUtilOther'

Vue.use(Router)

export default new Router({
  routes: [
    // 安装指南
    {
      path: '/(developerGuide)?',
      redirect: '/developerGuide/installation'
    },
    {
      path: '/developerGuide/pack',
      name: 'pack',
      component: DeveloperGuidePack
    },
    {
      path: '/developerGuide/changelog',
      name: 'changelog',
      component: DeveloperGuideChangelog
    },
    {
      path: '/developerGuide/installation',
      name: 'installation',
      component: DeveloperGuideInstall
    },
    {
      path: '/developerGuide/quickstart',
      name: 'quickstart',
      component: DeveloperGuideQuickstart
    },
    {
      path: '/developerGuide/customTheme',
      name: 'customTheme',
      component: DeveloperGuideCustomTheme
    },
    // 组件相关
    {
      path: '/component/dialog',
      name: 'dialog',
      component: DocDialog
    },
    {
      path: '/component/floatBall',
      name: 'floatBall',
      component: DocFloatBall
    },
    {
      path: '/component/header1',
      name: 'header1',
      component: DocHeader1
    },
    {
      path: '/component/icon',
      name: 'icon',
      component: DocIcon
    },
    {
      path: '/component/list1',
      name: 'list1',
      component: DocList1
    },
    {
      path: '/component/list2',
      name: 'list2',
      component: DocList2
    },
    {
      path: '/component/menu1',
      name: 'menu1',
      component: DocMenu1
    },
    {
      path: '/component/message',
      name: 'message',
      component: DocMessage
    },
    {
      path: '/component/nav1',
      name: 'nav1',
      component: DocNav1
    },
    {
      path: '/component/nav2',
      name: 'nav2',
      component: DocNav2
    },
    {
      path: '/component/nav3',
      name: 'nav3',
      component: DocNav3
    },
    {
      path: '/component/nodata',
      name: 'DocNodata',
      component: DocNodata
    },
    {
      path: '/component/routerviewSlide',
      name: 'routerviewSlide',
      component: DocRouterviewSlide
    },
    {
      path: '/component/search',
      name: 'Search',
      component: DocSearch
    },
    {
      path: '/component/tab1',
      name: 'tab1',
      component: DocTab1
    },
    {
      path: '/component/table1',
      name: 'table1',
      component: DocTable1
    },
    {
      path: '/component/table2',
      name: 'table2',
      component: DocTable2
    },
    {
      path: '/component/tabs',
      name: 'tabs',
      component: DocTabs
    },
    {
      path: '/component/uploader',
      name: 'uploader',
      component: DocUploader
    },
    // 工具方法
    {
      path: '/util/universal',
      name: 'universal',
      component: DocUtilUniversal
    },
    {
      path: '/util/date',
      name: 'date',
      component: DocUtilDate
    },
    {
      path: '/util/number',
      name: 'number',
      component: DocUtilNumber
    },
    {
      path: '/util/data',
      name: 'data',
      component: DocUtilData
    },
    {
      path: '/util/html',
      name: 'html',
      component: DocUtilHtml
    },
    {
      path: '/util/other',
      name: 'other',
      component: DocUtilOther
    }
  ]
})
