<template>
  <div class="Attribute">
    <Title title="属性（Attribute）" fontSize="16px"></Title>
    <table class="table">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
          <th>是否必填</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Title from './Title'
export default {
  name: 'Attribute',
  components: {
    Title
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    des: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .Attribute {

  }
</style>
