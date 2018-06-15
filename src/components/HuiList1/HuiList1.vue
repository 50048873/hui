<template>
  <ul class="HuiList1" v-if="data.length">
    <li v-for="(item, index) in data" :key="index" @click="listClick(item, index)">
      <div class="line">
        <span class="line-item">
          <em class="title">{{item.title}}</em>
        </span>
        <span class="line-item">
          <em>{{item.time}}</em>
        </span>
      </div>
      <div class="line">
        <span class="line-item" :style="getWarn(item.status)">
          <em>{{title1}}</em>
          <em>{{item.sw}}</em>
          <em>{{unit1}}</em>
        </span>
        <span class="line-item">
          <em>{{title2}}</em>
          <em>{{item.yjsw}}</em>
          <em>{{unit2}}</em>
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HuiList1',
  componentName: 'HuiList1',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    title1: {
      type: String,
      default: ''
    },
    title2: {
      type: String,
      default: ''
    },
    unit1: {
      type: String,
      default: ''
    },
    unit2: {
      type: String,
      default: ''
    }
  },
  methods: {
    getWarn (status) {
      return status === 1 ? {color: 'red'} : ''
    },
    listClick (item, index) {
      this.$emit('list-click', item, index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .HuiList1 {
    li {
      .line-bottom();
      padding: 10px;
      .line {
        display: flex;
        justify-content: space-around;
        line-height: 1.8;
        .line-item {
          display: block;
          em {
            font-style: normal;
          }
          .title {
            font-weight: bold;
          }
          &:first-child {
            flex: 1;
          }
        }
      }
    }
  }
</style>
