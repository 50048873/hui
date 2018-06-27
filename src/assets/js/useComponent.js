import Vue from 'vue'
import HuiHeader1 from '@/components/HuiHeader1'
import HuiList1 from '@/components/HuiList1'
import HuiMenu1 from '@/components/HuiMenu1'
import HuiNav1 from '@/components/HuiNav1'
// import HuiSlide from '@/components/HuiSlide'
import HuiTab1 from '@/components/HuiTab1'
import HuiTable1 from '@/components/HuiTable1'

export default () => {
  Vue.use(HuiHeader1)
  Vue.use(HuiList1)
  Vue.use(HuiMenu1)
  Vue.use(HuiNav1)
  // Vue.use(HuiSlide)
  Vue.use(HuiTab1)
  Vue.use(HuiTable1)
}
