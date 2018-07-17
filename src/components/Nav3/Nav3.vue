<template>
  <nav class="HuiNav3 line-top" :class="theme" v-if="data && data.length">
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
      @click="navClick(item, index)">
      <div class="iconWrap">
        <span :class="{'redDot': item.new}" v-if="item.new"></span>
        <i :class="item.icon"></i>
      </div>
      <h3 v-if="item.title">{{item.title}}</h3>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'HuiNav3',
  props: {
    data: {
      type: Array
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
      type: String
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
    navClick (item, index) {
      this.$emit('nav-click', item, index)
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .HuiNav3 {
    position: absolute;
    bottom: 0;
    z-index: 7;
    width: 100%;
    height: 62px;
    background-color: white;
    display: flex;
    text-align: center;
    align-items: center;
    box-sizing: border-box;
    a {
      display: block;
      flex: 1;
      color: @color-nav-default;
      &.ON {
        color: #0e6fca;
      }
      .iconWrap {
        display: inline-block;
        position: relative;
        .redDot {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: red;
        }
        [class*="hui-icon"] {
          font-size: 24px;
        }
      }
      h3 {
        line-height: 1;
        padding-top: 4px;
      }
    }
  }
</style>
