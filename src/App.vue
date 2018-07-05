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
import NavLeft from '@/pages/navLeft/NavLeft'
export default {
  name: 'App',
  components: {
    Header,
    NavLeft
  }
}
</script>

<style lang="less">
  @import './assets/less/variable.less';
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
    .preWrap {
      border: 1px solid #d8d8d8;
      margin-bottom: @margin-large;
      pre {
        padding: 15px;
        background-color: #fafafa;
        max-width: 100%;
      }
    }
    .likePreWrap {
      border: 1px solid #d8d8d8;
      padding: 15px;
      background-color: #fafafa;
      h6 {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
        &:first-child {
          margin-top: 0;
        }
      }
      p {
        line-height: 1.8;
      }
    }
  }
</style>
