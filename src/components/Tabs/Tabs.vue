<script>
import HuiTabContent from './TabContent'
export default {
  name: 'HuiTabs',
  components: {
    HuiTabContent
  },
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
  methods: {
    updateCurrent (index) {
      this.$emit('update:current', index)
    }
  },
  render (h) {
    let defaultSlots = this.$slots.default
    let content = defaultSlots.map((item) => {
      if (item.tag) {
        let componentOptions = item.componentOptions
        if (componentOptions && componentOptions.propsData) {
          let propsData = componentOptions.propsData
          if (this.current === propsData.index) {
            let children = componentOptions.children
            if (children && children.length > 1) {
              let [, , ...content] = children
              return content
            } else {
              return children
            }
          }
        }
      }
    })

    let content2 = this.contents.map((item) => {
      if (item.active) {
        return item.$slots.default
      }
    })

    return (
      <div class="HuiTabs">
        <ul class="hui-tabs-header">{defaultSlots}</ul>
        <div class="hui-tabs-content" title="1">{content}</div>
        <div class="hui-tabs-content" title="2">{content2}</div>
        <hui-tab-content contents={this.contents}></hui-tab-content>
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
