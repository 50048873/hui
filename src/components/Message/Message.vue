<template>
  <transition name="hui-fade" @after-leave="afterLeave">
    <div class="HuiMessage-default" :class="customClass" v-if="visible" @click="closeModal">
      <div class="huiMessage-contentWrap">
        <i :class="[icon, type]" v-if="icon"></i>
        <div class="huiMessage-content" v-html="content"></div>
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
      default: 5000
    },
    type: {
      type: String,
      default: 'info'
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
  @import '../../assets/less/variable.less';
  .HuiMessage-default {
    position: fixed;
    z-index: 5000;
    max-width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    .huiMessage-contentWrap {
      [class^=hui-] {
        display: block;
        font-size: 3em;
        padding-bottom: 10px;
        &.info {
          color: white;
        }
        &.error {
          color: red;
        }
        &.success {
          color: @color-success;
        }
        &.warn {
          color: @color-warn;
        }
      }
      .huiMessage-content {
        line-height: 1.5;
      }
    }
  }
</style>
