import Vue from 'vue'
import useIcon from './Icon/index.js'
import FloatBall from './FloatBall/FloatBall.vue'
import Header1 from './Header1/Header1.vue'
import List1 from './List1/List1.vue'
import Menu1 from './Menu1/Menu1.vue'
import Nav1 from './Nav1/Nav1.vue'
import RouterviewSlide from './RouterviewSlide/RouterviewSlide.vue'
import Tab1 from './Tab1/Tab1.vue'
import Table1 from './Table1/Table1.vue'
import TableColumn from './Table1/TableColumn.vue'
import Table2 from './Table2/Table2.vue'

// 有两个问题：1.vue组件里的css被打包到了js里；2.下面的less不能通过webpack.pack.config.js打包到指定目录
// import '@/assets/less/base.less'
// import '@/assets/font-hui/style.css'
// import '@/assets/less/hui.css'

const floatBall = {
  install: function (Vue) {
    Vue.component(FloatBall.name, FloatBall)
  }
}

const header1 = {
  install: function (Vue) {
    Vue.component(Header1.name, Header1)
  }
}

const list1 = {
  install: function (Vue) {
    Vue.component(List1.name, List1)
  }
}

const menu1 = {
  install: function (Vue) {
    Vue.component(Menu1.name, Menu1)
  }
}

const nav1 = {
  install: function (Vue) {
    Vue.component(Nav1.name, Nav1)
  }
}

const routerviewSlide = {
  install: function (Vue) {
    Vue.component(RouterviewSlide.name, RouterviewSlide)
  }
}

const tab1 = {
  install: function (Vue) {
    Vue.component(Tab1.name, Tab1)
  }
}

const table1 = {
  install: function (Vue) {
    Vue.component(Table1.name, Table1)
  }
}

const tableColumn = {
  install: function (Vue) {
    Vue.component(TableColumn.name, TableColumn)
  }
}

const table2 = {
  install: function (Vue) {
    Vue.component(Table2.name, Table2)
  }
}

const numToWord = function (num) {
  return num.toString()
}

const all = {
  install: function (Vue, options) {
    Vue.component(FloatBall.name, FloatBall)
    Vue.component(Header1.name, Header1)
    Vue.component(List1.name, List1)
    Vue.component(Menu1.name, Menu1)
    Vue.component(Nav1.name, Nav1)
    Vue.component(RouterviewSlide.name, RouterviewSlide)
    Vue.component(Tab1.name, Tab1)
    Vue.component(Table1.name, Table1)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(Table2.name, Table2)
  }
}

Vue.prototype.$numToWord = numToWord

export {all, useIcon, floatBall, header1, list1, menu1, nav1, routerviewSlide, tab1, table1, tableColumn, table2}
