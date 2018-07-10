<script>
export default {
  name: 'HuiTabs',
  props: {
    value: {
      type: [String, Number]
    }
  },
  provide () {
    let data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return {
      data
    }
  },
  render (h) {
    console.log(this.data)
    return (
      <div class="HuiTabs">
        <ul class="hui-tabs-header">
          {this.$slots.default}
        </ul>
      </div>
    )
  }
}
</script>

<style scoped lang="less">
  .HuiTabs {
    .hui-tabs-header {
      font-size: 0;
    }
  }
</style>
