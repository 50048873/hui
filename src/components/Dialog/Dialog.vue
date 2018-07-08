<template>
  <transition name="hui-fade" @after-leave="afterLeave">
    <div class="HuiDialog-default HuiDialog-theme1" :class="customClass" v-show="visible">
      <div class="huiDialog-mask" v-show="modal" @click="closeModal"></div>
      <div class="huiDialog-dialog" :style="dialogStyle">
        <div class="huiDialog-hd"><strong class="huiDialog-title">{{title}}</strong></div>
        <div class="huiDialog-bd"><slot></slot></div>
        <div class="huiDialog-ft">
          <a class="huiDialog-btn huiDialog-btn_default" @click.prevent="close" v-if="cancel">{{cancel}}</a>
          <a class="huiDialog-btn huiDialog-btn_primary" @click.prevent="close">{{confirm}}</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HuiDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    width: {
      type: String,
      default: '50%'
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    },
    cancel: {
      type: String
    },
    confirm: {
      type: String,
      default: '确认'
    },
    beforeClose: Function
  },
  data () {
    return {
      closed: false
    }
  },
  computed: {
    dialogStyle () {
      if (this.width) {
        return {
          width: this.width
        }
      }
    }
  },
  methods: {
    closeModal () {
      if (this.closeOnClickModal) {
        this.close()
      }
    },
    close () {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide (cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.$emit('close')
        this.closed = true
      }
    },
    afterLeave () {
      this.$emit('closed')
    }
  },
  watch: {
    visible (newVal) {
      if (newVal) {
        this.$emit('open')
      } else if (!this.closed) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped lang="less">
  .HuiDialog-default {
    .huiDialog-mask {
      position: fixed;
      z-index: 1000;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
    }
    .huiDialog-dialog {
      position: fixed;
      z-index: 5000;
      // width: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #FFFFFF;
      text-align: center;
      border-radius: 3px;
      overflow: hidden;
    }
    .huiDialog-hd {
      padding: 1.3em 1.6em 0.5em;
    }
    .huiDialog-title {
      font-weight: 400;
      font-size: 18px;
    }
    .huiDialog-bd {
      padding: 0 1.6em 0.8em;
      min-height: 40px;
      font-size: 15px;
      line-height: 1.3;
      word-wrap: break-word;
      word-break: break-all;
      color: #999999;
    }
    .huiDialog-bd:first-child {
      padding: 2.7em 20px 1.7em;
      color: #353535;
    }
    .huiDialog-ft {
      position: relative;
      line-height: 48px;
      font-size: 18px;
      display: -webkit-box;
      display: flex;
    }
    .huiDialog-ft:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #D5D5D6;
      color: #D5D5D6;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
    .huiDialog-btn {
      display: block;
      -webkit-box-flex: 1;
      flex: 1;
      color: #3CC51F;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      position: relative;
      cursor: pointer;
    }
    .huiDialog-btn:active {
      background-color: #EEEEEE;
    }
    .huiDialog-btn:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-left: 1px solid #D5D5D6;
      color: #D5D5D6;
      transform-origin: 0 0;
      transform: scaleX(0.5);
    }
    .huiDialog-btn:first-child:after {
      display: none;
    }
    .huiDialog-btn_default {
      color: #353535;
    }
    .huiDialog-btn_primary {
      color: #0BB20C;
    }
  }
  .HuiDialog-theme1 {
    .huiDialog-dialog {
      text-align: left;
      box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);
    }
    .huiDialog-title {
      font-size: 21px;
    }
    .huiDialog-hd {
      text-align: left;
      padding: 1.3em 1.8em 0.5em;
    }
    .huiDialog-bd {
      color: #999999;
      padding: 0.25em 1.6em 2em;
      font-size: 17px;
      text-align: left;
    }
    .huiDialog-bd:first-child {
      padding: 1.6em 1.6em 2em;
      color: #353535;
    }
    .huiDialog-ft {
      display: block;
      text-align: right;
      line-height: 42px;
      font-size: 16px;
      padding: 0 1.6em 0.7em;
    }
    .huiDialog-ft:after {
      display: none;
    }
    .huiDialog-btn {
      display: inline-block;
      vertical-align: top;
      padding: 0 .8em;
    }
    .huiDialog-btn:after {
      display: none;
    }
    .huiDialog-btn:active {
      background-color: rgba(0, 0, 0, 0.06);
    }
    .huiDialog-btn:visited {
      background-color: rgba(0, 0, 0, 0.06);
    }
    .huiDialog-btn:last-child {
      margin-right: -0.8em;
    }
    .huiDialog-btn_default {
      color: #808080;
    }
  }
</style>
