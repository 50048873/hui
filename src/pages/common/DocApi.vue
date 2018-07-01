<template>
  <div>
    <Title title="属性（Attribute）" theme="Title-theme2"></Title>
    <TableAttr></TableAttr>
    <Title title="事件（Event）" theme="Title-theme2"></Title>
    <TableEvent></TableEvent>
  </div>
</template>

<script>
import TableAttr from '@/pages/common/TableAttr'
import TableEvent from '@/pages/common/TableEvent'

export default {
  name: 'DocApi',
  components: {
    TableAttr,
    TableEvent
  }
}
</script>
