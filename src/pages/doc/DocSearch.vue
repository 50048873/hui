<template>
  <div>
    <p>文档开发中...</p>
    <hui-search
      :center.sync="isCenter"
      @search-change="searchChange"
    >
    </hui-search>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCenter: true
    }
  },
  methods: {
    searchChange (newVal) {
      console.log(newVal)
    }
  }
}
</script>
