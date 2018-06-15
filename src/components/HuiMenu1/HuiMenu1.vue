<template>
  <nav :class="[theme, getSize]" v-if="data.length">
    <router-link
      v-for="(item, index) in data"
      :key="index"
      :to="item.to"
      :replace="item.replace || replace"
      :append="item.append || append"
      :tag="item.tag || tag"
      :activeClass="activeClass(item)"
      :exact="item.exact || exact"
      :event="item.event || event"
      :exactActiveClass="exactActiveClass(item)"
      :style="getWith"
      @click="menuClick(item, index)">
      <div class="iconWrap" :style="getBg(item)">
        <i :class="item.iconCls"></i>
      </div>
      <h3 class="title">{{item.title}}</h3>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'HuiMenu1',
  componentName: 'HuiMenu1',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    replace: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    theme: {
      type: String,
      default: 'HuiMenu1-theme1'
    },
    oneLineCount: {
      type: [String, Number],
      default: 4
    },
    size: {
      type: String,
      default: 'large'
    }
  },
  computed: {
    getWith () {
      let width = 100 / this.oneLineCount
      return {
        width: width + '%'
      }
    },
    getSize () {
      let sizeCls
      switch (this.size) {
        case 'medium':
          sizeCls = 'HuiMenu1-theme1--medium'
          break
        case 'small':
          sizeCls = 'HuiMenu1-theme1--small'
          break
        case 'mini':
          sizeCls = 'HuiMenu1-theme1--mini'
          break
        default:
          sizeCls = 'HuiMenu1-theme1--large'
          break
      }
      return sizeCls
    }
  },
  methods: {
    activeClass (item) {
      let activeClass = item['active-class']
      if (activeClass) {
        return activeClass
      }
      return item.activeClass
    },
    exactActiveClass (item) {
      let exactActiveClass = item['exact-active-class']
      if (exactActiveClass) {
        return exactActiveClass
      }
      return item.exactActiveClass
    },
    getBg (item) {
      let backgroundColor = item['backgroud-color']
      if (backgroundColor) {
        return {
          backgroundColor
        }
      }
      return {
        backgroundColor: item.backgroundColor
      }
    },
    menuClick (item, index) {
      this.$emit('menu-click', item, index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  @large: 72px;
  @medium: 60px;
  @small: 48px;
  @mini: 36px;
  .HuiMenu1-theme1 {
    a {
      display: inline-block;
      color: @color-text;
      text-align: center;
      padding-top: 10px;
      padding-bottom: 10px;
      &:hover, &:focus {
        background-color: rgba(0, 0, 0, 0.05);
      }
      .iconWrap {
        display: inline-block;
        background-color: @color-theme;
        border-radius: 50%;
        color: white;
      }
      .title {
        line-height: 1;
        padding-top: 6px;
      }
    }
    &.HuiMenu1-theme1--large {
      .iconWrap {
        width: @large;
        height: @large;
        line-height: @large;
        font-size: @large / 2;
      }
    }
    &.HuiMenu1-theme1--medium {
      .iconWrap {
        width: @medium;
        height: @medium;
        line-height: @medium;
        font-size: @medium / 2;
      }
    }
    &.HuiMenu1-theme1--small {
      .iconWrap {
        width: @small;
        height: @small;
        line-height: @small;
        font-size: @small / 2;
      }
    }
    &.HuiMenu1-theme1--mini {
      .iconWrap {
        width: @mini;
        height: @mini;
        line-height: @mini;
        font-size: @mini / 2;
      }
    }
  }
</style>
