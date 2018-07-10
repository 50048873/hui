<script>
export default {
  name: 'HuiTabs',
  props: {
    current: {
      type: [String, Number]
    }
  },
  provide () {
    let data = {}
    Object.defineProperty(data, 'current', {
      get: () => this.current,
      enumerable: true
    })
    return {
      data
    }
  },
  data () {
    return {
      contents: []
    }
  },
  render (h) {
    let defaultSlots = this.$slots.default
    let content = this.contents.map((item) => {
      return item.active ? item.$slots.default : null
    })
    return (
      <div class="HuiTabs">
        <ul class="hui-tabs-header">{defaultSlots}</ul>
        <div class="hui-tabs-content">{content}</div>
      </div>
    )
  },
  methods: {
    updateCurrent (index) {
      this.$emit('update:current', index)
    }
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
