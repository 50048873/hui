<template>
  <nav class="hui-nav1-theme1" v-if="data.length">
    <ul class="level-1">
      <li v-for="(item, index) in data" :key="index">
        <h4 class="title">{{item.title}}</h4>
        <ul class="level-2">
          <li>
            <router-link
              v-for="(item, index) in item.children"
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
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HuiNav1',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .hui-nav1-theme1 {
    a {
      display: block;
      color: @color-text;
      font-size: 14px;
      font-weight: normal;
      margin: 10px 0;
      line-height: 1.5;
      &:hover {
        color: @color-theme;
      }
    }
    .router-link-active, .router-link-exact-active {
      color: @color-theme;
    }
    .level-1 {
      li {
        margin-top: @margin-primary;
        .title {
          font-size: 16px;
          font-weight: bold;
          line-height: 1.5;
        }
        .level-2 {
          li {
            margin-top: 0;
          }
        }
      }
    }
  }
</style>
