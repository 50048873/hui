<template>
  <section class="DocIcon">
    <Title title="日期方法" des="提供了常用的日期方法集合" theme="Title-theme1"></Title>
    <Title title="使用方法" des="在需要的地方import对应方法，例如："></Title>
    <section class="preWrap">
      <pre>{{code1}}</pre>
    </section>
    <Title title="方法列表" des=""></Title>
    <section class="preWrap">
      <pre>{{code2}}</pre>
    </section>
  </section>
</template>

<script>
export default {
  created () {
    this.code1 = `
      import {standardDate, etc...} from 'hui/src/assets/util/date'
    `
    this.code2 = `

    `
  }
}
</script>
