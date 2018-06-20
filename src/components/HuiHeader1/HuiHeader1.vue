<template>
  <nav class="hui-header" :style="getBg">
    <div class="left" :style="getPadding" @click.stop="headerLeftClick">
      <i :class="iconLeft"></i>
    </div>
    <h2 class="center">{{title}}</h2>
    <div class="right" :style="getPadding" @click.stop="headerRightClick">
      <i :class="iconRight" v-if="iconRight"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HuiHeader',
  componentName: 'HuiHeader',
  props: {
    iconLeft: {
      type: String,
      default: 'fa fa-angle-left'
    },
    title: {
      type: String,
      default: '标题'
    },
    iconRight: {
      type: String
    },
    padding: {
      type: String,
      default: '15px'
    },
    bgColor: {
      type: String
    }
  },
  computed: {
    getPadding () {
      return {
        paddingRight: this.padding,
        paddingLeft: this.padding
      }
    },
    getBg () {
      return {
        backgroundColor: this.bgColor
      }
    }
  },
  methods: {
    headerLeftClick () {
      this.$emit('header-left-click', this.title)
    },
    headerRightClick () {
      this.$emit('header-right-click', this.title)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .hui-header {
    display: flex;
    align-items: stretch;
    height: 50px;
    line-height: 50px;
    background-color: @color-theme;
    color: white;
    .left, .right {
      font-size: 18px;
      cursor: pointer;
    }
    .center {
      flex: 1;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>
