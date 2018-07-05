<template>
  <transition name="fade">
    <div class="HuiDialog-default HuiDialog-theme1" v-if="isVisible">
      <div class="huiDialog-mask"></div>
      <div class="huiDialog-dialog">
        <div class="huiDialog-dialog__hd"><strong class="huiDialog-dialog__title">{{title}}</strong></div>
        <div class="huiDialog-dialog__bd"><slot></slot></div>
        <div class="huiDialog-dialog__ft">
            <a href="javascript:;" class="huiDialog-dialog__btn huiDialog-dialog__btn_default">{{btn1}}</a>
            <a href="javascript:;" class="huiDialog-dialog__btn huiDialog-dialog__btn_primary">{{btn2}}</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HuiDialog',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    },
    btn1: {
      type: String,
      default: '取消'
    },
    btn2: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    show () {
      this.isVisible = true
    },
    remove () {
      this.isVisible = false
    }
  }
}
</script>

<style scoped lang="less">
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .HuiDialog-default {
    transition: all 0.4s;
    opacity: 1;
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
      width: 80%;
      max-width: 300px;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
      background-color: #FFFFFF;
      text-align: center;
      border-radius: 3px;
      overflow: hidden;
    }
    .huiDialog-dialog__hd {
      padding: 1.3em 1.6em 0.5em;
    }
    .huiDialog-dialog__title {
      font-weight: 400;
      font-size: 18px;
    }
    .huiDialog-dialog__bd {
      padding: 0 1.6em 0.8em;
      min-height: 40px;
      font-size: 15px;
      line-height: 1.3;
      word-wrap: break-word;
      word-break: break-all;
      color: #999999;
    }
    .huiDialog-dialog__bd:first-child {
      padding: 2.7em 20px 1.7em;
      color: #353535;
    }
    .huiDialog-dialog__ft {
      position: relative;
      line-height: 48px;
      font-size: 18px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
    }
    .huiDialog-dialog__ft:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #D5D5D6;
      color: #D5D5D6;
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
              transform: scaleY(0.5);
    }
    .huiDialog-dialog__btn {
      display: block;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
              flex: 1;
      color: #3CC51F;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      position: relative;
    }
    .huiDialog-dialog__btn:active {
      background-color: #EEEEEE;
    }
    .huiDialog-dialog__btn:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-left: 1px solid #D5D5D6;
      color: #D5D5D6;
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      -webkit-transform: scaleX(0.5);
              transform: scaleX(0.5);
    }
    .huiDialog-dialog__btn:first-child:after {
      display: none;
    }
    .huiDialog-dialog__btn_default {
      color: #353535;
    }
    .huiDialog-dialog__btn_primary {
      color: #0BB20C;
    }
  }
  .HuiDialog-theme1 {
    .huiDialog-dialog {
      text-align: left;
      box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);
    }
    .huiDialog-dialog__title {
      font-size: 21px;
    }
    .huiDialog-dialog__hd {
      text-align: left;
    }
    .huiDialog-dialog__bd {
      color: #999999;
      padding: 0.25em 1.6em 2em;
      font-size: 17px;
      text-align: left;
    }
    .huiDialog-dialog__bd:first-child {
      padding: 1.6em 1.6em 2em;
      color: #353535;
    }
    .huiDialog-dialog__ft {
      display: block;
      text-align: right;
      line-height: 42px;
      font-size: 16px;
      padding: 0 1.6em 0.7em;
    }
    .huiDialog-dialog__ft:after {
      display: none;
    }
    .huiDialog-dialog__btn {
      display: inline-block;
      vertical-align: top;
      padding: 0 .8em;
    }
    .huiDialog-dialog__btn:after {
      display: none;
    }
    .huiDialog-dialog__btn:active {
      background-color: rgba(0, 0, 0, 0.06);
    }
    .huiDialog-dialog__btn:visited {
      background-color: rgba(0, 0, 0, 0.06);
    }
    .huiDialog-dialog__btn:last-child {
      margin-right: -0.8em;
    }
    .huiDialog-dialog__btn_default {
      color: #808080;
    }
  }
</style>
