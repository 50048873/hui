<template>
  <transition name="hui-fade" @after-leave="afterLeave">
    <div class="HuiMessage-default" :class="customClass" v-if="visible" @click="closeModal">
      <div class="huiMessage-toast__content">
        <i :class="icon" v-if="icon"></i>
        <p class="huiMessage-toast__content">{{content}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HuiMessage',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: '',
      required: true
    },
    customClass: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    time: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    closeModal () {
      if (this.closeOnClickModal) {
        this.close()
      }
    },
    close () {
      this.$emit('update:visible', false)
    },
    afterLeave () {
      this.$emit('closed')
    },
    autoClose () {
      if (parseFloat(this.time)) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.time)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    }
  },
  beforeDestory () {
    this.clearTimer()
  },
  watch: {
    visible: {
      handler (newVal) {
        if (newVal) {
          this.autoClose()
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="less">
  .HuiMessage-default {
    position: fixed;
    z-index: 5000;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(40, 40, 40, 0.75);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    .huiMessage-toast__content {
      [class^=hui-] {
        display: block;
        margin-bottom: 4px;
        font-size: 3em;
      }
    }
  }
</style>
