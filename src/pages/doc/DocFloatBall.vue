<template>
  <div>
    <Title :title="docData.title" :des="docData.titleDes" theme="Title-theme1"></Title>
    <section v-for="(item, index) in docData.example" :key="index">
      <Title :title="item.title" :des="item.titleDes"></Title>
      <Example :code="item.code">
        <p v-if="index === 0">见右下（下2）</p>
        <hui-float-ball right="15" bottom="15" iconClass="fa fa-cog" v-if="index === 0"></hui-float-ball>
        <p v-if="index === 1">见右下（下1）</p>
        <hui-float-ball right="15" bottom="80" v-if="index === 1">
          <hui-icon-normal-explain class="iconExplain"></hui-icon-normal-explain>
        </hui-float-ball>
      </Example>
    </section>
    <DocApi></DocApi>
  </div>
</template>

<script>
import {initSingeDirectionData} from '@/assets/js/mixin'
export default {
  mixins: [initSingeDirectionData]
}
</script>

<style lang="less">
  .HuiFloatBall {
    svg {
      fill: white;
    }
    .fa-cog {
      color: white;
      font-size: 36px;
    }
  }
</style>
