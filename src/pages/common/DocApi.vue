<template>
  <div class="Attribute">
    <Title title="属性（Attribute）" theme="Title-theme2"></Title>
    <TableAttr></TableAttr>
    <Title title="事件（Event）" theme="Title-theme2"></Title>
    <TableEvent></TableEvent>
  </div>
</template>

<script>
import Title from './Title'
import TableAttr from '@/pages/common/TableAttr'
import TableEvent from '@/pages/common/TableEvent'

export default {
  name: 'Attribute',
  components: {
    Title,
    TableAttr,
    TableEvent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .Attribute {

  }
</style>
