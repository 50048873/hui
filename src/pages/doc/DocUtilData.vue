<template>
  <section class="DocIcon">
    <Title title="通用方法" des="提供了常用的通用方法集合" theme="Title-theme1"></Title>
    <Title title="使用方法" des="在需要的地方import对应方法，例如："></Title>
    <section class="preWrap">
      <pre>{{code1}}</pre>
    </section>
    <Title title="方法列表" des=""></Title>
    <section class="preWrap">
      <pre></pre>
    </section>
  </section>
</template>

<script>
export default {
  created () {
    this.code1 = `
      import {padEmptyData, etc...} from 'hui/src/assets/util/data'
    `
    this.code2 = `

    `
  }
}
</script>

<style scoped lang="less">
  .DocIcon {
    .iconSvg {
      svg {
        margin-right: 1.5em;
        vertical-align: middle;
      }
    }
    .iconClass {
      span {
        display: inline-block;
        padding: 0 15px;
        border-right: 1px solid #eee;
        i {
          font-size: 1.5em;
        }
      }
    }
    .iconList {
      border: 1px solid #eee;
      li {
        float: left;
        width: 10%;
        text-align: center;
        height: 80px;
        line-height: 120px;
        font-size: 13px;
        transition: color .15s linear;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-right: -1px;
        margin-bottom: -1px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .title {
          position: absolute;
          right: 1px;
          bottom: 0;
          left: 1px;
          line-height: 1.5;
          font-size: 14px;
          background-color: white;
        }
      }
      svg {
        width: 36px;
        height: 36px;
        margin-top: -20px;
      }
    }
    iframe {
      width: 100%;
      height: 500px;
      border: 1px solid #d8d8d8;
    }
  }
</style>
