import DocApi from './DocApi'
import Example from './Example'
import Title from './Title'

export default (Vue) => {
  Vue.component(DocApi.name, DocApi)
  Vue.component(Example.name, Example)
  Vue.component(Title.name, Title)
}
