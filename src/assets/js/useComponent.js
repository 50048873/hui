import Vue from 'vue'
import FloatBall from '@/components/FloatBall/'
import Icon from '@/components/Icon/'
import Header1 from '@/components/Header1'
import List1 from '@/components/List1'
import Menu1 from '@/components/Menu1'
import Nav1 from '@/components/Nav1'
import Nav2 from '@/components/Nav2'
import RouterviewSlide from '@/components/RouterviewSlide'
import Tab1 from '@/components/Tab1'
import Table1 from '@/components/Table1'
import Table2 from '@/components/Table2'

export default () => {
  Vue.use(FloatBall)
  Vue.use(Icon)
  Vue.use(Header1)
  Vue.use(List1)
  Vue.use(Menu1)
  Vue.use(Nav1)
  Vue.use(Nav2)
  Vue.use(RouterviewSlide)
  Vue.use(Tab1)
  Vue.use(Table1)
  Vue.use(Table2)
}
