<script>
export default {
  name: 'HuiTabContent',
  props: {
    contents: {
      type: Array,
      required: true
    }
  },
  render (h) {
    let content = this.contents.map((item) => {
      return item.active ? item.$slots.default : null
    })
    return (
      <div class="hui-tabs-content">{content}</div>
    )
  }
}
</script>
