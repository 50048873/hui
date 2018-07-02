<template>

  <section class="DocIcon">
    <Title title="组件图标" des="提供了一套svg格式的组件图标集合" theme="Title-theme1"></Title>
    <div>
      <Title title="普通图标" des="这是一套普通的svg图标集合"></Title>
      <ul class="iconList clearfix">
        <li><hui-icon-normal-explain></hui-icon-normal-explain></li>
        <li><hui-icon-normal-wind></hui-icon-normal-wind></li>
      </ul>
      <Title title="普通图标使用方法" des="直接在页面加入相应的组件，例如："></Title>
      <Example :code="code1" class="iconExample">
        <hui-icon-normal-explain></hui-icon-normal-explain>
        <hui-icon-normal-wind iconColor="#606266" width="2em" height="2em"></hui-icon-normal-wind>
      </Example>
    </div>
    <div>
      <Title title="动画图标" des="这是一套带动画的svg图标集合"></Title>
      <ul class="iconList clearfix">
        <li><hui-icon-animated-rain></hui-icon-animated-rain></li>
        <li><hui-icon-animated-wind></hui-icon-animated-wind></li>
        <li><hui-icon-animated-water></hui-icon-animated-water></li>
        <li><hui-icon-animated-water2></hui-icon-animated-water2></li>
        <li><hui-icon-animated-water3></hui-icon-animated-water3></li>
      </ul>
      <Title title="动画图标使用方法" des="直接在页面加入相应的组件，例如："></Title>
      <Example :code="code2" class="iconExample">
        <hui-icon-animated-rain></hui-icon-animated-rain>
        <hui-icon-animated-water iconColor="#606266" width="2em" height="2em"></hui-icon-animated-water>
      </Example>
    </div>

    <Title title="字体图标" des="提供了一套字体图标集合" theme="Title-theme1"></Title>
    <div>
      <Title title="使用方法" des="直接通过设置类名为 hui-icon-iconName 来使用即可。例如："></Title>
      <Example :code="code1" class="iconExample">
        <hui-icon-normal-explain></hui-icon-normal-explain>
        <hui-icon-normal-wind iconColor="#606266" width="2em" height="2em"></hui-icon-normal-wind>
      </Example>

      <Title title="字体图标集合" des="这是一套常规字体图标集合"></Title>
      <ul class="iconList clearfix">
        <li><hui-icon-normal-explain></hui-icon-normal-explain></li>
        <li><hui-icon-normal-wind></hui-icon-normal-wind></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  created () {
    this.code1 = `
      <hui-icon-normal-explain></hui-icon-normal-explain>
      <hui-icon-normal-wind iconColor="#606266" width="2em" height="2em"></hui-icon-normal-wind>
    `
    this.code2 = `
      <hui-icon-animated-rain></hui-icon-animated-rain>
      <hui-icon-animated-water iconColor="#606266" width="2em" height="2em"></hui-icon-animated-water>
    `
  }
}
</script>

<style scoped lang="less">
  .DocIcon {
    .iconExample {
      svg {
        margin-right: 1.5em;
        vertical-align: middle;
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
      }
      svg {
        width: 36px;
        height: 36px;
      }
    }
  }
</style>
