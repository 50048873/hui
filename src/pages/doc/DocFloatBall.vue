<template>
  <div>
    <Title :title="docData.title" :des="docData.titleDes" theme="Title-theme1"></Title>
    <section v-for="(item, index) in docData.example" :key="index">
      <Title :title="item.title" :des="item.titleDes"></Title>
      <Example :code="item.code">
        <p v-if="index === 0">见右下（客服图标）</p>
        <hui-float-ball right="15" bottom="15" iconClass="hui-kfys" v-if="index === 0"></hui-float-ball>
        <p v-if="index === 1">见右下（水图标）</p>
        <hui-float-ball right="15" bottom="80" v-if="index === 1">
          <hui-icon-animated-water iconColor="white" width="2em" height="2em"></hui-icon-animated-water>
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
    .hui-kfys {
      color: white;
      font-size: 36px;
    }
  }
</style>
