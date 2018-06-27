<template>
  <div id="app">
    <Header></Header>
    <div class="contentWrap">
      <NavLeft class="NavLeft"></NavLeft>
      <router-view class="content"></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/pages/Header'
import NavLeft from '@/pages/NavLeft/NavLeft'
export default {
  name: 'App',
  components: {
    Header,
    NavLeft
  }
}
</script>

<style lang="less">
  #app {
    max-width: 1000px;
    margin: 0 auto;
    .contentWrap {
      display: flex;
      .NavLeft {
        width: 200px;
      }
      .content {
        flex: 1;
      }
    }
  }
</style>
