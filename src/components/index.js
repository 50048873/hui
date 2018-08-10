import Icon from './Icon'
import Dialog from './Dialog'
import FloatBall from './FloatBall'
import Header1 from './Header1'
import List1 from './List1'
import Menu1 from './Menu1'
import Message from './Message'
import Nav1 from './Nav1'
import Nav3 from './Nav3'
import RouterviewSlide from './RouterviewSlide'
import Search from './Search'
import Tab1 from './Tab1'
import Table1 from './Table1'
import Table2 from './Table2'
import Uploader from './Uploader'

// 有两个问题：1.vue组件里的css被打包到了js里；2.下面的less不能通过webpack.pack.config.js打包到指定目录
// import '@/assets/less/base.less'
// import '@/assets/font-hui/style.css'
// import '@/assets/less/hui.css'

const all = (Vue) => {
  Vue.use(Icon)
  Vue.use(Dialog)
  Vue.use(FloatBall)
  Vue.use(Header1)
  Vue.use(List1)
  Vue.use(Menu1)
  Vue.use(Message)
  Vue.use(Nav1)
  Vue.use(Nav3)
  Vue.use(RouterviewSlide)
  Vue.use(Search)
  Vue.use(Tab1)
  Vue.use(Table1)
  Vue.use(Table2)
  Vue.use(Uploader)
}

export {
  all,
  Icon,
  Dialog,
  FloatBall,
  Header1,
  List1,
  Menu1,
  Message,
  Nav1,
  Nav3,
  RouterviewSlide,
  Search,
  Tab1,
  Table1,
  Table2,
  Uploader
}
