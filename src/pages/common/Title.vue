<template>
  <div class="Title" :class="theme">
    <h5 class="title" :style="getFontSize" v-html="title"></h5>
    <p class="des" v-if="des" v-html="des"></p>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    des: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    theme: {
      type: String,
      default: ''
    }
  },
  computed: {
    getFontSize () {
      return {
        fontSize: this.fontSize
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .Title {
    margin-top: @margin-primary;
    margin-bottom: @margin-primary;
    .title {
      font-weight: bold;
      line-height: 1.5;
    }
    .des {
      line-height: 1.5;
    }
  }
  .Title-theme1 {
    background-color: @color-theme;
    color: white;
    padding: 5px 1em;
  }
  .Title-theme2 {
    .title {
      position: relative;
      padding-left: 12px;
      &:before {
        content: '';
        position: absolute;
        top: 20%;
        left: 0;
        width: 5px;
        height: 60%;
        background-color: @color-theme;
      }
    }
  }
</style>

<style lang="less">
  @import '../../assets/less/variable.less';
  .Title a {
    color: @color-theme;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
