<template>
  <div class="Header">
    <div class="log">
      <img :src="log" alt="log">
    </div>
    <div class="search-wrap">
      <input type="text" placeholder="搜索">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  created () {
    this.log = require('@/assets/svg/log.svg')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .Header {
    display: flex;
    align-items: center;
    height: 80px;
    .log {
      width: 200px;
      vertical-align: middle;
      img {
        width: 40px;
      }
    }
    .search-wrap {
      flex: 1;
      height: 40px;
      input {
        display: block;
        width: 50%;
        height: 100%;
        border: 1px solid #eee;
        text-indent: 1em;
      }
    }
  }
</style>
