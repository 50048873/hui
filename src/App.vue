<template>
  <div id="huiApp">
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
  #huiApp {
    max-width: 1000px;
    margin: 0 auto;
    .contentWrap {
      display: flex;
      .NavLeft {
        width: 200px;
      }
      .content {
        flex: 1;
        position: relative;
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
    .docTable {
      width: 100%;
      background-color: #fff;
      margin-bottom: @margin-large;
      line-height: 1.5;
      th {
        text-align: left;
        white-space: nowrap;
        font-weight: 700;
        border-bottom: 1px solid #d8d8d8;
        padding: 15px;
        max-width: 250px;
      }
      td {
        padding: 10px;
        vertical-align: top;
      }
    }
    .docUtilTable {
      width: 100%;
      background-color: #fff;
      margin-bottom: @margin-large;
      line-height: 1.5;
      th {
        text-align: left;
        font-weight: 700;
        border: 1px solid #d8d8d8;
        padding: 15px;
        background-color: #fafafa;
        white-space: nowrap;
        &:nth-child(2) {
          width: 25%;
        }
        &:nth-child(3) {
          width: 25%;
        }
        &:nth-child(4) {
          width: 30%;
        }
      }
      td {
        padding: 10px;
        vertical-align: top;
        border: 1px solid #d8d8d8;
      }
      .name {
        display: inline-block;
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
      }
      .param-title {
        font-weight: bold;
      }
      p {
        margin-bottom: 10px;
      }
    }
  }
</style>
