<script>
export default {
  name: 'HuiTabPane',
  props: {
    label: {
      type: String
    },
    name: {
      type: String
    }
  },
  methods: {
    b () {

    }
  },
  render (h) {
    let {b} = this
    console.log(b, this)
    return (
      <div class="HuiTabPane">
        {this.$slots.default}
      </div>
    )
  }
}
</script>
