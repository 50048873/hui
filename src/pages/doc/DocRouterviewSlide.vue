<template>
  <div>
    <Title title="router-view组件" des="常用于移动端app.vue的动画路由" theme="Title-theme1"></Title>
    <Title title="基本用法" des="根据router-view封装了slide动画，路由变化时，页面会左右滑动切换"></Title>
    <section class="preWrap">
      <pre>{{pre}}</pre>
    </section>
  </div>
</template>

<script>
export default {
  created () {
    this.pre = `
      <template>
        <hui-routerview-slide></hui-routerview-slide>
      </template>
    `
  }
}
</script>
