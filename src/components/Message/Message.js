import Vue from 'vue'
import Message from './Message.vue'

let MessageClass = Vue.extend(Message)

let message = (options) => {
  let instance = new MessageClass({
    propsData: {
      ...options
    }
  })
  instance.vm = instance.$mount()
  console.log(instance)
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}

export default message
