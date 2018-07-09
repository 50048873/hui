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
      console.log(this.data)
      return this.index === this.data.value
    }
  },
  render (h) {
    let label = this.$slots.label || <span>{this.label}</span>
    let HuiTabClass = {
      HuiTab: true,
      ON: this.active
    }
    return (
      <li class={HuiTabClass}>
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
