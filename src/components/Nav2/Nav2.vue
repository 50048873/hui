<template>
  <div>
    <h6 v-if="folder.title" :class="getTitle">{{folder.title}}</h6>
    <HuiNav2Content :children="folder.children"/>
  </div>
</template>

<script>
export default {
  name: 'HuiNav2',
  components: {
    HuiNav2Content: () => import('./Nav2Content.vue')
  },
  props: {
    folder: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    getTitle () {
      return 'title' + this.count++
    }
  },
  beforeCreated () {
    this.count = 0
  }
}
</script>

<style scoped lang="less">
  h6 {
    font-size: 16px;
    font-weight: bold;
  }
</style>
