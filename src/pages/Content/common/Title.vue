<template>
  <div class="Title">
    <h5 class="title" :style="getFontSize">{{title}}</h5>
    <p class="des" v-if="des">{{des}}</p>
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
      default: '18px'
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
  @import '../../../assets/less/variable.less';
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
</style>
