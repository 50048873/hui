import Message from './Message.vue'
import MessageClass from './Message.js'

export default (Vue) => {
  Vue.component(Message.name, Message)
  Vue.prototype.$message = MessageClass
}
