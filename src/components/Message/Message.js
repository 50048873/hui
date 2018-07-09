import Vue from 'vue'
import Message from './Message.vue'

let MessageClass = Vue.extend(Message)

let message = (options) => {
  let {
    visible = true,
    time,
    closeOnClickModal,
    closed,
    ...rest
  } = options

  let instance = new MessageClass({
    propsData: {
      visible,
      time,
      closeOnClickModal,
      ...rest
    }
  })

  instance = instance.$mount()
  instance.$on('update:visible', (visible) => {
    instance.visible = visible
  })
  instance.$on('closed', () => {
    document.body.removeChild(instance.$el)
    instance.$destroy()
    if (closed && typeof closed === 'function') {
      closed()
    }
  })
  document.body.appendChild(instance.$el)
  return instance
}

export default message
