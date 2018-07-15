<script>
export default {
  name: 'HuiTab',
  inject: ['data'],
  props: {
    label: {
      type: String,
      default: 'tab'
    },
    index: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    active () {
      return this.index === this.data.current
    }
  },
  methods: {
    tabChange () {
      this.$parent.updateCurrent(this.index)
    }
  },
  created () {
    this.$parent.contents.push(this)
  },
  render (h) {
    let label = this.$slots.label || <span>{this.label}</span>
    let HuiTabClass = {
      HuiTab: true,
      ON: this.active
    }
    return (
      <li class={HuiTabClass} on-click={this.tabChange}>
        {label}
      </li>
    )
  }
}
</script>

<style scoped lang="less">
  .HuiTab {
    display: inline-block;
    padding: 0.5em 1em;
    background-color: #ccc;
    font-size: 14px;
    cursor: pointer;
    &.ON, &:hover {
      background-color: green;
    }
  }
</style>
