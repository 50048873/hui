<template>
  <div>
    <Title title="router-view组件" des="常用于移动端app.vue的动画路由" theme="Title-theme1"></Title>
    <Title title="基本用法" des="根据router-view封装了slide动画，路由变化时，页面会左右滑动切换"></Title>
    <section class="Example">
      <pre class="pre">{{pre}}</pre>
    </section>
  </div>
</template>

<script>
export default {
  created () {
    this.pre = `
      <template>
        <hui-slide></hui-slide>
      </template>
    `
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .Example {
    border: 1px solid #d8d8d8;
    margin-bottom: @margin-large;
    .pre {
      padding: 15px;
      background-color: #fafafa;
      max-width: 100%;
    }
  }
</style>
