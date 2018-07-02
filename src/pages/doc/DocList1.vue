<template>
  <div>
    <Title :title="docData.title" :des="docData.titleDes" theme="Title-theme1"></Title>
    <section v-for="(item, index) in docData.example" :key="index">
      <Title :title="item.title" :des="item.titleDes"></Title>
      <Example :code="item.code">
        <HuiList1 v-if="index === 0" :data="item.data"></HuiList1>
        <HuiList1 v-if="index === 1" :data="item.data" theme="HuiList1-theme2"></HuiList1>
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
