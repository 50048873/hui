import Message from './Message.vue'
import message from './Message.js'

export default (Vue) => {
  Vue.component(Message.name, Message)
  Vue.prototype.$message = message
}
